# Tabs

## Basic Structure

::: code-group

```html [HTML]
<div class="j-tabs is-{top|bottom|left|right}">
  <div class="tab-wrap">
    <nav class="tab-list">
      <div class="tab-item is-{active|disabled}">
        <span>Tab One</span>
      </div>
      <div class="tab-item">
        <span>Tab Two</span>
      </div>
      <div class="tab-item">
        <span>Tab Three</span>
      </div>
    </nav>
  </div>
  <div class="tab-panel">
    <div class="panel-item is-{active|disabled}">
      <div>Tab One Content</div>
    </div>
    <div class="panel-item">
      <div>Tab Two Content</div>
    </div>
    <div class="panel-item">
      <div>Tab Three Content</div>
    </div>
  </div>
</div>
```

:::

## Styles

1. `is-top`: Top tabs, tab navigation is located at the top of the content area.
2. `is-bottom`: Bottom tabs, tab navigation is located at the bottom of the content area.
3. `is-left`: Left tabs, tab navigation is located on the left side of the content area.
4. `is-right`: Right tabs, tab navigation is located on the right side of the content area.

## Examples

<div class="demo-block">
    <p>1. Basic Tabs:</p>
    <div class="j-tabs is-top" id="basic-tabs">
        <div class="tab-wrap">
            <nav class="tab-list">
                <div class="tab-item">
                    <span>Tab One</span>
                </div>
                <div class="tab-item">
                    <span>Tab Two</span>
                </div>
                <div class="tab-item">
                    <span>Tab Three</span>
                </div>
            </nav>
        </div>
        <div class="tab-panel">
            <div class="panel-item">
                <div>Tab One Content</div>
            </div>
            <div class="panel-item">
                <div>Tab Two Content</div>
            </div>
            <div class="panel-item">
                <div>Tab Three Content</div>
            </div>
        </div>
    </div>
    <p>2. Dynamic Tabs:</p>
    <div class="j-tabs is-top" id="dynamic-tabs"></div>
    <div class="flex gap-4 flex-wrap">
        <button class="j-button is-default add-tab-btn">Add Tab</button>
        <button class="j-button is-danger remove-tab-btn">Remove Tab</button>
    </div>
</div>

## Usage

::: code-group

```php [example.php]
<?php
// Dynamically load component scripts in PHP:
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
const { tabs, q } = jui;

// Usage One: Bind to an existing tabs container
const tabEl = q("#example-tabs");
const exampleTabs = new tabs(tabEl, {
  // Default active tab index is 0
  active: 0,
  // Disabled tab indices array, default is empty
  disabled: [],
  // Callback function when switching tabs
  onChange: (index, name, tabEl, panelEl) => {
    console.log("Switched to:", index, name, tabEl, panelEl);
  },
});

// Usage Two: Dynamically create a tabs container
// Create an instance with element=false, pass tabs config
const dynamicTabs = new tabs(false, {
  id: "dynamic-tabs",
  active: 0,
  disabled: ["tab-3"],
  tabs: [
    { title: "Tab One", content: "Tab One Content", name: "tab-1" },
    { title: "Tab Two", content: "Tab Two Content", name: "tab-2" },
    { title: "Tab Three", content: "Tab Three Content", name: "tab-3" },
  ],
  // Synchronous operation example
  onChange: (index, name) => {
    console.log(`User switched to tab ${index}, name: ${name}`);
  },
  // Promise asynchronous operation example, config is the config of current tab
  onAdd: async (index, config) => {
    console.log("onAdd", index, config);
    await new Promise((r) => setTimeout(r, 100));
  },
  // Promise asynchronous operation example
  onDelete: async (index, name) => {
    console.log("onDelete", index, name);
    await new Promise((r) => setTimeout(r, 100));
  },
});
// Insert into the page
q("#demo").appendChild(dynamicTabs.el);
```

:::

## Parameters

