# Avatar

## Basic Structure

```html
<span class="j-avatar">
    <img src="/avatar.png" alt="" />
</span>
```

## Different Sizes

Set class `is-{size}` to implement avatars of different sizes.

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
<!-- is-sm: Small avatar -->
<span class="j-avatar is-sm">
    <img src="{imageLink}" alt="avatar" />
</span>
<!-- is-md: Medium avatar, default size, this class can be omitted -->
<span class="j-avatar is-md">
    <img src="{imageLink}" alt="avatar" />
</span>
<!-- is-lg: Large avatar -->
<span class="j-avatar is-lg">
    <img src="{imageLink}" alt="avatar" />
</span>
```
:::

JUI Avatar's default size will inherit the font size style from the theme configuration.

## Different Shapes

Set class `is-{shape}` to implement avatars of different shapes.

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
<!-- none: Default inherits border radius style from theme configuration -->
<span class="j-avatar">
    <img src="{imageLink}" alt="avatar" />
</span>
<!-- is-circle: Circular avatar -->
<span class="j-avatar is-circle">
    <img src="{imageLink}" alt="avatar" />
</span>
<!-- is-round: Rounded avatar -->
<span class="j-avatar is-round">
    <img src="{imageLink}" alt="avatar" />
</span>
```
:::

JUI Avatar's default shape will inherit the border radius style from the theme configuration.

## Text Avatar

Set class `is-text` to implement text avatars.

<div class="flex gap-4 flex-wrap">
    <span class="j-avatar is-text">
        <span>A</span>
    </span>
    <span class="j-avatar is-text">
        <span>W</span>
    </span>
</div>

```html
<!-- is-text: Text avatar -->
<span class="j-avatar is-text">
    <span>A</span>
</span>
```

## Avatar Group

Set class `j-avatar-group` to implement avatar groups.

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
<!-- j-avatar-group: Avatar group -->
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
