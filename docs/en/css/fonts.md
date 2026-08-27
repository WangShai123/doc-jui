# Fonts

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS font classes in the default stylesheet.

<Badge text="CSS" theme="warning"/>

## Emoji Font

Emoji

- Used for colored emoji and special symbols.
- Fallback order: Apple -> Segoe -> Noto.
- Only matches Unicode ranges for Emoji to improve performance.

```css
/*
- Apple Color Emoji: macOS/iOS.
- Segoe UI Emoji: Windows.
- Segoe UI Symbol: older Windows.
- Noto Color Emoji: Linux/Android, if installed.
Covers:
- Basic emoji (U+1F600-U+1F644)
- Misc symbols (U+203C-3299)
- Extended emoji (U+1F000-U+1F644)
*/
@font-face {
  font-family: Emoji;
  src:
    local('Apple Color Emoji'), local('Segoe UI Emoji'),
    local('Segoe UI Symbol'), local('Noto Color Emoji');
  unicode-range: U+1F000-1F644, U+203C-3299;
}
```

## Serif Font

Serif

- Used for body text, book layout, and other formal reading contexts.
- Decorative strokes at the ends make long reading more comfortable.

```css
/*
- Noto Serif SC: Chinese serif.
- Source Han Serif SC: Source Han serif.
- Georgia: common on Windows/macOS.
- Cambria: optimized for Windows.
- Times New Roman: traditional Windows fallback.
- Times: common fallback.
- serif: system default serif.
*/
.font-serif {
  font-family:
    'Noto Serif SC', 'Source Han Serif SC', Georgia, Cambria, 'Times New Roman',
    Times, serif;
}
```

## Monospace Font

Mono / code font

- Every character has the same width, suitable for code display.
- Prefer high-quality system monospace fonts.

```css
/*
- Noto Sans Mono SC: Chinese monospace.
- Source Code Pro: English font fallback.
- Menlo: high-quality macOS code font.
- Monaco: classic macOS code font.
- Consolas: high-quality Windows code font.
- Liberation Mono: open-source Linux fallback.
- Courier New: common fallback.
- monospace: system default monospace.
*/
.font-mono {
  font-family:
    'Noto Sans Mono SC', 'Source Code Pro', Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
}
```

## Math Font

Math

- Designed for mathematical formulas and scientific symbols.
- Includes special glyphs such as integrals, summations, and fractions.

```css
/*
- Cambria Math: Windows math font.
- Latin Modern Math: open-source math font from the TeX family.
*/
.font-math {
  font-family: 'Cambria Math', 'Latin Modern Math';
}
```
