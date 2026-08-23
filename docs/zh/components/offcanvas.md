# 侧滑面板

Offcanvas 是全局侧滑面板组件，适用于侧边菜单、筛选面板和移动端抽屉等。

<Badge text="defineComponent" theme="primary"/> <Badge text="RenderableContent"/>

## 示例

:::details 点击展开查看详情
<div class="demo"></div>
:::

## 导入

```js
import { createOffcanvas } from 'vanilla-jui';
```

## 基础用法

使用 `createOffcanvas(props)` 创建 Offcanvas 实例：

```js
const panel = createOffcanvas({
  direction: 'right',
  content: 'Hello Panel',
}).build();

// 同步调用
panel.show();

// 异步调用
await panel.show();
```

## 参数

`createOffcanvas(props)`

在 JUI 中，类型 `RenderableContent` 表示可以渲染的合法内容类型，包括 `string | number | boolean | Node | Array | Function | null`。

| 参数           | 类型                                     | 默认值    | 说明                                  |
| -------------- | ---------------------------------------- | --------- | ------------------------------------- |
| `content`      | `RenderableContent`                      | `""`      | 面板内容。函数型 content 支持异步返回 |
| `overlay`      | `boolean`                                | `true`    | 是否显示遮罩                          |
| `filter`       | `boolean`                                | `true`    | 遮罩层是否启用模糊滤镜                |
| `bodyOverflow` | `boolean`                                | `true`    | 展示时是否控制 body overflow          |
| `cache`        | `boolean`                                | `false`   | 是否缓存函数型 content 的结果         |
| `ttl`          | `number`                                 | `0`       | 缓存有效时间，单位毫秒                |
| `direction`    | `"top" \| "right" \| "bottom" \| "left"` | `"left"`  | 滑出方向，写入 `data-direction`       |
| `animate`      | `string`                                 | `"slide"` | 动效名称，写入 `data-animate`         |
| `bgClose`      | `boolean`                                | `true`    | 点击遮罩关闭                          |
| `escClose`     | `boolean`                                | `true`    | Escape 关闭                           |
| `id`           | `string \| null`                         | 自动生成  | 面板 id                               |
| `className`    | `object`                                 | 见下表    | 自定义样式类                          |
| `onShow`       | `Function \| null`                       | `null`    | 展示前回调，支持 Promise              |
| `onShown`      | `Function \| null`                       | `null`    | 展示后回调                            |
| `onHide`       | `Function \| null`                       | `null`    | 隐藏前回调，支持 Promise              |
| `onHidden`     | `Function \| null`                       | `null`    | 隐藏后回调                            |

### content

所有 `RenderableContent` 类型的 `content` 用法，都一致。

请参考 [Modal](modal.html) 中的 `content` 用法说明。本章节略。

### className

| 字段      | 默认值                |
| --------- | --------------------- |
| `root`    | `j-offcanvas`         |
| `overlay` | `j-offcanvas-overlay` |
| `content` | `offcanvas-content`   |

## 实例属性

| 属性                | 说明                                     |
| ------------------- | ---------------------------------------- |
| `props`             | 归一化后的初始化配置                     |
| `state`             | 响应式状态对象，也是运行时 UI 的主要来源 |
| `runtime.built`     | 是否已创建 owned view                    |
| `runtime.mounted`   | 根节点当前是否挂载                       |
| `runtime.destroyed` | 实例是否已销毁                           |
| `element`           | build 后的稳定根节点                     |

### state

把运行时需要关注的数据放入响应式 `state`：

| 字段      | 说明                          |
| --------- | ----------------------------- |
| `content` | 当前内容源                    |
| `loading` | 异步函数型 `content` 正在解析 |
| `visible` | 是否可见                      |

公共控制器方法还包括 own()、use()、on()、off() 和 emit()，语义见 [定义组件](../core/define.html)。

## 实例方法

| 方法                    | 说明                             |
| ----------------------- | -------------------------------- |
| `build()`               | 创建离线 DOM                     |
| `show()`                | 插入文档并展示面板               |
| `hide()`                | 隐藏并从文档移除面板             |
| `setState({ content })` | 更新内容状态                     |
| `destroy()`             | 销毁实例，释放事件、定时器和 DOM |

## data-action

内容区可以放置带 `data-action` 属性的自定义元素，Offcanvas 会统一代理处理。

| 值      | 行为     |
| ------- | -------- |
| `close` | 关闭面板 |

