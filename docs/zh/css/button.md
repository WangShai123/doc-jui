# 按钮

> 推荐使用 `tailwindcss`, `unocss` 等 CSS 工具，更有利于个性化定制 UI 和按需构建最小化 CSS 文件。

默认样式文件中的 CSS 按钮类。

## 基础 DOM

```html
<button class="j-button is-{variant} is-{active} is-{size}" {disabled}>
  <span class="el-prefix">{ 前缀元素 }</span>
  <span class="button-content"> {按钮文本} </span>
  <span class="el-suffix">{ 后缀元素 }</span>
</button>
```

## 按钮变体

设置类 `is-{variant}` 实现不同变体的按钮。

### 主题与状态

:::tabs
@tab 示例

<Group>
    <button class="j-button is-default">is-default</button>
    <button class="j-button is-reverse">is-reverse</button>
    <button class="j-button is-primary">is-primary</button>
    <button class="j-button is-secondary">is-secondary</button>
    <button class="j-button is-outline">is-outline</button>
    <button class="j-button is-ghost">is-ghost</button>
</Group>

@tab 代码

```html
<button class="j-button is-default">is-default</button>
<button class="j-button is-reverse">is-reverse</button>
<button class="j-button is-primary">is-primary</button>
<button class="j-button is-secondary">is-secondary</button>
<button class="j-button is-outline">is-outline</button>
<button class="j-button is-ghost">is-ghost</button>
```

:::

:::tabs
@tab 示例

<Group>
    <button class="j-button is-success">is-success</button>
    <button class="j-button is-warning">is-warning</button>
    <button class="j-button is-danger">is-danger</button>
    <button class="j-button is-error">is-error</button>
</Group>

@tab 代码

```html
<button class="j-button is-success">is-success</button>
<button class="j-button is-warning">is-warning</button>
<button class="j-button is-danger">is-danger</button>
<button class="j-button is-error">is-error</button>
```

:::

### 文本与图标

:::tabs
@tab 示例

<Group>
<button class="j-button is-text">is-text</button>
<button class="j-button is-icon is-default">
<span class="icon-close"></span>
</button>
</Group>

@tab 代码

```html
<button class="j-button is-text">is-text</button>
<button class="j-button is-icon is-default">
  <span class="icon-close"></span>
</button>
```

:::

### 尺寸变体

:::tabs
@tab 示例
<Group>
<button class="j-button is-sm is-default">is-sm</button>
<button class="j-button is-md is-default">is-md</button>
<button class="j-button is-lg is-default">is-lg</button>
</Group>

@tab 代码

```html
<button class="j-button is-sm is-default">is-sm</button>
<button class="j-button is-md is-default">is-md</button>
<button class="j-button is-lg is-default">is-lg</button>
```

:::