```js
/**
 * @param {Element|false} element The DOM element of the tab container. If `false`, a new container element is created.
 * @param {object} options Configuration options for the tab component.
 *  -  @property {string} id The ID name of the tab container. Default value is `null`.
 *  -  @property {string} direction Tabs direction (top | bottom | left | right). Default value is `top`.
 *  -  @property {number|string} active The index or `data-tab` attribute value of the default active tab. Default value is `0`.
 *  -  @property {number|string|Array} disabled The index, `data-tab` attribute value, or array of disabled tabs. Default value is empty array `[]`.
 *  -  @property {function} onChange Callback function triggered when user switches tabs. Default value is `null`. Supports asynchronous operations, continues execution after Promise.resolve.
 *  -  @property {Array<object>} tabs Tab configuration array. Each element is an object containing `title` (tab title), `content` (tab content), and `name` (tab `data-tab` attribute value). Default value is empty array `[]`.
 *  -  @property {function} onAdd Callback function triggered when adding a tab. Default value is `null`. Supports asynchronous operations, continues execution after Promise.resolve.
 *  -  @property {function} onDelete Callback function triggered when deleting a tab. Default value is `null`. Supports asynchronous operations, continues execution after Promise.resolve.
 *
 * @returns {Tabs} Tab component instance.
 */
new tabs(element, options);
```

## Instance Methods

```js
/**
 * @description Switch to the tab with the specified index or `data-tab` attribute value.
 * @param {number|string} val The index or `data-tab` attribute value of the tab.
 * @returns {Promise} A Promise object that resolves when the tab switch is completed.
 */
activate(val);

/**
 * @description Reinitialize the tab instance and update the tab state according to new configuration options.
 * @param {object} options Configuration options for the tab component.
 * @returns {Tabs} Tab component instance.
 */
reInit(options);

/**
 * @description Add a new tab.
 * @param {object} tabConfig Tab configuration object containing `title` (tab title), `content` (tab content), and `name` (tab `data-tab` attribute value).
 * @returns {Promise} A Promise object that resolves when the tab is added.
 */
addTab(tabConfig);

/**
 * @description Delete the tab with the specified index or `data-tab` attribute value.
 * @param {number|string} val The index or `data-tab` attribute value of the tab.
 * @returns {Promise} A Promise object that resolves when the tab is deleted.
 */
deleteTab(val);

/**
 * @description Disable the tab with the specified index or `data-tab` attribute value.
 * @param {number|string} val The index or `data-tab` attribute value of the tab.
 * @returns {Promise} A Promise object that resolves when the tab is disabled.
 */
disableTab(val);

/**
 * @description Enable the tab with the specified index or `data-tab` attribute value.
 * @param {number|string} val The index or `data-tab` attribute value of the tab.
 * @returns {Promise} A Promise object that resolves when the tab is enabled.
 */
enableTab(val);

/**
 * @description Destroy the tab instance, remove all event listeners and clear references.
 * @returns {void}
 */
destroy();
```

## Instance Properties

```js
/**
 * @description Root element.
 * @property {Element} root
 */
root;

/**
 * @description Current active tab index.
 * @property {number} current
 */
current;

/**
 * @description Whether the tabs are in vertical direction.
 * @property {boolean} isVertical
 */
isVertical;

/**
 * @description Whether draggable.
 * @property {boolean} draggable
 */
draggable;

/**
 * @description Tab configuration options.
 * @property {object} options
 */
options;

/**
 * @description Get an array of all tab elements.
 * @property {HTMLElment[]} tabs
 */
tabs;

/**
 * @description Get an array of all content panel elements.
 * @property {HTMLElement[]} panels
 */
panels;
```

## Static Methods

```js
/**
 * @description Destroy all tab instances.
 * @returns {void}
 */
destroyAll();
```

## Drag Functionality

The Tabs component supports drag functionality by default:

- When the number of tabs exceeds the container's displayable range, drag functionality is automatically enabled.
- Supports both horizontal and vertical dragging.

Automatic re-detection of whether drag functionality is needed:

- When window dimensions change
- When tab status changes (add, delete, disable, enable)

## Styling

The `Tabs` component provides only basic styles by default and does not inherit any theme styles. Users customize the stylesheet.
