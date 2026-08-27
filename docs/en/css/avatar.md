# Avatar

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS avatar classes in the default stylesheet.

<Badge text="CSS" theme="warning"/>

## Basic DOM

```html
<span class="j-avatar is-{variant}">
  <img src="/avatar.png" alt="" />
</span>
```

## Avatar Variants

Set the `is-{variant}` class to create different avatar variants.

### Size Variants

:::tabs
@tab Example
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
@tab Code

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

### Shape Variants

:::tabs
@tab Example
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

@tab Code

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

### Text Variant

:::tabs
@tab Example
<Group>
<span class="j-avatar is-text">
<span>A</span>
</span>
<span class="j-avatar is-text">
<span>W</span>
</span>
</Group>

@tab Code

```html
<span class="j-avatar is-text">
  <span>A</span>
</span>
<span class="j-avatar is-text">
  <span>W</span>
</span>
```

:::

## Avatar Group

Set the `j-avatar-group` class to create an avatar group.

:::tabs
@tab Example
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
@tab Code

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
