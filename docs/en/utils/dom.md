# DOM Operations

DOM operation toolkit that provides commonly used DOM manipulation methods.

## Lazy Render

Build dependency relationships between elements and wait for dependent elements to appear before executing rendering.

::: code-group

```js [参数说明]
/**
 * Execute the render callback when the target element enters the viewport, and automatically clean up after execution (only once).
 * Supports passing in a selector string or an Element object, and works even if the element is not yet mounted to the DOM.
 *
 * @param {string | Element} target - CSS selector or DOM element
 * @param {Function} renderCallback - Render callback function (executed only once)
 * @param {Object} [options] - Configuration options
 *  - @property {number | number[]} threshold - Trigger threshold, default is 0.1
 *  - @property {string} rootMargin - Root margin, default is 0px
 *  - @property {Element | null} root - Root container, default is null
 *  - @property {boolean} waitForDOM - Whether to wait for the element to appear in the DOM (enabled by default), default is true
 */
const lazyRender = (target, renderCallback, options = {}) => {};
```

```js [示例]
import { q, lazyRender, newEl } from "jui";

// Observe the #loading element, and when it appears in the viewport, execute the render callback to create a div.test element
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

## Text Copy

::: code-group

```js [Parameter Description]
/**
 * @description Copy text
 * @param {String|Any} text Text to copy, non-string will be converted to string
 * @return {Promise} Promise that resolves to true on successful copy, otherwise resolves to false
 */
const copy = (text) => {};
```

```js [Example]
import { copy } from "jui";

document.getElementById("copy-btn").addEventListener("click", async () => {
  const success = await copy("https://example.com");
  console.log(success ? "Copy successful" : "Copy failed");
});
```

:::

::: tip Internal Logic

- Priority use: `navigator.clipboard.writeText()` (modern browsers)
- Safe fallback: `document.execCommand('copy')` or `setSelectionRange()` approach
  :::

## Element Creation

Dynamically create DOM elements based on dependencies and configure their attributes, styles, events, etc.

::: code-group

```js [Parameter Description]
/**
 * @description Create DOM element
 * @param {String} tagName Element tag name
 * @param {Object} options Element attributes, styles, events, etc.
 *  - @property {String} is Optional, custom element (passed to `document.createElement(tagName, { is })`)
 *  - @property {boolean|Function} dependency Optional, determine whether to create element based on dependency result
 *  - @property {String} className Optional, set element's class
 *  - @property {String} id Optional, set element's id
 *  - @property {Object} attrs Optional, set element's attributes
 *  - @property {Object} styles Optional, set element's styles
 *  - @property {Object} events Optional, event binding, key is event type, value is handler function
 *  - @property {String} text Optional, set element's text content
 *  - @property {String} html Optional, set element's HTML content
 *  - @property {Array|Node|String} children Optional, set element's child elements
 *
 * @return {HTMLElement} Created DOM element
 * @throws {Error} Non-browser environment, throws exception
 */
const newEl = (tagName, options = {}) => {};
```

```js [Example]
import { newEl } from "jui";

const btn = newEl("button", {
  className: "btn btn-primary",
  id: "submit-btn",
  attrs: { type: "submit", disabled: false },
  style: { padding: "10px 20px", cursor: "pointer" },
  events: {
    click: () => console.log("Submit"),
    hover: () => console.log("Hover"),
  },
  text: "Submit",
});

// Conditional creation
const el = newEl("div", {
  dependency: () => isAdmin, // Only visible to administrators
  text: "Admin Panel",
});
```

:::

::: tip Member Priority
`children` > `html` > `text`
:::

## Element Query

Query a single element, shorthand for `querySelector`.

::: code-group

```js [Parameter Description]
/**
 * @description Query a single element
 * @param {String} selector Selector
 * @param {Element} context Query context, defaults to document
 * @return {Element|null} Query result
 */
const q = (selector, context = document) => {};
```

```js [Example]
import { q } from "jui";

const el = q("#main-content");
// Query within el
const child = q(".child", el);
```

:::

## Element Reference

Normalize element references.

::: code-group

```js [Parameter Description]
/**
 * @description Normalize element reference
 * @param {String|Element|Any} ref Element reference
 * @return {Element|null} Element object
 */
const getEl = (ref) => {};
```

```js [Example]
import { getEl } from "jui";

// Element
const el1 = getEl(document.getElementById("btn"));
// Query by selector
const el2 = getEl("#btn");
```

:::

## Event Binding

Bind event listeners to elements.

::: code-group

```js [Parameter Description]
/**
 * @description Bind event listener to element
 * @param {Element} el Element object
 * @param {String} eventType Event type
 * @param {Function} handler Event handler function
 * @param {Object} options Listener options
 */
const on = (el, eventType, handler, options) => {};
```

```js [Example]
import { on } from "jui";

const btn = document.getElementById("btn");
on(
  btn,
  "click",
  () => {
    console.log("Button clicked");
  },
  { once: true },
); // Listen only once
```

:::

## Event Unbinding

Unbind event listeners from elements.

::: code-group

```js [Parameter Description]
/**
 * @description Unbind event listener from element
 * @param {Element} el Element object
 * @param {String} eventType Event type
 * @param {Function} handler Event handler function
 * @param {Object} options Listener options
 */
const off = (el, eventType, handler, options) => {};
```

```js [Example]
import { off } from "jui";

function handleClick() {
  console.log("Click");
}

const btn = document.getElementById("btn");
on(btn, "click", handleClick);
off(btn, "click", handleClick);
```

:::
