# CSS 架构

JUI 提供一套基于 CSS 变量 和 文档根类 构建的多维度的 Design Token 引擎。基于简短的代码，实现千人千面的主题模式。

## 文档根类

- `mobile`：移动端主题
- `desktop`：桌面端主题
- `dark`：暗黑主题
- `light`：亮主题
- `j-theme-*`：主题色主题
- `j-radius-*`：圆角主题
- `j-shadow-*`：阴影主题
- `j-font-*`：字号主题

## 设计令牌

`tokens.css`

- 工具令牌
  - 基础工具令牌：如布局、字体、动画等，具有固定值的 CSS 变量。
  - 主题工具令牌：如行高、间距等，以 `--el-height-md` 为例，在 `mobile` 和 `desktop` 主题下分别有不同的值。
- 色彩令牌
  - 主题色令牌
  - 业务色令牌
  - 状态色令牌

## 工具令牌

常用基础工具令牌。

### 间距

| 令牌      | 值        | 描述               |
| --------- | --------- | ------------------ |
| `--space` | `0.25rem` | 基础间距单位 (4px) |
| `--s2`    | `0.5rem`  | 间距单位 (8px)     |
| `--s3`    | `0.75rem` | 间距单位 (12px)    |
| `--s4`    | `1rem`    | 间距单位 (16px)    |
| `--s5`    | `1.25rem` | 间距单位 (20px)    |
| `--s6`    | `1.5rem`  | 间距单位 (24px)    |
| `--s7`    | `1.75rem` | 间距单位 (28px)    |
| `--s8`    | `2rem`    | 间距单位 (32px)    |

### 过渡时间

| 令牌         | 值      | 描述     |
| ------------ | ------- | -------- |
| `--speed-sm` | `0.15s` | 快速过渡 |
| `--speed-md` | `0.25s` | 中等过渡 |
| `--speed-lg` | `0.5s`  | 慢速过渡 |
| `--speed-xl` | `0.75s` | 超慢过渡 |

### 字号比例

| 令牌         | 值         | 描述        |
| ------------ | ---------- | ----------- |
| `--text-xs`  | `0.75rem`  | 超小 (12px) |
| `--text-sm`  | `0.875rem` | 小 (14px)   |
| `--text-md`  | `1rem`     | 中等 (16px) |
| `--text-lg`  | `1.125rem` | 大 (18px)   |
| `--text-xl`  | `1.25rem`  | 超大 (20px) |
| `--text-2xl` | `1.5rem`   | 2x大 (24px) |
| `--text-3xl` | `1.875rem` | 3x大 (30px) |
| `--text-4xl` | `2.25rem`  | 4x大 (36px) |
| `--text-5xl` | `3rem`     | 5x大 (48px) |

### 组件字号

不同的 `j-font-*` 字号主题，提供了不同的字号比例。

默认 `j-font-sm` 字号主题。

| 令牌              | 默认       | j-font-sm  | j-font-md  | 描述 |
| ----------------- | ---------- | ---------- | ---------- | ---- |
| `--font-size-xs`  | `0.625rem` | `0.625rem` | `0.75rem`  | 超小 |
| `--font-size-sm`  | `0.75rem`  | `0.75rem`  | `0.875rem` | 小   |
| `--font-size-md`  | `0.875rem` | `0.875rem` | `1rem`     | 中等 |
| `--font-size-lg`  | `1rem`     | `1rem`     | `1.125rem` | 大   |
| `--font-size-xl`  | `1.125rem` | `1.125rem` | `1.25rem`  | 超大 |
| `--font-size-2xl` | `1.25rem`  | `1.25rem`  | `1.5rem`   | 2x大 |

### 字重

| 令牌                | 值  |
| ------------------- | --- |
| `--font-thin`       | 100 |
| `--font-extraLight` | 200 |
| `--font-light`      | 300 |
| `--font-normal`     | 400 |
| `--font-medium`     | 500 |
| `--font-semiBold`   | 600 |
| `--font-bold`       | 700 |
| `--font-extraBold`  | 800 |
| `--font-black`      | 900 |

### 行高

| 令牌                      | 值     | 描述       |
| ------------------------- | ------ | ---------- |
| `--line-height`           | `1.5`  | 默认行高   |
| `--line-height-paragraph` | `1.5`  | 段落行高   |
| `--line-height-pre`       | `1.4`  | 代码块行高 |
| `--line-height-heading`   | `1.25` | 标题行高   |
| `--line-height-self`      | `1`    | 单行行高   |

### 元素高度

不同的 `j-font-*` 字号主题 和 不同的 `desktop` 设备主题，提供了不同的元素高度比例。

默认 `j-font-sm` 字号主题 和 `desktop` 设备主题。

