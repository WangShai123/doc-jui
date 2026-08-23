# 视图层

JUI 的视图层负责把响应式状态连接到 DOM。它的关键要求是：根节点稳定，局部内容随状态变化。

`createOwnedView()` 是这个要求的基础工具。它在一个独立的 `vanilla-signal` owner 中创建视图，并在销毁时释放这个 owner。

## 引入

```js
import { createOwnedView, defineComponent } from 'vanilla-jui';
import { createDeepStore, jsx } from 'vanilla-signal';
```

## 稳定根节点

稳定根节点指的是：组件 build 后，根元素对象不因为普通状态变化而替换。

```js
const state = createDeepStore({ count: 0 });

const view = createOwnedView(() =>
  jsx('button', {
    type: 'button',
    children: () => `Count: ${state.count}`,
  })
);

const first = view.element;
state.count += 1;

console.log(view.element === first); // true
```

按钮文本会更新，但按钮节点本身不变。这样事件、焦点、外部引用和父容器关系都更稳定。

## 基本用法

```js
const state = createDeepStore({
  value: 'ready',
});

const owned = createOwnedView(
  () =>
    jsx('output', {
      children: () => state.value,
    }),
  { removeOnDispose: true }
);

document.body.append(owned.element);

state.value = 'done';

owned.dispose();
```

返回值：

| 成员        | 说明                           |
| ----------- | ------------------------------ |
| `element`   | `factory` 返回的根元素         |
| `dispose()` | 释放 owner，并按配置移除根元素 |

`removeOnDispose` 默认是 `true`。设为 `false` 时，销毁只释放响应式绑定，不移除节点。

## factory 只执行一次

`createOwnedView(factory)` 会让 `factory` 只执行一次。`factory` 内创建的动态 children、属性绑定和 effect 仍然有效。

```js
let builds = 0;
const state = createDeepStore({ active: false });

const owned = createOwnedView(() => {
  builds += 1;
  return jsx('section', {
    'data-active': () => (state.active ? 'true' : 'false'),
  });
});

state.active = true;

console.log(builds); // 1
```

这和“每次状态变化重新执行 view，然后替换节点”不同。JUI 组件需要的是一次创建、局部绑定、统一释放。

## 在 defineComponent 中

`defineComponent()` 内部会使用 `createOwnedView()`。普通组件不需要自己调用它，只要在 `view()` 中返回根节点即可。

```js
const badge = defineComponent({
  name: 'Badge',
  props: {},
  state: createDeepStore({ text: 'New' }),
  view: ({ state }) =>
    jsx('span', {
      className: 'j-badge',
      children: () => state.text,
    }),
});

badge.build();
document.body.append(badge.element);
```

当 `badge.destroy()` 执行时，内部 owner 会被释放，根节点也会按组件所有权规则移除。

## 独立子视图

有些节点不是组件根节点，但需要单独的生命周期，可以直接使用 `createOwnedView()`。

例如浮层组件可能有一个主体根节点和一个额外的遮罩节点：

```js
const state = createDeepStore({ visible: false });

const overlay = createOwnedView(() =>
  jsx('div', {
    className: 'overlay',
    'data-visible': () => (state.visible ? 'true' : 'false'),
  })
);

document.body.append(overlay.element);

// 组件销毁时
overlay.dispose();
```

这样遮罩里的响应式绑定不会散落在外部，也不会忘记清理。

## 外部节点

如果视图绑定的是业务方传入的已有节点，通常不应在销毁时移除它。

```js
const host = document.querySelector('#host');
const state = createDeepStore({ selected: false });

const owned = createOwnedView(
  () => {
    host.dataset.selected = state.selected ? 'true' : 'false';
    return host;
  },
  { removeOnDispose: false }
);

owned.dispose(); // 释放绑定，不移除 #host
```

组件中对应的是 `defineComponent({ ownsElement: false, ... })`。

## 列表视图

列表应使用稳定业务 key。这样插入、删除、排序时，未变化的项可以保留原来的节点。

```js
import { For, createDeepStore, jsx } from 'vanilla-signal';

const state = createDeepStore({
  items: [
    { id: 'a', title: 'Alpha' },
    { id: 'b', title: 'Beta' },
  ],
});

const owned = createOwnedView(() =>
  jsx('ul', {
    children: For({
      each: () => state.items,
      key: (item) => item.id,
      children: (item) =>
        jsx('li', {
          children: () => item().title,
        }),
    }),
  })
);
```

不要通过 `container.textContent = ''` 后重建全部子节点来同步列表。那会丢掉项内部状态，也会放大更新范围。

## 动态内容

动态文本和属性用函数：

```js
jsx('button', {
  disabled: () => state.loading,
  'aria-busy': () => (state.loading ? 'true' : 'false'),
  children: () => (state.loading ? 'Loading' : 'Submit'),
});
```

动态结构可以返回节点、数组或 `null`：

```js
jsx('div', {
  children: () =>
    state.error ? jsx('p', { role: 'alert', children: state.error }) : null,
});
```

如果内容来自数组，优先使用 `For`，不要把可变数组直接塞进静态 children 数组里。

## 清理边界

`dispose()` 会释放当前 owner 下的响应式绑定和 `onCleanup()` 注册的清理。

```js
import { createEffect, onCleanup } from 'vanilla-signal';

const owned = createOwnedView(() => {
  const element = jsx('div', { children: 'Box' });

  createEffect(() => {
    const controller = new AbortController();
    element.addEventListener('click', handleClick, {
      signal: controller.signal,
    });
    onCleanup(() => controller.abort());
  });

  return element;
});
```

视图销毁后，事件监听也会被释放。

## 使用建议

- `factory` 只描述初始结构和绑定。
- 状态变化靠 accessor 更新局部内容。
- 不在 `factory` 外保存大量可由 state 推导出的 DOM 状态。
- 需要 DOM 引用时用 ref，但不要从 DOM 反推业务状态。
- 有独立生命周期的额外节点用独立 `OwnedView`。
