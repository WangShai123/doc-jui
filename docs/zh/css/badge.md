# 徽章

> 推荐使用 `tailwindcss`, `unocss` 等 CSS 工具，更有利于个性化定制 UI 和按需构建最小化 CSS 文件。

默认样式文件中的 CSS 徽章类。

<Badge text="CSS" theme="warning"/>

## 基础 DOM

```html
<span class="j-badge">1</span>
```

## 徽章变体

设置类 `is-{variant}` 实现不同变体的徽章。

:::tabs
@tab 示例
<Group>
<span class="j-badge is-default">1</span>
<span class="j-badge is-reverse">9</span>
<span class="j-badge is-primary">99</span>
<span class="j-badge is-secondary">99</span>
<span class="j-badge is-success">99</span>
<span class="j-badge is-warning">999</span>
<span class="j-badge is-danger">999</span>
<span class="j-badge is-error">999</span>
</Group>
@tab 代码

```html
<span class="j-badge is-default">1</span>
<span class="j-badge is-reverse">9</span>
<span class="j-badge is-primary">99</span>
<span class="j-badge is-secondary">99</span>
<span class="j-badge is-success">99</span>
<span class="j-badge is-warning">999</span>
<span class="j-badge is-danger">999</span>
<span class="j-badge is-error">999</span>
```

:::

## 徽章尺寸

设置类 `is-{size}` 实现不同尺寸的徽章。

:::tabs
@tab 示例
<Group>
<span class="j-badge is-sm">sm</span>
<span class="j-badge is-md">md</span>
<span class="j-badge is-sm is-secondary">v1.0.0</span>
<span class="j-badge is-md is-secondary">v1.0.0</span>
</Group>
@tab 代码

```html
<span class="j-badge is-sm">sm</span> <span class="j-badge is-md">md</span>
```

:::
