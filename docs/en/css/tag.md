# Tag

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS tag classes in the default stylesheet.

<Badge text="CSS" theme="warning"/>

## Basic DOM

```html
<span class="j-tag is-{variant}">
  <span class="el-prefix">{Prefix element}</span>
  <span class="tag-content">Tag text</span>
  <span class="el-suffix el-icon" data-action-close>{Suffix element}</span>
</span>
```

## Tag Variants

Set the `is-{variant}` class to create different tag variants.

:::tabs
@tab Example
<Group>
<span class="j-tag is-default">default</span>
<span class="j-tag is-reverse">reverse</span>
<span class="j-tag is-primary">primary</span>
<span class="j-tag is-secondary">secondary</span>
<span class="j-tag is-outline">outline</span>
<span class="j-tag is-ghost">ghost</span>
</Group>
@tab Code

```html
<span class="j-tag is-default">default</span>
<span class="j-tag is-reverse">reverse</span>
<span class="j-tag is-primary">primary</span>
<span class="j-tag is-secondary">secondary</span>
<span class="j-tag is-outline">outline</span>
<span class="j-tag is-ghost">ghost</span>
```

:::

## Combined Usage

<div class="demo"></div>

```vp-script
import { insert, jsx } from 'vanilla-signal';
import { q, icon } from 'vanilla-jui';

const createTag = (variant) => {
    return jsx('span', {
        className: `j-tag is-${variant}`,
        children: [
            jsx('span', {
                className: 'el-prefix el-icon',
                children: icon('js')
            }),
            jsx('span',{
                className: 'tag-content',
                children: variant
            }),
            jsx('span',{
                className: 'el-suffix el-icon',
                'data-action-close': '',
                'data-action': 'close',
                children: icon('close')
            })
        ]
    });
}

insert(q('.demo'), jsx('div', {
    className: 'vp-group',
    children: [
        createTag('default'),
        createTag('reverse'),
        createTag('primary'),
        createTag('secondary'),
        createTag('outline'),
        createTag('ghost'),
    ]
}));
```
