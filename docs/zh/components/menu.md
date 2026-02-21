# 菜单

## 基础结构

使用 `WordPress` 默认菜单结结构。

- `menu-item-has-children`: 菜单项有子菜单
- `is-active`: 子菜单项被激活

::: details HTML

```html
<nav class="j-mobile-menu">
  <ul class="menu" id="${menuId}">
    <li class="menu-item" id="menu-item-${id}">
      <a href="#" class="menu-link">
        <span class="menu-icon">${icon('')}</span>
        <span class="menu-text">一级菜单项</span>
      </a>
    </li>
    <li class="menu-item menu-item-has-children" id="menu-item-${id}">
      <a href="#" class="menu-link">
        <span class="menu-icon">${icon('')}</span>
        <span class="menu-text">一级菜单项</span>
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

## 应用示例

<div id="mobile-menu-container"></div>

## 使用方法

::: code-group

```php [example.php]
<?php
// 在 PHP 中动态载入组件脚本：
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
import { menu, t, q, postJson, restApi } from "jui";

// 通过请求获取手机版主菜单数据
const menuApi = "api/v1/menus";
const demoItemsData = postJson(restApi + menuApi, {
  queryBy: "location",
  location: "mobile-main",
});

// 根据请求数据动态构建菜单组件
const mobileMenu = new menu(false, {
  items: demoItemsData,
  backText: t("Back"),
});
// 执行构建菜单并绑定交互事件
mobileMenu.build();

q(".test-menu-container").append(mobileMenu.menu);
```

:::

## 参数说明

```js
/**
 * @description 绑定或创建一个手机版菜单（侧边栏菜单 或 底部工具栏菜单）
 * @param {HTMLElement|Strting|false} element - 菜单元素或选择器或 false（创建一个新的）
 * @param {Object} options - 菜单选项参数
 *  - @property {String} id - 菜单id，默认 自动生成随机id
 *  - @property {String} backText - 返回按钮文本，默认 "Back"
 *  - @property {String} type - 菜单类型，默认 "mobile"，可选 "bottom"
 *  - @property {Array[Object]} items - 菜单项数据，必填。每个项是一个对象，包含以下属性：
 *     - @var {String} id - 菜单项id
 *     - @var {String} title - 菜单项标题
 *     - @var {String} url - 菜单项链接
 *     - @var {String} target - 菜单项链接的 target 属性
 *     - @var {String} classes - 菜单项的类名
 *     - @var {Number} menu_item_parent - 菜单项的父级id
 *     - @var {Array[Object]} children - 菜单项的子项集
 *
 * @return {Object} 菜单实例
 */
new menu(element, options);
```

## 实例方法

```js
/**
 * @description 构建动态菜单并绑定交互事件，或 仅绑定交互事件
 * @return {Object} 菜单实例
 */
build();

/**
 * @description 设置菜单项
 * @param {array[object]} items - 菜单项数据集
 * @return {Object} 菜单实例
 */
setItems(items);

/**
 * @description 删除菜单项
 * @param {Number|String} id - 菜单项 ID
 * @return {Object} 菜单实例
 */
removeItem(id);

/**
 * @description 销毁菜单实例
 * @return {void}
 */
destroy();
```

## 实例属性

```js
/**
 * @description 菜单DOM元素
 * @type {HTMLElement}
 */
menu;
```

## 静态方法

```js
/**
 * @description 销毁所有菜单实例
 * @static
 * @return {void}
 */
DestroyAll();
```

## 静态属性

```js
/**
 * @description 菜单实例集合
 * @type {Set}
 * @static
 * @readonly
 */
Menu.instances;
```
