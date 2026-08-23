# Icons

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS icon classes in the default stylesheet. Several common CSS icons are included.

## close

Class name: `icon-close`

<span class="icon-close"></span>

Use it in buttons and similar elements:

<button class="j-button is-default is-icon"><span class="icon-close"></span></button>

<div class="j-tag is-reverse">
    <span class="el-text">Tag</span>
    <span class="icon-close"></span>
</div>

## loader

Basic DOM structure:

```html
<div class="j-loader">
  <div class="{loader-type}"></div>
</div>
```

### loader

:::tabs
@tab Example
<div class="j-loader">
  <div class="loader"></div>
</div>

@tab Code

```html
<div class="j-loader">
  <div class="loader"></div>
</div>
```

:::

### polygon-loader

:::tabs
@tab Example
<div class="j-loader">
  <div class="polygon-loader"></div>
</div>

@tab Code

```html
<div class="j-loader">
  <div class="polygon-loader"></div>
</div>
```

:::

### tone-loader

:::tabs
@tab Example
<div class="j-loader">
  <div class="tone-loader"></div>
</div>

@tab Code

```html
<div class="j-loader">
  <div class="tone-loader"></div>
</div>
```

:::

### flow-loader

:::tabs
@tab Example
<div class="j-loader">
  <div class="flow-loader"></div>
</div>

@tab Code

```html
<div class="j-loader">
  <div class="flow-loader"></div>
</div>
```

:::

### Custom Styles

Control CSS Loader styles with CSS variables. Default values:

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
