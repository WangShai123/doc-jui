# 定义组件

`defineComponent()` 是 JUI 定义状态组件的基础工具。它负责把组件共有的生命周期、状态更新、事件、插件和清理规则统一起来。它不替你设计组件模板，也不替你决定业务行为。

适合使用它的组件通常具备这些特征：

- 有稳定根节点。
- 有一组会驱动视图变化的 `state`。
- 需要 `build()`、`mount()`、`unmount()`、`destroy()` 这些生命周期。
- 需要把事件、计时器、Observer、插件等资源放到同一个清理入口。

在 JUI 中，组件分为两种：

- 基于 `defineComponent()` 定义的状态组件。如 `Modal`、`Swiper` 等。
- 纯粹 `UI Primitive`，不包含状态和生命周期，简单 DOM 行为，简单 UI 原语。如 `Drop` 等。

## 引入

```js
import { defineComponent } from 'vanilla-jui';
import { createDeepStore, jsx } from 'vanilla-signal';
```

## 基本结构

```js
const state = createDeepStore({
  count: 0,
});

const counter = defineComponent({
  name: 'Counter',
  props: {
    step: 1,
  },
  state,
  actions: {
    increase() {
      counter.setState('count', counter.state.count + counter.props.step);
      return counter;
    },
    reset() {
      counter.setState({ count: 0 });
      return counter;
    },
  },
  view: ({ state }) =>
    jsx('button', {
      type: 'button',
      children: () => `Count: ${state.count}`,
      onClick: () => counter.increase(),
    }),
});

counter.mount(document.querySelector('#app'));
```

这段代码里：

- `props` 保存创建配置。
- `state` 保存运行时状态。
- `actions` 是对外方法。
- `view` 创建根节点，并把 `state.count` 绑定到按钮文本。
- `mount()` 会自动调用 `build()`，然后把根节点插入容器。

## 定义项

`defineComponent()` 接收一个定义对象：

| 字段                  | 说明                                         |
| --------------------- | -------------------------------------------- |
| `name`                | 组件名，用于错误信息                         |
| `props`               | 创建配置对象                                 |
| `state`               | 响应式状态对象，通常来自 `createDeepStore()` |
| `view(context)`       | 创建根节点，只在 build 时执行一次            |
| `actions`             | 合并到组件实例上的公共方法                   |
| `ownsElement`         | 是否在销毁时移除根节点，默认移除             |
| `normalizeStatePatch` | 可选，把传入的 state patch 转成内部格式      |
| `validateStatePatch`  | 可选，校验 state patch                       |
| `onBuild`             | build 后执行                                 |
| `onMount`             | mount 后执行                                 |
| `onUnmount`           | unmount 前执行                               |
| `onDestroy`           | destroy 开始时执行                           |

`view(context)` 中的 `context` 包含：

| 成员                      | 说明                                 |
| ------------------------- | ------------------------------------ |
| `props`                   | 当前 props                           |
| `state`                   | 当前 state                           |
| `runtime`                 | `built`、`mounted`、`destroyed` 标记 |
| `element`                 | 当前根节点，build 前为 `null`        |
| `own(cleanup)`            | 注册清理函数或带 `destroy()` 的对象  |
| `assertActive(operation)` | 销毁后调用会抛错                     |
| `emit(event, ...args)`    | 触发组件事件                         |

## 返回实例

返回的实例包含公共控制方法和你定义的 `actions`：

| 公共方法               | 说明                                     |
| ---------------------- | ---------------------------------------- |
| `build()`              | 创建视图，不插入文档，可重复调用         |
| `mount(container)`     | 自动 build，并把根节点插入容器           |
| `unmount()`            | 从文档移除根节点，保留 state 和 owner    |
| `setState(patch)`      | 合并更新 state                           |
| `setState(key, value)` | 更新单个 state 字段                      |
| `own(cleanup)`         | 注册销毁时要执行的清理                   |
| `use(plugin, options)` | 安装插件                                 |
| `on(event, listener)`  | 监听组件事件                             |
| `off(event, listener)` | 移除组件事件监听                         |
| `emit(event, ...args)` | 触发组件事件                             |
| `destroy()`            | 释放资源、视图和事件，销毁后实例不可再用 |

`element` 是只读 getter。组件还没 build 时为 `null`，build 后指向稳定根节点。

## 生命周期流程

