# 布局

> 推荐使用 `tailwindcss`, `unocss` 等 CSS 工具，更有利于个性化定制 UI 和按需构建最小化 CSS 文件。

默认样式文件中的 CSS 布局类：提供基础重置、Flex/Grid 响应式布局等。

## 重置

### 基础重置

JUI 仅做基础重置。防止用户在挂载既有项目时，因为样式冲突导致布局异常。

:::details 点击展开查看详情

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

### 元素重置

使用 `.is-reset` 类手动重置特定元素，支持：

- `a` 链接元素
- `button` 按钮元素
- `h1, h2, h3, h4, h5, h6` 标题元素
- `ol, ul` 列表元素
- `p` 段落元素
- `pre` 代码块元素

```html
<a class="is-reset" href="#">链接</a>
<button class="is-reset">按钮</button>
<pre class="is-reset">代码</pre>
```

## Flex 布局

Flex 布局适合**一维排列**（导航、表单、行）。

### 基础 Flex 容器

```html
<div class="flex-container">
  <div class="flex-col">项目 1</div>
  <div class="flex-col">项目 2</div>
  <div class="flex-col">项目 3</div>
</div>
```

| 类名             | 描述                                   |
| ---------------- | -------------------------------------- |
| `flex-container` | Flex 行容器，`flex-wrap: wrap`，带 gap |
| `flex-cols`      | 弹性列（等宽，`flex: 1 1 0%`）         |
| `flex-col-auto`  | 自动宽度列（内容自适应）               |

### 自定义间距

使用 CSS 变量 `--flex-container-gap` 自定义 Flex 容器的间距。

```html
<div class="flex-container" style="--flex-container-gap: 2rem;">
  <div class="flex-col-6">左侧</div>
  <div class="flex-col-6">右侧</div>
</div>
```

### 固定列宽 (1-12)

基于 12 列网格。列宽 = 100% / 12。默认 CSS 变量 `--cols` 为 12。

支持类：`flex-col-1`、`flex-col-2` ... 到 `flex-col-12`

如果想扩展为 24 列网格或其他，请在 Flex 容器上自定义 CSS 变量 `--cols` 如 `--cols: 24`，然后自定义支持类 `flex-col-{n}`。

:::tabs
@tab 示例

半宽
<div class="flex-container odd-bg margin-block">
  <div class="flex-col-6">6</div>
  <div class="flex-col-6">6</div>
</div>

三分之一宽
<div class="flex-container odd-bg margin-block">
  <div class="flex-col-4">4</div>
  <div class="flex-col-4">4</div>
  <div class="flex-col-4">4</div>
</div>

四分之一宽
<div class="flex-container odd-bg margin-block">
  <div class="flex-col-3">3</div>
  <div class="flex-col-3">3</div>
  <div class="flex-col-3">3</div>
  <div class="flex-col-3">3</div>
</div>

混合宽度
<div class="flex-container odd-bg margin-block">
  <div class="flex-col-8">8</div>
  <div class="flex-col-4">4</div>
</div>
@tab 语法

```html
<!-- 半宽 6/12 = 50% -->
<div class="flex-container">
  <div class="flex-col-6">6</div>
  <div class="flex-col-6">6</div>
</div>

<!-- 三分之一宽 4/12 = 33.3% -->
<div class="flex-container">
  <div class="flex-col-4">4</div>
  <div class="flex-col-4">4</div>
  <div class="flex-col-4">4</div>
</div>

<!-- 四分之一宽 3/12 = 25% -->
<div class="flex-container">
  <div class="flex-col-3">3</div>
  <div class="flex-col-3">3</div>
  <div class="flex-col-3">3</div>
  <div class="flex-col-3">3</div>
</div>

<!-- 混合宽度 8/12 = 66.7% 4/12 = 33.3% -->
<div class="flex-container">
  <div class="flex-col-8">8</div>
  <div class="flex-col-4">4</div>
</div>
```

:::

### 响应式列

列根据视口宽度自适应：

| 断点 | 类前缀            | 最小宽度 |
| ---- | ----------------- | -------- |
| 默认 | `flex-col-{n}`    | 0        |
| sm   | `flex-col-sm-{n}` | 576px    |
| md   | `flex-col-md-{n}` | 768px    |
| lg   | `flex-col-lg-{n}` | 992px    |
| xl   | `flex-col-xl-{n}` | 1200px   |

:::tabs
@tab 示例
移动端：全宽；平板：半宽；桌面：三分之一
<div class="flex-container odd-bg">
  <div class="flex-col-12 flex-col-sm-6 flex-col-md-4">内容</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-md-4">内容</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-md-4">内容</div>
</div>

@tab 语法

```html
<!-- 移动端：全宽；平板：半宽；桌面：三分之一 -->
<div class="flex-container">
  <div class="flex-col-12 flex-col-sm-6 flex-col-md-4">内容</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-md-4">内容</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-md-4">内容</div>
</div>
```

:::

### 响应式示例

#### 侧边栏布局

