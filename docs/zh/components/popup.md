# 弹窗

Popup 是一个轻量 DOM 工厂，只负责生产通用弹窗节点，提供给其他组件使用。

<Badge text="UI Primitive" theme="error"/> <Badge text="RenderableContent"/>

## 导入

```ts
import { createPopup } from 'vanilla-jui';
```

## 基础用法

```ts
const popup = createPopup({
  position: 'center',
  component: 'modal',
  content: 'Popup content',
});

document.body.appendChild(popup);
```

生成结构：

```html
<div
  class="j-popup-layout is-center"
  role="dialog"
  data-modal="root"
  aria-modal="true"
  aria-labelledby="dialog-title"
>
  ...
</div>
```

## 参数

`createPopup(options)`

```ts
createPopup(options:PopupOptions):HTMLElement {}
```

| 参数         | 类型                | 默认值             | 说明                                               |
| ------------ | ------------------- | ------------------ | -------------------------------------------------- |
| `className`  | `string`            | `'j-popup-layout'` | 根节点基础类名                                     |
| `position`   | `string`            | `'center'`         | 弹层位置，最终追加为 `is-${position}`              |
| `component`  | `string`            | `''`               | 组件名；非空时渲染 `data-${component}` 和对应 ARIA |
| `labelledby` | `string`            | `''`               | 非空时渲染 `aria-labelledby`                       |
| `content`    | `RenderableContent` | `''`               | 弹层内容                                           |

position 支持九点方位，可选值：

- `center`
- `top-center`
- `bottom-center`
- `left-center`
- `right-center`
- `top-left`
- `top-right`
- `bottom-left`
- `bottom-right`
