---
client:
  entry:
    - color
    - color_p3
    - color_system
---

# Color System

Vanilla-JUI also provides a rich, accessible, automatically dark-mode-aware UI color system for building attractive and readable websites and applications.

## Features

1. Automatic dark mode: each color automatically switches variants based on the theme mode.
2. Transparent variants: each color has a transparent variant for translucent elements such as buttons and cards. This is also useful for mixed colors and gradients.
3. P3 color-gamut support: the default system supports the `P3 color gamut`, taking wide-gamut color mixing into account for better color display on high-end devices.
4. APCA text contrast: the modern `APCA` algorithm helps keep text readable on different background colors.
5. Accessibility: text colors and matching background colors keep enough reasonable contrast. The system follows the `WCAG 2.1 AA` standard to keep good readability in lower-contrast situations.
6. Color pairing: click a swatch below to view suggested pairings.

## File Paths

Because vanilla-jui only provides base styles by default and encourages users to fully customize styles, color-system tokens are not included in the default `tokens`.

Import `color.css` or `color_p3.css` as needed.

- `color.css`: color system, default.
- `color_p3.css`: P3 color-gamut color system. Advanced: only applies when both the browser software and screen hardware support the P3 color gamut.

:::tree
vanilla-jui/
├── src/
│ ├── css/
│ │ ├── color.css
│ │ ├── color_p3.css
:::

## Palette and Color Tokens

This palette is not a simple ordered color scale. It is a product color guide calculated from a color algorithm carefully designed by the [WorkOS](https://workos.com/) team and validated in many mature products.

- Click a swatch to view suggested pairings and usage, and quickly copy color tokens.
- Click the theme button in the top-right corner to switch between light and dark modes and view color tokens in each mode.

<div class="overflow-auto">
    <div class="color-palette">
        <div></div>
        <div>
            <span>Background</span>
        </div>
        <div>
            <span>Interactive Components</span>
        </div>
        <div>
            <span>Borders and Separators</span>
        </div>
        <div>
            <span>Solid Colors</span>
        </div>
        <div>
            <span>Accessible Text</span>
        </div>
        <div></div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
    </div>
</div>
