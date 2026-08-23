# Tip

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS tip classes in the default stylesheet.

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
- `is-success`
- `is-warning`
- `is-danger`

<div class="demo"></div>

```vp-script
import { q, icon } from 'vanilla-jui';
import { insert, jsx, Show } from 'vanilla-signal';

const tip = (msg, title, icon, variant = null, margin=true) => jsx('div', {
    className: `j-tip${variant ? ` is-${variant}` : ''}`,
    style: {
        marginTop: margin ? '12px' : null,
    },
    children: [
        Show({
            when: icon,
            children: jsx('div',{
                className: 'tip-icon',
                children: icon,
            }),
            fallback: null,
        }),
        Show({
            when: title,
            children: jsx('div',{
                className: 'tip-title',
                children: title,
            }),
            fallback: null,
        }),
        jsx('div', {
            className: 'tip-content',
            children: msg,
        })
    ]
})

insert(q('.demo'), [
    tip('Login has expired. Please log in again.', 'Authorization Error', icon('info'), null, false),
    tip('You have temporary authorization. It is valid for 1 hour.', 'Authorization Succeeded', icon('success'), 'success'),
    tip('Temporary authorization is about to expire. Please refresh in time.', 'Warning', icon('warning'), 'warning'),
    tip('Login has expired. Please log in again.', null, null, 'danger'),
])
```
