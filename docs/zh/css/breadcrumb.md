# 面包屑

> 推荐使用 `tailwindcss`, `unocss` 等 CSS 工具，更有利于个性化定制 UI 和按需构建最小化 CSS 文件。

默认样式文件中的 CSS 面包屑类。

<Badge text="CSS" theme="warning"/>

## 基础 DOM

```html
<div class="j-breadcrumb is-{direction} is-{size}" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">首页</a></li>
    <li><a href="#">一级导航</a></li>
    <li><a href="#">二级导航</a></li>
    <li class="is-active"><a href="#" aria-current="page">当前</a></li>
  </ul>
</div>
```

## 不同尺寸

设置类 `is-{size}` 来改变面包屑的尺寸。

- `is-sm` 小尺寸
- `is-md` 中尺寸
- `is-lg` 大尺寸

## 不同方向

设置类 `is-{direction}` 来改变面包屑的方向。

- `is-left`
- `is-right`
- `is-center`

## 不同分隔符

设置类 `is-{separator}` 来改变面包屑的分隔符。

- `is-dot`
- `is-arrow`
- `is-dash`
