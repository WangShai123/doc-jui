# 折叠面板

Accordion 是折叠面板组件，适用于展示多个内容区域。

<Badge text="defineComponent" theme="primary"/> <Badge text="RenderableContent"/>

## 示例

:::details 点击展开查看详情
<div class="demo"></div>
:::

## 导入

```js
import { createAccordion } from 'vanilla-jui';
```

## 基础用法

使用 `createAccordion(props)` 创建 AccordionPanel 实例：

```js
const accordion = createAccordion({
  active: 'usage',
  data: [
    { name: 'intro', title: 'Intro', content: 'Intro content' },
    {
      name: 'profile',
      title: ({ index }) => `Panel ${index + 1}`,
      content: ({ item }) => `Panel name: ${item.name}`,
    },
  ],
});
const container = document.querySelector('#demo');
if (container) accordion.mount(container);
```

## 参数

`createAccordion(props)`

| 参数          | 类型                                | 默认值     | 说明                      |
| ------------- | ----------------------------------- | ---------- | ------------------------- |
| `data`        | `AccordionItem[]`                   | 见下表     | 初始非空面板配置列表      |
| `id`          | `string \| null`                    | 自动生成   | 根节点 id；为空时自动生成 |
| `active`      | `number \| string \| Array \| null` | `0`        | 初始激活项                |
| `collapsible` | `boolean`                           | `false`    | 允许关闭当前已激活项      |
| `multiple`    | `boolean`                           | `false`    | 允许同时展开多个面板      |
| `direction`   | `'vertical' \| 'horizontal'`        | `vertical` | 布局与展开动画方向        |
| `className`   | `object`                            | 见下表     | 覆盖组件结构类名          |
| `onChange`    | `Function \| null`                  | `null`     | 用户切换面板后的回调      |

### data

在 JUI 中，类型 `RenderableContent` 表示可以渲染的合法内容类型，包括 `string | number | boolean | Node | Array | Function | null`。

| 字段      | 类型                | 说明                                       |
| --------- | ------------------- | ------------------------------------------ |
| `name`    | `string`            | 可选；为空时自动生成。传入固定值时要求唯一 |
| `title`   | `string`            | 面板标题                                   |
| `content` | `RenderableContent` | 面板内容                                   |
| `cache`   | `boolean`           | 函数型 content 是否缓存结果                |
| `ttl`     | `number`            | 缓存有效时间，单位毫秒；`0` 表示不过期     |

### onChange

`onChange(index, name, headerRef, panelRef, accordion)`

| 参数        | 说明                      |
| ----------- | ------------------------- |
| `index`     | 当前激活面板索引          |
| `name`      | 当前激活面板名称          |
| `headerRef` | 当前激活面板头 DOM 引用   |
| `panelRef`  | 当前激活面板内容 DOM 引用 |
| `accordion` | 当前实例                  |

### className

| 字段      | 默认值             | 说明     |
| --------- | ------------------ | -------- |
| `root`    | `j-accordion`      | 根节点   |
| `header`  | `accordion-header` | 面板头   |
| `title`   | `header-title`     | 标题区域 |
| `arrow`   | `header-arrow`     | 箭头区域 |
| `panel`   | `accordion-panel`  | 面板区域 |
| `content` | `panel-content`    | 内容区域 |

## 实例属性

| 属性                | 说明                                    |
| ------------------- | --------------------------------------- |
| `props`             | 归一化后的创建期配置                    |
| `state.data`        | 响应式面板数据，变更后由 keyed 列表更新 |
| `state.activeNames` | 当前展开的面板名称列表                  |
| `state.loading`     | 异步函数型 content 正在解析             |
| `element`           | `build()` 后生成的稳定根节点            |
| `runtime`           | `built`、`mounted`、`destroyed` 状态    |
| `current`           | 当前主面板，包含 `index` 和 `name`      |

### state

把运行时需要关注的数据放入响应式 `state`：

| 字段          | 说明                          |
| ------------- | ----------------------------- |
| `activeNames` | 当前展开的面板名称列表        |
| `data`        | 面板数据列表                  |
| `loading`     | 异步函数型 `content` 正在解析 |

基于状态更新视图，如：

```js
// 增加数据项
accordion.state.data.push({
  name: 'faq',
  title: 'FAQ',
  content: 'FAQ content',
});

// 更新数据项
const faq = accordion.state.data.find((item) => item.name === 'faq');
if (faq) faq.title = 'FAQ updated';

// 删除数据项
accordion.state.data = accordion.state.data.filter(
  (item) => item.name !== 'faq'
);
```

## 实例方法

| 方法                    | 说明                                |
| ----------------------- | ----------------------------------- |
| `build()`               | 创建 DOM、绑定事件并同步初始状态    |
| `mount(container)`      | 构建并挂载到指定容器                |
| `unmount()`             | 从当前容器移除根节点                |
| `activate(indexOrName)` | 激活、展开或折叠指定面板            |
| `setState(patch)`       | 设置响应式状态字段                  |
| `destroy()`             | 销毁实例，移除已挂载 DOM 并释放资源 |

公共控制器方法还包括 `own()`、`use()`、`on()`、`off()` 和 `emit()`，语义见 [定义组件](../core/define.html)。

```vp-script
import { createAccordion, q, Toast } from 'vanilla-jui';
import { createSignal, jsx } from 'vanilla-signal';

const [asyncCount, setAsyncCount] = createSignal(10);
let asyncAccordionRequestCount = 0;
let asyncAccordionCountdownTimer = null;
let asyncAccordionCountdownStopTimer = null;
const startAsyncAccordionCountdown = () => {
    if (asyncAccordionCountdownTimer) clearInterval(asyncAccordionCountdownTimer);
    if (asyncAccordionCountdownStopTimer) clearTimeout(asyncAccordionCountdownStopTimer);

    setAsyncCount(10);
    asyncAccordionCountdownTimer = setInterval(() => {
        setAsyncCount((value) => {
            const next = value - 1;
            return next > 0 ? next : 0;
        });
    }, 1000);
    asyncAccordionCountdownStopTimer = setTimeout(() => {
        clearInterval(asyncAccordionCountdownTimer);
        asyncAccordionCountdownTimer = null;
        asyncAccordionCountdownStopTimer = null;
        setAsyncCount(0);
    }, 10_000);
};

const loadAsyncAccordionContent = () =>
    new Promise((resolve) => {
        const requestIndex = asyncAccordionRequestCount + 1;
        setTimeout(() => {
            asyncAccordionRequestCount = requestIndex;
            startAsyncAccordionCountdown();
            resolve(
                jsx('div', {
                    children: [
                        jsx('p', {
                            children: `异步接口请求 第 ${requestIndex} 次`,
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: '当前折叠面板数据项已经开启缓存功能，缓存时间为 10 秒。',
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

createAccordion({
    data: [
        {
            name: 'profile',
            title: ({ index }) => `同步面板 ${index + 1}`,
            content: ({ item }) => `同步面板 name: ${item.name}`,
        },
        {
            name: 'settings',
            title: ({ index }) => `同步面板 ${index + 1}`,
            content: ({ item }) => `同步面板 name: ${item.name}`,
        },
        {
            name: 'async',
            title: '异步面板',
            content: () => loadAsyncAccordionContent(),
            cache: true,
            ttl: 10_000,
        },
    ],
    onChange: (index, name, header, panel, accordion) => {
        Toast.lite(`${name} 面板已打开`);
        console.log(header)
        console.log(panel)
    },
}).mount(q('.demo'));
```
