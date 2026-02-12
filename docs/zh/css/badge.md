# 徽标

## 基础结构

```html
<span class="j-badge">1</span>
```

## 应用示例

<div class="flex gap-4 flex-wrap">
    <span class="j-badge">1</span>
    <span class="j-badge is-primary">100</span>
    <span class="j-badge is-secondary">100</span>
    <span class="j-badge is-danger">100</span>
</div>

## 不同类型

设置类 `is-{type}` 实现不同类型的徽章。

- `is-primary`：主色徽章
- `is-secondary`：次色徽章
- `is-danger`：危险色徽章

```html
<span class="j-badge">1</span>
<!-- is-primary: 主色徽章 -->
<span class="j-badge is-primary">100</span>
<!-- is-secondary: 次色徽章 -->
<span class="j-badge is-secondary">100</span>
<!-- is-danger: 危险色徽章 -->
<span class="j-badge is-danger">100</span>
```

`is-primary` 继承主题配置中的主题色样式。