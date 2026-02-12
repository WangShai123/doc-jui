# Font

`JUI` has unified font specifications to achieve the best display effect across different platforms and browsers.

## Principles

`JUI` adheres to a modern and flexible font priority strategy. Compatible with:

- Different systems (`Windows` / `MacOS` / `Linux` / `iOS` / `Android`)
- Different language environments (`English` / `Simplified Chinese`, etc.)
- Different browsers
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

## Priority

1. System fonts: Prioritize using the user system's default UI font to ensure consistency
    - `system-ui` & `ui-sans-serif`: System default UI font
    - `apple-system`: Apple system UI font (`San Francisco`)
    - `BlinkMacSystemFont`: Chrome/macOS internal name for using SF font
2. English fonts:
    - `Segoe UI`: Windows UI default font
    - `Helvetica Neue`: macOS legacy font
    - `Helvetica`: macOS legacy font
3. Chinese fonts:
    - `PingFang SC`: macOS / iOS Simplified Chinese UI default font
    - `Microsoft YaHei`: Windows Simplified Chinese UI default font
    - `Noto Sans SC`: Google product, suitable for Android, Linux, WebFonts
4. Fallback safety:
    - `sans-serif`
    - `Arial`
5. `Emoji` support: Ensure `emoji` displays colorful expressions
    - `Apple Color Emoji`: iOS / macOS
    - `Segoe UI Emoji`: Windows
    - `Segoe UI Symbol`: Windows
    - `Noto Color Emoji`: Android / Linux

## Font Introduction

1. `Segoe UI`: A sans-serif font developed by Microsoft that uses `ClearType` technology to make text on LCD displays smoother, more beautiful, and more readable.
2. `Helvetica`: A very popular sans-serif font developed in 1957 by Swiss font designers `Max Miedinger` and `Eduard Hoffmann`. It is renowned for its neutral and clear typography, and is widely used in graphic design, advertising, brand identity, and web design.
3. `San Francisco`: A sans-serif font developed by `Apple` for use in `macOS`, `iOS`, and `watchOS`.
4. `sans-serif`: A generic sans-serif font family that typically includes multiple sans-serif fonts, with specific sans-serif fonts varying by operating system and browser.
5. `PingFang SC`: A sans-serif font for Chinese text developed by the Institute of Computing Technology, Chinese Academy of Sciences. It has good readability and clarity in Chinese typography and web design.
6. `Microsoft YaHei`: Microsoft YaHei, a sans-serif Chinese font developed by Microsoft, widely used in the `Windows` operating system.
7. `Noto Sans SC`: An open-source font for Simplified Chinese developed by `Google`. Its features include good support for Chinese characters and clear glyph rendering.

## Copyright Notice

1. Only `Google`'s `Noto Sans` font is open-source and free, and can be used commercially without conditions.
2. Other fonts are mostly distributed with the system, which means `Microsoft`, `Apple`, and others have paid copyright fees for their respective fonts. You can use them in `Web` through `font-family`.
3. Unauthorized fonts cannot be independently packaged and distributed!
