# 手风琴

## 基础结构

::: code-group

```html [HTML]
<div class="j-accordion">
  <div class="accordion-header">
    <span class="header-title">选项一</span>
    <span class="header-arrow">{图标}</span>
  </div>
  <div class="accordion-panel is-active">
    <div class="panel-content">选项一的内容区</div>
  </div>
  <div class="accordion-header">
    <span class="header-title">选项二</span>
    <span class="header-arrow">{图标}</span>
  </div>
  <div class="accordion-panel">
    <div class="panel-content">选项二的内容区</div>
  </div>
  {...}
</div>
```

:::

## 应用示例

<div class="example-accordion"></div>

## 使用方法

::: code-group

```php [example.php]
<?php
// 在 PHP 中动态载入组件脚本：
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
const { accordion, toast, q } = jui;

// 用法一：绑定已存在的手风琴容器
const accordionEl = q("#example-accordion");
// 初始化手风琴组件
const accordion = new accordion(accordionEl, {
  onChange: (index, name, headerEl, panelEl) => {
    toast.show(`当前选项改变为: ${index + 1}(${name})`);
  },
});

// 用法二：动态创建手风琴容器
const containerEl = q("#example-accordion-container");
// 初始化手风琴组件
const accordion = new accordion(false, {
  id: "example-accordion",
  items: [
    { title: "选项一", content: "选项一的内容区", name: "option-1" },
    { title: "选项二", content: "选项二的内容区", name: "option-2" },
    { title: "选项三", content: "选项三的内容区", name: "option-3" },
  ],
  onChange: (index, name, headerEl, panelEl) => {
    toast.show(`当前选项改变为: ${index + 1}(${name})`);
  },
});
containerEl.appendChild(accordion.el);
```

:::

## 参数说明

```js
/**
 * @description 初始化手风琴组件
 * @param {Element|false} element 手风琴容器元素，若为 false 则动态创建容器
 * @param {Object} options 组件配置选项
 *   - @property {string} id 手风琴容器的唯一标识符，默认值为 null
 *   - @property {number|string} active 默认激活的选项索引或 data-item 名称，默认值为 0
 *   - @property {boolean} collapsible 是否允许所有选项同时折叠，默认值为 false
 *   - @property {boolean} multiple 是否允许同时展开多个选项，默认值为 false
 *   - @property {function} onChange 选项改变时的回调函数，参数为 (index, name, headerEl, panelEl)。支持异步操作，返回 Promise.resolve 后继续执行。
 *   - @property {Array} items 动态创建的手风琴选项数组，每个选项包含 title、content、name 属性
 *       - @property {string} title 选项标题
 *       - @property {string|HTMLElement} content 选项内容
 *       - @property {string} name 选项的唯一标识符，可选
 *
 * @return {jui.accordion} 初始化后的手风琴组件实例
 */
new accordion(element, options);
```

## 实例方法

```js
/**
 * @description 激活指定选项
 * @param {number|string} val - 选项索引或 data-item 名称
 * @return {Promise<void>} - 异步操作完成 Promise
 */
async active(val)

/**
 * @description 更新选项
 * @param {Array<{name: string, content: string}>} items - 新的选项数据
 * @return {void}
 */
setItems(items)

/**
 * @description 销毁当前手风琴组件实例
 * @return {void}
 */
destroy()
```

## 实例属性

```js
/**
 * @description 手风琴组件实例的 DOM 元素
 * @property {Element} root - 手风琴根元素
 */
root;

/**
 * @description 当前激活的选项卡索引，multiple 模式下，返回第一个激活的选项卡索引
 * @property {number} current - 当前激活的选项卡索引
 */
current;

/**
 * @description 手风琴选项卡标题元素集合
 * @property {Array<Element[]>} headers - 手风琴选项卡标题元素集合
 */
headers;

/**
 * @description 手风琴选项卡内容元素集合
 * @property {Array<Element[]>} panels - 手风琴选项卡内容元素集合
 */
panels;
```

## 静态方法

```js
/**
 * @description 销毁所有手风琴组件实例
 * @return {void}
 */
destroyAll();
```

## 主题样式

`Accordion` 组件默认仅提供基础样式，不继承任何主题样式。由用户自定义样式表。
