# 组件设计标准

JUI 组件的目标是：使用者把数据、状态和行为交给组件，组件自己负责把这些内容稳定地呈现在 DOM 中。

这份文档说明写一个 JUI 组件时应该遵守的设计预期、组织方式、性能要求和测试要求。它不要求每个组件长得一样，但要求每个组件的边界清楚、更新可控、销毁干净。

## 设计目标

JUI 基于 `vanilla-signal` 的细粒度响应式，所以，组件更新应尽量由状态驱动，而不是由手动查找 DOM、清空 DOM、再重新创建 DOM 来完成。

组件设计按下面的优先级取舍：

1. `state` 是组件内部行为的主要依据。
2. `view` 从 `state` 派生界面，不维护另一份 DOM 状态。
3. 根节点在一次 `build()` 后保持稳定，普通状态更新不替换根节点。
4. 列表项使用稳定 key，未删除的项应保留原来的 DOM 节点。
5. 测量、滚动、焦点、动画这类浏览器能力集中在清楚的方法或工具中。
6. 响应式绑定、事件、计时器和插件都要能被统一清理。
7. 只有真正减少重复和复杂度时，才增加公共工具。

## 单向数据流

一个状态驱动组件通常按这个方向运行：

```text
用户事件 / 组件方法
  -> action
  -> state
  -> memo / selector
  -> view
  -> DOM
```

例如点击按钮时，不应直接根据 DOM class 判断当前是否展开，而应调用 `toggle()`，由 `toggle()` 更新 `state.activeNames`，视图再根据 `state.activeNames` 更新按钮状态和面板状态。

不要把 DOM 当作业务状态来源：

```text
DOM dataset -> 计算当前项
DOM children.length -> 计算数据数量
DOM class -> 判断是否禁用
清空根节点 -> 重建整个组件
```

这些写法会让组件在数据更新、重排、动画中途、销毁重建时变得难以判断。正确做法是把业务值放在 `state`，从 `state` 派生出 `active`、`disabled`、`count`、`visible` 等结果。

## 组件分层

一个组件通常由这些部分组成：

| 部分      | 职责                                                    |
| --------- | ------------------------------------------------------- |
| `props`   | 创建时配置，例如 className、回调、默认行为、插槽内容    |
| `state`   | 运行时会变化、且需要驱动界面的数据                      |
| `memo`    | 从 state 派生的结果，例如可见列表、当前项、禁用状态     |
| `refs`    | 必要的 DOM 引用，用于测量、焦点、滚动、动画             |
| `actions` | 对外暴露的方法，例如 `show()`、`hide()`、`activate()`   |
| `view`    | 创建稳定根节点，并建立响应式绑定                        |
| `effects` | 与浏览器能力有关的副作用，例如 ResizeObserver、事件委托 |

这些部分可以放在同一个工厂函数的闭包里，不需要通过类继承共享状态。私有数据保留在闭包中，只暴露组件真正需要的公共方法。

## props 与 state

`props` 表示创建配置。它适合保存：

- `className`、`id`、`style`。
- 文本、插槽、回调。
- 创建后不打算频繁变化的行为选项。

`state` 表示运行状态。它适合保存：

- 组件数据，例如 `data`、`items`、`content`。
- 交互状态，例如 `active`、`visible`、`disabled`、`loading`。
- 需要被视图观察的布局状态，例如 `dragging`、`width`、`offset`。

不要放进 `state` 的内容：

- DOM 节点。
- `setTimeout`、RAF ID、`AbortController`、Observer 实例。
- 可以从其它 state 直接算出的重复字段。
- 只在一次函数调用内使用的临时变量。

如果一个值可以由已有状态计算出来，优先使用 `createMemo()` 或普通函数，而不是再写一份 state。

## 视图标准

`view()` 在组件 `build()` 时执行一次，返回组件根节点。它的职责是建立模板和响应式绑定，而不是每次状态变化都重新创建整棵 DOM。

视图中应遵守：

