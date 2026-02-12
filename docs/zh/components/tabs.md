# 选项卡

## 基础结构

::: code-group

```html [HTML]
<div class="j-tabs is-{top|bottom|left|right}">
  <div class="tab-wrap">
    <nav class="tab-list">
      <div class="tab-item is-{active|disabled}">
        <span>选项一</span>
      </div>
      <div class="tab-item">
        <span>选项二</span>
      </div>
      <div class="tab-item">
        <span>选项三</span>
      </div>
    </nav>
  </div>
  <div class="tab-panel">
    <div class="panel-item is-{active|disabled}">
      <div>选项一的内容区</div>
    </div>
    <div class="panel-item">
      <div>选项二的内容区</div>
    </div>
    <div class="panel-item">
      <div>选项三的内容区</div>
    </div>
  </div>
</div>
```

:::

## 样式类型

1. `is-top`: 顶部选项卡，选项导航位于内容区域的顶部。
2. `is-bottom`: 底部选项卡，选项导航位于内容区域的底部。
3. `is-left`: 左侧选项卡，选项导航位于内容区域的左侧。
4. `is-right`: 右侧选项卡，选项导航位于内容区域的右侧。

## 应用示例

<div class="demo-block">
    <p>1. 基础选项卡：</p>
    <div class="j-tabs is-top" id="basic-tabs">
        <div class="tab-wrap">
            <nav class="tab-list">
                <div class="tab-item">
                    <span>选项一</span>
                </div>
                <div class="tab-item">
                    <span>选项二</span>
                </div>
                <div class="tab-item">
                    <span>选项三</span>
                </div>
            </nav>
        </div>
        <div class="tab-panel">
            <div class="panel-item">
                <div>选项一的内容区</div>
            </div>
            <div class="panel-item">
                <div>选项二的内容区</div>
            </div>
            <div class="panel-item">
                <div>选项三的内容区</div>
            </div>
        </div>
    </div>
    <p>2. 动态选项卡：</p>
    <div class="j-tabs is-top" id="dynamic-tabs"></div>
    <div class="flex gap-4 flex-wrap">
        <button class="j-button is-default add-tab-btn">添加选项卡</button>
        <button class="j-button is-danger remove-tab-btn">删除选项卡</button>
    </div>
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
const { tabs, q } = jui;

// 用法一：绑定已存在的选项卡容器
const tabEl = q("#example-tabs");
const exampleTabs = new tabs(tabEl, {
  // 默认激活选项卡索引为 0
  active: 0,
  // 禁用选项卡数组，默认空
  disabled: [],
  // 用户切换选项卡时触发的回调函数
  onChange: (index, name, tabEl, panelEl) => {
    console.log("Switched to:", index, name, tabEl, panelEl);
  },
});

// 用法二：动态创建选项卡容器
// 创建一个实例，element=false，传入 tabs 配置
const tabs = new tabs(false, {
  id: "dynamic-tabs",
  active: 0,
  disabled: ["tab-3"],
  tabs: [
    { title: "选项一", content: "这里是选项一的内容", name: "tab-1" },
    { title: "选项二", content: "这里是选项二的内容", name: "tab-2" },
    { title: "选项三", content: "这里是选项三的内容", name: "tab-3" },
  ],
  // 同步操作示例
  onChange: (index, name) => {
    console.log(`用户切换到 tab ${index}, 名称: ${name}`);
  },
  // promise 异步操作示例, config 为当前选项的配置项
  onAdd: async (index, config) => {
    console.log("onAdd", index, config);
    await new Promise((r) => setTimeout(r, 100));
  },
  // promise 异步操作示例
  onDelete: async (index, name) => {
    console.log("onDelete", index, name);
    await new Promise((r) => setTimeout(r, 100));
  },
});
// 插入到页面
q("#demo").appendChild(tabs.el);
```

:::

## 参数说明

```js
/**
 * @param {Element|false} element 选项卡容器的 DOM 元素。如果为 `false`，则创建一个新的容器元素。
 * @param {object} options 选项卡组件的配置选项。
 *  -  @property {string} id 选项卡容器的 ID 名称。默认值为 `null`。
 *  -  @property {string} direction tabs 方向 (top | bottom | left | right)。默认值为 `top`。
 *  -  @property {number|string} active 默认激活选项卡的索引或 `data-tab` 属性值。默认值为 `0`。
 *  -  @property {number|string|Array} disabled 禁用选项卡的索引、`data-tab` 属性值或数组。默认值为空数组 `[]`。
 *  -  @property {function} onChange 用户切换选项卡时触发的回调函数。默认值为`null`。支持异步操作，返回 Promise .resolve 后继续执行。
 *  -  @property {Array<object>} tabs 选项卡配置数组。每个元素为一个对象，包含 `title`（选项卡标题）、`content`（选项卡内容）和 `name`（选项卡 `data-tab` 属性值）。默认值为空数组 `[]`。
 *  -  @property {function} onAdd 添加选项卡时触发的回调函数。默认值为`null`。支持异步操作，返回 Promise .resolve 后继续执行。
 *  -  @property {function} onDelete 删除选项卡时触发的回调函数。默认值为`null`。支持异步操作，返回 Promise .resolve 后继续执行。
 *
 * @returns {Tabs} 选项卡组件实例。
 */
