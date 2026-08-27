# 图标

> 推荐使用 `tailwindcss`, `unocss` 等 CSS 工具，更有利于个性化定制 UI 和按需构建最小化 CSS 文件。

默认样式文件中的 CSS 图标类：内置若干常用 CSS 图标。

<Badge text="CSS" theme="warning"/>

## close

类名：`icon-close`

<span class="icon-close"></span>

用在按钮等元素中：

<button class="j-button is-default is-icon"><span class="icon-close"></span></button>

<div class="j-tag is-reverse">
    <span class="el-text">标签</span>
    <span class="icon-close"></span>
</div>

## loader

基础 DOM 结构：

```html
<div class="j-loader">
  <div class="{loader-type}"></div>
</div>
```

### loader

:::tabs
@tab 示例
<div class="j-loader">
  <div class="loader"></div>
</div>

@tab 代码

```html
<div class="j-loader">
  <div class="loader"></div>
</div>
```

:::

### polygon-loader

:::tabs
@tab 示例
<div class="j-loader">
  <div class="polygon-loader"></div>
</div>

@tab 代码

```html
<div class="j-loader">
  <div class="polygon-loader"></div>
</div>
```

:::

### tone-loader

:::tabs
@tab 示例
<div class="j-loader">
  <div class="tone-loader"></div>
</div>

@tab 代码

```html
<div class="j-loader">
  <div class="tone-loader"></div>
</div>
```

:::

### flow-loader

:::tabs
@tab 示例
<div class="j-loader">
  <div class="flow-loader"></div>
</div>

@tab 代码

```html
<div class="j-loader">
  <div class="flow-loader"></div>
</div>
```

:::

### 自定义样式

通过 CSS 变量控制 CSS Loader 样式，默认值如下：

```css
.j-loader {
  --loader-size: var(--font-size-md);
  --loader-width: 1.5px;
  --loader-style: solid;
  --loader-fg: currentcolor;
  --loader-speed: var(--speed-xl);
}

.j-loader .tone-loader {
  --loader-width: 2px;
  --loader-fg: var(--tone-soft);
  --loader-top-fg: var(--tone-solid);
}

.j-loader .flow-loader {
  --loader-width: 2px;
  --loader-bg:
    radial-gradient(farthest-side, var(--tone-solid) 94%, #0000)
      top/var(--loader-width) var(--loader-width) no-repeat,
    conic-gradient(#0000 30%, var(--tone-solid));
  --loader-mask: radial-gradient(
    farthest-side,
    #0000 calc(100% - var(--loader-width)),
    #000 0
  );
}
```
