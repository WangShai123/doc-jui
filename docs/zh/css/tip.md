---
client:
  entry:
    - tip
---

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
- `is-primary`
- `is-success`
- `is-warning`
- `is-danger`

<div class="demo"></div>
