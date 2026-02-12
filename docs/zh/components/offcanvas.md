# 滑动侧边栏

## 基础结构

::: code-group

```html [HTML]
<div class="j-offcanvas-overlay is-active"></div>
<div class="j-offcanvas is-{direction} is-{animation} is-active">
  <div class="offcanvas-content">内容域</div>
</div>
```

:::

## 应用示例

两种动画：

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-default example-offcanvas-slide">slide 动画</button>
    <button class="j-button is-default example-offcanvas-push">push 动画</button>
</div>

换个方向：

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-default example-offcanvas-left">左方</button>
    <button class="j-button is-default example-offcanvas-bottom">下方</button>
    <button class="j-button is-default example-offcanvas-right">右方，且没有模糊滤镜</button>
</div>

## 使用方法

::: code-group

```php [example.php]
<?php
// 在 PHP 中动态载入组件脚本：
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
const { offcanvas } = jui;
// 实例化组件
const offcanvas = new jui.offcanvas({
  direction: "right",
  content: '<h2 class="text-center">Right Offcanvas</h2>',
});

// 打开 offcanvas
offcanvas.show();
```

:::

## 参数说明

```js
/**
 * @description 实例化 Offcanvas 组件
 * @param {Object} options - 组件配置选项
 *   - @property {string|Element} content 弹出内容，支持 HTML 字符串或 DOM 元素
 *   - @property {boolean} overlay 是否显示遮罩层，默认 true
 *   - @property {boolean} filter 是否为遮罩层添加模糊滤镜，默认 true
 *   - @property {string} animation 动画效果，默认 'push'，可选 'push'（推送）或 'slide'（滑动）或 'none'（无）
 *   - @property {string} direction 弹出方向，默认 'left'，可选 'top'、'bottom'、'left' 或 'right'
 *   - @property {boolean} bgClose 是否支持点击遮罩层关闭 offcanvas，默认 true
 *   - @property {boolean} escClose 是否支持按下 ESC 键关闭 offcanvas，默认 true
 *   - @property {string} id offcanvas 容器 ID，默认 null
 *   - @property {function} onShow 弹出时回调函数，默认 null。支持异步操作，返回 Promise 时会等待 Promise.resolve 后再继续执行
 *   - @property {function} onShown 弹出完成时回调函数，默认 null
 *   - @property {function} onHide 关闭时回调函数，默认 null。支持异步操作，返回 Promise 时会等待 Promise.resolve 后再继续执行
 *   - @property {function} onHidden 关闭完成时回调函数，默认 null
 *
 * @returns {void}
 */
new offcanvas(options);
```

## 实例方法

```js
/**
 * @description 显示 offcanvas
 * @returns {void}
 */
show();

/**
 * @description 关闭和销毁 offcanvas
 * @returns {void}
 */
hide();

/**
 * @description 销毁 offcanvas
 * @returns {void}
 */
destroy();
```

## 实例属性

```js
/**
 * @description 是否显示
 * @type {boolean}
 */
isVisible;

/**
 * @description offcanvas 根元素
 * @type {Element}
 */
root;
```

## 静态方法

```js
/**
 * @description 销毁所有实例。
 * @returns {void}
 */
destroyAll();
```

## 事件委托

为元素设置属性 `data-action="{$action_type}"`，通过事件委托，自动绑定和触发事件。

1. `data-action="close"` 关闭
2. `data-action="cancel"` 取消

## 主题样式

`Offcanvas` 组件仅支持基础的样式主题，请根据 `id` 自定义 `offcanvas` 容器的个性化样式。
