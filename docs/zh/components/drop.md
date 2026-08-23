# 下拉容器

Drop 是一个下拉容器组件，是通用浮层行为控制器。

<Badge text="UI Primitive" theme="error"/> <Badge text="RenderableContent"/>

## 示例

:::details 点击展开查看详情
<div class="demo"></div>
:::

## 导入

```ts
import { createDrop } from 'vanilla-jui';
```

## 基础用法

```ts
const drop = createDrop(button, {
  mode: 'click',
  position: 'bottom-left',
  content: 'Drop content',
});
```

## 参数

`createDrop(DOMReference, options)`

| 参数          | 类型                                         | 默认值    | 说明                                 |
| ------------- | -------------------------------------------- | --------- | ------------------------------------ |
| `mode`        | `'click' \| 'hover'`                         | `'click'` | 触发方式                             |
| `position`    | `string`                                     | `'auto'`  | 浮层位置                             |
| `offset`      | `number`                                     | `10`      | 与目标元素间距                       |
| `content`     | `RenderableContent`                          | `''`      | 浮层内容，函数支持异步返回           |
| `cache`       | `boolean`                                    | `false`   | 是否缓存函数内容返回值               |
| `ttl`         | `number`                                     | `0`       | 内容缓存有效期，单位毫秒             |
| `delay`       | `number \| { show?: number, hide?: number }` | `0`       | 展示/隐藏延迟（毫秒）                |
| `delay.show`  | `number`                                     | `0`       | 展示延迟（毫秒）                     |
| `delay.hide`  | `number`                                     | `0`       | 隐藏延迟（毫秒）                     |
| `hoverIntent` | `boolean`                                    | `true`    | hover 模式下启用意图判断，减少误触发 |
| `name`        | `string \| null`                             | `null`    | 容器名称，写入 `data-drop`           |
| `id`          | `string \| null`                             | `null`    | 容器 id，不传时自动生成              |
| `className`   | `object`                                     | 见下表    | 自定义样式类                         |
| `onShown`     | `Function \| null`                           | `null`    | 展示后回调                           |
| `onHidden`    | `Function \| null`                           | `null`    | 隐藏后回调                           |

### position

`position` 默认值 `auto` 智能选择。

可选值：`top-left`、`top-center`、`top-right`、`bottom-left`、`bottom-center`、`bottom-right`、`left`、`right`。

### hoverIntent

- 作用：根据用户鼠标移动的距离和时间，判断用户是否真正意图悬停在目标元素上，而不是只是移动了鼠标。避免用户鼠标移动过快或过慢时，触发下拉容器的显示和隐藏。
- 前提：hoverIntent 模式，仅在 mode 为 `hover` 时生效。
- 条件：hoverIntent 模式，需配合 `delay` 延时使用。

### className

| 字段        | 默认值           | 说明       |
| ----------- | ---------------- | ---------- |
| `root`      | `j-drop`         | 浮层根节点 |
| `container` | `drop-container` | 内容容器   |

## 实例属性

| 属性        | 说明                                |
| ----------- | ----------------------------------- |
| `props`     | 归一化后的配置                      |
| `element`   | 浮层根节点；`destroy()` 后为 `null` |
| `target`    | 触发元素；`destroy()` 后为 `null`   |
| `isVisible` | 当前是否可见                        |
| `delayShow` | 归一化后的展示延迟，单位毫秒        |
| `delayHide` | 归一化后的隐藏延迟，单位毫秒        |

## 实例方法

| 方法             | 默认值 | 说明                         |
| ---------------- | ------ | ---------------------------- |
| `show(useDelay)` | `true` | 展示浮层，默认应用延迟       |
| `hide(useDelay)` | `true` | 隐藏浮层，默认应用延迟       |
| `toggle()`       |        | 切换显示状态                 |
| `destroy()`      |        | 销毁实例，解绑事件并移除 DOM |

```vp-script
import { q, createDrop } from 'vanilla-jui';
import { jsx, insert, createSignal } from 'vanilla-signal';

insert(q('.demo'), jsx('div', {
  style: {
    display:'flex',
    flexWrap:'wrap',
    gap:'8px'
  },
  children: [
    jsx`<div class="j-button is-default click-demo">点击触发</div>`,
    jsx`<div class="j-button is-default hover-demo">悬停触发</div>`,
    jsx`<div class="j-button is-default async-demo">异步内容</div>`,
  ],
}));
createDrop(q('.click-demo'), {
  content: 'Drop Content',
});
createDrop(q('.hover-demo'), {
  mode: 'hover',
  hoverIntent: true,
  delay: 50,
  content: 'Drop Content',
});

const [count, setCount] = createSignal(10);
let asyncDropRequestCount = 0;
let asyncDropCountdownTimer = null;
let asyncDropCountdownStopTimer = null;
const startAsyncDropCountdown = () => {
  if (asyncDropCountdownTimer) clearInterval(asyncDropCountdownTimer);
  if (asyncDropCountdownStopTimer) clearTimeout(asyncDropCountdownStopTimer);

  setCount(10);
  asyncDropCountdownTimer = setInterval(() => {
    setCount((value) => {
      const next = value - 1;
      return next > 0 ? next : 0;
    });
  }, 1000);
  asyncDropCountdownStopTimer = setTimeout(() => {
    clearInterval(asyncDropCountdownTimer);
    asyncDropCountdownTimer = null;
    asyncDropCountdownStopTimer = null;
    setCount(0);
  }, 10000);
};
const loadAsyncDropContent = () =>
  new Promise((resolve) => {
    const requestIndex = asyncDropRequestCount + 1;
    setTimeout(() => {
      asyncDropRequestCount = requestIndex;
      startAsyncDropCountdown();
      resolve(
        jsx('div', {
          style: {
            padding: '8px',
          },
          children: () =>
            `渲染成功，缓存10秒，${count() > 0 ? `倒计时 ${count()}` : '缓存过期'}`,
        })
      );
    }, 1000);
  });

createDrop(q('.async-demo'), {
  position: 'bottom-left',
  content: () => loadAsyncDropContent(),
  cache: true,
  ttl: 10000,
});
```
