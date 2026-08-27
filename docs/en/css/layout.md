# Layout

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS layout classes in the default stylesheet: basic reset, Flex/Grid responsive layout, and related helpers.

<Badge text="CSS" theme="warning"/>

## Reset

### Basic Reset

JUI only applies a basic reset. This prevents layout issues caused by style conflicts when mounting into existing projects.

:::details Click to expand

```css
*,
::after,
::backdrop,
::before,
::file-selector-button {
  box-sizing: border-box;
}

.light {
  color-scheme: light;
}

.dark {
  color-scheme: dark;
}

body {
  tab-size: 4;
  scroll-behavior: smooth;
  font-family:
    'Source Han Sans CN', 'Inter', 'PingFang SC', 'Helvetica Neue', Emoji,
    Arial, sans-serif;
  color: var(--ui-fg);
  background-color: var(--ui-bg);

  min-width: var(--screen-xs, 320px);
  min-height: 100vh;
  min-height: 100dvh;
  font-size: var(--font-size-md);
  margin: 0;
}

img,
video {
  max-width: 100%;
  height: auto;
}

img {
  object-fit: cover;
}
```

:::

### Element Reset

Use the `.is-reset` class to manually reset specific elements. Supported elements:

- `a` links
- `button` buttons
- `h1, h2, h3, h4, h5, h6` headings
- `ol, ul` lists
- `p` paragraphs
- `pre` code blocks

```html
<a class="is-reset" href="#">Link</a>
<button class="is-reset">Button</button>
<pre class="is-reset">Code</pre>
```

## Flex Layout

Flex layout is suitable for **one-dimensional arrangement** such as navigation, forms, and rows.

### Basic Flex Container

```html
<div class="flex-container">
  <div class="flex-col">Item 1</div>
  <div class="flex-col">Item 2</div>
  <div class="flex-col">Item 3</div>
</div>
```

| Class            | Description                                     |
| ---------------- | ----------------------------------------------- |
| `flex-container` | Flex row container, `flex-wrap: wrap`, with gap |
| `flex-cols`      | Flexible column, equal width, `flex: 1 1 0%`    |
| `flex-col-auto`  | Auto-width column, fits content                 |

### Custom Gap

Use the CSS variable `--flex-container-gap` to customize the Flex container gap.

```html
<div class="flex-container" style="--flex-container-gap: 2rem;">
  <div class="flex-col-6">Left</div>
  <div class="flex-col-6">Right</div>
</div>
```

### Fixed Column Widths (1-12)

Based on a 12-column grid. Column width = 100% / 12. The default CSS variable `--cols` is 12.

Supported classes: `flex-col-1`, `flex-col-2` ... through `flex-col-12`.

To extend to a 24-column grid or another count, set the CSS variable `--cols` on the Flex container, such as `--cols: 24`, and define matching `flex-col-{n}` support classes.

:::tabs
@tab Example

Half width
<div class="flex-container odd-bg margin-block">
  <div class="flex-col-6">6</div>
  <div class="flex-col-6">6</div>
</div>

One-third width
<div class="flex-container odd-bg margin-block">
  <div class="flex-col-4">4</div>
  <div class="flex-col-4">4</div>
  <div class="flex-col-4">4</div>
</div>

One-quarter width
<div class="flex-container odd-bg margin-block">
  <div class="flex-col-3">3</div>
  <div class="flex-col-3">3</div>
  <div class="flex-col-3">3</div>
  <div class="flex-col-3">3</div>
</div>

Mixed widths
<div class="flex-container odd-bg margin-block">
  <div class="flex-col-8">8</div>
  <div class="flex-col-4">4</div>
</div>
@tab Syntax

```html
<!-- Half width: 6/12 = 50% -->
<div class="flex-container">
  <div class="flex-col-6">6</div>
  <div class="flex-col-6">6</div>
</div>

<!-- One-third width: 4/12 = 33.3% -->
<div class="flex-container">
  <div class="flex-col-4">4</div>
  <div class="flex-col-4">4</div>
  <div class="flex-col-4">4</div>
</div>

<!-- One-quarter width: 3/12 = 25% -->
<div class="flex-container">
  <div class="flex-col-3">3</div>
  <div class="flex-col-3">3</div>
  <div class="flex-col-3">3</div>
  <div class="flex-col-3">3</div>
</div>

<!-- Mixed widths: 8/12 = 66.7%, 4/12 = 33.3% -->
<div class="flex-container">
  <div class="flex-col-8">8</div>
  <div class="flex-col-4">4</div>
</div>
```

:::

### Responsive Columns

Columns adapt to viewport width:

| Breakpoint | Class prefix      | Min width |
| ---------- | ----------------- | --------- |
| Default    | `flex-col-{n}`    | 0         |
| sm         | `flex-col-sm-{n}` | 576px     |
| md         | `flex-col-md-{n}` | 768px     |
| lg         | `flex-col-lg-{n}` | 992px     |
| xl         | `flex-col-xl-{n}` | 1200px    |

