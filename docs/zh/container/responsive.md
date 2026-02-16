# 响应式布局

`JUI` 提供两套响应式布局系统支持：`Flex` 和 `Grid`。

- 原则：移动设备优先。
- 推荐：优先使用 `Grid` 布局。

## Flex 布局

- 命名：`flex-col-*` 避免与 `tailwindcss` 的 `col-*` 冲突。
- 建议：基于 `flex` 的响应式布局，更适合 `一维排列`（如导航、表单）。

| 类名            | 描述             | 断点类名                                                                       |
| --------------- | ---------------- | ------------------------------------------------------------------------------ |
| .flex-container | Flex 容器        |                                                                                |
| .flex-col       | 默认列：弹性填充 |                                                                                |
| .flex-col-auto  | 自适应内容宽度   |                                                                                |
| .flex-col-1     | 固定比例列 1/12  | .flex-col-sm-1 <br> .flex-col-md-1 <br> .flex-col-lg-1 <br> .flex-col-xl-1     |
| .flex-col-2     | 固定比例列 2/12  | .flex-col-sm-2 <br> .flex-col-md-2 <br> .flex-col-lg-2 <br> .flex-col-xl-2     |
| .flex-col-3     | 固定比例列 3/12  | .flex-col-sm-3 <br> .flex-col-md-3 <br> .flex-col-lg-3 <br> .flex-col-xl-3     |
| .flex-col-4     | 固定比例列 4/12  | .flex-col-sm-4 <br> .flex-col-md-4 <br> .flex-col-lg-4 <br> .flex-col-xl-4     |
| .flex-col-5     | 固定比例列 5/12  | .flex-col-sm-5 <br> .flex-col-md-5 <br> .flex-col-lg-5 <br> .flex-col-xl-5     |
| .flex-col-6     | 固定比例列 6/12  | .flex-col-sm-6 <br> .flex-col-md-6 <br> .flex-col-lg-6 <br> .flex-col-xl-6     |
| .flex-col-7     | 固定比例列 7/12  | .flex-col-sm-7 <br> .flex-col-md-7 <br> .flex-col-lg-7 <br> .flex-col-xl-7     |
| .flex-col-8     | 固定比例列 8/12  | .flex-col-sm-8 <br> .flex-col-md-8 <br> .flex-col-lg-8 <br> .flex-col-xl-8     |
| .flex-col-9     | 固定比例列 9/12  | .flex-col-sm-9 <br> .flex-col-md-9 <br> .flex-col-lg-9 <br> .flex-col-xl-9     |
| .flex-col-10    | 固定比例列 10/12 | .flex-col-sm-10 <br> .flex-col-md-10 <br> .flex-col-lg-10 <br> .flex-col-xl-10 |
| .flex-col-11    | 固定比例列 11/12 | .flex-col-sm-11 <br> .flex-col-md-11 <br> .flex-col-lg-11 <br> .flex-col-xl-11 |
| .flex-col-12    | 弹性填充列 12/12 | .flex-col-sm-12 <br> .flex-col-md-12 <br> .flex-col-lg-12 <br> .flex-col-xl-12 |

## Flex 示例

请缩小浏览设备的宽度，查看容器和元素的关系变化。

<div class="flex-container">
    <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">
        <div class="input-group">
            <input type="text" class="j-input" placeholder="">
            <div class="el-addon">
                <button class="j-button is-default">Button</button>
            </div>
        </div>
    </div>
    <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">
        <div class="input-group">
            <input type="text" class="j-input" placeholder="">
            <div class="el-addon">
                <button class="j-button is-default">Button</button>
            </div>
        </div>
    </div>
    <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">
        <div class="input-group">
            <input type="text" class="j-input" placeholder="">
            <div class="el-addon">
                <button class="j-button is-default">Button</button>
            </div>
        </div>
    </div>
    <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">
        <div class="input-group">
            <input type="text" class="j-input" placeholder="">
            <div class="el-addon">
                <button class="j-button is-default">Button</button>
            </div>
        </div>
    </div>
</div>

```html
<div class="flex-container">
  <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">...</div>
  <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">...</div>
  <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">...</div>
  <div class="flex-col-1 flex-col-sm-2 flex-col-md-3 flex-col-lg-4">...</div>
</div>
```

## Grid 布局

- 命名：`grid-col-*` 避免与 `tailwindcss` 的 `grid-cols-*` 冲突。
- 建议：基于 `grid` 的响应式布局，更适合 `二维布局`（如卡片网格、仪表盘）。
- 注意：`md` `lg` `xl` 断点只保留常用列数（1/2/3/4/6/12）

