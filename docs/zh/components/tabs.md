# 选项卡

<Badge text="defineComponent" theme="primary"/> <Badge text="RenderableContent"/>

## 示例

:::details 点击展开查看详情
<div class="demo"></div>
:::

## 导入

```js
import { createTabs } from 'vanilla-jui';
```

## 基础用法

使用 `createTabs(props)` 创建 Tabs 实例：

```js
const tabs = createTabs({
  active: 'profile',
  data: [
    { name: 'account', title: 'Account', content: 'Account content' },
    { name: 'profile', title: 'Profile', content: 'Profile content' },
  ],
});
tabs.mount(document.querySelector('.demo'));
```

## 参数

| 字段        | 类型                                          | 默认值   | 说明                                    |
| ----------- | --------------------------------------------- | -------- | --------------------------------------- |
| `data`      | `TabItem[]`                                   | 见下表   | 标签项列表，使用 `name` 作为 keyed 身份 |
| `id`        | `string \| null`                              | 自动生成 | 根节点 `id`                             |
| `direction` | `"top" \| "bottom" \| "left" \| "right"`      | `"top"`  | 布局方向                                |
| `active`    | `number \| string`                            | `0`      | 默认激活项，可传索引或 `name`           |
| `disabled`  | `number \| string \| Array<number \| string>` | `[]`     | 默认禁用项                              |
| `onChange`  | `Function \| null`                            | `null`   | 激活项切换后触发                        |
| `className` | `object`                                      | 见下表   | 自定义样式类                            |

### data

格式：`Array<TabItem>`。

每个 `TabItem` 是一个对象，包含 `name`、`title`、 `content`、`cache`、`ttl` 字段。

| 字段      | 类型                | 必填 | 说明                                   |
| --------- | ------------------- | ---- | -------------------------------------- |
| `name`    | `string`            | 否   | 标签唯一名称，不传时自动生成           |
| `title`   | `RenderableContent` | 是   | 标签标题内容                           |
| `content` | `RenderableContent` | 是   | 面板内容                               |
| `cache`   | `boolean`           | 否   | 函数型 content 是否缓存结果            |
| `ttl`     | `number`            | 否   | 缓存有效时间，单位毫秒；`0` 表示不过期 |

### onChange

`onChange(index, name, tabRef, panelRef) => void | Promise<void>`

| 参数       | 类型                   | 说明                  |
| ---------- | ---------------------- | --------------------- |
| `index`    | `number`               | 当前激活项索引        |
| `name`     | `string \| number`     | 当前激活项名称        |
| `tabRef`   | `Element \| undefined` | 当前激活项 tab 元素   |
| `panelRef` | `Element \| undefined` | 当前激活项 panel 元素 |

### className

| 字段        | 默认值        |
| ----------- | ------------- |
| `root`      | `j-tabs`      |
| `wrap`      | `tab-wrap`    |
| `list`      | `tab-list`    |
| `tab`       | `tab-item`    |
| `panelWrap` | `panel-list`  |
| `panel`     | `panel-item`  |
| `disabled`  | `is-disabled` |
| `dragging`  | `dragging`    |

## 实例属性

| 属性                | 类型             | 说明                  |
| ------------------- | ---------------- | --------------------- |
| `props`             | `object`         | 归一化后的初始化配置  |
| `state`             | 见下表           | 响应式状态对象        |
| `current.index`     | `number`         | 当前激活索引          |
| `current.name`      | `string \| null` | 当前激活名称          |
| `runtime.built`     | `boolean`        | 是否已创建 owned view |
| `runtime.mounted`   | `boolean`        | 根节点当前是否挂载    |
| `runtime.destroyed` | `boolean`        | 实例是否已销毁        |
| `element`           | `Element`        | build 后的稳定根节点  |

### state

把运行时需要关注的数据放入响应式 `state`：

| 字段        | 类型                                          | 说明                                           |
| ----------- | --------------------------------------------- | ---------------------------------------------- |
| `data`      | `TabItem[]`                                   | 标签项数据源，由 keyed 列表更新 tab 和 content |
| `active`    | `number \| string`                            | 当前期望激活项，可传索引或名称                 |
| `disabled`  | `number \| string \| Array<number \| string>` | 当前禁用项                                     |
| `draggable` | `boolean`                                     | 标签列表是否可拖拽                             |
| `dragging`  | `boolean`                                     | 当前是否处于拖拽滚动中                         |
| `loading`   | `boolean`                                     | 异步函数型 content 正在解析                    |

