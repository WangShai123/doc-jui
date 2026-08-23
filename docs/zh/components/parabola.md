# 抛物线

Parabola 是抛物线动画 UI 原语，常用于添加购物车等操作动画。

<Badge text="UI Primitive" theme="error"/>

## 示例

:::details 点击展开查看详情
<div class="demo"></div>
:::

## 导入

```js
import { createParabola } from 'vanilla-jui';
```

## 基础用法

```js
const parabola = createParabola({
  from: document.querySelector('#add-to-cart'),
  to: document.querySelector('#cart'),
});

parabola.show();
```

## 参数

| 字段        | 类型                                | 默认值     | 说明                         |
| ----------- | ----------------------------------- | ---------- | ---------------------------- |
| `from`      | `string \| Element \| Node \| null` | `null`     | 起点元素                     |
| `to`        | `string \| Element \| Node \| null` | `null`     | 终点元素                     |
| `direction` | `string`                            | `'center'` | 起点取样位置                 |
| `showDelay` | `number`                            | `0`        | 开始动画前的延迟，单位毫秒   |
| `ball`      | `object`                            | 见下表     | 小球样式配置                 |
| `className` | `object`                            | `{}`       | 小球类名                     |
| `onShow`    | `Function \| null`                  | `null`     | 单次小球开始动画时触发       |
| `onHidden`  | `Function \| null`                  | `null`     | 单次小球动画结束并移除时触发 |

### direction

| 值               | 说明                 |
| ---------------- | -------------------- |
| `'center'`       | 从起点元素中心出发   |
| `'top-right'`    | 从起点元素右上方出发 |
| `'top-left'`     | 从起点元素左上方出发 |
| `'bottom-right'` | 从起点元素右下方出发 |
| `'bottom-left'`  | 从起点元素左下方出发 |

### ball

| 字段    | 默认值              | 说明     |
| ------- | ------------------- | -------- |
| `color` | `var(--tone-solid)` | 小球颜色 |
| `size`  | `12px`              | 小球尺寸 |

### `className`

| 字段   | 默认值          | 说明     |
| ------ | --------------- | -------- |
| `ball` | `parabola-ball` | 小球类名 |

## 实例属性

| 属性                | 说明                                  |
| ------------------- | ------------------------------------- |
| `props`             | 归一化后的配置                        |
| `element`           | 实例根节点，销毁且小球清空后为 `null` |
| `runtime.destroyed` | 实例是否已销毁                        |

- `destroyed` 只表示实例已经被手动销毁，不表示单次动画已经结束。
- 单次动画结束后只移除对应小球，实例仍可继续生产新的小球。

起点、终点、当前小球集合和延迟启动定时器保存在实例闭包内，不作为公开 DOM map 暴露。

## 实例方法

| 方法      | 说明               |
| --------- | ------------------ |
| `show`    | 生产小球，执行动画 |
| `destroy` | 销毁实例           |

```vp-script
import { createParabola, q, listen } from 'vanilla-jui';
import { insert, jsx } from 'vanilla-signal';

insert(q('.demo'), jsx('div', {
  style: {
    height: '300px',
    minWidth: '240px',
    maxWidth: '320px',
    position: 'relative'
  },
  children: [
    jsx('button', {
        style: {
            position: 'absolute',
            top: 0,
            right: 0,
        },
        className: 'demo-from j-button is-outline',
        children: 'FROM'
    }),
    jsx('button', {
        style: {
            position: 'absolute',
            bottom: 0,
            left: 0,
        },
        className: 'demo-to j-button is-outline',
        children: 'TO'
    }),
  ]
}));
const parabola = createParabola({
  from: q('.demo-from'),
  to: q('.demo-to'),
  direction: 'top-left'
});
listen(q('.demo-from'), 'click', () => {
    parabola.show()
})
```
