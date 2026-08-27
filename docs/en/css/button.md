# Button

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS button classes in the default stylesheet.

<Badge text="CSS" theme="warning"/>

## Basic DOM

```html
<button class="j-button is-{variant} is-{active} is-{size}" {disabled}>
  <span class="el-prefix">{ Prefix element }</span>
  <span class="button-content"> {Button text} </span>
  <span class="el-suffix">{ Suffix element }</span>
</button>
```

## Button Variants

Set the `is-{variant}` class to create different button variants.

### Theme and State

:::tabs
@tab Example

<Group>
    <button class="j-button is-default">is-default</button>
    <button class="j-button is-reverse">is-reverse</button>
    <button class="j-button is-primary">is-primary</button>
    <button class="j-button is-secondary">is-secondary</button>
    <button class="j-button is-outline">is-outline</button>
    <button class="j-button is-ghost">is-ghost</button>
</Group>

@tab Code

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
@tab Example

<Group>
    <button class="j-button is-success">is-success</button>
    <button class="j-button is-warning">is-warning</button>
    <button class="j-button is-danger">is-danger</button>
    <button class="j-button is-error">is-error</button>
</Group>

@tab Code

```html
<button class="j-button is-success">is-success</button>
<button class="j-button is-warning">is-warning</button>
<button class="j-button is-danger">is-danger</button>
<button class="j-button is-error">is-error</button>
```

:::

### Text and Icons

:::tabs
@tab Example

<Group>
<button class="j-button is-text">is-text</button>
<button class="j-button is-icon is-default">
<span class="icon-close"></span>
</button>
</Group>

@tab Code

```html
<button class="j-button is-text">is-text</button>
<button class="j-button is-icon is-default">
  <span class="icon-close"></span>
</button>
```

:::

### Size Variants

:::tabs
@tab Example
<Group>
<button class="j-button is-sm is-default">is-sm</button>
<button class="j-button is-md is-default">is-md</button>
<button class="j-button is-lg is-default">is-lg</button>
</Group>

@tab Code

```html
<button class="j-button is-sm is-default">is-sm</button>
<button class="j-button is-md is-default">is-md</button>
<button class="j-button is-lg is-default">is-lg</button>
```

:::
