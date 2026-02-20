# 图标

提供一系列常用图标。

## icon

通过 `icon` 方法输出图标。

::: code-group

```js [参数说明]
/**
 * @description 图标
 * @param {string} name - 图标名称
 * @return {string} - svg 图标HTML
 */
const icon = (name) => {};
```

```js [示例]
import { icon, newEl } from "jui";

const testElement = newEl("icon", {
  className: "test-icon",
  children: [icon("success"), "<span>Updated</span>"],
});
```

:::

## addIcons

通过 `addIcons` 方法扩展自定义图标。

::: code-group

```js [参数说明]
/**
 * @description 扩展图标
 * @param {array[object]} icons - 图标对象
 *  - @property {string} name - 图标名称
 *  - @property {string} path - 图标路径
 * @return {void}
 */
const addIcons = (icons) => {};
```

```js [示例]
import { icon, addIcons } from "jui";

addIcons([
  {
    name: "arrow-up-long-fill",
    path: '<path d="M11.0001 22.0003L13 22.0004L13 8.41421L18.4142 8.41421L12 2L5.58575 8.41421L11 8.41421L11.0001 22.0003Z"></path>',
  },
]);

const testIcon = icon("arrow-up-long-fill");
```

:::
