# CSS Architecture

JUI provides a multi-dimensional Design Token engine built with CSS variables and document root classes. With a small amount of code, it can support many personalized theme modes.

## Document Root Classes

- `mobile`: mobile theme
- `desktop`: desktop theme
- `dark`: dark theme
- `light`: light theme
- `j-theme-*`: theme color
- `j-radius-*`: radius theme
- `j-shadow-*`: shadow theme
- `j-font-*`: font-size theme

## Design Tokens

`tokens.css`

- Utility tokens
  - Basic utility tokens: CSS variables with fixed values, such as layout, font, and animation values.
  - Theme utility tokens: values such as line height and spacing. For example, `--el-height-md` has different values under `mobile` and `desktop` themes.
- Color tokens
  - Theme color tokens
  - Business color tokens
  - State color tokens

## Utility Tokens

Common basic utility tokens.

### Spacing

| Token     | Value     | Description             |
| --------- | --------- | ----------------------- |
| `--space` | `0.25rem` | Base spacing unit (4px) |
| `--s2`    | `0.5rem`  | Spacing unit (8px)      |
| `--s3`    | `0.75rem` | Spacing unit (12px)     |
| `--s4`    | `1rem`    | Spacing unit (16px)     |
| `--s5`    | `1.25rem` | Spacing unit (20px)     |
| `--s6`    | `1.5rem`  | Spacing unit (24px)     |
| `--s7`    | `1.75rem` | Spacing unit (28px)     |
| `--s8`    | `2rem`    | Spacing unit (32px)     |

### Transition Duration

| Token        | Value   | Description       |
| ------------ | ------- | ----------------- |
| `--speed-sm` | `0.15s` | Fast transition   |
| `--speed-md` | `0.25s` | Medium transition |
| `--speed-lg` | `0.5s`  | Slow transition   |
| `--speed-xl` | `0.75s` | Very slow transition |

### Text Scale

| Token        | Value      | Description     |
| ------------ | ---------- | --------------- |
| `--text-xs`  | `0.75rem`  | Extra small (12px) |
| `--text-sm`  | `0.875rem` | Small (14px)    |
| `--text-md`  | `1rem`     | Medium (16px)   |
| `--text-lg`  | `1.125rem` | Large (18px)    |
| `--text-xl`  | `1.25rem`  | Extra large (20px) |
| `--text-2xl` | `1.5rem`   | 2x large (24px) |
| `--text-3xl` | `1.875rem` | 3x large (30px) |
| `--text-4xl` | `2.25rem`  | 4x large (36px) |
| `--text-5xl` | `3rem`     | 5x large (48px) |

### Component Font Sizes

Different `j-font-*` font-size themes provide different font-size scales.

The default font-size theme is `j-font-sm`.

| Token             | Default    | j-font-sm  | j-font-md  | Description |
| ----------------- | ---------- | ---------- | ---------- | ----------- |
| `--font-size-xs`  | `0.625rem` | `0.625rem` | `0.75rem`  | Extra small |
| `--font-size-sm`  | `0.75rem`  | `0.75rem`  | `0.875rem` | Small |
| `--font-size-md`  | `0.875rem` | `0.875rem` | `1rem`     | Medium |
| `--font-size-lg`  | `1rem`     | `1rem`     | `1.125rem` | Large |
| `--font-size-xl`  | `1.125rem` | `1.125rem` | `1.25rem`  | Extra large |
| `--font-size-2xl` | `1.25rem`  | `1.25rem`  | `1.5rem`   | 2x large |

### Font Weight

| Token               | Value |
| ------------------- | ----- |
| `--font-thin`       | 100 |
| `--font-extraLight` | 200 |
| `--font-light`      | 300 |
| `--font-normal`     | 400 |
| `--font-medium`     | 500 |
| `--font-semiBold`   | 600 |
| `--font-bold`       | 700 |
| `--font-extraBold`  | 800 |
| `--font-black`      | 900 |

