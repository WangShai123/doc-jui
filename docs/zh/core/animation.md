# 动画控制器

JUI 的动画控制器负责两件事：

1. 描述动画怎么播放。
2. 协调带动画的节点什么时候挂载、什么时候卸载。

这两件事经常一起出现。例如 Modal 需要先插入文档，再播放入场动画；关闭时要先播放离场动画，再从文档移除。Accordion 面板则一直在文档里，只需要展开和收起动画，不需要卸载。

## 引入

```js
import {
  createCollapseTransition,
  createMotionGroup,
  createPresence,
  createTransition,
  waitForMotion,
} from 'vanilla-jui';
```

## 工具分工

| 工具                         | 适合场景                    |
| ---------------------------- | --------------------------- |
| `createTransition()`         | 普通入场、离场动画          |
| `createMotionGroup()`        | 多个节点一起播放动画        |
| `createCollapseTransition()` | 稳定挂载节点的展开和收起    |
| `createPresence()`           | 先挂载再入场，先离场再卸载  |
| `waitForMotion()`            | 等待已有 CSS 动画或过渡结束 |

可以把它们理解为同一层动画控制器中的不同工具：`createTransition()` 处理播放过程，`createPresence()` 处理节点留在文档中的时间。

## createTransition

`createTransition(target, definition)` 用 Web Animations API 创建一个进入/离开动画。

```js
const motion = createTransition(() => panel, {
  keyframes: [
    { opacity: 0, transform: 'translateY(12px)' },
    { opacity: 1, transform: 'translateY(0)' },
  ],
  options: {
    duration: 200,
    easing: 'ease-out',
  },
});

await motion.enter();
await motion.leave();
```

`target` 是一个函数，而不是直接传元素。这样可以在元素还没创建时先创建控制器，播放时再取真实节点。

### definition

| 字段                   | 说明                                           |
| ---------------------- | ---------------------------------------------- |
| `keyframes`            | 从隐藏端到可见端的关键帧                       |
| `options`              | Web Animations 参数，例如 `duration`、`easing` |
| `respectReducedMotion` | 是否尊重系统“减少动态效果”设置，默认 `true`    |

`enter()` 按 keyframes 正向播放。`leave()` 对数组 keyframes 反向播放。

### 返回方法

| 方法             | 说明                           |
| ---------------- | ------------------------------ |
| `enter(signal?)` | 播放进入动画，返回 Promise     |
| `leave(signal?)` | 播放离开动画，返回 Promise     |
| `cancel()`       | 取消当前动画，释放内部动画引用 |

如果环境不支持 `element.animate()`，`enter()` 和 `leave()` 会直接完成，不会抛错。

## createMotionGroup

`createMotionGroup(...motions)` 把多个动画控制器合成一个。

```js
const backdropMotion = createTransition(() => backdrop, {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 200 },
});

const dialogMotion = createTransition(() => dialog, {
  keyframes: [
    { opacity: 0, transform: 'scale(0.96)' },
    { opacity: 1, transform: 'scale(1)' },
  ],
  options: { duration: 200, easing: 'ease-out' },
});

const motion = createMotionGroup(backdropMotion, dialogMotion);
```

`enter()` / `leave()` 会并行播放所有动画，并等待全部完成。Modal、Offcanvas 这类“遮罩 + 面板”的组件适合这样做。

## createCollapseTransition

`createCollapseTransition(target, definition?)` 用于稳定挂载节点的展开和收起，例如 Accordion 面板。

```js
const panelMotion = createCollapseTransition(() => panel, {
  axis: 'vertical',
  options: {
    duration: 250,
    easing: 'ease',
  },
});

panelMotion.setExpanded(false); // 初始关闭，不播放动画

await panelMotion.enter(); // 展开
await panelMotion.leave(); // 收起
```

它会读取当前尺寸和展开后的尺寸，动画结束后恢复原来的 inline style，使内容后续变化仍能按正常布局计算。

### definition

| 字段                   | 默认值                              | 说明                                        |
| ---------------------- | ----------------------------------- | ------------------------------------------- |
| `axis`                 | `'vertical'`                        | `vertical` 管 height，`horizontal` 管 width |
| `fade`                 | `true`                              | 是否同时控制 opacity                        |
| `options`              | `{ duration: 250, easing: 'ease' }` | Web Animations 参数                         |
| `respectReducedMotion` | `true`                              | 是否尊重系统“减少动态效果”设置              |

### 额外方法

`createCollapseTransition()` 返回的控制器比普通动画控制器多一个方法：

| 方法                    | 说明                               |
| ----------------------- | ---------------------------------- |
| `setExpanded(expanded)` | 立即设置展开或收起边界，不播放动画 |

这个方法适合初始化。比如 Accordion 第一次渲染时，需要让非激活面板处于收起边界，但不应该播放一次收起动画。

## createPresence

`createPresence(options)` 用来协调“先挂载再入场、先离场再卸载”的顺序。

```js
const motion = createTransition(() => panel, {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 200 },
});

const presence = createPresence({
  elements: () => [panel],
  mount: () => document.body.append(panel),
  activate: () => {
    state.visible = true;
  },
  deactivate: () => {
    state.visible = false;
  },
  unmount: () => panel.remove(),
  motion,
});

await presence.enter();
await presence.leave();
```

适合使用 `createPresence()` 的组件：

- Modal。
- Offcanvas。
- Toast。
- 临时浮层。

不适合使用它的组件：

- 一直稳定挂载的 Accordion 面板。
- 普通列表项。
- 只需要更新文本、属性或 class 的状态组件。

## createPresence 执行顺序

入场：

