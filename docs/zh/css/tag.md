# 标签

> 推荐使用 `tailwindcss`, `unocss` 等 CSS 工具，更有利于个性化定制 UI 和按需构建最小化 CSS 文件。

默认样式文件中的 CSS 标签类。

<Badge text="CSS" theme="warning"/>

## 基础 DOM

```html
<span class="j-tag is-{variant}">
  <span class="el-prefix">{前缀元素}</span>
  <span class="tag-content">标签文本</span>
  <span class="el-suffix el-icon" data-action-close>{后缀元素}</span>
</span>
```

## 标签变体

设置类 `is-{variant}` 实现不同变体的标签。

:::tabs
@tab 示例
<Group>
<span class="j-tag is-default">default</span>
<span class="j-tag is-reverse">reverse</span>
<span class="j-tag is-primary">primary</span>
<span class="j-tag is-secondary">secondary</span>
<span class="j-tag is-outline">outline</span>
<span class="j-tag is-ghost">ghost</span>
</Group>
@tab 代码

```html
<span class="j-tag is-default">default</span>
<span class="j-tag is-reverse">reverse</span>
<span class="j-tag is-primary">primary</span>
<span class="j-tag is-secondary">secondary</span>
<span class="j-tag is-outline">outline</span>
<span class="j-tag is-ghost">ghost</span>
```

:::

## 组合应用

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
