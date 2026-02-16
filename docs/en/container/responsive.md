# 响应式布局

`JUI` provides two sets of responsive layout systems: `Flex` and `Grid`.

- Principle: Mobile-first.
- Recommendation: Prioritize using the `Grid` layout.

## Flex 布局

- Naming: `flex-col-*` to avoid conflicts with `tailwindcss`'s `col-*`.
- Suggestion: `Flex-based` responsive layouts are better suited for `one-dimensional` arrangements (e.g., navigation, forms).

| Class Name      | Description                | Breakpoint Classes                                                             |
| --------------- | -------------------------- | ------------------------------------------------------------------------------ |
| .flex-container | Flex container             |                                                                                |
| .flex-col       | column flexible fill       |                                                                                |
| .flex-col-auto  | Auto-fit content width     |                                                                                |
| .flex-col-1     | Fixed ratio column 1/12    | .flex-col-sm-1 <br> .flex-col-md-1 <br> .flex-col-lg-1 <br> .flex-col-xl-1     |
| .flex-col-2     | Fixed ratio column 2/12    | .flex-col-sm-2 <br> .flex-col-md-2 <br> .flex-col-lg-2 <br> .flex-col-xl-2     |
| .flex-col-3     | Fixed ratio column 3/12    | .flex-col-sm-3 <br> .flex-col-md-3 <br> .flex-col-lg-3 <br> .flex-col-xl-3     |
| .flex-col-4     | Fixed ratio column 4/12    | .flex-col-sm-4 <br> .flex-col-md-4 <br> .flex-col-lg-4 <br> .flex-col-xl-4     |
| .flex-col-5     | Fixed ratio column 5/12    | .flex-col-sm-5 <br> .flex-col-md-5 <br> .flex-col-lg-5 <br> .flex-col-xl-5     |
| .flex-col-6     | Fixed ratio column 6/12    | .flex-col-sm-6 <br> .flex-col-md-6 <br> .flex-col-lg-6 <br> .flex-col-xl-6     |
| .flex-col-7     | Fixed ratio column 7/12    | .flex-col-sm-7 <br> .flex-col-md-7 <br> .flex-col-lg-7 <br> .flex-col-xl-7     |
| .flex-col-8     | Fixed ratio column 8/12    | .flex-col-sm-8 <br> .flex-col-md-8 <br> .flex-col-lg-8 <br> .flex-col-xl-8     |
| .flex-col-9     | Fixed ratio column 9/12    | .flex-col-sm-9 <br> .flex-col-md-9 <br> .flex-col-lg-9 <br> .flex-col-xl-9     |
| .flex-col-10    | Fixed ratio column 10/12   | .flex-col-sm-10 <br> .flex-col-md-10 <br> .flex-col-lg-10 <br> .flex-col-xl-10 |
| .flex-col-11    | Fixed ratio column 11/12   | .flex-col-sm-11 <br> .flex-col-md-11 <br> .flex-col-lg-11 <br> .flex-col-xl-11 |
| .flex-col-12    | Flexible fill column 12/12 | .flex-col-sm-12 <br> .flex-col-md-12 <br> .flex-col-lg-12 <br> .flex-col-xl-12 |

## Flex Example

Please reduce the width of your browsing device to see how the container and elements change.

<div class="flex-container">
    <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">
        <div class="input-group">
            <input type="text" class="j-input" placeholder="">
            <div class="el-addon">
                <button class="j-button is-default">Button</button>
            </div>
        </div>
    </div>
    <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">
        <div class="input-group">
            <input type="text" class="j-input" placeholder="">
            <div class="el-addon">
                <button class="j-button is-default">Button</button>
            </div>
        </div>
    </div>
    <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">
        <div class="input-group">
            <input type="text" class="j-input" placeholder="">
            <div class="el-addon">
                <button class="j-button is-default">Button</button>
            </div>
        </div>
    </div>
    <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">
        <div class="input-group">
            <input type="text" class="j-input" placeholder="">
            <div class="el-addon">
                <button class="j-button is-default">Button</button>
            </div>
        </div>
    </div>
</div>

```html
<div class="flex-container">
  <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">...</div>
  <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">...</div>
  <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">...</div>
  <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">...</div>
</div>
```

## Grid Layout

- Naming: `grid-col-*` to avoid conflicts with `tailwindcss`'s `grid-cols-*`.
- Suggestion: `Grid-based` responsive layouts are better suited for `two-dimensional` layouts (e.g., card grids, dashboards).
- Note: Only commonly used column counts (1/2/3/4/6/12) are retained for `md`, `lg`, and `xl` breakpoints.