:::tabs
@tab 示例
<div class="flex-container odd-bg">
  <div class="flex-col-12 flex-col-md-3">
    <nav>侧边栏</nav>
  </div>
  <div class="flex-col-12 flex-col-md-9">
    <main>内容</main>
  </div>
</div>
@tab 代码
```html
<div class="flex-container">
  <!-- 侧边栏：移动端全宽，桌面端 3 列 -->
  <div class="flex-col-12 flex-col-md-3">
    <nav>侧边栏</nav>
  </div>
  <!-- 主内容：移动端全宽，桌面端 9 列 -->
  <div class="flex-col-12 flex-col-md-9">
    <main>内容</main>
  </div>
</div>
```
:::

#### 仪表盘卡片

:::tabs
@tab 示例
<div class="flex-container odd-bg">
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">卡片 1</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">卡片 2</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">卡片 3</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">卡片 4</div>
</div>
@tab 代码
```html
<div class="flex-container">
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">卡片 1</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">卡片 2</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">卡片 3</div>
  <div class="flex-col-12 flex-col-sm-6 flex-col-lg-3">卡片 4</div>
</div>
```
:::

## Grid 布局

Grid 布局适合**二维布局**（卡片网格、仪表盘、画廊）。

### 基础 Grid 容器

```html
<div class="grid-container grid-col-3">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
</div>
```

| 类名             | 描述                     |
| ---------------- | ------------------------ |
| `grid-container` | Grid 容器，带 gap 和全宽 |
| `grid-col-{n}`   | 固定列数 (1-12)          |

### 自定义间距

使用 CSS 变量 `--grid-container-gap` 自定义 Grid 容器的间距。

```html
<div class="grid-container grid-col-3" style="--grid-container-gap: 2rem;">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
</div>
```

### 固定列数 (1-12)

基于 12 列网格。

支持类：`grid-col-1`、`grid-col-2` ... 到 `grid-col-12`

:::tabs
@tab 示例
2列：
<div class="grid-container grid-col-2 odd-bg margin-block">
  <div>项目 1</div>
  <div>项目 2</div>
</div>

4列：
<div class="grid-container grid-col-4 odd-bg">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
  <div>项目 4</div>
</div>
@tab 代码
```html
<!-- 2 列 -->
<div class="grid-container grid-col-2">
  <div>项目 1</div>
  <div>项目 2</div>
</div>

<!-- 4 列 -->
<div class="grid-container grid-col-4">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
  <div>项目 4</div>
</div>
```
:::

### 自动填充 Grid

自动填充根据最小宽度创建响应式列：

:::tabs
@tab 示例
自动填充：每列最小 200px
<div class="grid-container grid-col-auto-200 odd-bg">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
  <div>项目 4</div>
  <div>项目 5</div>
</div>
@tab 代码
```html
<!-- 自动填充：每列最小 200px -->
<div class="grid-container grid-col-auto-200">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
  <div>项目 4</div>
  <div>项目 5</div>
</div>
```
:::

| 类名                | 最小宽度 | 描述     |
| ------------------- | -------- | -------- |
| `grid-col-auto-150` | 150px    | 小卡片   |
| `grid-col-auto-200` | 200px    | 中等卡片 |
| `grid-col-auto-250` | 250px    | 默认卡片 |
| `grid-col-auto-300` | 300px    | 大卡片   |

### 响应式列

| 断点 | 类前缀            | 最小宽度 |
| ---- | ----------------- | -------- |
| 默认 | `grid-col-{n}`    | 0        |
| sm   | `grid-col-sm-{n}` | 576px    |
| md   | `grid-col-md-{n}` | 768px    |
| lg   | `grid-col-lg-{n}` | 992px    |
| xl   | `grid-col-xl-{n}` | 1200px   |

:::tabs
@tab 示例
移动端：1 列；平板：2 列；桌面：3 列
<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-lg-3 odd-bg">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
  <div>项目 4</div>
  <div>项目 5</div>
  <div>项目 6</div>
</div>
@tab 代码
```html
<!-- 移动端：1 列；平板：2 列；桌面：3 列 -->
<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-lg-3">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
  <div>项目 4</div>
  <div>项目 5</div>
  <div>项目 6</div>
</div>
```
:::

### 响应式示例

#### 仪表盘卡片

:::tabs
@tab 示例
<div class="grid-container odd-bg grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
  <div>卡片 1</div>
  <div>卡片 2</div>
  <div>卡片 3</div>
  <div>卡片 4</div>
</div>
@tab 代码
```html
<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
  <div>卡片 1</div>
  <div>卡片 2</div>
  <div>卡片 3</div>
  <div>卡片 4</div>
</div>
```
:::

## 响应式对比

### 场景

- Flex 布局适合**一维排列**（导航、表单、行）。
- Grid 布局适合**二维布局**（卡片网格、仪表盘、画廊）。

### 特征

- Flex 布局理解更简单，更易用。
- Grid 布局更灵活，支持自动填充和响应式列，写法更简洁。

```vp-script
import { insert, jsx } from 'vanilla-signal';
const link= jsx`<link rel="stylesheet" href="../../public/common.css">`;
insert(document.head,link);
```
