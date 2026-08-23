# 提示

Tooltip 组件用于在元素上显示提示信息，是文本提示控制器，是基于 `Drop` 组件的视图 UI 包装。

<Badge text="UI Primitive" theme="error"/>

## 示例

:::details 点击展开查看详情
<div class="demo"></div>
:::

## 导入

```ts
import { createTooltip } from 'vanilla-jui';
```

## 基础用法

```ts
const tooltip = createTooltip(button, {
  message: '保存成功后会自动同步',
});
```

## 参数

| 参数          | 类型                                         | 默认值    | 说明                           |
| ------------- | -------------------------------------------- | --------- | ------------------------------ |
| `message`     | `string`                                     | `''`      | 提示文案，会 trim，不能为空    |
| `mode`        | `'click' \| 'hover'`                         | `'hover'` | 触发方式                       |
| `position`    | Drop position                                | `'auto'`  | 浮层位置，取值与 Drop 一致     |
| `offset`      | `number`                                     | `8`       | 与目标元素间距                 |
| `theme`       | `false \| 'reverse' \| 'primary' \| ...`     | `false`   | 主题色，见下方说明             |
| `cache`       | `boolean`                                    | `false`   | 透传给 Drop 的内容缓存开关     |
| `ttl`         | `number`                                     | `0`       | 透传给 Drop 的缓存有效期，毫秒 |
| `delay`       | `number \| { show?: number, hide?: number }` | `100`     | 展示/隐藏延迟，单位毫秒        |
| `hoverIntent` | `boolean`                                    | `true`    | hover 模式下启用意图判断       |
| `name`        | `string \| null`                             | `null`    | 提示名称，传给 Drop 和内容节点 |
| `id`          | `string \| null`                             | `null`    | 浮层 id，传给 Drop             |
| `className`   | `object`                                     | 见下表    | 覆盖 Tooltip 内容类名          |
| `onShown`     | `Function \| null`                           | `null`    | Drop 展示后回调                |
| `onHidden`    | `Function \| null`                           | `null`    | Drop 隐藏后回调                |

### theme

可选主题值：`reverse`、`primary`、`success`、`warning`、`error`。

### className

| 字段         | 默认值       | 说明             |
| ------------ | ------------ | ---------------- |
| `container`  | `j-tooltip`  | Tooltip 内容容器 |
| `message`    | `el-text`    | Tooltip 文案节点 |
| `ui`         | `{}`         | 主题类名映射     |
| `ui.reverse` | `is-reverse` | 反色主题类名     |
| `ui.primary` | `is-primary` | 主色主题类名     |
| `ui.success` | `is-success` | 成功主题类名     |
| `ui.warning` | `is-warning` | 警告主题类名     |
| `ui.error`   | `is-error`   | 错误主题类名     |

## 实例属性

| 属性      | 说明                              |
| --------- | --------------------------------- |
| `element` | 底层 Drop 根节点；销毁后为 `null` |
| `drop`    | 底层 Drop 实例；销毁后为 `null`   |

## 实例方法

同 `Drop` 实例方法。

| 方法             | 说明                     |
| ---------------- | ------------------------ |
| `show(useDelay)` | 展示提示                 |
| `hide(useDelay)` | 隐藏提示                 |
| `toggle()`       | 切换展示状态             |
| `destroy()`      | 销毁 Tooltip 和底层 Drop |

```vp-script
import { createTooltip, q } from 'vanilla-jui';
import { jsx, insert } from 'vanilla-signal';
insert(q('.demo'), jsx('div', {
    style:{
        display:'flex',
        flexWrap:'wrap',
        gap:'8px',
    },
    children:[
        jsx('button', {
            className: 'tooltip-demo j-button is-default',
            children:'提示',
        }),
        jsx('button', {
            className: 'tooltip-theme-demo j-button is-error',
            children:'带主题的提示',
        }),
    ]
}));
createTooltip(q('.tooltip-demo'), {
    message: '保存成功后会自动同步',
    position: 'top-center'
});
createTooltip(q('.tooltip-theme-demo'), {
    message: '删除后不可恢复',
    theme: 'error',
    position: 'top-center'
});
```