```text
create -> build -> mount -> unmount -> mount -> destroy
```

常见规则：

- `build()` 只创建一次根视图。
- `mount()` 可以在未 build 时自动 build。
- `unmount()` 只移除节点，不销毁响应式绑定。
- `destroy()` 会释放响应式 owner、资源、插件、事件和根节点。
- `destroy()` 后再调用 `build()`、`mount()`、`setState()` 会抛错。

## 状态更新

`setState()` 只接受普通对象 patch，或单个 key/value：

```js
counter.setState({ count: 10 });
counter.setState('count', 11);
```

如果没有提供 `validateStatePatch`，`defineComponent()` 会检查 patch 里的 key 是否存在于初始 `state`。这可以防止误写不存在的字段。

需要转换外部输入时使用 `normalizeStatePatch`：

```js
const menu = defineComponent({
  name: 'Menu',
  props,
  state,
  normalizeStatePatch(patch) {
    const next = { ...patch };
    if (Object.hasOwn(next, 'data')) {
      next.data = cloneMenuData(next.data);
    }
    return next;
  },
  view: () => jsx('nav', { children: 'Menu' }),
});
```

需要严格校验时使用 `validateStatePatch`：

```js
const panel = defineComponent({
  name: 'Panel',
  props: {},
  state: createDeepStore({ open: false }),
  validateStatePatch(patch) {
    if (Object.hasOwn(patch, 'open') && typeof patch.open !== 'boolean') {
      throw new Error('Panel.setState: open must be boolean.');
    }
  },
  view: ({ state }) =>
    jsx('section', {
      'data-open': () => (state.open ? 'true' : 'false'),
    }),
});
```

## 资源清理

组件内部创建的事件、计时器、Observer、额外 DOM 节点，都应通过 `own()` 登记清理。

```js
const box = defineComponent({
  name: 'ResizeBox',
  props: {},
  state: createDeepStore({ width: 0 }),
  view: ({ state, own }) => {
    const element = jsx('div', {
      children: () => `Width: ${state.width}`,
    });

    const observer = new ResizeObserver(([entry]) => {
      state.width = entry.contentRect.width;
    });
    observer.observe(element);
    own(() => observer.disconnect());

    return element;
  },
});
```

这样调用 `box.destroy()` 时，Observer 会和视图一起释放。

## 事件

组件事件适合表达生命周期或业务完成状态：

```js
const popup = defineComponent({
  name: 'Popup',
  props: {},
  state: createDeepStore({ visible: false }),
  actions: {
    show() {
      popup.setState('visible', true);
      popup.emit('show', popup);
      return popup;
    },
  },
  view: ({ state }) =>
    jsx('div', {
      hidden: () => !state.visible,
    }),
});

popup.on('show', (instance) => {
  console.log(instance.element);
});
```

监听器抛错不会中断组件内部生命周期。

## 插件

插件可以是函数，也可以是带 `install()` 的对象。插件返回的清理函数会在 `destroy()` 时执行。

```js
const logPlugin = (component) => {
  const onMount = () => console.log(`${component.props.id} mounted`);
  component.on('mount', onMount);
  return () => component.off('mount', onMount);
};

counter.use(logPlugin);
```

也可以用 `useComponentPlugin(name, plugin)` 注册全局插件，新创建的组件会自动安装它。

## ownsElement

默认情况下，组件销毁时会移除根节点。

如果组件绑定的是外部传入的已有节点，可以设置 `ownsElement: false`：

```js
const host = document.querySelector('#existing-panel');

const panel = defineComponent({
  name: 'ExternalPanel',
  ownsElement: false,
  props: {},
  state: createDeepStore({ active: false }),
  view: ({ state }) => {
    host.dataset.active = state.active ? 'true' : 'false';
    return host;
  },
});
```

这种情况下，`destroy()` 会释放组件增加的绑定和资源，但不会移除业务方原本拥有的节点。

## 使用建议

- action 中更新 state，不要直接改一大片 DOM。
- view 中建立绑定，不要在 effect 里反复重建根节点。
- 私有 ref、缓存、计时器放在闭包，不放进 state。
- 暴露稳定、少量、业务含义明确的方法。
- 异步 action 写回 state 前检查组件是否已销毁，或使用 token 防止旧结果覆盖新结果。
- 所有 `RenderableContent` 类型的 `content` 皆支持异步函数和响应式绑定。
