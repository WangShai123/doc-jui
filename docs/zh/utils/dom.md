# DOM 操作

DOM 操作工具包，提供一些常用的 DOM 操作方法。

## 懒渲染

在元素之间构建依赖关系，等待依赖元素出现后再执行渲染。

::: code-group

```js [参数说明]
/**
 * 当目标元素进入可视区域时执行渲染回调，仅执行一次后自动清理。
 * 支持传入选择器字符串或 Element 对象，即使元素尚未挂载到 DOM 也能工作。
 *
 * @param {string | Element} target - CSS 选择器 或 DOM 元素
 * @param {Function} renderCallback - 渲染回调函数（仅执行一次）
 * @param {Object} [options] - 配置项
 *  - @property {number | number[]} threshold - 触发阈值，默认 0.1
 *  - @property {string} rootMargin - 根边距，默认 0px
 *  - @property {Element | null} root - 根容器，默认 null
 *  - @property {boolean} waitForDOM - 是否等待元素出现在 DOM 中（默认开启），默认 true
 */
const lazyRender = (target, renderCallback, options = {}) => {};
```

```js [示例]
import { q, lazyRender, newEl } from "jui";

// 观察 #loading 元素，当它出现在视口中时，执行渲染回调函数，创建 div.test 元素
lazyRender(q("#loading"), () => {
  console.log("Lazy Render: ready to render.");
  const test = newEl("div", {
    class: "test",
    text: "Lazy Render Test",
  });
  q("#loading").after(test);
  console.log("Lazy Render: rendered.");
});
```

:::

## 文本复制

::: code-group

```js [参数说明]
/**
 * @description 复制文本
 * @param {String|Any} text 要复制的文本，非字符串会转换为字符串
 * @return {Promise} Promise，复制成功时解析为 true，否则解析为 false
 */
const copy = (text) => {};
```

```js [示例]
import { copy } from "jui";

document.getElementById("copy-btn").addEventListener("click", async () => {
  const success = await copy("https://example.com");
  console.log(success ? "复制成功" : "复制失败");
});
```

:::

::: tip 内部逻辑

- 优先使用: `navigator.clipboard.writeText()`（现代浏览器）
- 安全降级: `document.execCommand('copy')` 或 `setSelectionRange()` 方案
  :::

## 元素创建

根据依赖，动态创建 DOM 元素并配置其属性、样式、事件等。

::: code-group

```js [参数说明]
/**
 * @description 创建 DOM 元素
 * @param {String} tagName 元素标签名
 * @param {Object} options 元素属性、样式、事件等
 *  - @property {String} is 可选，自定义元素（传给 `document.createElement(tagName, { is })`）
 *  - @property {boolean|Function} dependency 可选，根据依赖结果决定是否创建元素
 *  - @property {String} className 可选，设置元素的 class
 *  - @property {String} id 可选，设置元素的 id
 *  - @property {Object} attrs 可选，设置元素的属性
 *  - @property {Object} styles 可选，设置元素的样式
 *  - @property {Object} events 可选，事件绑定，键为事件类型，值为处理函数
 *  - @property {String} text 可选，设置元素的文本内容
 *  - @property {String} html 可选，设置元素的 HTML 内容
 *  - @property {Array|Node|String} children 可选，设置元素的子元素
 *
 * @return {HTMLElement} 创建的 DOM 元素
 * @throws {Error} 非浏览器环境，抛出异常
 */
const newEl = (tagName, options = {}) => {};
```

```js [示例]
import { newEl } from "jui";

const btn = newEl("button", {
  className: "btn btn-primary",
  id: "submit-btn",
  attrs: { type: "submit", disabled: false },
  style: { padding: "10px 20px", cursor: "pointer" },
  events: {
    click: () => console.log("提交"),
    hover: () => console.log("悬停"),
  },
  text: "提交",
});

// 条件创建
const el = newEl("div", {
  dependency: () => isAdmin, // 仅管理员可见
  text: "管理员面板",
});
```

:::

::: tip 成员优先级
`children` > `html` > `text`
:::

## 元素查询

查询单个元素，`querySelector` 的简写。

::: code-group

```js [参数说明]
/**
 * @description 查询单个元素
 * @param {String} selector 选择器
 * @param {Element} context 查询上下文，默认 document
 * @return {Element|null} 查询结果
 */
const q = (selector, context = document) => {};
```

```js [示例]
import { q } from "jui";

const el = q("#main-content");
// 在 el 内查询
const child = q(".child", el);
```

:::

## 元素引用

规范化元素引用。

::: code-group

```js [参数说明]
/**
 * @description 规范元素引用
 * @param {String|Element|Any} ref 元素引用
 * @return {Element|null} 元素对象
 */
const getEl = (ref) => {};
```

```js [示例]
import { getEl } from "jui";

// Element
const el1 = getEl(document.getElementById("btn"));
// 通过选择器查询
const el2 = getEl("#btn");
```

:::

## 事件绑定

为元素绑定事件监听器。

::: code-group

```js [参数说明]
/**
 * @description 为元素绑定事件监听器
 * @param {Element} el 元素对象
 * @param {String} eventType 事件类型
 * @param {Function} handler 事件处理函数
 * @param {Object} options 监听选项
 */
const on = (el, eventType, handler, options) => {};
```

```js [示例]
import { on } from "jui";

const btn = document.getElementById("btn");
on(
  btn,
  "click",
  () => {
    console.log("按钮被点击");
  },
  { once: true },
); // 仅监听一次
```

:::

## 事件解绑

为元素解绑事件监听器。

::: code-group

```js [参数说明]
/**
 * @description 为元素解绑事件监听器
 * @param {Element} el 元素对象
 * @param {String} eventType 事件类型
 * @param {Function} handler 事件处理函数
 * @param {Object} options 监听选项
 */
const off = (el, eventType, handler, options) => {};
```

```js [示例]
import { off } from "jui";

function handleClick() {
  console.log("点击");
}

const btn = document.getElementById("btn");
on(btn, "click", handleClick);
off(btn, "click", handleClick);
```

:::
