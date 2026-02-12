# 色彩系统

JUI 提供了一套华丽、易于访问的用户界面色彩系统，用于设计美观、易于访问的网站和应用程序。

1. 自动深色模式：每个颜色会根据主题模式自动切换变体。
2. 透明变体：每个颜色都有一个透明变体，用于创建半透明的元素，如按钮、卡片等，这对于创建混合色和渐变色也非常有用。
3. P3 色域支持：考虑到广色域色彩空间中的混合差异，默认支持 `P3 色域`，确保在高级用户设备上，拥有更好的色彩表现。
4. APCA 文本对比：使用现代 `APCA` 算法来确保文本在不同背景颜色下的可读性，更加符合人眼的感知。
5. 无障碍：保证文本颜色与相应背景颜色，拥有足够和合理的对比度。符合 `WCAG 2.1 AA` 标准，确保在低对比度下也能提供良好的可读性。
6. 色彩搭配：点击下方色块，查看建议搭配的颜色。

## 调色板

<div class="overflow-auto">
    <div class="color-palette">
        <div style="grid-column: 1/2"> </div>
        <div style="grid-column: 2/4; border-bottom: 1px solid var(--gray-6); color: var(--gray-11)"
            class="text-center pb-1 mb-1 flex flex-col text-xs">
            <span>背景</span>
        </div>
        <div style="grid-column: 4/7; border-bottom: 1px solid var(--gray-6); color: var(--gray-11)"
            class="text-center pb-1 mb-1 flex flex-col text-xs">
            <span>互动组件</span>
        </div>
        <div style="grid-column: 7/10; border-bottom: 1px solid var(--gray-6); color: var(--gray-11)"
            class="text-center pb-1 mb-1 flex flex-col text-xs">
            <span>边框与分隔符</span>
        </div>
        <div style="grid-column: 10/12; border-bottom: 1px solid var(--gray-6); color: var(--gray-11)"
            class="text-center pb-1 mb-1 flex flex-col text-xs">
            <span>纯色</span>
        </div>
        <div style="grid-column: 12/14; border-bottom: 1px solid var(--gray-6); color: var(--gray-11)"
            class="text-center pb-1 mb-1 flex flex-col text-xs">
            <span>无障碍文本</span>
        </div>
        <div></div>
        <div class="text-xs text-center mb-1">1</div>
        <div class="text-xs text-center">2</div>
        <div class="text-xs text-center">3</div>
        <div class="text-xs text-center">4</div>
        <div class="text-xs text-center">5</div>
        <div class="text-xs text-center">6</div>
        <div class="text-xs text-center">7</div>
        <div class="text-xs text-center">8</div>
        <div class="text-xs text-center">9</div>
        <div class="text-xs text-center">10</div>
        <div class="text-xs text-center">11</div>
        <div class="text-xs text-center">12</div>
    </div>
</div>