# 容器

> 推荐使用 `tailwindcss`, `unocss` 等 CSS 工具，更有利于个性化定制 UI 和按需构建最小化 CSS 文件。

默认样式文件中的 CSS 容器类。

## 基础容器

| 类名             | 描述                                                         |
| ---------------- | ------------------------------------------------------------ |
| `container`      | 居中容器，最大宽度 `--screen-xl` (1200px)，水平内边距 `1rem` |
| `auto-container` | 全宽可滚动容器                                               |
| `block-center`   | 块级居中，自动高度                                           |

## Flex 容器

见 [Flex 布局](layout.html#flex-布局)

## Grid 容器

见 [Grid 布局](layout.html#grid-布局)

## iOS 安全区

适用于以独立模式运行的 iOS 应用：

```html
<div class="ios-safe-x">水平安全区</div>
<div class="ios-safe-y">垂直安全区</div>
<div class="ios-safe-left">左侧安全区</div>
<div class="ios-safe-right">右侧安全区</div>
<div class="ios-safe-top">顶部安全区</div>
<div class="ios-safe-bottom">底部安全区</div>
```

| 类名              | 描述          |
| ----------------- | ------------- |
| `ios-safe-x`      | 左 + 右内边距 |
| `ios-safe-y`      | 上 + 下内边距 |
| `ios-safe-left`   | 仅左侧内边距  |
| `ios-safe-right`  | 仅右侧内边距  |
| `ios-safe-top`    | 仅顶部内边距  |
| `ios-safe-bottom` | 仅底部内边距  |

## 背景装饰

### 背景网格

用于落地页的装饰性网格背景：

```html
<div class="j-background-grid"></div>
```

| 类名                | 描述                       |
| ------------------- | -------------------------- |
| `j-background-grid` | 全屏装饰性网格，带渐变遮罩 |

### 背景渐变

JUI 默认提供了 9 种背景渐变。使用工具类 `bg-gradient-*` 用于添加背景渐变。

- `auto` 自动渐变，根据主题颜色自动生成渐变。
- `sunrise` 晨曦。
- `aurora` 极光。
- `ocean` 海洋。
- `meadow` 草地。
- `ember` 余烬。
- `dusk` 黄昏。
- `gold` 鎏金。
- `forest` 森林。

:::tabs
@tab 示例
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
@tab 代码
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

## 宽度工具

### 宽度类

```html
<div class="w-full">100% 宽度</div>
<div class="w-half">50% 宽度</div>
<div class="w-screen">100vw 宽度</div>
```

| 类名       | 宽度  | 描述       |
| ---------- | ----- | ---------- |
| `w-full`   | 100%  | 父容器全宽 |
| `w-half`   | 50%   | 父容器半宽 |
| `w-screen` | 100vw | 视口全宽   |

### 列宽类

| 类名           | 宽度  | 宽度 px | 描述       |
| -------------- | ----- | ------- | ---------- |
| `columns-auto` | auto  | auto    | 自动列宽   |
| `columns-6xs`  | 10rem | 160px   | 6xs 列列宽 |
| `columns-5xs`  | 12rem | 192px   | 5xs 列列宽 |
| `columns-4xs`  | 14rem | 224px   | 4xs 列列宽 |
| `columns-3xs`  | 16rem | 256px   | 3xs 列列宽 |
| `columns-2xs`  | 18rem | 288px   | 2xs 列列宽 |
| `columns-xs`   | 20rem | 320px   | xs 列列宽  |
| `columns-sm`   | 24rem | 384px   | sm 列列宽  |
| `columns-md`   | 28rem | 448px   | md 列列宽  |
| `columns-lg`   | 32rem | 512px   | lg 列列宽  |
| `columns-xl`   | 36rem | 576px   | xl 列列宽  |
| `columns-2xl`  | 42rem | 672px   | 2xl 列列宽 |
| `columns-3xl`  | 48rem | 768px   | 3xl 列列宽 |
| `columns-4xl`  | 56rem | 896px   | 4xl 列列宽 |
| `columns-5xl`  | 64rem | 1024px  | 5xl 列列宽 |
| `columns-6xl`  | 72rem | 1152px  | 6xl 列列宽 |
| `columns-7xl`  | 80rem | 1280px  | 7xl 列列宽 |

### 宽高比

```html
<div class="aspect-square">1:1</div>
<div class="aspect-video">16:9</div>
<div class="aspect-auto">自动</div>
```

| 类名            | 比例 | 描述       |
| --------------- | ---- | ---------- |
| `aspect-square` | 1:1  | 正方形     |
| `aspect-video`  | 16:9 | 视频/宽屏  |
| `aspect-auto`   | auto | 自然宽高比 |

```vp-script
import { insert, jsx } from 'vanilla-signal';
const link= jsx`<link rel="stylesheet" href="../../public/common.css">`;
insert(document.head,link);
```
