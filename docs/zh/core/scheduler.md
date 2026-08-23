# 调度器

在处理微任务调度时，`createScheduledTask()` 会把同一轮中的多次请求合并成一次执行。它适合处理昂贵但不需要立刻重复执行的副作用，例如布局测量、滚动位置同步、旧组件的集中刷新。

普通响应式视图更新不需要它。`vanilla-signal` 已经会根据依赖更新局部绑定。

## 引入

```js
import { createScheduledTask, defineComponent } from 'vanilla-jui';
import { createDeepStore, jsx } from 'vanilla-signal';
```

## 基本用法

```js
const refresh = createScheduledTask(() => {
  measureLayout();
});

refresh.schedule();
refresh.schedule();
refresh.schedule();

// 本轮同步代码结束后，measureLayout 只执行一次。
```

多次 `schedule()` 会合并。队列刷新前，同一个任务不会重复入队。

## 返回方法

| 方法         | 说明                                       |
| ------------ | ------------------------------------------ |
| `schedule()` | 排到下一个微任务执行；已排队或已销毁时忽略 |
| `flush()`    | 立即执行一次，并取消本轮已排队状态         |
| `cancel()`   | 取消本轮排队，之后仍可再次 `schedule()`    |
| `dispose()`  | 永久停用任务                               |

```js
const task = createScheduledTask(() => {
  console.log('run');
});

task.schedule();
task.cancel(); // 本轮不会执行

task.schedule();
task.flush(); // 立即输出 run

task.dispose();
task.schedule(); // 已销毁，不再执行
```

## 适合场景

### 合并布局测量

有些组件一次状态更新会引起多个入口请求重新测量。测量本身可能触发布局计算，应合并。

```js
const state = createDeepStore({
  width: 0,
  left: 0,
});

const refresh = createScheduledTask(() => {
  const rect = element.getBoundingClientRect();
  state.width = rect.width;
  state.left = rect.left;
});

window.addEventListener('resize', () => refresh.schedule());
observer.observe(element);
```

即使 resize 和 observer 在同一轮都触发，也只测量一次。

### 合并数据变更后的同步

Tabs、Swiper 这类组件可能在数据变化后需要同步指示器、拖拽边界或滚动位置。同步动作应等待本轮数据变更结束。

```js
const syncAfterData = createScheduledTask(() => {
  updateActiveOffset();
  updateDragBounds();
});

function appendItem(item) {
  state.data.push(item);
  syncAfterData.schedule();
}

function removeItem(index) {
  state.data.splice(index, 1);
  syncAfterData.schedule();
}
```

这样连续的 `push()` / `splice()` 不会重复测量。

### 在销毁时停止任务

组件销毁后，排队任务不应再运行。

```js
const component = defineComponent({
  name: 'MeasuredBox',
  props: {},
  state,
  view: () => jsx('div', { ref: setElement }),
  onBuild({ own }) {
    const refresh = createScheduledTask(measure);
    own(() => refresh.dispose());
  },
});
```

## 不适合场景

不要把 scheduler 用在这些地方：

- 普通文本、属性、class 更新。
- 每一帧连续动画。
- 需要 `requestAnimationFrame` 的读写分阶段布局。
- 为了掩盖整块重建 DOM 的问题。
- 为了延迟业务状态，让执行顺序变得难以判断。

如果你只是希望 `state.title` 改变后文本更新，直接使用响应式绑定：

```js
jsx('h2', {
  children: () => state.title,
});
```

不需要：

```js
const updateTitle = createScheduledTask(() => {
  heading.textContent = state.title;
});
```

## 与 batch 的区别

`batch()` 用来把多次响应式写入合并提交。`createScheduledTask()` 用来延后执行一个副作用。

```js
import { batch } from 'vanilla-signal';

batch(() => {
  state.loading = false;
  state.value = nextValue;
});

refresh.schedule();
```

前者解决“多次状态写入一起生效”，后者解决“昂贵副作用只执行一次”。

## 执行时机

任务排在微任务中，通常会在当前同步调用栈结束后、浏览器下一次绘制前执行。

```text
同步代码
  -> schedule()
  -> 当前调用栈结束
  -> flush queued tasks
  -> 浏览器继续后续工作
```

如果你需要等浏览器完成一次绘制，使用 `requestAnimationFrame`。如果你需要播放动画，使用动画控制器或 Web Animations API。

## 使用建议

- 一个任务只做一类副作用，例如测量或同步位置。
- 任务内部不要无条件深遍历整个组件。
- 销毁组件时调用 `dispose()`。
- 需要立即得到结果时用 `flush()`，不要再手动调用原始函数导致执行两次。
- 任务函数里仍然要检查元素是否存在、组件是否已销毁。
