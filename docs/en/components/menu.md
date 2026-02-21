# Menu

## Basic Structure

Uses the default menu structure of `WordPress`.

- `menu-item-has-children`: Menu item has sub-menu
- `is-active`: Sub-menu item is activated

::: details HTML

```html
<nav class="j-mobile-menu">
  <ul class="menu" id="${menuId}">
    <li class="menu-item" id="menu-item-${id}">
      <a href="#" class="menu-link">
        <span class="menu-icon">${icon('')}</span>
        <span class="menu-text">Level One Item</span>
      </a>
    </li>
    <li class="menu-item menu-item-has-children" id="menu-item-${id}">
      <a href="#" class="menu-link">
        <span class="menu-icon">${icon('')}</span>
        <span class="menu-text">Level One Item</span>
      </a>
      <ul class="sub-menu">
        <li class="menu-item" id="menu-item-${id}">...</li>
        <li class="menu-item" id="menu-item-${id}">...</li>
        <li class="menu-item" id="menu-item-${id}">...</li>
      </ul>
    </li>
  </ul>
</nav>
```

:::

## Examples

<div id="mobile-menu-container"></div>

## Usage

::: code-group

```php [example.php]
<?php
// Dynamically load component scripts in PHP:
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
import { menu, t, q, postJson, restApi } from "jui";

// Fetch mobile main menu data via request
const menuApi = "api/v1/menus";
const demoItemsData = postJson(restApi + menuApi, {
  queryBy: "location",
  location: "mobile-main",
});

// Dynamically build menu component based on request data
const mobileMenu = new menu(false, {
  items: demoItemsData,
  backText: t("Back"),
});
// Execute menu building and bind interaction events
mobileMenu.build();

q(".test-menu-container").append(mobileMenu.menu);
```

:::

## Parameters

```js
/**
 * @description bind or create a mobile menu
 * @param {HTMLElement|Strting|false} element - menu element or selector or false to create a new one
 * @param {Object} options - menu options
 *  - @property {String} id - menu id, default: a random id generated
 *  - @property {String} backText - back button text, default: "Back"
 *  - @property {String} type - menu type, default "mobile", optional "bottom"
 *  - @property {Array[Object]} items - menu items data, required. Each item is an object with the following properties:
 *     - @var {String} id - menu item id
 *     - @var {String} title - menu item title
 *     - @var {String} url - menu item url
 *     - @var {String} target - menu item href target
 *     - @var {String} classes - menu item classes
 *     - @var {Number} menu_item_parent - menu item parent id
 *     - @var {array[object]} children - menu item children
 *
 * @return {Object} menu instance
 */
new menu(element, options);
```

## Instance Methods

```js
/**
 * @description Build dynamic menu and bind interaction events, or only bind interaction events
 * @return {Object} menu instance
 */
build();

/**
 * @description Set menu items
 * @param {array[object]} items - menu items
 * @return {Object} menu instance
 */
setItems(items);

/**
 * @description Remove menu item
 * @param {Number|String} id - menu item id
 * @return {Object} menu instance
 */
removeItem(id);

/**
 * @description Destroy menu instance
 * @return {void}
 */
destroy();
```

## Instance Properties

```js
/**
 * @description Menu DOM element
 * @type {HTMLElement}
 */
menu;
```

## Static Methods

```js
/**
 * @description Destroy all menu instances
 * @static
 * @return {void}
 */
DestroyAll();
```

## Static Properties

```js
/**
 * @description Collection of menu instances
 * @type {Set}
 * @static
 * @readonly
 */
Menu.instances;
```
