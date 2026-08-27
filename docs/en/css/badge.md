# Badge

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS badge classes in the default stylesheet.

<Badge text="CSS" theme="warning"/>

## Basic DOM

```html
<span class="j-badge">1</span>
```

## Badge Variants

Set the `is-{variant}` class to create different badge variants.

:::tabs
@tab Example
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
@tab Code

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

## Badge Sizes

Set the `is-{size}` class to create badges in different sizes.

:::tabs
@tab Example
<Group>
<span class="j-badge is-sm">sm</span>
<span class="j-badge is-md">md</span>
<span class="j-badge is-sm is-secondary">v1.0.0</span>
<span class="j-badge is-md is-secondary">v1.0.0</span>
</Group>
@tab Code

```html
<span class="j-badge is-sm">sm</span> <span class="j-badge is-md">md</span>
```

:::
