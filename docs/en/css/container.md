---
client:
  entry:
    - common
---

# Container

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS container classes in the default stylesheet.

<Badge text="CSS" theme="warning"/>

## Basic Containers

| Class            | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| `container`      | Centered container, max width `--screen-xl` (1200px), horizontal padding `1rem` |
| `auto-container` | Full-width scrollable container                                                 |
| `block-center`   | Block-level centering with automatic height                                     |

## Flex Container

See [Flex Layout](layout.html#flex-layout)

## Grid Container

See [Grid Layout](layout.html#grid-layout)

## iOS Safe Area

Useful for iOS apps running in standalone mode:

```html
<div class="ios-safe-x">Horizontal safe area</div>
<div class="ios-safe-y">Vertical safe area</div>
<div class="ios-safe-left">Left safe area</div>
<div class="ios-safe-right">Right safe area</div>
<div class="ios-safe-top">Top safe area</div>
<div class="ios-safe-bottom">Bottom safe area</div>
```

| Class             | Description          |
| ----------------- | -------------------- |
| `ios-safe-x`      | Left + right padding |
| `ios-safe-y`      | Top + bottom padding |
| `ios-safe-left`   | Left padding only    |
| `ios-safe-right`  | Right padding only   |
| `ios-safe-top`    | Top padding only     |
| `ios-safe-bottom` | Bottom padding only  |

## Background Decoration

### Background Grid

A decorative grid background for landing pages:

```html
<div class="j-background-grid"></div>
```

| Class               | Description                                    |
| ------------------- | ---------------------------------------------- |
| `j-background-grid` | Full-screen decorative grid with gradient mask |

### Background Gradients

JUI provides 9 default background gradients. Use `bg-gradient-*` utility classes to add background gradients.

- `auto`, an automatic gradient generated from the theme color.
- `sunrise`.
- `aurora`.
- `ocean`.
- `meadow`.
- `ember`.
- `dusk`.
- `gold`.
- `forest`.

:::tabs
@tab Example
<div class="grid-container grid-col-3">
    <div class="bg-gradient-auto test-card">bg-gradient-auto</div>
    <div class="bg-gradient-sunrise test-card">bg-gradient-sunrise</div>
    <div class="bg-gradient-aurora test-card">bg-gradient-aurora</div>
    <div class="bg-gradient-ocean test-card">bg-gradient-ocean</div>
    <div class="bg-gradient-meadow test-card">bg-gradient-meadow</div>
    <div class="bg-gradient-ember test-card">bg-gradient-ember</div>
    <div class="bg-gradient-dusk test-card">bg-gradient-dusk</div>
    <div class="bg-gradient-gold test-card">bg-gradient-gold</div>
    <div class="bg-gradient-forest test-card">bg-gradient-forest</div>
</div>
@tab Code
```html
<div class="grid-container grid-col-3">
    <div class="bg-gradient-auto">bg-gradient-auto</div>
    <div class="bg-gradient-sunrise">bg-gradient-sunrise</div>
    <div class="bg-gradient-aurora">bg-gradient-aurora</div>
    <div class="bg-gradient-ocean">bg-gradient-ocean</div>
    <div class="bg-gradient-meadow">bg-gradient-meadow</div>
    <div class="bg-gradient-ember">bg-gradient-ember</div>
    <div class="bg-gradient-dusk">bg-gradient-dusk</div>
    <div class="bg-gradient-gold">bg-gradient-gold</div>
    <div class="bg-gradient-forest">bg-gradient-forest</div>
</div>
```
:::

## Width Utilities

### Width Classes

```html
<div class="w-full">100% width</div>
<div class="w-half">50% width</div>
<div class="w-screen">100vw width</div>
```

| Class      | Width | Description          |
| ---------- | ----- | -------------------- |
| `w-full`   | 100%  | Full width of parent |
| `w-half`   | 50%   | Half width of parent |
| `w-screen` | 100vw | Full viewport width  |

### Aspect Ratio

```html
<div class="aspect-square">1:1</div>
<div class="aspect-video">16:9</div>
<div class="aspect-auto">auto</div>
```

| Class           | Ratio | Description          |
| --------------- | ----- | -------------------- |
| `aspect-square` | 1:1   | Square               |
| `aspect-video`  | 16:9  | Video / widescreen   |
| `aspect-auto`   | auto  | Natural aspect ratio |
