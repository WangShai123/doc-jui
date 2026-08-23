# 色彩系统

Vanilla-JUI 额外提供了一套华丽、易于访问、自动深色模式切换的用户界面色彩系统，用于设计美观、易于访问的网站和应用程序。

## 特性

1. 自动深色模式：每个颜色会根据主题模式自动切换变体。
2. 透明变体：每个颜色都有一个透明变体，用于创建半透明的元素，如按钮、卡片等，这对于创建混合色和渐变色也非常有用。
3. P3 色域支持：考虑到广色域色彩空间中的混合差异，默认支持 `P3 色域`，确保在高级用户设备上，拥有更好的色彩表现。
4. APCA 文本对比：使用现代 `APCA` 算法来确保文本在不同背景颜色下的可读性，更加符合人眼的感知。
5. 无障碍：保证文本颜色与相应背景颜色，拥有足够和合理的对比度。符合 `WCAG 2.1 AA` 标准，确保在低对比度下也能提供良好的可读性。
6. 色彩搭配：点击下方色块，查看建议搭配的颜色。

## 文件路径

由于 vanilla-jui 构建时仅选择提供基础样式，并倡导用户完全自定义样式，因此，并未在默认 `tokens` 中提供色彩系统令牌。

你可以根据需要，引入 `color.css` 或 `color_p3.css` 文件，自行使用。

- `color.css`：色彩系统（默认）。
- `color_p3.css`：P3 色域色彩系统（高级：仅在用户的浏览器软件和屏幕硬件都支持 P3 色域时才生效）。

:::tree
vanilla-jui/
├── src/
│ ├── css/
│ │ ├── color.css
│ │ ├── color_p3.css
:::

## 调色板与色彩令牌

JUI 提供的这套调色板，并不是简单的色阶排列，而是基于 [WorkOS](https://workos.com/) 团队精心设计的色彩算法（已经经历众多成熟业务验证）而计算的业务配色指南。

- 点击色块，查看色彩搭配建议和用法，快捷使用色彩令牌。
- 点击右上角主题按钮，切换深浅色模式，查看不同模式下的色彩令牌。

<div class="overflow-auto">
    <div class="color-palette">
        <div></div>
        <div>
            <span>背景</span>
        </div>
        <div>
            <span>互动组件</span>
        </div>
        <div>
            <span>边框与分隔符</span>
        </div>
        <div>
            <span>纯色</span>
        </div>
        <div>
            <span>无障碍文本</span>
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
    zh: {
        White: '白色',
        gray: '灰色',
        olive: '橄榄绿',
        tomato: '番茄红',
        ruby: '红宝石',
        pink: '粉色',
        violet: '紫罗兰色',
        indigo: '靛蓝色',
        blue: '蓝色',
        teal: '青色',
        grass: '草绿色',
        gold: '金色',
        orange: '橙色',
        yellow: '黄色',
        lime: '酸橙绿',
        mint: '薄荷绿',
        Background: "背景",
        ic: "互动组件",
        "b&s": "边框与分隔符",
        "b&fr&dt": "边框、聚焦环、禁用文本",
        "sb&dt": "纯色背景，禁用文本",
        "st&l": '辅助文本，链接',
        "hct": "高对比度文本",
        "bc": "背景色",
        "s1-5b": '编号 1–5 背景色',
        "s12l": '编号 12 标签色',
        "s11-12l": '编号 11, 12 标签色',
        "s11l&s12t": '编号 11 标签色, 编号 12 文本色',
        "s11-12t": '编号 11, 12 文本色',
        "vc": "变体编码",
        "Suggested Usage": '建议用法',
        "Suggested PairsWith": '建议搭配',
        "Color Value": '色值',
        "cvs": "CSS 颜色变量已复制到剪贴板",
        "ctc": "点击复制颜色"
    },
    en: {
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
        "cvs": "CSS Color Variable Copied to Clipboard",
        "ctc": "Click to Copy Color",
    }
};
const t = (key) => ts(key,langs);

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