- 动态文本、属性、class、style 使用函数形式绑定。
- 条件内容使用局部动态 children 或 `Show`。
- 数组内容使用 keyed `For`，key 来自稳定业务字段。
- 字符串按文本渲染，不把 HTML 字符串当作节点结构解析。
- 事件处理器调用 action 或公共方法，不在事件中手动维护整块 DOM。
- 不用 `render(() => view(), host)` 创建组件根节点，因为这会让整个 view 成为可替换区域。

示例：

```js
import { For, createDeepStore, createMemo, jsx } from 'vanilla-signal';

const state = createDeepStore({
  keyword: '',
  items: [
    { id: 1, title: 'Intro', enabled: true },
    { id: 2, title: 'API', enabled: false },
  ],
});

const visibleItems = createMemo(() =>
  state.items.filter((item) => item.title.includes(state.keyword))
);

const view = () =>
  jsx('section', {
    children: [
      jsx('input', {
        value: () => state.keyword,
        onInput: (event) => {
          state.keyword = event.currentTarget.value;
        },
      }),
      jsx('ul', {
        children: For({
          each: visibleItems,
          key: (item) => item.id,
          children: (item) =>
            jsx('li', {
              children: () => item().title,
            }),
        }),
      }),
    ],
  });
```

## DOM 操作边界

能声明式表达的 DOM 更新，应交给 `vanilla-signal` 绑定：

| 场景                     | 推荐方式                                       |
| ------------------------ | ---------------------------------------------- |
| 元素结构                 | `jsx`                                          |
| 文本、属性、class、style | accessor 绑定                                  |
| 条件内容                 | 动态 children / `Show`                         |
| 列表                     | keyed `For`                                    |
| 事件                     | JSX 事件或稳定根节点事件委托                   |
| 挂载与销毁               | `build()`、`mount()`、`unmount()`、`destroy()` |

必须直接操作 DOM 的场景，应放在单独的方法或 effect 中，并提供清理：

| 场景            | 处理方式                                      |
| --------------- | --------------------------------------------- |
| 尺寸和位置测量  | 在布局 effect、ResizeObserver、调度任务中处理 |
| 焦点和滚动      | 在明确的 action 中处理                        |
| pointer capture | 在输入事件边界中处理，并在结束时释放          |
| 入场和离场      | 使用动画控制器                                |
| Portal 节点     | 创建时记录，销毁时移除                        |

## 内容安全边界

组件内容应遵循 `vanilla-signal` 的 children 语义：

- `string`、`number`、`boolean` 作为文本。
- `Node`、`Element`、`DocumentFragment`、数组、函数返回值作为结构化内容。
- HTML 字符串不自动解析。

这样可以避免两个问题：

1. 字符串被当作 HTML 后带来安全风险。
2. 隐式解析会让节点身份和更新范围变得不清楚。

如果将来需要富文本，应设计独立 API，并明确净化策略，不要把普通内容参数改成 HTML 入口。

## 生命周期标准

使用 `defineComponent()` 的组件应满足：

- `build()` 创建视图，但不自动插入文档。
- `mount(container)` 会自动 `build()`，并把根节点插入容器。
- `unmount()` 移除节点，但保留组件状态和响应式 owner。
- `destroy()` 释放 owner、事件、插件、计时器和节点。
- `build()`、`unmount()`、`destroy()` 都应可重复调用且结果可预期。
- `destroy()` 后不能再更新状态、挂载或重新构建。

对于 Modal、Offcanvas 这类由 `show()` / `hide()` 管理挂载的组件，调用方通常先 `build()`，再通过方法控制显示，不手动 `mount()` 到业务容器。

## 动画标准

动画要分清三件事：

- 状态：组件是否可见、是否展开、是否正在加载。
- 时间线：从隐藏到可见、从展开到收起如何播放。
- 外观：颜色、阴影、间距、主题、hover/focus 样式。

JUI 中：

- `state` 表达状态。
- `view` 把状态绑定到 `data-*`、`aria-*`、class 或 style。
- `createTransition()` 管动画怎么播放。
- `createPresence()` 管“先挂载再入场、先离场再卸载”。
- CSS 管静态外观和局部视觉变化。

