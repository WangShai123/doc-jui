# 按钮

## 基础结构

```html
<button class="j-button is-{variant} is-{active} is-{size}" {disabled}>
    <span class="el-prefix">{ 前缀元素 }</span>
    <span class="button-content"> {按钮文本} </span>
    <span class="el-suffix">{ 后缀元素 }</span>
</button>
```

## 按钮变体

设置类 `is-{variant}` 实现不同变体的按钮。

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-default">默认按钮</button>
    <button class="j-button is-primary">主要按钮</button>
    <button class="j-button is-secondary">次要按钮</button>
    <button class="j-button is-outline">线条按钮</button>
    <button class="j-button is-ghost">幽灵按钮</button>
    <button class="j-button is-text">文本按钮</button>
    <button class="j-button is-danger">危险按钮</button>
    <button class="j-button is-warning">警告按钮</button>
    <button class="j-button is-success">成功按钮</button>
</div>

::: details HTML
```html
<button class="j-button is-default">默认按钮</button>
<button class="j-button is-primary">主要按钮</button>
<button class="j-button is-secondary">次要按钮</button>
<button class="j-button is-outline">线条按钮</button>
<button class="j-button is-ghost">幽灵按钮</button>
<button class="j-button is-text">文本按钮</button>
<button class="j-button is-danger">危险按钮</button>
<button class="j-button is-warning">警告按钮</button>
<button class="j-button is-success">成功按钮</button>
```
:::

## 禁用状态

设置属性 `disabled` 实现禁用状态。

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-default" disabled="">默认按钮</button>
    <button class="j-button is-primary" disabled="">主要按钮</button>
    <button class="j-button is-secondary" disabled="">次要按钮</button>
    <button class="j-button is-outline" disabled="">线条按钮</button>
    <button class="j-button is-ghost" disabled="">幽灵按钮</button>
    <button class="j-button is-text" disabled="">文本按钮</button>
    <button class="j-button is-danger" disabled="">危险按钮</button>
    <button class="j-button is-warning" disabled="">警告按钮</button>
    <button class="j-button is-success" disabled="">成功按钮</button>
</div>

```html
<button class="j-button is-default" disabled>默认按钮</button>
```

## 图标按钮

设置类 `is-icon` 实现图标按钮。

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-default is-icon">
        <span class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"></path></svg>
        </span>
    </button>
    <button class="j-button is-primary is-icon">
        <span class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"></path></svg>
        </span>
    </button>
    <button class="j-button is-secondary is-icon">
        <span class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"></path></svg>
        </span>
    </button>
    <button class="j-button is-outline is-icon">
        <span class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"></path></svg>
        </span>
    </button>
    <button class="j-button is-ghost is-icon">
        <span class="icon-loader"></span>
    </button>
    <button class="j-button is-danger is-icon">
        <span class="icon-loader"></span>
    </button>
    <button class="j-button is-warning is-icon">
        <span class="icon-loader"></span>
    </button>
    <button class="j-button is-success is-icon">
        <span class="icon-loader"></span>
    </button>
</div>

```html
<button class="j-button is-default is-icon">
    <span class="el-icon"> {图标元素} </span>
</button>
```

## 不同尺寸

设置类 `is-{size}` 实现不同尺寸的按钮。

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-outline is-sm">小按钮</button>
    <button class="j-button is-outline is-md">中等按钮</button>
    <button class="j-button is-outline is-lg">大按钮</button>
</div>

```html
<button class="j-button is-outline is-sm">小按钮</button>
<button class="j-button is-outline is-md">中等按钮</button>
<button class="j-button is-outline is-lg">大按钮</button>
```

## 按钮组

设置容器类 `j-button-group` 实现按钮组。

<div class="flex gap-4 flex-wrap">
    <div class="j-button-group">
        <button class="j-button is-outline">button-1</button>
        <button class="j-button is-outline">button-2</button>
        <button class="j-button is-outline">button-3</button>
    </div>
</div>

```html
<div class="j-button-group">
    <button class="j-button is-outline">button-1</button>
    <button class="j-button is-outline">button-2</button>
    <button class="j-button is-outline">button-3</button>
</div>
```

## 其他

1. `el-{element}`: 支持：前缀元素 `prefix`、后缀元素 `suffix`、图标元素 `icon`，按需使用。
2. 无 `prefix` / `suffix` 时，可省略 `button-content` 元素。

## 题外话

场景化应用对比

