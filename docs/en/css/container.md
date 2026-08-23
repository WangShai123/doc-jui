# Container

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS container classes in the default stylesheet.

## Basic Containers

| Class            | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| `container`      | Centered container, max width `--screen-xl` (1200px), horizontal padding `1rem` |
| `auto-container` | Full-width scrollable container                                    |
| `block-center`   | Block-level centering with automatic height                        |

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

| Class             | Description               |
| ----------------- | ------------------------- |
| `ios-safe-x`      | Left + right padding      |
| `ios-safe-y`      | Top + bottom padding      |
| `ios-safe-left`   | Left padding only         |
| `ios-safe-right`  | Right padding only        |
| `ios-safe-top`    | Top padding only          |
| `ios-safe-bottom` | Bottom padding only       |

## Background Decoration

### Background Grid

A decorative grid background for landing pages:

```html
<div class="j-background-grid"></div>
```

| Class               | Description                                  |
| ------------------- | -------------------------------------------- |
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

| Class      | Width | Description                  |
| ---------- | ----- | ---------------------------- |
| `w-full`   | 100%  | Full width of parent         |
| `w-half`   | 50%   | Half width of parent         |
| `w-screen` | 100vw | Full viewport width          |

### Column Width Classes

| Class          | Width | Width px | Description      |
| -------------- | ----- | -------- | ---------------- |
| `columns-auto` | auto  | auto     | Automatic column width |
| `columns-6xs`  | 10rem | 160px    | 6xs column width |
| `columns-5xs`  | 12rem | 192px    | 5xs column width |
| `columns-4xs`  | 14rem | 224px    | 4xs column width |
| `columns-3xs`  | 16rem | 256px    | 3xs column width |
| `columns-2xs`  | 18rem | 288px    | 2xs column width |
| `columns-xs`   | 20rem | 320px    | xs column width  |
| `columns-sm`   | 24rem | 384px    | sm column width  |
| `columns-md`   | 28rem | 448px    | md column width  |
| `columns-lg`   | 32rem | 512px    | lg column width  |
| `columns-xl`   | 36rem | 576px    | xl column width  |
| `columns-2xl`  | 42rem | 672px    | 2xl column width |
| `columns-3xl`  | 48rem | 768px    | 3xl column width |
| `columns-4xl`  | 56rem | 896px    | 4xl column width |
| `columns-5xl`  | 64rem | 1024px   | 5xl column width |
| `columns-6xl`  | 72rem | 1152px   | 6xl column width |
| `columns-7xl`  | 80rem | 1280px   | 7xl column width |

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

```vp-script
import { insert, jsx } from 'vanilla-signal';
const link= jsx`<link rel="stylesheet" href="../../public/common.css">`;
insert(document.head,link);
```