new tabs(element, options);
```

## 实例方法

```js
/**
 * @description 切换到指定索引或 `data-tab` 属性值的选项卡。
 * @param {number|string} val 选项卡的索引或 `data-tab` 属性值。
 * @returns {Promise} 一个 Promise 对象，当选项卡切换完成后 resolve。
 */
activate(val);

/**
 * @description 重新初始化选项卡实例，根据新的配置选项更新选项卡状态。
 * @param {object} options 选项卡组件的配置选项。
 * @returns {Tabs} 选项卡组件实例。
 */
reInit(options);

/**
 * @description 添加一个新的选项卡。
 * @param {object} tabConfig 选项卡配置对象，包含 `title`（选项卡标题）、`content`（选项卡内容）和 `name`（选项卡 `data-tab` 属性值）。
 * @returns {Promise} 一个 Promise 对象，当选项卡添加完成后 resolve。
 */
addTab(tabConfig);

/**
 * @description 删除指定索引或 `data-tab` 属性值的选项卡。
 * @param {number|string} val 选项卡的索引或 `data-tab` 属性值。
 * @returns {Promise} 一个 Promise 对象，当选项卡删除完成后 resolve。
 */
deleteTab(val);

/**
 * @description 禁用指定索引或 `data-tab` 属性值的选项卡。
 * @param {number|string} val 选项卡的索引或 `data-tab` 属性值。
 * @returns {Promise} 一个 Promise 对象，当选项卡禁用完成后 resolve。
 */
disableTab(val);

/**
 * @description 启用指定索引或 `data-tab` 属性值的选项卡。
 * @param {number|string} val 选项卡的索引或 `data-tab` 属性值。
 * @returns {Promise} 一个 Promise 对象，当选项卡启用完成后 resolve。
 */
enableTab(val);

/**
 * @description 销毁选项卡实例，移除所有事件监听器并清除引用。
 * @returns {void}
 */
destroy();
```

## 实例属性

```js
/**
 * @description 根元素。
 * @property {Element} root
 */
root;

/**
 * @description 当前激活的选项卡索引。
 * @property {number} current
 */
current;

/**
 * @description 选项卡是否为垂直方向。
 * @property {boolean} isVertical
 */
isVertical;

/**
 * @description 是否可拖拽。
 * @property {boolean} draggable
 */
draggable;

/**
 * @description 选项卡配置项。
 * @property {object} options
 */
options;

/**
 * @description 获取所有选项卡元素组成的数组。
 * @property {HTMLElment[]} tabs
 */
tabs;

/**
 * @description 获取所有内容面板元素组成的数组。
 * @property {HTMLElement[]} panels
 */
panels;
```

## 静态方法

```js
/**
 * @description 销毁所有选项卡实例。
 * @returns {void}
 */
destroyAll();
```

## 拖拽功能

Tabs 组件默认支持拖拽功能：

- 当选项卡数量超过容器可显示范围时，自动启用拖拽功能。
- 支持横向和纵向拖拽。

自动重新检测是否需要拖拽功能：

- 当窗口尺寸发生变化时
- 当选项卡状态变化时（添加、删除、禁用、启用）

## 主题样式

`Tabs` 组件默认仅提供基础样式，不继承任何主题样式。由用户自定义样式表。
