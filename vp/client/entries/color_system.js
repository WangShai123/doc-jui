import { jsx, insert } from 'vanilla-signal';
import { q, createModal, Toast, copy, listen } from 'vanilla-jui';
import { t as ts } from 'vanilla-signal-i18n';

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
    Background: '背景',
    ic: '互动组件',
    'b&s': '边框与分隔符',
    'b&fr&dt': '边框、聚焦环、禁用文本',
    'sb&dt': '纯色背景，禁用文本',
    'st&l': '辅助文本，链接',
    hct: '高对比度文本',
    bc: '背景色',
    's1-5b': '编号 1–5 背景色',
    s12l: '编号 12 标签色',
    's11-12l': '编号 11, 12 标签色',
    's11l&s12t': '编号 11 标签色, 编号 12 文本色',
    's11-12t': '编号 11, 12 文本色',
    vc: '变体编码',
    'Suggested Usage': '建议用法',
    'Suggested PairsWith': '建议搭配',
    'Color Value': '色值',
    cvs: 'CSS 颜色变量已复制到剪贴板',
    ctc: '点击复制颜色',
  },
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
    Background: 'Background',
    ic: 'Interactive Components',
    'b&s': 'Borders, Separators',
    'b&fr&dt': 'Border, Focus Ring, Disabled Text',
    'sb&dt': 'Solid Background, Disabled Text',
    'st&l': 'Secondary Text, Link',
    hct: 'High Contrast Text',
    bc: 'Background Color',
    's1-5b': 'Step 1-5 Background Colors',
    s12l: 'Step 12 Labels',
    's11-12l': 'Step 11-12 Labels',
    's11l&s12t': 'Step 11 Labels, Step 12 Text',
    's11-12t': 'Step 11, 12 Text',
    vc: 'Vibrant Code',
    'Suggested Usage': 'Suggested Usage',
    'Suggested PairsWith': 'Suggested Pairs With',
    'Color Value': 'Color Value',
    cvs: 'CSS Color Variable Copied to Clipboard',
    ctc: 'Click to Copy Color',
  },
};
const t = (key) => ts(key, langs);

const colorSystem = () => {
  const palette = q('.color-palette');
  if (!palette) return;
  const colors = [
    'gray',
    'olive',
    'tomato',

    'ruby',
    'pink',
    'violet',
    'indigo',
    'blue',
    'teal',

    'grass',
    'gold',
    'orange',

    'yellow',
    'lime',
    'mint',
  ];
  const bg = t('Background');
  const usage = [
    bg,
    bg,
    t('ic'),
    t('ic'),
    t('ic'),
    t('b&s'),
    t('b&s'),
    t('b&fr&dt'),
    t('sb&dt'),
    t('sb&dt'),
    t('st&l'),
    t('hct'),
  ];

  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < 13; j++) {
      const div = jsx('div', {
        className: 'palette-block',
      });

      if (j === 0) {
        div.classList.add('palette-block-text');
        div.innerHTML = `<span>${t(colors[i])}</span>`;
      } else {
        const bgColor = `var(--${colors[i]}-${j})`;
        const contrastIndex = j <= 6 ? j + 6 : j - 6;
        const fontColor = `var(--${colors[i]}-${contrastIndex})`;

        div.classList.add('palette-block-item');
        div.style.background = bgColor;
        div.dataset.usage = usage[j - 1];

        listen(div, 'click', () => {
          let pairsWith = '';
          if (j === 1 || j === 2) {
            pairsWith = t('s11-12t');
          } else if (j === 3) {
            pairsWith = t('s11l&s12t');
          } else if (j === 4) {
            pairsWith = t('s11-12l');
          } else if (j === 5) {
            pairsWith = t('s12l');
          } else if (j === 6 || j === 7 || j === 8) {
            pairsWith = t('s1-5b');
          } else if (j === 9 || j === 10) {
            pairsWith = t('White');
          } else if (j === 11 || j === 12) {
            pairsWith = t('bc');
          }

          const colorBgElement = jsx('div', {
            style: `background:${bgColor};color:${fontColor};`,
            id: 'copyCssColor',
            children: t('ctc'),
            onClick: () => {
              copy(bgColor);
              Toast.success(t('cvs'));
            },
          });

          const modalContent = jsx`
            <div>
                <h3>${t(colors[i])}</h3>
                <p>
                    <span style="width:120px;display:inline-block;">${t('vc')}</span>
                    <span>${colors[i]}-${j}</span>
                </p>
                <p style="margin:.5rem 0">
                    <span style="width:120px;display:inline-block;">${t('Suggested Usage')}</span>
                    <span>${usage[j - 1]}</span>
                </p>
                <p style="margin:.5rem 0">
                    <span style="width:120px;display:inline-block;">${t('Suggested PairsWith')}</span>
                    <span>${pairsWith}</span>
                </p>
                <p style="margin:.5rem 0">
                    <span style="width:120px;display:inline-block;">${t('Color Value')}</span>
                    <span>${getComputedStyle(div).backgroundColor}</span>
                </p>
                <p>
                    <span style="width:120px;display:inline-block;">CSS</span>
                    <span>color: var(--${colors[i]}-${j})</span>
                </p>
            </div>
            `;

          const currentModal = createModal({
            content: [colorBgElement, modalContent],
            id: 'colorPaletteModal',
            header: false,
            footer: false,
            bgClose: true,
            escClose: true,
            lazy: true,
            style: 'width:95%;max-width:600px;min-width:310px;',
            onHidden: () => currentModal.destroy(),
          }).build();
          currentModal.show();
        });
      }
      insert(palette, div);
    }
  }
};
colorSystem();
