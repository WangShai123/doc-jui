# 主题模式

使用 theme 组件来让您的应用程序支持自定义主题，包含元素：

1. 主题颜色
2. 边框圆角尺寸
3. 阴影尺寸
4. 字体大小
5. 暗色模式

## 应用示例

访问 [组件预览](/dashboard.html)，点击页面右上角 `主题` 按钮，打开主题交互面板。

机制：为 `HTML` 文档 `document.documentElement` 按需添加对应类名：`j-theme-indigo`, `j-radius-sm`, `j-shadow-sm`, `j-font-sm`, `dark`。

## 使用方法

::: code-group

```php [example.php]
<?php
// 在 PHP 中动态载入组件脚本：
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
const { offcanvas, theme, on } = jui;

// 初始化主题组件
const newTheme = new theme();
// 获取主题交互面板（返回的是 DOM 节点）
const themePanel = newTheme.createPanel();
// 挂载到您需要的 DOM 节点 CustomNode 上
CustomNode.appendChild(themePanel);
// 比如 挂载到 offcanvas 组件上
const themeOffcanvas = new offcanvas({
  overlay: true,
  direction: "right",
  content: themePanel,
});
on(yourButton, "click", () => {
  themeOffcanvas.show();
});
```

:::

## 参数说明

```js
/**
 * @description 创建主题交互面板
 * @param {String} containerClass 主题交互面板容器类名 ，默认 "j-theme-pallette"
 * @param {Object} panelConfig 主题默认配置
 *   - @property {String} mode 主题模式，默认 dark，可选：light, dark
 *   - @property {String} theme 主题颜色，默认 indigo，可选：gray, olive, tomato, ruby, pink, violet, indigo, blue, teal, grass, mint, lime, yellow, orange, gold
 *   - @property {String} radius 边框圆角尺寸，默认 sm，可选：none, sm, md
 *   - @property {String} shadow 阴影尺寸，默认 sm，可选：none, sm, md
 *   - @property {String} font 字体大小，默认 sm，可选：sm, md
 * @returns {HTMLElement} 主题交互面板节点
 */
createPanel((containerClass = "j-theme-pallette"), (panelConfig = null));
```

## 本地存储

- 主题配置会被存储在本地 `localstorage` 中。
- 下次打开应用时，会优先根据用户本地配置恢复主题。
- 存储键名 `jui.theme`

## 多语言支持

主题交互面板会根据用户设备的语言设置，自动切换语言。

支持多语言：

- 中文
- 英文
