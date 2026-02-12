# Drop Container

## Basic Structure

::: code-group

```html [HTML]
<div
  class="j-drop {custom-class}"
  data-drop="{options.name}"
  style="{dynamic-style}"
>
  <!-- Default container, if no container is specified -->
  <div class="drop-container">{content}</div>
</div>
```

:::

## Examples

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-default drop-auto">hover</button>
    <button class="j-button is-default drop-click">click</button>
</div>

Different directions:

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

## Usage

::: code-group

```php [example.php]
<?php
// Dynamically load component scripts in PHP:
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
const { drop, q } = jui;
// Get the target element that triggers the drop container: the hover button above
const target = q(".drop-auto");
// Initialize the drop container
const testDrop = new drop(target, {
  name: "drop-auto",
  content: "<h4>drop Auto Content</h4>",
});
```

:::

## Parameters

```js
/**
 * @description Initialize the drop container
 * @param {HTMLElement} target The target element that triggers the drop container
 * @param {Object} options - Configuration options
 *   - @property {string|null} name The drop container data-drop attribute value, used as the drop container's identifier, default null
 *   - @property {string} mode Trigger mode hover | click, default "click"
 *   - @property {string} position Drop container position auto | top-left | top-center | top-right | bottom-left | bottom-center | bottom-right | left | right, default "auto"
 *   - @property {number} offset The distance between the drop container and the target element (unit: pixels), default 10
 *   - @property {HTMLElement|string} content The content of the drop container, if a custom container is used, pass in {HTMLElement}, if the default container is used, pass in {string}
 *   - @property {number|{show?:number,hide?:number}} delay Delay time for showing/hiding the drop container (unit: milliseconds), default 0
 *   - @property {boolean} hoverIntent Whether to enable hoverIntent mode, default true
 *   - @property {string|null} className Additional class name for customizing the drop container's style, default null
 *   - @property {string|null} id Add an id attribute to the drop container, default null
 *
 * @return {jui.drop} Drop container instance
 */
new drop(target, options);
```

## Instance Methods

```js
/**
 * @description Show the drop container
 * @param {boolean} useDelay - Whether to apply delay for showing, default true
 * @return {void}
 */
show(useDelay);

/**
 * @description Hide the drop container
 * @param {boolean} useDelay - Whether to apply delay for hiding, default true
 * @return {void}
 */
hide(useDelay);

/**
 * @description Toggle the visibility of the drop container
 * @return {void}
 */
toggle();

/**
 * @description Destroy the drop container instance, remove event listeners and DOM elements
 * @return {void}
 */
destroy();
```

## Instance Properties

```js
/**
 * @description Whether it is visible
 * @property {boolean}
 */
isVisible;

/**
 * @description Drop container root element
 * @property {HTMLElement}
 */
root;

/**
 * @description Configuration options
 * @property {Object}
 */
options;
```

## Static Methods

```js
/**
 * @description Destroy all drop container instances
 * @return {void}
 */
destroyAll();
```

## HoverIntent

1. Purpose: Determine whether the user truly intends to hover over the target element based on the distance and time of the mouse movement, rather than just moving the mouse. Avoid triggering the drop container's display and hide when the user moves the mouse too fast or too slow.
2. Prerequisite: `hoverIntent` mode, only effective when `mode` is `hover`.
3. Condition: `hoverIntent` mode, must be used in conjunction with `delay` delay.

## Notes

1. After the `drop` component is instantiated, it will be automatically added to the page and event listeners will be bound. It is in a hidden state by default.
2. The `drop` component is typically used as a base component, serving as the underlying logic reuse for components like `tooltip`, `dropdown`, etc.
3. Design principle: Composition over inheritance! The `drop` component is a behavior base class, and components like `tooltip` are visual specializations, achieving different functionalities through composition of `drop`.