## 实例方法

| 方法                   | 说明                           |
| ---------------------- | ------------------------------ |
| `build()`              | 创建离线 DOM，返回当前实例     |
| `mount(container)`     | 构建并挂载根节点               |
| `activate(value)`      | 激活指定索引或名称             |
| `setState(patch)`      | 批量更新响应式 state           |
| `setState(key, value)` | 更新单个 state 字段            |
| `unmount()`            | 移除根节点，保留 state         |
| `destroy()`            | 销毁实例并移除组件创建的根节点 |

公共控制器方法还包括 `own()`、`use()`、`on()`、`off()` 和 `emit()`，语义见 [定义组件](../core/define.html)。

```vp-script
import { createTabs, q } from 'vanilla-jui';
import { createSignal, jsx, insert } from 'vanilla-signal';

const [asyncCount, setAsyncCount] = createSignal(10);
let asyncTabsRequestCount = 0;
let asyncTabsCountdownTimer = null;
let asyncTabsCountdownStopTimer = null;
const startAsyncTabsCountdown = () => {
    if (asyncTabsCountdownTimer) clearInterval(asyncTabsCountdownTimer);
    if (asyncTabsCountdownStopTimer) clearTimeout(asyncTabsCountdownStopTimer);

    setAsyncCount(10);
    asyncTabsCountdownTimer = setInterval(() => {
        setAsyncCount((value) => {
            const next = value - 1;
            return next > 0 ? next : 0;
        });
    }, 1000);
    asyncTabsCountdownStopTimer = setTimeout(() => {
        clearInterval(asyncTabsCountdownTimer);
        asyncTabsCountdownTimer = null;
        asyncTabsCountdownStopTimer = null;
        setAsyncCount(0);
    }, 10_000);
};

const loadAsyncTabsContent = () =>
    new Promise((resolve) => {
        const requestIndex = asyncTabsRequestCount + 1;
        setTimeout(() => {
            asyncTabsRequestCount = requestIndex;
            startAsyncTabsCountdown();
            resolve(
                jsx('div', {
                    children: [
                        jsx('p', {
                            children: `异步接口请求 第 ${requestIndex} 次`,
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: '当前标签页数据项已经开启缓存功能，缓存时间为 10 秒。',
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: '10 秒内，反复打开该数据项，将显示缓存内容。',
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: '10 秒后，内容过期，将重新请求并渲染。',
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: () =>
                                asyncCount() > 0
                                    ? `倒计时 ${asyncCount()} 秒`
                                    : '缓存已过期',
                        }),
                    ],
                })
            );
        }, 1000);
    });

const tabs = createTabs({
    data: [
        {
            name: 'profile',
            title: 'Profile',
            content: '同步标签页 name: profile',
        },
        {
            name: 'settings',
            title: 'Settings',
            content: '同步标签页 name: settings',
        },
        {
            name: 'async',
            title: 'Async',
            content: () => loadAsyncTabsContent(),
            cache: true,
            ttl: 10_000,
        },
    ],
});

const demo = jsx('div', {
    style: {
        marginBlock: '8px',
        display: 'flex',
        gap: '8px',
    },
    children: [
        jsx('button', {
            className: 'j-button is-outline',
            children: '新增',
            onClick: () => {
                const index = tabs.state.data.length + 1;
                const name = `${Date.now()}`;
                tabs.state.data.push({
                    name,
                    title: `tab-${index}`,
                    content: jsx('div', {
                        children: `新增标签页 name: ${name}`,
                    }),
                });
                void tabs.activate(name);
            }
        }),
        jsx('button', {
            className: 'j-button is-error',
            disabled: () => tabs.state.data.length === 1,
            children: '删除当前项',
            onClick: () => {
                if (tabs.state.data.length === 1) return;

                const removeIndex = Math.max(0, tabs.current.index);
                tabs.state.data.splice(removeIndex, 1);

                const nextIndex =
                    removeIndex > 0 ? removeIndex - 1 : tabs.state.data.length - 1;
                const nextItem = tabs.state.data[nextIndex];
                if (nextItem) void tabs.activate(nextItem.name);
            }
        }),
    ],
});
const tabsHost = jsx('div');
insert(q('.demo'), [demo, tabsHost]);
tabs.mount(tabsHost);
console.log(tabs)
```
