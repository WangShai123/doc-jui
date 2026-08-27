# 提示

> 推荐使用 `tailwindcss`, `unocss` 等 CSS 工具，更有利于个性化定制 UI 和按需构建最小化 CSS 文件。

默认样式文件中的 CSS 提示类。

<Badge text="CSS" theme="warning"/>

## 基础 DOM

```html
<div class="j-tip is-{type}">
  <div class="tip-icon">{ element }</div>
  <div class="tip-title">提示</div>
  <div class="tip-content">这是一个提示信息。</div>
</div>
```

## 提示变体

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
    tip('登录已过期，请重新登录。', '授权错误', icon('info'), null, false),
    tip('您已获得临时授权，有效期为 1 小时。', '授权成功', icon('success'), 'success'),
    tip('临时授权即将过期，请及时刷新。', '警告', icon('warning'), 'warning'),
    tip('登录已过期，请重新登录。', null, null, 'danger'),
])
```