### Line Height

| Token                     | Value  | Description |
| ------------------------- | ------ | ----------- |
| `--line-height`           | `1.5`  | Default line height |
| `--line-height-paragraph` | `1.5`  | Paragraph line height |
| `--line-height-pre`       | `1.4`  | Code block line height |
| `--line-height-heading`   | `1.25` | Heading line height |
| `--line-height-self`      | `1`    | Single-line height |

### Element Height

Different `j-font-*` font-size themes and different `desktop` device themes provide different element-height scales.

The defaults are `j-font-sm` and `desktop`.

| Token             | Default   | j-font-sm | j-font-md | Description |
| ----------------- | --------- | --------- | --------- | ----------- |
| `--el-height-3xs` | `1rem`    | `1rem`    | `1.25rem` | 3x small (16px) |
| `--el-height-2xs` | `1.25rem` | `1.25rem` | `1.5rem`  | 2x small (20px) |
| `--el-height-xs`  | `1.5rem`  | `1.5rem`  | `1.75rem` | Extra small (24px) |
| `--el-height-sm`  | `1.75rem` | `1.75rem` | `2rem`    | Small (28px) |
| `--el-height-md`  | `2rem`    | `2rem`    | `2.25rem` | Medium (32px) |
| `--el-height-lg`  | `2.25rem` | `2.25rem` | `2.5rem`  | Large (36px) |
| `--el-height-xl`  | `2.5rem`  | `2.5rem`  | `2.75rem` | Extra large (40px) |
| `--el-height-2xl` | `2.75rem` | `2.75rem` | `3rem`    | 2x large (44px) |
| `--el-height-3xl` | `3rem`    | `3rem`    | `3.25rem` | 3x large (52px) |

### Radius

Different `j-radius-*` radius themes provide different radius scales.

The default radius theme is `j-radius-md`.

| Token           | Value      | Description |
| --------------- | ---------- | ----------- |
| `--radius-2xs`  | `0.125rem` | Extra small (2px) |
| `--radius-xs`   | `0.25rem`  | Small (4px) |
| `--radius-sm`   | `0.375rem` | Base (6px) |
| `--radius-md`   | `0.5rem`   | Medium (8px) |
| `--radius-lg`   | `0.75rem`  | Large (12px) |
| `--radius-xl`   | `1rem`     | Extra large (16px) |
| `--radius-2xl`  | `1.5rem`   | 2x large (24px) |
| `--radius-full` | `9999px`   | Full round |

### Shadow

Different `j-shadow-*` shadow themes provide different shadow scales.

The default shadow theme is `j-shadow-md`.

| Token         | Description |
| ------------- | ----------- |
| `--shadow-xs` | Smallest shadow |
| `--shadow-sm` | Small shadow |
| `--shadow-md` | Medium shadow |
| `--shadow-lg` | Large shadow |
| `--shadow-xl` | Extra large shadow |

### Breakpoints

| Token         | Value    |
| ------------- | -------- |
| `--screen-sm` | `576px`  |
| `--screen-md` | `768px`  |
| `--screen-lg` | `992px`  |
| `--screen-xl` | `1200px` |

### Container Width

| Token           | Value   |
| --------------- | ------- |
| `--columns-6xs` | `10rem` |
| `--columns-5xs` | `12rem` |
| `--columns-4xs` | `14rem` |
| `--columns-3xs` | `16rem` |
| `--columns-2xs` | `18rem` |
| `--columns-xs`  | `20rem` |
| `--columns-sm`  | `24rem` |
| `--columns-md`  | `28rem` |
| `--columns-lg`  | `32rem` |
| `--columns-xl`  | `36rem` |
| `--columns-2xl` | `42rem` |
| `--columns-3xl` | `48rem` |
| `--columns-4xl` | `56rem` |
| `--columns-5xl` | `64rem` |
| `--columns-6xl` | `72rem` |