| 令牌              | 默认      | j-font-sm | j-font-md | 描述        |
| ----------------- | --------- | --------- | --------- | ----------- |
| `--el-height-3xs` | `1rem`    | `1rem`    | `1.25rem` | 3x小 (16px) |
| `--el-height-2xs` | `1.25rem` | `1.25rem` | `1.5rem`  | 2x小 (20px) |
| `--el-height-xs`  | `1.5rem`  | `1.5rem`  | `1.75rem` | 超小 (24px) |
| `--el-height-sm`  | `1.75rem` | `1.75rem` | `2rem`    | 小 (28px)   |
| `--el-height-md`  | `2rem`    | `2rem`    | `2.25rem` | 中等 (32px) |
| `--el-height-lg`  | `2.25rem` | `2.25rem` | `2.5rem`  | 大 (36px)   |
| `--el-height-xl`  | `2.5rem`  | `2.5rem`  | `2.75rem` | 超大 (40px) |
| `--el-height-2xl` | `2.75rem` | `2.75rem` | `3rem`    | 2x大 (44px) |
| `--el-height-3xl` | `3rem`    | `3rem`    | `3.25rem` | 3x大 (52px) |

### 圆角

不同的 `j-radius-*` 圆角主题，提供了不同的圆角比例。

默认 `j-radius-md` 圆角主题。

| 令牌            | 值         | 描述         |
| --------------- | ---------- | ------------ |
| `--radius-2xs`  | `0.125rem` | 超小 (2px)   |
| `--radius-xs`   | `0.25rem`  | 小 (4px)     |
| `--radius-sm`   | `0.375rem` | 基础 (6px)   |
| `--radius-md`   | `0.5rem`   | 中等 (8px)   |
| `--radius-lg`   | `0.75rem`  | 大 (12px)    |
| `--radius-xl`   | `1rem`     | 超大 (16px)  |
| `--radius-2xl`  | `1.5rem`   | 2倍大 (24px) |
| `--radius-full` | `9999px`   | 全圆         |

### 阴影

不同的 `j-shadow-*` 阴影主题，提供了不同的阴影比例。

默认 `j-shadow-md` 阴影主题。

| 令牌          | 描述     |
| ------------- | -------- |
| `--shadow-xs` | 最小阴影 |
| `--shadow-sm` | 小阴影   |
| `--shadow-md` | 中等阴影 |
| `--shadow-lg` | 大阴影   |
| `--shadow-xl` | 超大阴影 |

### 断点

| 令牌          | 值       |
| ------------- | -------- |
| `--screen-sm` | `576px`  |
| `--screen-md` | `768px`  |
| `--screen-lg` | `992px`  |
| `--screen-xl` | `1200px` |

### 容器宽度

| 令牌            | 值      |
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

### 层级

| 令牌            | 值   | 描述     |
| --------------- | ---- | -------- |
| `--z-0`         | 0    | 基础层   |
| `--z-1`         | 1    | 基础之上 |
| `--z-badge`     | 2    | 徽章     |
| `--z-submenu`   | 5    | 子菜单   |
| `--z-overlay`   | 9500 | 遮罩层   |
| `--z-offcanvas` | 9600 | 侧边栏   |
| `--z-popup`     | 9700 | 弹窗     |
| `--z-toast`     | 9800 | 提示框   |
| `--z-drop`      | 9900 | 下拉菜单 |

### 透明度

| 令牌                 | 值     | 描述     |
| -------------------- | ------ | -------- |
| `--opacity-hover`    | `0.8`  | 鼠标悬停 |
| `--opacity-active`   | `0.95` | 鼠标点击 |
| `--opacity-disabled` | `0.65` | 鼠标禁用 |

## 目录结构

源码 `src/css` 目录下提供的是各个UI原语和组件的基础DOM样式、和它们的默认主题样式。

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

## 样式自定义

vanilla-jui 提供三种自定义样式的方案。

1. 自定义 css 主题
   - `src/css/` 目录下提供的是各个UI原语和组件的基础DOM样式。
   - `src/css/themes/` 目录下提供的是 UI 主题的样式文件，**你可以创建自己独立的主题样式**。如：`newYork/`。
   - `src/css/themes/default/` 目录下提供的是默认主题的样式文件。
2. 自定义 tokens.css
3. 基于 tailwindcss 自定义样式（推荐）
   - 把 vanilla-jui 的 tokens.css 的多维度主题架构作为 Tailwind 等 CSS 工具的底层数据源，通过配置进行映射。
   - 优点：
     - 保持多维主题架构。
     - 基于 Tailwind 等 CSS 工具，实现更复杂的样式效果。
     - 确保最小化 CSS 打包输出。

## 头部脚本

放置在 HTML HEAD 中的头部脚本，防止样式抖动。

设备查询

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

主题查询

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