```text
enter:
  mount
  -> 提交初始样式
  -> activate
  -> await motion
  -> phase = visible
```

离场：

```text
leave:
  deactivate
  -> await motion
  -> unmount
  -> phase = hidden
```

挂载后，控制器会读取一次已连接元素的尺寸，让浏览器先提交初始样式。否则浏览器可能只看到最终状态，入场动画不会播放。

`activate` 和 `deactivate` 会通过 `flushSync` 同步提交，所以里面只需要直接写 state：

```js
activate: () => {
  state.visible = true;
},
deactivate: () => {
  state.visible = false;
},
```

不要在这两个函数里再加 timeout、RAF 或手动 `flushSync`。

## createPresence 选项

| 选项           | 说明                                    |
| -------------- | --------------------------------------- |
| `elements()`   | 返回参与动画等待的根节点                |
| `mount()`      | 把节点放进文档                          |
| `activate()`   | 同步写入可见状态                        |
| `deactivate()` | 同步写入隐藏状态                        |
| `unmount()`    | 离场完成后移除节点                      |
| `motion`       | 可选动画控制器；提供后不再检测 CSS 动画 |

`elements()` 只应返回需要等待的根节点，不要扫描整棵子树。这样可以避免 loading 图标这类无限动画阻塞卸载。

## createPresence 返回控制器

| 成员       | 说明                                                 |
| ---------- | ---------------------------------------------------- |
| `phase`    | 当前阶段：`hidden`、`entering`、`visible`、`leaving` |
| `enter()`  | 执行有效入场，完成后返回 `true`                      |
| `leave()`  | 执行有效离场，完成后返回 `true`                      |
| `cancel()` | 取消当前等待，取消动画，并把 phase 设为 `hidden`     |

如果已经可见，再调用 `enter()` 会返回 `false`。如果已经隐藏，再调用 `leave()` 会返回 `false`。

同一方向正在执行时，会返回同一个 Promise。相反方向会让旧操作失效。

## 快速反向操作

用户可能在入场动画还没结束时关闭，也可能在离场动画还没结束时重新打开。`createPresence()` 会让旧操作失效，避免旧流程影响新状态。

```js
const open = presence.enter();
const close = presence.leave();
const reopen = presence.enter();

await Promise.all([open, close, reopen]);
```

旧操作可以自然结束，但不会再提交过期结果：

- 旧的入场不会把 phase 错设为 `visible`。
- 旧的离场不会移除已经重新打开的节点。
- 旧的回调不应再执行业务完成逻辑。

组件可根据返回值判断是否执行后续回调：

```js
const completed = await presence.leave();
if (completed && !modal.runtime.destroyed) {
  props.onHidden?.(modal);
}
```

## 组合示例

Offcanvas 这类组件通常有面板和遮罩两个节点。面板滑入，遮罩淡入，两个动画一起归入一次显示和隐藏流程。

```js
const panelMotion = createTransition(() => drawer.element, {
  keyframes: [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(0)' },
  ],
  options: { duration: 300, easing: 'ease' },
});

const overlayMotion = createTransition(() => overlay, {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 300, easing: 'ease' },
});

const presence = createPresence({
  elements: () => [overlay, drawer.element],
  mount: () => {
    document.body.append(overlay);
    drawer.mount(document.body);
  },
  activate: () => {
    state.visible = true;
  },
  deactivate: () => {
    state.visible = false;
  },
  unmount: () => {
    overlay.remove();
    drawer.unmount();
  },
  motion: createMotionGroup(panelMotion, overlayMotion),
});
```

`mount()` 可以做多件事，例如插入遮罩、挂载面板、锁定滚动。对应的 `unmount()` 应恢复这些操作。

## CSS 动画回退

不传 `motion` 时，`createPresence()` 会调用 `waitForMotion(elements, signal?)`。

等待顺序：

1. 如果元素支持 `getAnimations()`，等待当前有限动画的 `finished`。
2. 如果不支持，从 computed style 计算 transition/animation 的 duration 和 delay。
3. 如果没有有限动画，立即完成。

```js
await waitForMotion([panel, backdrop], abortController.signal);
```

CSS 回退适合调用方自己定义 transition，或兼容已有组件。JUI 内部新的行为动画应优先使用 `createTransition()` 等动画控制器。

## 与 CSS 的关系

CSS 仍然负责静态外观：

- 颜色、边框、阴影、间距。
- 主题变量。
- hover、focus 这类局部视觉反馈。
- 不影响生命周期的简单 transition。

动画控制器负责行为动画：

- Modal 入场和离场。
- Offcanvas 滑入和滑出。
- Accordion 展开和收起。
- 需要被 JS 等待的动画。

同一个属性不要两边同时控制。例如动画控制器已控制 `transform`，CSS 就不应再给同一节点写同样用途的 `transition: transform ...`。

## 销毁时的责任

`presence.cancel()` 只取消等待和动画，并把 `phase` 设为 `hidden`。它不会调用 `unmount()`。

组件销毁时仍要负责最终清理：

```js
component.own(() => {
  presence.cancel();
  panel.remove();
  overlay.remove();
});
```

这样无论动画处于哪个阶段，销毁后都不会留下 DOM 或继续执行旧回调。

## 使用建议

- keyframes 描述“隐藏端 -> 可见端”，离场由 `leave()` 反向处理。
- target 用 getter，避免元素还没创建时拿到空引用。
- 组件销毁时调用 `cancel()`。
- 需要离场后移除 DOM 时使用 `createPresence()`。
- 只展开和收起稳定节点时使用 `createCollapseTransition()`。
- 拖拽、滚动、连续运动不适合建模成 `enter()` / `leave()`。
