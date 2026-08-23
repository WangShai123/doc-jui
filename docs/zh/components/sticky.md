# 固定

Sticky 用于在滚动时保持固定位置，常用于侧边栏 widget 的吸附固定。它是围绕已有 DOM 工作的行为控制器。

<Badge text="UI Primitive" theme="error"/>

## 示例

:::details 点击展开查看详情
滚动查看固定和堆叠效果：
<div class="demo"></div>
:::

## 导入

```js
import { createSticky } from 'vanilla-jui';
```

## 基础用法

```js
const sticky = createSticky({
  target: '.sidebar .widget',
  top: 16,
  gap: 16,
});

sticky.build();
```

`target` 可以是单个元素、CSS 选择器或元素数组。传入多个目标时，组件会按解析顺序从上到下计算：

```js
createSticky({
  target: [
    document.querySelector('#toc'),
    document.querySelector('#latest-posts'),
  ],
}).build();
```

## 参数

`createSticky(props)`

| 字段        | 类型                                         | 默认值      | 说明                                            |
| ----------- | -------------------------------------------- | ----------- | ----------------------------------------------- |
| `target`    | `string \| Element \| Node \| Array \| null` | `null`      | 需要设置 sticky 的目标元素                      |
| `parent`    | `string \| Element \| Node \| null`          | `null`      | 可选单一作用域，用于限制目标查询                |
| `max`       | `number`                                     | `10`        | 当前实例最多允许管理的目标元素数量              |
| `top`       | `number`                                     | `16`        | 第一项 sticky 的顶部偏移，单位 px               |
| `gap`       | `number`                                     | `16`        | 多个 sticky 元素之间的间距，单位 px             |
| `overflow`  | `'destroy' \| 'ignore'`                      | `'destroy'` | 超出 `max` 时的处理策略                         |
| `reactive`  | `boolean`                                    | `false`     | 是否观察父容器 DOM 变化并自动重新解析目标       |
| `onReBuild` | `Function \| null`                           | `null`      | 每次重新计算 top 后触发，参数为当前 Sticky 实例 |

### target

`target` 可以是单个元素、CSS 选择器或元素数组。传入多个目标时，组件会按解析顺序从上到下计算：

```js
createSticky({
  target: [
    document.querySelector('#toc'),
    document.querySelector('#latest-posts'),
  ],
}).build();
```

### parent

推荐在复杂布局中传入 `parent` 作用域，把 selector 查询限制在指定父级内。

- `target` 是字符串时，只会在 `parent` 内查询匹配元素。
- `target` 是元素或元素数组时，只保留属于 `parent` 的元素。

### max

`max` 控制当前实例最多管理多少个目标元素。超出时由 `overflow` 决定策略：

```js
createSticky({
  parent: '.sidebar',
  target: '.widget',
  max: 3,
  overflow: 'destroy',
}).build();
```

| `overflow`  | 行为                                                    |
| ----------- | ------------------------------------------------------- |
| `'destroy'` | 保留当前实例解析结果中最后 `max` 个目标，忽略更早的目标 |
| `'ignore'`  | 当前实例保持空状态，不修改目标元素                      |

## 实例属性

| 属性                     | 类型        | 说明               |
| ------------------------ | ----------- | ------------------ |
| `props`                  | `object`    | 归一化后的配置对象 |
| `state`                  | `DeepStore` | 响应式状态         |
| `runtime`                | `object`    | 运行时状态         |
| `runtime.built`          | `boolean`   | 是否已构建         |
| `runtime.destroyed`      | `boolean`   | 是否已销毁         |
| `runtime.reBuilding`     | `boolean`   | 是否正在重新计算   |
| `runtime.reBuildFrameId` | `number`    | 重新计算帧 ID      |

`Sticky 的 parent、targets 和原始 style 快照保存在闭包内，不作为公开 DOM map 暴露。

## 实例方法

| 方法        | 说明                           |
| ----------- | ------------------------------ |
| `build()`   | 创建 Sticky 实例并返回当前实例 |
| `reBuild()` | 重新解析目标集合               |
| `destroy()` | 销毁实例，恢复目标元素原始状态 |

### reBuild

重新解析目标集合并返回当前实例。

- 适合目标增删或内容高度变化后手动调用；
- `reactive: true` 时，父容器 DOM 变化会自动调度该方法。

## 状态边界

说明：当前实例内每个目标的计算结果

- 属性：`state.items`
- 类型：`Array<{ key: string, index: number, top: number }>`

```vp-script
import { createSticky, q } from 'vanilla-jui';
import { insert, jsx } from 'vanilla-signal';

let stickySerial = 3;
const stickyList = jsx('aside', {
  style: {
    width: '260px',
    minHeight: '220px',
    padding: '12px',
    border: '1px solid var(--ui-border)',
  },
});
const createStickyWidget = (index) =>
  jsx('section', {
    id: `sticky-demo-widget-${index}`,
    className: 'sticky-demo-widget',
    style: {
      marginBottom: '8px',
      padding: '10px',
      background: 'var(--ui-bg)',
      border: '1px solid var(--ui-border)',
    },
    children: `挂件 ${index}`,
  });
for (let index = 1; index <= stickySerial; index += 1) {
  insert(stickyList, createStickyWidget(index));
}
insert(
  q('.demo'),
  jsx('div', {
    style: { marginTop: '1rem' },
    children: stickyList,
  })
);
const demoSticky = createSticky({
  parent: stickyList,
  target: '.sticky-demo-widget',
  top: 100,
  gap: 8,
}).build();
const tocStickyControls = jsx('div', {
  style: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '1rem',
  },
  children: [
    jsx('div', {
      style: { display: 'flex', gap: '.5rem' },
      children: [
        jsx('button', {
          type: 'button',
          className: 'j-button is-outline',
          children: '新增项目',
          onClick: () => {
            stickySerial += 1;
            insert(stickyList, createStickyWidget(stickySerial));
            demoSticky.reBuild();
          },
        }),
        jsx('button', {
          type: 'button',
          className: 'j-button is-error',
          children: '删除项目',
          onClick: () => {
            if (stickyList.children.length <= 1) return;
            const last = stickyList.lastElementChild;
            if (!(last instanceof HTMLElement)) return;
            last.remove();
            demoSticky.reBuild();
          },
        }),
      ],
    }),
  ],
});
insert(q('.demo'), tocStickyControls);
```