| 类名            | 描述                                                    | 断点类名                                                                       |
| --------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
| .grid-container | Grid container, default single column (mobile-friendly) |                                                                                |
| .grid-col-1     | Fixed column count 1                                    | .grid-col-sm-1 <br> .grid-col-md-1 <br> .grid-col-lg-1 <br> .grid-col-xl-1     |
| .grid-col-2     | Fixed column count 2                                    | .grid-col-sm-2 <br> .grid-col-md-2 <br> .grid-col-lg-2 <br> .grid-col-xl-2     |
| .grid-col-3     | Fixed column count 3                                    | .grid-col-sm-3 <br> .grid-col-md-3 <br> .grid-col-lg-3 <br> .grid-col-xl-3     |
| .grid-col-4     | Fixed column count 4                                    | .grid-col-sm-4 <br> .grid-col-md-4 <br> .grid-col-lg-4 <br> .grid-col-xl-4     |
| .grid-col-5     | Fixed column count 5                                    | .grid-col-sm-5                                                                 |
| .grid-col-6     | Fixed column count 6                                    | .grid-col-sm-6 <br> .grid-col-md-6 <br> .grid-col-lg-6 <br> .grid-col-xl-6     |
| .grid-col-7     | Fixed column count 7                                    | .grid-col-sm-7                                                                 |
| .grid-col-8     | Fixed column count 8                                    | .grid-col-sm-8                                                                 |
| .grid-col-9     | Fixed column count 9                                    | .grid-col-sm-9                                                                 |
| .grid-col-10    | Fixed column count 10                                   | .grid-col-sm-10                                                                |
| .grid-col-11    | Fixed column count 11                                   | .grid-col-sm-11                                                                |
| .grid-col-12    | Fixed column count 12                                   | .grid-col-sm-12 <br> .grid-col-md-12 <br> .grid-col-lg-12 <br> .grid-col-xl-12 |

## Grid Example

Please reduce the width of your browsing device to see how the container and elements change.

<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
    <div class="input-group">
        <input type="text" class="j-input" placeholder="">
        <div class="el-addon">
            <button class="j-button is-default">Button</button>
        </div>
    </div>
    <div class="input-group">
        <input type="text" class="j-input" placeholder="">
        <div class="el-addon">
            <button class="j-button is-default">Button</button>
        </div>
    </div>
    <div class="input-group">
        <input type="text" class="j-input" placeholder="">
        <div class="el-addon">
            <button class="j-button is-default">Button</button>
        </div>
    </div>
    <div class="input-group">
        <input type="text" class="j-input" placeholder="">
        <div class="el-addon">
            <button class="j-button is-default">Button</button>
        </div>
    </div>
</div>

```html
<div
  class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4"
>
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

## Auto-fill

- Definition: Default minimum width with adaptive column count.
- Suggestion: Use `grid-col-auto-*` for adaptive card layouts (e.g., product lists).

| Class Name         | Description         |
| ------------------ | ------------------- |
| .grid-col-auto-150 | Minimum width 150px |
| .grid-col-auto-200 | Minimum width 200px |
| .grid-col-auto-250 | Minimum width 250px |
| .grid-col-auto-300 | Minimum width 300px |

## Container Breakpoints

Mobile-first.

| Breakpoint | Name | Corresponding Devices                                              |
| ---------- | ---- | ------------------------------------------------------------------ |
| ≥576px     | `sm` | Small phone landscape / large phone (e.g., iPhone Plus/Max series) |
| ≥768px     | `md` | iPad portrait, Android tablets                                     |
| ≥992px     | `lg` | Small laptops, desktop browser windows (non-fullscreen)            |
| ≥1200px    | `xl` | Standard desktop displays (1366px+), fullscreen browsers           |

These breakpoints cover 95%+ of scenarios, but in specific cases, please extend and fine-tune as needed. Three points to note:

1. Lack of optimization for ultra-large screens (4K/5K displays).
   - On 2560px+ screens, containers with max-width: 1200px may appear too narrow.
   - Suggestion: Add an xxl breakpoint (e.g., ≥1400px or ≥1600px).
2. Foldable/split-screen modes are not finely adapted.
   - During Android/iOS split-screen, the window may only be 500–600px wide.
   - However: This still falls under "small screen experience," so default layouts suffice without special handling.
3. Breakpoints should be driven by content, not devices.
   - Best practice: Start with mobile layouts, then gradually widen the browser, observing when content "breaks," and set breakpoints there.