```vp-script
import { createOffcanvas, q } from 'vanilla-jui';
import { jsx, insert, createSignal } from 'vanilla-signal';

const demo1 = jsx('div', {
  style: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  children: [
    jsx('button', {
      className: 'j-button is-default',
      children: '默认',
      onClick: () => {
        createOffcanvas({
          onHidden: (i) => {
            i.destroy();
          },
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: '换个方向且移除模糊滤镜',
      onClick: () => {
        createOffcanvas({
          direction: 'right',
          filter: false,
          onHidden: (i) => {
            i.destroy();
          },
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: '堆叠 1',
      onClick: () => {
        createOffcanvas({
          direction: 'top',
          overlay: false,
          onHidden: (i) => {
            i.destroy();
          },
          content: jsx('div', {
            style: 'display:flex;justify-content:center;align-items:center;height:100%;background:var(--ui-fg-muted)',
            children: jsx`<button class="j-button is-default" data-action="close">关闭</button>`
          })
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: '堆叠 2',
      onClick: () => {
        createOffcanvas({
          direction: 'bottom',
          overlay: false,
          filter: false,
          onHidden: (i) => {
            i.destroy();
          },
          content: jsx('div', {
            style: 'display:flex;justify-content:center;align-items:center;height:100%;background:var(--tone-solid)',
            children: jsx`<button class="j-button is-default" data-action="close">关闭</button>`
          })
        })
          .build()
          .show();
      },
    }),
  ],
});

const [offcanvasCount, setOffcanvasCount] = createSignal(10);
let asyncOffcanvasRequestCount = 0;
let offcanvasCountdownTimer = null;
let offcanvasCountdownStopTimer = null;
const startOffcanvasCountdown = () => {
  if (offcanvasCountdownTimer) clearInterval(offcanvasCountdownTimer);
  if (offcanvasCountdownStopTimer) clearTimeout(offcanvasCountdownStopTimer);

  setOffcanvasCount(10);
  offcanvasCountdownTimer = setInterval(() => {
    setOffcanvasCount((value) => {
      const next = value - 1;
      return next > 0 ? next : 0;
    });
  }, 1000);
  offcanvasCountdownStopTimer = setTimeout(() => {
    clearInterval(offcanvasCountdownTimer);
    offcanvasCountdownTimer = null;
    offcanvasCountdownStopTimer = null;
    setOffcanvasCount(0);
  }, 10000);
};
const loadAsyncOffcanvasContent = () =>
  new Promise((resolve) => {
    const requestIndex = asyncOffcanvasRequestCount + 1;
    setTimeout(() => {
      asyncOffcanvasRequestCount = requestIndex;
      startOffcanvasCountdown();
      resolve(
        jsx('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            padding: '24px',
          },
          children: [
            jsx('p', {
              children: `异步接口请求 第 ${requestIndex} 次`,
            }),
            jsx('p', {
              style: {marginBlock: '4px'},
              children: '当前侧滑面板已经开启缓存功能，缓存时间为 10 秒。',
            }),
            jsx('p', {
              style: {marginBlock: '4px'},
              children: '10 秒内，反复打开侧滑面板，将显示缓存内容。',
            }),
            jsx('p', {
              style: {marginBlock: '4px'},
              children: '10 秒后，内容过期，将重新请求并渲染。',
            }),
            jsx('p', {
              style: {
                marginTop: '24px',
                display: 'flex',
                gap: '8px',
              },
              children: [
                jsx('button', {
                  className: 'j-button is-secondary',
                  type: 'button',
                  children: () =>
                    offcanvasCount() > 0
                      ? `倒计时 ${offcanvasCount()} 秒`
                      : '缓存已过期',
                }),
                jsx('button', {
                  className: 'j-button is-primary',
                  type: 'button',
                  'data-action': 'close',
                  children: '关闭',
                }),
              ],
            }),
          ],
        })
      );
    }, 1000);
  });
const asyncOffcanvas = createOffcanvas({
    direction: 'right',
    content: () => loadAsyncOffcanvasContent(),
    cache: true,
    ttl: 10000,
});
asyncOffcanvas.build();
const demo2 = jsx('div', {
    style: {
        marginBlock: '16px',
    },
    children: jsx('button', {
        className: 'j-button is-outline',
        children: '异步内容侧滑面板',
        onClick: () => {
            asyncOffcanvas.show();
        },
    }),
});
insert(q('.demo'), [demo1, demo2]);
```
