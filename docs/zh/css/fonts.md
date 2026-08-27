# 字体

> 推荐使用 `tailwindcss`, `unocss` 等 CSS 工具，更有利于个性化定制 UI 和按需构建最小化 CSS 文件。

默认样式文件中的 CSS 字体类。

<Badge text="CSS" theme="warning"/>

## 表情符号字体

Emoji

- 用于显示彩色表情和特殊符号
- 按顺序回退：Apple → Segoe → Noto
- 仅匹配 Emoji 的 Unicode 范围（优化性能）

```css
/*
- Apple Color Emoji: macOS/iOS.
- Segoe UI Emoji: Windows.
- Segoe UI Symbol: Windows（旧版）.
- Noto Color Emoji: Linux/Android（需安装）.
覆盖：
- 基本表情符号（U+1F600–1F644）
- 杂项符号（U+203C–3299）
- 扩展表情（U+1F000–1F644）
*/
@font-face {
  font-family: Emoji;
  src:
    local('Apple Color Emoji'), local('Segoe UI Emoji'),
    local('Segoe UI Symbol'), local('Noto Color Emoji');
  unicode-range: U+1F000-1F644, U+203C-3299;
}
```

## 衬线字体

Serif

- 用于正文、书籍排版等正式场景
- 笔画末端有装饰性"脚"，阅读舒适

```css
/*
- Noto Serif SC: 中文衬线
- Source Han Serif SC: 思源宋体
- Georgia: Windows/macOS 通用。
- Cambria: Windows 优化。
- Times New Roman: 传统 Windows 备选。
- Times: 通用备选。
- serif: 系统默认衬线。
*/
.font-serif {
  font-family:
    'Noto Serif SC', 'Source Han Serif SC', Georgia, Cambria, 'Times New Roman',
    Times, serif;
}
```

## 等宽字体

Mono / 代码字体

- 每个字符宽度相同，适合代码展示
- 优先使用系统自带的高质量等宽字体

```css
/*
- Noto Sans Mono SC: 中文等宽
- Source Code Pro: 英文字体备选
- Menlo: macOS 高质量代码字体。
- Monaco: macOS 经典代码字体。
- Consolas: Windows 高质量代码字体。
- Liberation Mono: Linux 开源备选。
- Courier New: 通用备选。
- monospace: 系统默认等宽。
*/
.font-mono {
  font-family:
    'Noto Sans Mono SC', 'Source Code Pro', Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
}
```

## 数学字体

Math

- 专门用于数学公式、科学符号
- 包含特殊字形（积分、求和、分数等）

```css
/*
- Cambria Math: Windows 数学字体。
- Latin Modern Math: 开源数学字体（TeX 系）。
*/
.font-math {
  font-family: 'Cambria Math', 'Latin Modern Math';
}
```