### Layer

| Token           | Value | Description |
| --------------- | ----- | ----------- |
| `--z-0`         | 0     | Base layer |
| `--z-1`         | 1     | Above base |
| `--z-badge`     | 2     | Badge |
| `--z-submenu`   | 5     | Submenu |
| `--z-overlay`   | 9500  | Overlay |
| `--z-offcanvas` | 9600  | Offcanvas |
| `--z-popup`     | 9700  | Popup |
| `--z-toast`     | 9800  | Toast |
| `--z-drop`      | 9900  | Drop menu |

### Opacity

| Token                | Value  | Description |
| -------------------- | ------ | ----------- |
| `--opacity-hover`    | `0.8`  | Hover |
| `--opacity-active`   | `0.95` | Active |
| `--opacity-disabled` | `0.65` | Disabled |

## Directory Structure

The source `src/css` directory provides base DOM styles for UI primitives and components, plus their default theme styles.

:::tree
├── css/
│ ├── themes/
│ │ ├── default/
│ │ │ ├── accordion.css
│ │ │ ├── index.css
│ │ └── index.css
│ ├── accordion.css
│ ├── index.css
│ └── tokens.css
:::

## Style Customization

vanilla-jui provides three ways to customize styles.

1. Custom CSS theme
   - `src/css/` provides the base DOM styles for UI primitives and components.
   - `src/css/themes/` provides UI theme styles. **You can create your own independent theme style**, such as `newYork/`.
   - `src/css/themes/default/` provides the default theme styles.
2. Custom `tokens.css`
3. Tailwind CSS based customization, recommended
   - Use vanilla-jui's multi-dimensional theme architecture in `tokens.css` as the lower-level data source for Tailwind and other CSS tools, then map it through configuration.
   - Benefits:
     - Keeps the multi-dimensional theme architecture.
     - Builds more complex style effects with Tailwind and other CSS tools.
     - Keeps generated CSS output small.

## Head Script

Scripts placed in the HTML HEAD to prevent style flicker.

Device query:

```js
(function (w, n, d) {
  function m() {
    var u;
    if (typeof n === 'undefined') return !1;
    if (n.userAgentData && typeof n.userAgentData.mobile === 'boolean')
      return n.userAgentData.mobile;
    u = n.userAgent || '';
    if (
      /\b(BlackBerry|webOS|iPhone|IEMobile|Android|Windows Phone|iPad|iPod)\b/i.test(
        u
      )
    )
      return !0;
    if (typeof w === 'undefined' || typeof w.matchMedia !== 'function')
      return !1;
    return (
      w.matchMedia('(pointer: coarse)').matches &&
      w.matchMedia('(max-width: 820px)').matches
    );
  }
  var r = d.documentElement,
    b = m();
  r.classList.toggle('mobile', b);
  r.classList.toggle('desktop', !b);
})(window, navigator, document);
```

Theme query:

```js
(function (d, k) {
  var v = {
      mode: 'light',
      theme: 'indigo',
      radius: 'sm',
      shadow: 'sm',
      font: 'sm',
    },
    m = d.cookie.match(new RegExp('(?:^|; )' + k + '=([^;]*)')),
    o = v;
  if (m) {
    try {
      var r = JSON.parse(decodeURIComponent(m[1]));
      if (r && typeof r.val === 'object') o = Object.assign({}, v, r.val);
    } catch (e) {
      o = v;
    }
  }
  try {
    var c =
        o.mode === 'auto'
          ? matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
          : o.mode,
      h = d.documentElement;
    h.classList.add(
      c || 'dark',
      'j-theme-' + (o.theme || v.theme),
      'j-radius-' + (o.radius || v.radius),
      'j-shadow-' + (o.shadow || v.shadow),
      'j-font-' + (o.font || v.font)
    );
  } catch (e) {}
})(document, 'ui-theme');
```
