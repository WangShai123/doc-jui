# 快速开始

## 使用方式

在 `G3-Web` 项目中，使用 `JEALER\G3\Utilities\Frontend` 类中的 `loadStyle()` 方法和 `loadScript()` 方法或 `loadModule()`方法，按需引入层叠样式表和脚本文件。

::: code-group

```php [example.php]
<?php
use JEALER\G3\Utilities\Frontend;

// 引入 JUI CSS 层叠样式表
Frontend::loadStyle('jui');

// 引入 JUI esm 组件
Frontend::loadModule('jui');

// 引入 JUI umd 组件
Frontend::loadScript('jui');
```

```js [index.js]
/**
 * @description 以 `modal` 组件和 `UMD` 格式为例：
 */

// 方式一：直接使用 jui 对象
const testModal = new jui.modal({
  title: "测试弹窗",
  content: "这是一个测试弹窗",
});

// 方式二：解构 jui 对象
const { modal } = jui;
const testModal = new modal({
  title: "测试弹窗",
  content: "这是一个测试弹窗",
});
```

:::

## 组件预览

<a href="/dashboard.html" target="_blank"><button type="button" class="j-button is-primary">组件预览</button></a>

## 重新打包

你可以根据需求，对源文件进行重新打包。`src` 目录为源文件目录。

### CSS

相关文件使用 `@layout` 按层级引入组合，依次如下：

1. 颜色配置: `@color` - color.css
2. 主题配置: `@theme` - theme.css
3. 基础样式: `@base` - base.css
4. 布局样式: `@layout` - layout.css
5. 图标样式: `@icon` - icon.css
6. 组件样式: `@components` - components.css
7. 工具类: `@utilities` - utilities.css
8. 状态类: `@status` - status.css

### JavaScript

相关文件按组件划分，每个组件有一个单独的文件，文件名与组件名一致，如: `modal.js`。

1. `utilities.js`
2. `container.js`
3. `signal.js`
4. `store.js`
5. `modal.js`
6. `toast.js`
7. `offcanvas.js`
8. `theme.js`
9. `tabs.js`
10. `accordion.js`
11. `drop.js`
12. `tooltip.js`
13. `validator.js`
14. `parabola.js`