:::tabs
@tab Example
Mobile: full width; tablet: half width; desktop: one-third
<div class="flex-container odd-bg">
  <div class="flex-col-12 flex-col-sm-6 flex-col-md-4">Content</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-md-4">Content</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-md-4">Content</div>
</div>

@tab Syntax

```html
<!-- Mobile: full width; tablet: half width; desktop: one-third -->
<div class="flex-container">
  <div class="flex-col-12 flex-col-sm-6 flex-col-md-4">Content</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-md-4">Content</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-md-4">Content</div>
</div>
```

:::

### Responsive Examples

#### Sidebar Layout

:::tabs
@tab Example
<div class="flex-container odd-bg">
  <div class="flex-col-12 flex-col-md-3">
    <nav>Sidebar</nav>
  </div>
  <div class="flex-col-12 flex-col-md-9">
    <main>Content</main>
  </div>
</div>
@tab Code
```html
<div class="flex-container">
  <!-- Sidebar: full width on mobile, 3 columns on desktop -->
  <div class="flex-col-12 flex-col-md-3">
    <nav>Sidebar</nav>
  </div>
  <!-- Main content: full width on mobile, 9 columns on desktop -->
  <div class="flex-col-12 flex-col-md-9">
    <main>Content</main>
  </div>
</div>
```
:::

#### Dashboard Cards

:::tabs
@tab Example
<div class="flex-container odd-bg">
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">Card 1</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">Card 2</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">Card 3</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">Card 4</div>
</div>
@tab Code
```html
<div class="flex-container">
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">Card 1</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">Card 2</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">Card 3</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">Card 4</div>
</div>
```

:::

## Grid Layout

Grid layout is suitable for **two-dimensional layouts** such as card grids, dashboards, and galleries.

### Basic Grid Container

```html
<div class="grid-container grid-col-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

| Class            | Description                            |
| ---------------- | -------------------------------------- |
| `grid-container` | Grid container with gap and full width |
| `grid-col-{n}`   | Fixed column count (1-12)              |

### Custom Gap

Use the CSS variable `--grid-container-gap` to customize the Grid container gap.

```html
<div class="grid-container grid-col-3" style="--grid-container-gap: 2rem;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Fixed Column Count (1-12)

Based on a 12-column grid.

Supported classes: `grid-col-1`, `grid-col-2` ... through `grid-col-12`.

:::tabs
@tab Example
2 columns:
<div class="grid-container grid-col-2 odd-bg margin-block">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

4 columns:
<div class="grid-container grid-col-4 odd-bg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
@tab Code
```html
<!-- 2 columns -->
<div class="grid-container grid-col-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- 4 columns -->
<div class="grid-container grid-col-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```
:::

### Auto-Fill Grid

Auto-fill creates responsive columns based on a minimum width:

:::tabs
@tab Example
Auto-fill: each column is at least 200px
<div class="grid-container grid-col-auto-200 odd-bg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>
@tab Code
```html
<!-- Auto-fill: each column is at least 200px -->
<div class="grid-container grid-col-auto-200">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</div>
```
:::

| Class               | Min width | Description   |
| ------------------- | --------- | ------------- |
| `grid-col-auto-150` | 150px     | Small cards   |
| `grid-col-auto-200` | 200px     | Medium cards  |
| `grid-col-auto-250` | 250px     | Default cards |
| `grid-col-auto-300` | 300px     | Large cards   |

### Responsive Columns

| Breakpoint | Class prefix      | Min width |
| ---------- | ----------------- | --------- |
| Default    | `grid-col-{n}`    | 0         |
| sm         | `grid-col-sm-{n}` | 576px     |
| md         | `grid-col-md-{n}` | 768px     |
| lg         | `grid-col-lg-{n}` | 992px     |
| xl         | `grid-col-xl-{n}` | 1200px    |

:::tabs
@tab Example
Mobile: 1 column; tablet: 2 columns; desktop: 3 columns
<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-lg-3 odd-bg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
@tab Code
```html
<!-- Mobile: 1 column; tablet: 2 columns; desktop: 3 columns -->
<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-lg-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</div>
```
:::

### Responsive Example

#### Dashboard Cards

:::tabs
@tab Example
<div class="grid-container odd-bg grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>
@tab Code
```html
<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>
```
:::

## Responsive Comparison

### Scenario

- Flex layout is suitable for **one-dimensional arrangement** such as navigation, forms, and rows.
- Grid layout is suitable for **two-dimensional layouts** such as card grids, dashboards, and galleries.

### Characteristics

- Flex layout is easier to understand and use.
- Grid layout is more flexible. It supports auto-fill and responsive columns with shorter markup.

```vp-script
import { insert, jsx } from 'vanilla-signal';
const link= jsx`<link rel="stylesheet" href="../../public/common.css">`;
insert(document.head,link);
```
