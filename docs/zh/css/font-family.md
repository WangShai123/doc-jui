# 字体

`JUI` 对字体进行了统一规范，意求在不同平台和浏览器下能显示出其最佳的效果。

## 原则

`JUI` 秉承现代灵活的字体优先策略。兼容：

- 不同系统（`Windows` / `MacOS` / `Linux` / `iOS` / `Android`）
- 不同语言环境（`英文` / `简体中文`等）
- 不同浏览器
- Emoji

```css
{
    font-family:
        ui-sans-serif, system-ui,
        apple-system, BlinkMacSystemFont,
        "Segoe UI", "Helvetica Neue", Helvetica,
        "PingFang SC", "Microsoft YaHei", "Noto Sans SC",
        Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
```

## 优先级

1. 系统字体：优先使用用户系统UI默认字体，确保一致性
    - `system-ui` & `ui-sans-serif`: 系统默认 UI 字体
    - `apple-system`: Apple 系统 UI 字体（`San Francisco`）
    - `BlinkMacSystemFont`: Chrome/macOS 使用 SF 字体的内部名称
2. 英文字体：
    - `Segoe UI`: Windows UI 默认字体
    - `Helvetica Neue`: macOS 旧版字体
    - `Helvetica`: macOS 旧版字体
3. 中文字体：
    - `PingFang SC`: macOS / iOS 简体中文 UI 默认字体
    - `Microsoft YaHei`: Windows 简体中文 UI 默认字体
    - `Noto Sans SC`: Google 出品，适用于 Android、Linux、WebFonts
4. 安全兜底：
    - `sans-serif`
    - `Arial`
5. `Emoji` 支持：确保 `emoji` 显示彩色表情
    - `Apple Color Emoji`: iOS / macOS
    - `Segoe UI Emoji`: Windows
    - `Segoe UI Symbol`: Windows
    - `Noto Color Emoji`: Android / Linux

## 字体介绍

1. `Segoe UI`: 由微软公司开发的无衬线体，利用 `ClearType` 技术，使得液晶显示器上的文字更加平滑、美观、易读。
2. `Helvetica`: 由瑞士字体设计师 `Max Miedinger` 和 `Eduard Hoffmann` 于1957年开发的一种非常流行的无衬线字体，它以中性、清晰的排版而闻名，广泛应用于平面设计、广告、品牌标识、网页设计等。
3. `San Francisco`: 由 `Apple` 开发的一种无衬线字体，用于 `macOS`、`iOS` 和 `watchOS`。
4. `sans-serif`: 一个通用的无衬线字体系列，通常包括多种无衬线字体，具体的无衬线字体会根据操作系统和浏览器而变化。
5. `PingFang SC`: 由中国科学院计算技术研究所开发的一种面向中文文本的无衬线字体，它在中文排版和网页设计中具有良好的可读性和清晰度。
6. `Microsoft YaHei`: 微软雅黑，由微软开发的一种无衬线中文字体，广泛用于 `Windows` 操作系统。
7. `Noto Sans SC`: 由 `Google` 开发的一种针对简体中文的开源字体。它的特点包括良好的支持中文字符和字形清晰。

## 版权说明

1. 仅 `Google` 的 `Noto Sans` 字体开源且免费，可无条件商用。
2. 其他字体多伴随系统而分发，相当于 `MicroSoft`, `Apple` 等为其各自字体支付了版权费用，您可以在 `Web` 中通过 `font-family` 来使用它们。
3. 非授权字体，不可以进行独立打包分发！
