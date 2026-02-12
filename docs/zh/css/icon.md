# 图标

## 设计原则

`JUI` 不内置任何图标库，你可以按需个性化使用任意图标库。

## 推荐图标

推荐第三方开源图标库：

1. [`RemixIcon`](https://remixicon.com/)：由 [Jimmy Cheung](https://github.com/xiaochunjimmy) 设计、[Wendy Gao](https://github.com/wendygaoyuan) 开发的开源图标库。
2. [`Iconify`](https://iconify.design/)：由 [Vjacheslav Trushkin](https://github.com/cyberalien) 设计、开发和集成的最大的开源图标库。
3. [`IconPark`](https://iconpark.oceanengine.com/)：由字节头条设计和开发的图标库，应用场景划分更精细。

## 图标使用

推荐使用 `svg` 图标，因为它具有矢量化的优势，能够在任何尺寸下保持清晰度。 您可以使用 `svg` 图标文件，也可以直接嵌入 `svg` 图标代码。

## 元素类

在 `JUI` 中，常涉及到一些通用元素，比如：前缀、后缀、图标等。

面对此类元素，统一使用 `el-{type}` 类来描述。例如：

- 前缀元素：`el-prefix`
- 后缀元素：`el-suffix`
- 图标元素：`el-icon`

```html
<span class="el-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
    </svg>
</span>
```

## CSS 图标

<div class="flex flex-wrap gap-4">
    <span class="el-icon icon-loader"></span>
    <span class="el-icon icon-close"></span>
</div>
