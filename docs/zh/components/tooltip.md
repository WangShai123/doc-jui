# 提示框

## 基础结构

::: code-group

```html [HTML]
<div
  class="j-drop {custom-class}"
  data-drop="{options.name}"
  style="{dynamic-style}"
>
  <div class="j-tooltip">
    <div class="tooltip-message">消息</div>
  </div>
</div>
```

:::

## 应用示例

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-default tooltip-auto">hover</button>
    <button class="j-button is-default tooltip-click">click</button>
</div>

不同方向：

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-default tooltip-top-left">top-left</button>
    <button class="j-button is-default tooltip-top-center">top-center</button>
    <button class="j-button is-default tooltip-top-right">top-right</button>
    <button class="j-button is-default tooltip-bottom-left">bottom-left</button>
    <button class="j-button is-default tooltip-bottom-center">bottom-center</button>
    <button class="j-button is-default tooltip-bottom-right">bottom-right</button>
    <button class="j-button is-default tooltip-left">left</button>
    <button class="j-button is-default tooltip-right">right</button>
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
const { tooltip, q } = jui;

const target = q(".tooltip-auto");
const tooltip = new tooltip(target, {
  message: "Tooltip Message.",
});
```

:::

## 参数说明

```js
/**
 * @description 初始化提示框
 * @param {HTMLElement} target 触发提示框的目标元素
 * @param {Object} options - 配置选项
 *   - @property {string|null} name 提示框 data-drop 属性值，作为提示框的标识符
 *   - @property {string} mode 触发模式 hover | click，默认值为 "hover"
 *   - @property {string} message 提示框显示的消息内容
 *   - @property {string} position 提示框位置 auto | top-left | top-center | top-right | bottom-left | bottom-center | bottom-right | left | right，默认值为 "auto"
 *   - @property {number} offset 提示框与目标元素的距离（单位：像素），默认值为 8
 *   - @property {number|{show?:number,hide?:number}} delay 下拉容器显示/隐藏的延迟时间（单位：毫秒），默认值为 100
 *   - @property {boolean} hoverIntent 是否启用 hoverIntent 模式，默认值为 true
 *   - @property {string|null} className 额外的类名，用于自定义提示框的样式
 *   - @property {string|null} id 为提示框添加id属性
 *
 * @return {jui.tooltip} 提示框实例
 */
new tooltip(target, options);
```

## 实例方法

```js
/**
 * @description 显示提示框
 * @param {boolean} useDelay - 是否应用延迟显示，默认值为 true
 * @return {void}
 */
show(useDelay);

/**
 * @description 隐藏提示框
 * @param {boolean} useDelay - 是否应用延迟隐藏，默认值为 true
 * @return {void}
 */
hide(useDelay);

/**
 * @description 切换提示框显示状态
 * @return {void}
 */
toggle();

/**
 * @description 销毁提示框实例，移除事件监听和 DOM 元素
 * @return {void}
 */
destroy();
```

## 实例属性

```js
/**
 * @description drop 实例
 * @property {DROP}
 */
drop;
```

## 静态方法

```js
/**
 * @description 销毁所有实例
 * @return {void}
 */
destroyAll();
```

## 注意事项

`tooltip` 组件是基于 `Drop` 组件组合实现的，自定义 `container` UI。

与 `drop` 组件参数区别：

1. `tooltip` 组件的 `mode` 参数，默认值为 `hover`，表示悬停触发模式。
2. `tooltip` 组件的 `delay` 参数，默认值为 `100`，表示显示和隐藏的延迟时间 `100` 毫秒。
3. `tooltip` 组件的 `offset` 参数，默认值为 `8`，表示提示框与目标元素的距离 `8` 像素。
4. `tooltip` 组件的 `message` 参数，对应 `Drop` 组件的 `content` 参数，但仅支持 `string` 类型。
