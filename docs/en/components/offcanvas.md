# Offcanvas

## Basic Structure

::: code-group

```html [HTML]
<div class="j-offcanvas-overlay is-active"></div>
<div class="j-offcanvas is-{direction} is-{animation} is-active">
  <div class="offcanvas-content">Content</div>
</div>
```

:::

## Examples

Two animations:

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-default example-offcanvas-slide">slide</button>
    <button class="j-button is-default example-offcanvas-push">push</button>
</div>

Change direction:

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-default example-offcanvas-left">Left</button>
    <button class="j-button is-default example-offcanvas-bottom">Bottom</button>
    <button class="j-button is-default example-offcanvas-right">Right & without filter</button>
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
const { offcanvas } = jui;
// Instantiate component
const offcanvas = new jui.offcanvas({
  direction: "right",
  content: '<h2 class="text-center">Right Offcanvas</h2>',
});

// Open offcanvas
offcanvas.show();
```

:::

## Parameters

```js
/**
 * @description Instantiate Offcanvas component
 * @param {Object} options - Component configuration options
 *   - @property {string|Element} content Pop-up content, supports HTML strings or DOM elements
 *   - @property {boolean} overlay Whether to show overlay layer, default true
 *   - @property {boolean} filter Whether to add blur filter to overlay layer, default true
 *   - @property {string} animation Animation effect, default 'push', options 'push' (push), 'slide' (slide) or 'none' (none)
 *   - @property {string} direction Pop-up direction, default 'left', options 'top', 'bottom', 'left' or 'right'
 *   - @property {boolean} bgClose Whether to support clicking overlay layer to close offcanvas, default true
 *   - @property {boolean} escClose Whether to support pressing ESC key to close offcanvas, default true
 *   - @property {string} id offcanvas container ID, default null
 *   - @property {function} onShow Callback function when popping up, default null. Supports asynchronous operations, when returning Promise, will wait for Promise.resolve before continuing execution
 *   - @property {function} onShown Callback function when pop-up is complete, default null
 *   - @property {function} onHide Callback function when closing, default null. Supports asynchronous operations, when returning Promise, will wait for Promise.resolve before continuing execution
 *   - @property {function} onHidden Callback function when closing is complete, default null
 *
 * @returns {void}
 */
new offcanvas(options);
```

## Instance Methods

```js
/**
 * @description Show offcanvas
 * @returns {void}
 */
show();

/**
 * @description Close and destroy offcanvas
 * @returns {void}
 */
hide();

/**
 * @description Destroy offcanvas
 * @returns {void}
 */
destroy();
```

## Instance Properties

```js
/**
 * @description Whether it is visible
 * @type {boolean}
 */
isVisible;

/**
 * @description offcanvas root element
 * @type {Element}
 */
root;
```

## Static Methods

```js
/**
 * @description Destroy all instances.
 * @returns {void}
 */
destroyAll();
```

## Event Delegation

Set attribute `data-action="{$action_type}"` for elements, through event delegation, automatically bind and trigger events.

1. `data-action="close"` Close
2. `data-action="cancel"` Cancel

## Styling

The `Offcanvas` component only supports basic style themes, please customize personalized styles for the `offcanvas` container according to `id`.
