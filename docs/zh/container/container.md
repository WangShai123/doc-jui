# 容器

容器（Container）是用于包裹和布局其他元素的组件。

## 页面容器

设置工具类 `.container` 创建一个基础页面容器。

```css
.container {
    width: 100%;
    max-width: var(--screen-xl);
    margin-inline: auto;
    padding-inline: 1rem;
}
```

## 安全区域

针对 `iPhone` 及更新机型的刘海屏和圆角屏幕，设置工具类 `.ios-safe-{direction}` 来适配安全区域。

| 类名 | 描述 | 属性值 |
| ---- | ---- | ---- |
| .ios-safe-x | 设置水平安全区域内边距 | padding-left: env(safe-area-inset-left);<br>padding-right: env(safe-area-inset-right) |
| .ios-safe-y | 设置垂直安全区域内边距 | padding-top: env(safe-area-inset-top);<br>padding-bottom: env(safe-area-inset-bottom) |
| .ios-safe-top | 设置顶部安全区域内边距 | padding-top: env(safe-area-inset-top) |
| .ios-safe-right | 设置右侧安全区域内边距 | padding-right: env(safe-area-inset-right) |
| .ios-safe-bottom | 设置底部安全区域内边距 | padding-bottom: env(safe-area-inset-bottom) |
| .ios-safe-left | 设置左侧安全区域内边距 | padding-left: env(safe-area-inset-left) |

## 宽高比

设置工具类 `.aspect-{ratio}` 来设置宽高比。

| 类名 | 描述 | 属性值 |
| ---- | ---- | ---- |
| .aspect-square | 1:1 宽高比 | aspect-ratio: 1 / 1 |
| .aspect-video | 16:9 宽高比 | aspect-ratio: 16 / 9 |
| .aspect-auto | 自动宽高比 | aspect-ratio: auto |

## 列宽

设置工具类 `.columns-{width}` 来设置列宽。

| 类名 | 描述 | 属性值 |
| ---- | ---- | ---- |
| .columns-auto | 自动列宽 | width: auto |
| .columns-3xs | 3xs 列宽 | width: var(--columns-3xs,16rem) |
| .columns-2xs | 2xs 列宽 | width: var(--columns-2xs,18rem) |
| .columns-xs | xs 列宽 | width: var(--columns-xs,20rem) |
| .columns-sm | sm 列宽 | width: var(--columns-sm,24rem) |
| .columns-md | md 列宽 | width: var(--columns-md,28rem) |
| .columns-lg | lg 列宽 | width: var(--columns-lg,32rem) |
| .columns-xl | xl 列宽 | width: var(--columns-xl,36rem) |
| .columns-2xl | 2xl 列宽 | width: var(--columns-2xl,42rem) |
| .columns-3xl | 3xl 列宽 | width: var(--columns-3xl,48rem) |
| .columns-4xl | 4xl 列宽 | width: var(--columns-4xl,56rem) |
| .columns-5xl | 5xl 列宽 | width: var(--columns-5xl,64rem) |
| .columns-6xl | 6xl 列宽 | width: var(--columns-6xl,72rem) |
| .columns-7xl | 7xl 列宽 | width: var(--columns-7xl,80rem) |
