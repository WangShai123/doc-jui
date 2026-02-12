# Badge

## Basic Structure

```html
<span class="j-badge">1</span>
```

## Examples

<div class="flex gap-4 flex-wrap">
    <span class="j-badge">1</span>
    <span class="j-badge is-primary">100</span>
    <span class="j-badge is-secondary">100</span>
    <span class="j-badge is-danger">100</span>
</div>

## Different Types

Set class `is-{type}` to implement badges of different types.

- `is-primary`: Primary color badge
- `is-secondary`: Secondary color badge
- `is-danger`: Danger color badge

```html
<span class="j-badge">1</span>
<!-- is-primary: Primary color badge -->
<span class="j-badge is-primary">100</span>
<!-- is-secondary: Secondary color badge -->
<span class="j-badge is-secondary">100</span>
<!-- is-danger: Danger color badge -->
<span class="j-badge is-danger">100</span>
```

`is-primary` inherits the primary color style from the theme configuration.
