---
client:
  entry:
    - color
    - color_p3
    - color_system
---

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
