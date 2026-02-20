# Icons

Provides a series of commonly used icons.

## icon

Output icons through the `icon` method.

::: code-group

```js [Parameter Description]
/**
 * @description Icon
 * @param {string} name - Icon name
 * @return {string} - svg icon HTML
 */
const icon = (name) => {};
```

```js [Example]
import { icon, newEl } from "jui";

const testElement = newEl("icon", {
  className: "test-icon",
  children: [icon("success"), "<span>Updated</span>"],
});
```

:::

## addIcons

Extend custom icons through the `addIcons` method.

::: code-group

```js [Parameter Description]
/**
 * @description Extend icons
 * @param {array[object]} icons - Icon objects
 *  - @property {string} name - Icon name
 *  - @property {string} path - Icon path
 * @return {void}
 */
const addIcons = (icons) => {};
```

```js [Example]
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
