# 头像

## 基础结构

```html
<span class="j-avatar">
    <img src="/avatar.png" alt="" />
</span>
```

## 不同尺寸

设置类 `is-{size}` 实现不同尺寸的头像。

<div class="flex gap-4 flex-wrap">
    <span class="j-avatar is-sm">
        <img src="/avatar.png" alt="avatar">
    </span>
    <span class="j-avatar is-md">
        <img src="/avatar.png" alt="avatar">
    </span>
    <span class="j-avatar is-lg">
        <img src="/avatar.png" alt="avatar">
    </span>
</div>

::: details HTML
```html
<!-- is-sm: 小号头像 -->
<span class="j-avatar is-sm">
    <img src="{imageLink}" alt="avatar" />
</span>
<!-- is-md: 中号头像，默认尺寸，可不添加此类 -->
<span class="j-avatar is-md">
    <img src="{imageLink}" alt="avatar" />
</span>
<!-- is-lg: 大号头像 -->
<span class="j-avatar is-lg">
    <img src="{imageLink}" alt="avatar" />
</span>
```
:::

JUI Avatar 的默认尺寸，会继承主题配置中的字体大小样式。

## 不同形状

设置类 `is-{shape}` 实现不同形状的头像。

<div class="flex gap-4 flex-wrap">
    <span class="j-avatar">
        <img src="/avatar.png" alt="avatar">
    </span>
    <span class="j-avatar is-circle">
        <img src="/avatar.png" alt="avatar">
    </span>
    <span class="j-avatar is-round">
        <img src="/avatar.png" alt="avatar">
    </span>
</div>

::: details HTML
```html
<!-- none: 默认继承主题配置中的圆角样式 -->
<span class="j-avatar">
    <img src="{imageLink}" alt="avatar" />
</span>
<!-- is-circle: 圆形头像 -->
<span class="j-avatar is-circle">
    <img src="{imageLink}" alt="avatar" />
</span>
<!-- is-round: 圆角头像 -->
<span class="j-avatar is-round">
    <img src="{imageLink}" alt="avatar" />
</span>
```
:::

JUI Avatar 的默认形状，会继承主题配置中的圆角样式。

## 文字头像

设置类 `is-text` 实现文字头像。

<div class="flex gap-4 flex-wrap">
    <span class="j-avatar is-text">
        <span>文</span>
    </span>
    <span class="j-avatar is-text">
        <span>W</span>
    </span>
</div>

```html
<!-- is-text: 文字头像 -->
<span class="j-avatar is-text">
    <span>文</span>
</span>
```

## 头像组

设置类 `j-avatar-group` 实现头像组。

<div class="flex gap-4 flex-wrap">
    <span class="j-avatar-group">
        <span class="j-avatar is-circle">
            <img src="/avatar.png" alt="avatar">
        </span>
        <span class="j-avatar is-circle">
            <img src="/avatar.png" alt="avatar">
        </span>
        <span class="j-avatar is-circle">
            <img src="/avatar.png" alt="avatar">
        </span>
        <span class="j-avatar is-circle">
            <img src="/avatar.png" alt="avatar">
        </span>
        <span class="j-avatar is-circle is-text">
            <span>99+</span>
        </span>
    </span>
</div>

::: details HTML
```html
<!-- j-avatar-group: 头像组 -->
<span class="j-avatar-group">
    <span class="j-avatar">
        <img src="{imageLink}" alt="avatar" />
    </span>
    <span class="j-avatar">
        <img src="{imageLink}" alt="avatar" />
    </span>
    {...}
    <span class="j-avatar is-circle is-text">
        <span>99+</span>
    </span>
</span>
```
:::
