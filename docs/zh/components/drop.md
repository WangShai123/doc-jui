# 下拉容器

## 基础结构

::: code-group

```html [HTML]
<div
  class="j-drop {custom-class}"
  data-drop="{options.name}"
  style="{dynamic-style}"
>
  <!-- 默认容器，如果未指定容器 -->
  <div class="drop-container">{content}</div>
</div>
```

:::

## 应用示例

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-default drop-auto">hover</button>
    <button class="j-button is-default drop-click">click</button>
</div>

不同方向：

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-default drop-top-left">top-left</button>
    <button class="j-button is-default drop-top-center">top-center</button>
    <button class="j-button is-default drop-top-right">top-right</button>
    <button class="j-button is-default drop-bottom-left">bottom-left</button>
    <button class="j-button is-default drop-bottom-center">bottom-center</button>
    <button class="j-button is-default drop-bottom-right">bottom-right</button>
    <button class="j-button is-default drop-left">left</button>
    <button class="j-button is-default drop-right">right</button>
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
const { drop, q } = jui;
// 获取触发下拉容器的目标元素: 上面的 hover 按钮
const target = q(".drop-auto");
// 初始化下拉容器
const testDrop = new drop(target, {
  name: "drop-auto",
  content: "<h4>drop Auto Content</h4>",
});
```

:::

## 参数说明

```js
/**
 * @description 初始化下拉容器
 * @param {HTMLElement} target 触发下拉容器的目标元素
 * @param {Object} options - 配置选项
 *   - @property {string|null} name 下拉容器 data-drop 属性值，作为下拉容器的标识，默认 null
 *   - @property {string} mode 触发模式 hover | click，默认 "click"
 *   - @property {string} position 下拉容器位置 auto | top-left | top-center | top-right | bottom-left | bottom-center | bottom-right | left | right，默认 "auto"
 *   - @property {number} offset 下拉容器与目标元素的距离（单位：像素），默认 10
 *   - @property {HTMLElement|string} content 下拉容器的内容，如果自定义容器，则传入{HTMLElement}，如果使用默认容器，则传入{string}
 *   - @property {number|{show?:number,hide?:number}} delay 下拉容器显示/隐藏的延迟时间（单位：毫秒），默认 0
 *   - @property {boolean} hoverIntent 是否启用 hoverIntent 模式，默认 true
 *   - @property {string|null} className 额外的类名，用于自定义下拉容器的样式，默认 null
 *   - @property {string|null} id 为下拉容器添加id属性，默认 null
 *
 * @return {jui.drop} 下拉容器实例
 */
new drop(target, options);
```

## 实例方法

```js
/**
 * @description 显示下拉容器
 * @param {boolean} useDelay - 是否应用延迟显示，默认 true
 * @return {void}
 */
show(useDelay);

/**
 * @description 隐藏下拉容器
 * @param {boolean} useDelay - 是否应用延迟隐藏，默认 true
 * @return {void}
 */
hide(useDelay);

/**
 * @description 切换下拉容器的显示状态
 * @return {void}
 */
toggle();

/**
 * @description 销毁下拉容器实例，移除事件监听和 DOM 元素
 * @return {void}
 */
destroy();
```

## 实例属性

```js
/**
 * @description 是否显示
 * @property {boolean}
 */
isVisible;

/**
 * @description 下拉容器根元素
 * @property {HTMLElement}
 */
root;

/**
 * @description 配置选项
 * @property {Object}
 */
options;
```

## 静态方法

```js
/**
 * @description 销毁所有下拉容器实例
 * @return {void}
 */
destroyAll();
```

## hoverIntent

1. 作用：根据用户鼠标移动的距离和时间，判断用户是否真正意图悬停在目标元素上，而不是只是移动了鼠标。避免用户鼠标移动过快或过慢时，触发下拉容器的显示和隐藏。
2. 前提：`hoverIntent` 模式，仅在 `mode` 为 `hover` 时生效。
3. 条件：`hoverIntent` 模式，需配合 `delay` 延时使用。

## 注意事项

1. `drop` 组件实例化后，会自动添加到页面中，并绑定事件监听。默认处于隐藏状态。
2. `drop` 组件，通常作为基础组件，作为 `tooltip`, `dropdown` 等组件的底层逻辑复用基础。
3. 设计原则：组合大于继承！`drop` 组件是行为基类，`tooltip` 等组件是视觉特化，通过组合 `drop` 实现不同的功能。