<div class="flex gap-4 flex-wrap">
    <div class="j-button-group">
        <button class="j-button is-primary px-1">
            <span class="el-icon animate-spin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M11.9995 2C12.5518 2 12.9995 2.44772 12.9995 3V6C12.9995 6.55228 12.5518 7 11.9995 7C11.4472 7 10.9995 6.55228 10.9995 6V3C10.9995 2.44772 11.4472 2 11.9995 2ZM11.9995 17C12.5518 17 12.9995 17.4477 12.9995 18V21C12.9995 21.5523 12.5518 22 11.9995 22C11.4472 22 10.9995 21.5523 10.9995 21V18C10.9995 17.4477 11.4472 17 11.9995 17ZM20.6597 7C20.9359 7.47829 20.772 8.08988 20.2937 8.36602L17.6956 9.86602C17.2173 10.1422 16.6057 9.97829 16.3296 9.5C16.0535 9.02171 16.2173 8.41012 16.6956 8.13398L19.2937 6.63397C19.772 6.35783 20.3836 6.52171 20.6597 7ZM7.66935 14.5C7.94549 14.9783 7.78161 15.5899 7.30332 15.866L4.70525 17.366C4.22695 17.6422 3.61536 17.4783 3.33922 17C3.06308 16.5217 3.22695 15.9101 3.70525 15.634L6.30332 14.134C6.78161 13.8578 7.3932 14.0217 7.66935 14.5ZM20.6597 17C20.3836 17.4783 19.772 17.6422 19.2937 17.366L16.6956 15.866C16.2173 15.5899 16.0535 14.9783 16.3296 14.5C16.6057 14.0217 17.2173 13.8578 17.6956 14.134L20.2937 15.634C20.772 15.9101 20.9359 16.5217 20.6597 17ZM7.66935 9.5C7.3932 9.97829 6.78161 10.1422 6.30332 9.86602L3.70525 8.36602C3.22695 8.08988 3.06308 7.47829 3.33922 7C3.61536 6.52171 4.22695 6.35783 4.70525 6.63397L7.30332 8.13398C7.78161 8.41012 7.94549 9.02171 7.66935 9.5Z">
                    </path>
                </svg>
            </span>
        </button>
        <button class="j-button is-primary px-1">button</button>
        <button class="j-button is-primary px-1">
            <span class="el-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
                </svg>
            </span>
        </button>
    </div>
    <div class="flex align-center select-none">VS</div>
    <button class="j-button is-primary px-2">
        <span class="prefix animate-spin">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M11.9995 2C12.5518 2 12.9995 2.44772 12.9995 3V6C12.9995 6.55228 12.5518 7 11.9995 7C11.4472 7 10.9995 6.55228 10.9995 6V3C10.9995 2.44772 11.4472 2 11.9995 2ZM11.9995 17C12.5518 17 12.9995 17.4477 12.9995 18V21C12.9995 21.5523 12.5518 22 11.9995 22C11.4472 22 10.9995 21.5523 10.9995 21V18C10.9995 17.4477 11.4472 17 11.9995 17ZM20.6597 7C20.9359 7.47829 20.772 8.08988 20.2937 8.36602L17.6956 9.86602C17.2173 10.1422 16.6057 9.97829 16.3296 9.5C16.0535 9.02171 16.2173 8.41012 16.6956 8.13398L19.2937 6.63397C19.772 6.35783 20.3836 6.52171 20.6597 7ZM7.66935 14.5C7.94549 14.9783 7.78161 15.5899 7.30332 15.866L4.70525 17.366C4.22695 17.6422 3.61536 17.4783 3.33922 17C3.06308 16.5217 3.22695 15.9101 3.70525 15.634L6.30332 14.134C6.78161 13.8578 7.3932 14.0217 7.66935 14.5ZM20.6597 17C20.3836 17.4783 19.772 17.6422 19.2937 17.366L16.6956 15.866C16.2173 15.5899 16.0535 14.9783 16.3296 14.5C16.6057 14.0217 17.2173 13.8578 17.6956 14.134L20.2937 15.634C20.772 15.9101 20.9359 16.5217 20.6597 17ZM7.66935 9.5C7.3932 9.97829 6.78161 10.1422 6.30332 9.86602L3.70525 8.36602C3.22695 8.08988 3.06308 7.47829 3.33922 7C3.61536 6.52171 4.22695 6.35783 4.70525 6.63397L7.30332 8.13398C7.78161 8.41012 7.94549 9.02171 7.66935 9.5Z">
                </path>
            </svg>
        </span>
        <span class="button-content">button</span>
        <span class="suffix">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
            </svg>
        <span>
    </span></span></button>
</div>