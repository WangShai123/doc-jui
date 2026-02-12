# Icon

## Design Principles

`JUI` does not include any built-in icon libraries. You can use any icon library as needed for personalized usage.

## Recommended Icons

Recommended third-party open-source icon libraries:

1. [`RemixIcon`](https://remixicon.com/): An open-source icon library designed by [Jimmy Cheung](https://github.com/xiaochunjimmy) and developed by [Wendy Gao](https://github.com/wendygaoyuan).
2. [`Iconify`](https://iconify.design/): The largest open-source icon library designed, developed, and integrated by [Vjacheslav Trushkin](https://github.com/cyberalien).
3. [`IconPark`](https://iconpark.oceanengine.com/): An icon library designed and developed by ByteDance, with more refined application scenario division.

## Icon Usage

It is recommended to use `svg` icons because they have the advantage of vectorization and can maintain clarity at any size. You can use `svg` icon files or directly embed `svg` icon code.

## Element Classes

In `JUI`, some common elements are often involved, such as: prefix, suffix, icons, etc.

For such elements, use the `el-{type}` class uniformly to describe them. For example:

- Prefix element: `el-prefix`
- Suffix element: `el-suffix`
- Icon element: `el-icon`

```html
<span class="el-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
    </svg>
</span>
```

## CSS Icons

<div class="flex flex-wrap gap-4">
    <span class="el-icon icon-loader"></span>
    <span class="el-icon icon-close"></span>
</div>
