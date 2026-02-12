# Accordion

## Basic Structure

::: code-group

```html [HTML]
<div class="j-accordion">
  <div class="accordion-header">
    <span class="header-title">Option One</span>
    <span class="header-arrow">{Icon}</span>
  </div>
  <div class="accordion-panel is-active">
    <div class="panel-content">Content area for Option One</div>
  </div>
  <div class="accordion-header">
    <span class="header-title">Option Two</span>
    <span class="header-arrow">{Icon}</span>
  </div>
  <div class="accordion-panel">
    <div class="panel-content">Content area for Option Two</div>
  </div>
  {...}
</div>
```

:::

## Usage Example

<div class="example-accordion"></div>

## Usage

::: code-group

```php [example.php]
<?php
// Dynamically load component scripts in PHP:
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
const { accordion, toast, q } = jui;

// Method 1: Bind to an existing accordion container
const accordionEl = q("#example-accordion");
// Initialize the accordion component
const accordion = new accordion(accordionEl, {
  onChange: (index, name, headerEl, panelEl) => {
    toast.show(`Current option changed to: ${index + 1}(${name})`);
  },
});

// Method 2: Dynamically create an accordion container
const containerEl = q("#example-accordion-container");
// Initialize the accordion component
const accordion = new accordion(false, {
  id: "example-accordion",
  items: [
    {
      title: "Option One",
      content: "Content area for Option One",
      name: "option-1",
    },
    {
      title: "Option Two",
      content: "Content area for Option Two",
      name: "option-2",
    },
    {
      title: "Option Three",
      content: "Content area for Option Three",
      name: "option-3",
    },
  ],
  onChange: (index, name, headerEl, panelEl) => {
    toast.show(`Current option changed to: ${index + 1}(${name})`);
  },
});
containerEl.appendChild(accordion.el);
```

:::

## Parameters

```js
/**
 * @description Initialize the accordion component
 * @param {Element|false} element The accordion container element; if false, dynamically create the container
 * @param {Object} options Component configuration options
 *   - @property {string} id Unique identifier for the accordion container, default value is null
 *   - @property {number|string} active Default active option index or data-item name, default value is 0
 *   - @property {boolean} collapsible Whether all options can be collapsed simultaneously, default value is false
 *   - @property {boolean} multiple Whether multiple options can be expanded at the same time, default value is false
 *   - @property {function} onChange Callback function when the option changes, parameters are (index, name, headerEl, panelEl). Supports asynchronous operations; continues execution after returning Promise.resolve.
 *   - @property {Array} items Array of accordion options created dynamically, each option contains title, content, and name properties
 *       - @property {string} title Option title
 *       - @property {string|HTMLElement} content Option content
 *       - @property {string} name Unique identifier for the option, optional
 *
 * @return {jui.accordion} Initialized accordion component instance
 */
new accordion(element, options);
```

## Instance Methods

```js
/**
 * @description Activate the specified option
 * @param {number|string} val - Option index or data-item name
 * @return {Promise<void>} - Promise resolved after asynchronous operation completes
 */
async active(val)

/**
 * @description Update options
 * @param {Array<{name: string, content: string}>} items - New option data
 * @return {void}
 */
setItems(items)

/**
 * @description Destroy the current accordion component instance
 * @return {void}
 */
destroy()
```

## Instance Properties

```js
/**
 * @description DOM element of the accordion component instance
 * @property {Element} root - Root element of the accordion
 */
root;

/**
 * @description Index of the currently active tab; in multiple mode, returns the index of the first active tab
 * @property {number} current - Index of the currently active tab
 */
current;

/**
 * @description Collection of accordion tab header elements
 * @property {Array<Element[]>} headers - Collection of accordion tab header elements
 */
headers;

/**
 * @description Collection of accordion tab content elements
 * @property {Array<Element[]>} panels - Collection of accordion tab content elements
 */
panels;
```

## Static Methods

```js
/**
 * @description Destroy all accordion component instances
 * @return {void}
 */
destroyAll();
```

## Styling

`Accordion` 组件默认仅提供基础样式，不继承任何主题样式。由用户自定义样式表。
