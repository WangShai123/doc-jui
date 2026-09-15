---
client:
  entry:
    - tip
---

# Tip

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS tip classes in the default stylesheet.

<Badge text="CSS" theme="warning"/>

## Basic DOM

```html
<div class="j-tip is-{type}">
  <div class="tip-icon">{ element }</div>
  <div class="tip-title">Tip</div>
  <div class="tip-content">This is a tip message.</div>
</div>
```

## Tip Variants

- `is-default`
- `is-primary`
- `is-success`
- `is-warning`
- `is-danger`

<div class="demo"></div>
