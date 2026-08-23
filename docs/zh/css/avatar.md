# 头像

> 推荐使用 `tailwindcss`, `unocss` 等 CSS 工具，更有利于个性化定制 UI 和按需构建最小化 CSS 文件。

默认样式文件中的 CSS 头像类。

## 基础 DOM

```html
<span class="j-avatar is-{variant}">
  <img src="/avatar.png" alt="" />
</span>
```

## 头像变体

设置类 is-{variant} 实现不同变体的头像。

### 尺寸变体

:::tabs
@tab 示例
<Group>
<span class="j-avatar is-sm">
<img src="../../public/avatar.png" alt="avatar" />
</span>
<span class="j-avatar is-md">
<img src="../../public/avatar.png" alt="avatar" />
</span>
<span class="j-avatar is-lg">
<img src="../../public/avatar.png" alt="avatar" />
</span>
</Group>
@tab 代码

```html
<span class="j-avatar is-sm">
  <img src="{imageLink}" alt="avatar" />
</span>
<span class="j-avatar is-md">
  <img src="{imageLink}" alt="avatar" />
</span>
<span class="j-avatar is-lg">
  <img src="{imageLink}" alt="avatar" />
</span>
```

:::

### 形状变体

:::tabs
@tab 示例
<Group>
<span class="j-avatar">
<img src="../../public/avatar.png" alt="avatar" />
</span>
<span class="j-avatar is-circle">
<img src="../../public/avatar.png" alt="avatar" />
</span>
<span class="j-avatar is-round">
<img src="../../public/avatar.png" alt="avatar" />
</span>
</Group>

@tab 代码

```html
<span class="j-avatar">
  <img src="{imageLink}" alt="avatar" />
</span>
<span class="j-avatar is-circle">
  <img src="{imageLink}" alt="avatar" />
</span>
<span class="j-avatar is-round">
  <img src="{imageLink}" alt="avatar" />
</span>
```

:::

### 文字变体

:::tabs
@tab 示例
<Group>
<span class="j-avatar is-text">
<span>文</span>
</span>
<span class="j-avatar is-text">
<span>W</span>
</span>
</Group>

@tab 代码

```html
<span class="j-avatar is-text">
  <span>文</span>
</span>
<span class="j-avatar is-text">
  <span>W</span>
</span>
```

:::

## 头像组

设置类 `j-avatar-group` 实现头像组。

:::tabs
@tab 示例
<div class="j-avatar-group">
<span class="j-avatar is-circle">
<img src="../../public/avatar.png" alt="avatar">
</span>
<span class="j-avatar is-circle">
<img src="../../public/avatar.png" alt="avatar">
</span>
<span class="j-avatar is-circle">
<img src="../../public/avatar.png" alt="avatar">
</span>
<span class="j-avatar is-circle is-text">
<span>99+</span>
</span>
</div>
@tab 代码

```html
<div class="j-avatar-group">
  <span class="j-avatar is-circle">
    <img src="/avatar.png" alt="avatar" />
  </span>
  <span class="j-avatar is-circle">
    <img src="/avatar.png" alt="avatar" />
  </span>
  <span class="j-avatar is-circle">
    <img src="/avatar.png" alt="avatar" />
  </span>
  <span class="j-avatar is-circle is-text">
    <span>99+</span>
  </span>
</div>
```

:::