同一个 CSS 属性不要同时交给 Web Animations 和 CSS transition 控制。例如 `opacity` 已由 `createTransition()` 控制时，不要再给同一节点写一条同样作用的 `transition: opacity ...`。

## 调度标准

普通状态更新不需要额外调度。`vanilla-signal` 已负责依赖追踪、批处理和 effect 调度。

公共 scheduler 只用于这些情况：

- 合并同一轮中的昂贵测量。
- 合并多次布局写入。
- 协调 ResizeObserver、pointer move、scroll 和 animation frame。
- 临时包住仍在迁移中的旧式结构同步代码。

不要用 scheduler 掩盖视图设计问题。比如深层数据变化后整块重建 DOM，不应靠“延迟一点执行”解决，而应改为 keyed 列表和局部绑定。

## 性能标准

组件应达到：

- 单个字段变化只更新依赖它的绑定。
- keyed 列表项未删除时保持 DOM 身份。
- 列表更新不重复绑定稳定根节点事件。
- 高频输入每帧最多执行一次布局写入。
- 读布局和写布局分开，避免读写交替。
- 不在 view 或 effect 中无条件深拷贝、深遍历或全树查询。
- 异步内容使用 token 或 `AbortController`，避免过期结果写回 state。
- 搜索词、筛选条件、窗口尺寸等连续输入，优先用 `createDebounced()` 派生延迟后的值，再触发请求或昂贵计算。
- 滚动位置、拖拽位置、指针移动等持续变化的输入，优先用 `createThrottled()` 派生按时间窗口更新的值，避免每次原始事件都推动后续计算。

只有真实交互或基准数据证明需要时，才引入更复杂的列表算法或任务优先级。

`createDebounced()` 和 `createThrottled()` 都来自 `vanilla-signal`，适合放在响应式数据入口处：

```js
import { createDebounced, createSignal, createThrottled } from 'vanilla-signal';

const [keyword, setKeyword] = createSignal('');
const debouncedKeyword = createDebounced(keyword, 300);

const [scrollTop, setScrollTop] = createSignal(0);
const throttledScrollTop = createThrottled(scrollTop, 100);
```

使用建议：

- `createDebounced()` 适合“等用户停下来再处理”的场景，例如搜索、筛选、自动保存。
- `createThrottled()` 适合“持续响应，但降低频率”的场景，例如滚动、拖拽、窗口尺寸。
- 它们处理的是响应式输入频率；布局测量合并、组件内部刷新仍应使用前文的 scheduler 或 `requestAnimationFrame`。
- 不要为了减少更新，把组件真实状态也延迟。真实状态保持及时写入，延迟值只用于请求、计算或显示结果。

## 测试标准

状态驱动组件至少覆盖：

1. `build()` 不自动挂载，`mount()` 正确挂载。
2. state 更新后根节点身份不变。
3. 替换数组、数组变异、嵌套字段变异都能更新视图。
4. keyed 项在无关更新后保持节点身份。
5. 业务状态不依赖 DOM dataset、class 或节点数量。
6. `unmount()` 后可以再次 `mount()`。
7. `destroy()` 后 effect、事件、timer 和异步结果不再生效。
8. 有测量的组件覆盖零尺寸、隐藏、重新连接和快速连续交互。
9. 有入场和离场的组件覆盖初始样式提交、反向操作和离场后卸载。

测试不能只看方法返回值。涉及 DOM、动画、焦点、Portal、拖拽和真实布局的组件，还需要在浏览器里做可视化验证。

## 审查清单

提交组件前检查：

- 是否还在整块替换根视图。
- 是否清空列表容器后重建所有列表项。
- 是否从 DOM 反推业务状态。
- 列表是否有稳定业务 key。
- DOM、timer、controller 是否误放进 state。
- effect 是否读取了不该成为依赖的状态。
- 响应式 owner 是否能在销毁时释放。
- 事件、Observer、timer、插件是否都有清理。
- 动画是否由动画控制器或 CSS 中一个来源负责。
- 是否还用固定 timeout 猜测动画结束。
