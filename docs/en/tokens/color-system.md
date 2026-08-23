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

```vp-script
import { jsx, insert } from 'vanilla-signal'
import { q, createModal, Toast, copy, listen } from 'vanilla-jui'
import { t as ts } from 'vanilla-signal-i18n'

const colorLinkStyle = jsx("link", {
  rel: "stylesheet",
  href: "../../public/color.css"
});
const colorP3LinkStyle = jsx("link", {
  rel: "stylesheet",
  href: "../../public/color_p3.css"
});
const colorSystemStyle = jsx("link", {
    rel: "stylesheet",
    href: "../../public/color-system.css"
});
insert(document.head, [colorLinkStyle, colorP3LinkStyle, colorSystemStyle]);

const langs = {
    en: {
        White: 'White',
        gray: 'Gray',
        olive: 'Olive',
        tomato: 'Tomato',
        ruby: 'Ruby',
        pink: 'Pink',
        violet: 'Violet',
        indigo: 'Indigo',
        blue: 'Blue',
        teal: 'Teal',
        grass: 'Grass',
        gold: 'Gold',
        orange: 'Orange',
        yellow: 'Yellow',
        lime: 'Lime',
        mint: 'Mint',
        Background: "Background",
        ic: "Interactive Components",
        "b&s": "Borders, Separators",
        "b&fr&dt": "Border, Focus Ring, Disabled Text",
        "sb&dt": "Solid Background, Disabled Text",
        "st&l": "Secondary Text, Link",
        "hct": "High Contrast Text",
        "bc": "Background Color",
        "s1-5b": "Step 1-5 Background Colors",
        "s12l": "Step 12 Labels",
        "s11-12l": "Step 11-12 Labels",
        "s11l&s12t": "Step 11 Labels, Step 12 Text",
        "s11-12t": "Step 11, 12 Text",
        "vc": "Vibrant Code",
        "Suggested Usage": 'Suggested Usage',
        "Suggested PairsWith": 'Suggested Pairs With',
        "Color Value": 'Color Value',
        "cvs": "CSS Color Variable Copied to Clipboard",
        "ctc": "Click to Copy Color",
    }
};
const t = (key) => ts(key, langs);

const colorSystem = () => {
  const palette = q(".color-palette");
  if (!palette) return;
  const colors = [
    "gray",
    "olive",
    "tomato",

    "ruby",
    "pink",
    "violet",
    "indigo",
    "blue",
    "teal",

    "grass",
    "gold",
    "orange",

    "yellow",
    "lime",
    "mint",
  ];
  const bg = t("Background")
  const usage = [
    bg,
    bg,
    t("ic"),
    t("ic"),
    t("ic"),
    t("b&s"),
    t("b&s"),
    t("b&fr&dt"),
    t("sb&dt"),
    t("sb&dt"),
    t("st&l"),
    t("hct"),
  ];

  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < 13; j++) {
      const div = jsx("div", {
        className: "palette-block",
      });

      if (j === 0) {
        div.classList.add("palette-block-text");
        div.innerHTML = `<span>${t(colors[i])}</span>`;
      } else {
        const bgColor = `var(--${colors[i]}-${j})`;
        const contrastIndex = j <= 6 ? j + 6 : j - 6;
        const fontColor = `var(--${colors[i]}-${contrastIndex})`;

        div.classList.add("palette-block-item");
        div.style.background = bgColor;
        div.dataset.usage = usage[j - 1];

        listen(div, "click", () => {
          let pairsWith = "";
          if (j === 1 || j === 2) {
            pairsWith = t("s11-12t");
          } else if (j === 3) {
            pairsWith = t("s11l&s12t");
          } else if (j === 4) {
            pairsWith = t("s11-12l");
          } else if (j === 5) {
            pairsWith = t("s12l");
          } else if (j === 6 || j === 7 || j === 8) {
            pairsWith = t("s1-5b");
          } else if (j === 9 || j === 10) {
            pairsWith = t("White");
          } else if (j === 11 || j === 12) {
            pairsWith = t("bc");
          }

          const colorBgElement = jsx('div', {
            style: `background:${bgColor};color:${fontColor};`,
            id: 'copyCssColor',
            children: t("ctc"),
            onClick: () => {
                copy(bgColor);
                Toast.success(t("cvs"));
            }
          })

          const modalContent = jsx`
            <div>
                <h3>${t(colors[i])}</h3>
                <p>
                    <span style="width:120px;display:inline-block;">${t("vc")}</span>
                    <span>${colors[i]}-${j}</span>
                </p>
                <p style="margin:.5rem 0">
                    <span style="width:120px;display:inline-block;">${t("Suggested Usage")}</span>
                    <span>${usage[j - 1]}</span>
                </p>
                <p style="margin:.5rem 0">
                    <span style="width:120px;display:inline-block;">${t("Suggested PairsWith")}</span>
                    <span>${pairsWith}</span>
                </p>
                <p style="margin:.5rem 0">
                    <span style="width:120px;display:inline-block;">${t("Color Value")}</span>
                    <span>${getComputedStyle(div).backgroundColor}</span>
                </p>
                <p>
                    <span style="width:120px;display:inline-block;">CSS</span>
                    <span>color: var(--${colors[i]}-${j})</span>
                </p>
            </div>
            `;

          const currentModal = createModal({
            content:[colorBgElement, modalContent],
            id: "colorPaletteModal",
            header: false,
            footer: false,
            bgClose: true,
            escClose: true,
            lazy: true,
            style: "width:95%;max-width:600px;min-width:310px;",
            onHidden: ()=>currentModal.destroy(),
          }).build();
          currentModal.show();
        });
      }
      insert(palette,div);
    }
  }
};
colorSystem();
```