| 类名            | 描述                              | 断点类名                                                                       |
| --------------- | --------------------------------- | ------------------------------------------------------------------------------ |
| .grid-container | Grid 容器，默认单列（移动端友好） |                                                                                |
| .grid-col-1     | 固定列数 1                        | .grid-col-sm-1 <br> .grid-col-md-1 <br> .grid-col-lg-1 <br> .grid-col-xl-1     |
| .grid-col-2     | 固定列数 2                        | .grid-col-sm-2 <br> .grid-col-md-2 <br> .grid-col-lg-2 <br> .grid-col-xl-2     |
| .grid-col-3     | 固定列数 3                        | .grid-col-sm-3 <br> .grid-col-md-3 <br> .grid-col-lg-3 <br> .grid-col-xl-3     |
| .grid-col-4     | 固定列数 4                        | .grid-col-sm-4 <br> .grid-col-md-4 <br> .grid-col-lg-4 <br> .grid-col-xl-4     |
| .grid-col-5     | 固定列数 5                        | .grid-col-sm-5                                                                 |
| .grid-col-6     | 固定列数 6                        | .grid-col-sm-6 <br> .grid-col-md-6 <br> .grid-col-lg-6 <br> .grid-col-xl-6     |
| .grid-col-7     | 固定列数 7                        | .grid-col-sm-7                                                                 |
| .grid-col-8     | 固定列数 8                        | .grid-col-sm-8                                                                 |
| .grid-col-9     | 固定列数 9                        | .grid-col-sm-9                                                                 |
| .grid-col-10    | 固定列数 10                       | .grid-col-sm-10                                                                |
| .grid-col-11    | 固定列数 11                       | .grid-col-sm-11                                                                |
| .grid-col-12    | 固定列数 12                       | .grid-col-sm-12 <br> .grid-col-md-12 <br> .grid-col-lg-12 <br> .grid-col-xl-12 |

## Grid 示例

请缩小浏览设备的宽度，查看容器和元素的关系变化。

<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
    <div class="input-group">
        <input type="text" class="j-input" placeholder="">
        <div class="el-addon">
            <button class="j-button is-default">Button</button>
        </div>
    </div>
    <div class="input-group">
        <input type="text" class="j-input" placeholder="">
        <div class="el-addon">
            <button class="j-button is-default">Button</button>
        </div>
    </div>
    <div class="input-group">
        <input type="text" class="j-input" placeholder="">
        <div class="el-addon">
            <button class="j-button is-default">Button</button>
        </div>
    </div>
    <div class="input-group">
        <input type="text" class="j-input" placeholder="">
        <div class="el-addon">
            <button class="j-button is-default">Button</button>
        </div>
    </div>
</div>

```html
<div
  class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4"
>
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
</div>
```

## 自动填充

- 定义：默认最小宽度，并自适应列数。
- 建议：`grid-col-auo-*` 用于自适应卡片布局（如商品列表）。

| 类名               | 描述           |
| ------------------ | -------------- |
| .grid-col-auto-150 | 最小宽度 150px |
| .grid-col-auto-200 | 最小宽度 200px |
| .grid-col-auto-250 | 最小宽度 250px |
| .grid-col-auto-300 | 最小宽度 300px |

## 容器断点

移动设备优先。

| 断点    | 名称 | 对应设备                                           |
| ------- | ---- | -------------------------------------------------- |
| ≥576px  | `sm` | 小屏手机横屏 / 大屏手机（如 iPhone Plus/Max 系列） |
| ≥768px  | `md` | iPad 竖屏、Android 平板                            |
| ≥992px  | `lg` | 小型笔记本、桌面浏览器窗口（非全屏）               |
| ≥1200px | `xl` | 标准桌面显示器（1366px+）、全屏浏览器              |

这组断点覆盖了 95%+ 场景，但在特定情况下，请自行扩展微调。3点注意：

1. 超大屏（4K/5K 显示器）缺乏优化。
   - 在 2560px+ 屏幕上，max-width: 1200px 的容器会显得太窄。
   - 建议：增加 xxl 断点（如 ≥1400px 或 ≥1600px）
2. 折叠屏/分屏模式未精细适配。
   - Android/iOS 分屏时，窗口可能只有 500–600px 宽。
   - 但：这仍属于“小屏体验”，用默认布局即可，无需特殊处理。
3. 断点应由内容驱动，而非设备。
   - 最佳实践：先做移动布局，再逐步拉宽浏览器，观察内容何时“崩坏”，在那里设断点。
