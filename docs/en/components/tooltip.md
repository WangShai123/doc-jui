# Tooltip

## Basic Structure

::: code-group

```html [HTML]
<div
  class="j-drop {custom-class}"
  data-drop="{options.name}"
  style="{dynamic-style}"
>
  <div class="j-tooltip">
    <div class="tooltip-message">Message</div>
  </div>
</div>
```

:::

## Examples

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-default tooltip-auto">hover</button>
    <button class="j-button is-default tooltip-click">click</button>
</div>

Different directions:

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

## Usage

::: code-group

```php [example.php]
<?php
// Load component script dynamically in PHP:
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

## Parameters

```js
/**
 * @description Initialize Tooltip
 * @param {HTMLElement} target The target element that triggers the tooltip
 * @param {Object} options - Configuration options
 *   - @property {string|null} name The value of the data-drop attribute, used as the tooltip identifier
 *   - @property {string} mode Trigger mode: hover | click, default is "hover"
 *   - @property {string} message The message content displayed in the tooltip
 *   - @property {string} position Tooltip position: auto | top-left | top-center | top-right | bottom-left | bottom-center | bottom-right | left | right, default is "auto"
 *   - @property {number} offset The distance between the tooltip and the target element (in pixels), default is 8
 *   - @property {number|{show?:number,hide?:number}} delay The delay time for showing/hiding the tooltip (in milliseconds), default is 100
 *   - @property {boolean} hoverIntent Whether to enable hoverIntent mode, default is true
 *   - @property {string|null} className Additional class name for customizing the tooltip style
 *   - @property {string|null} id Add an ID attribute to the tooltip
 *
 * @return {jui.tooltip} Tooltip instance
 */
new tooltip(target, options);
```

## Instance Methods

```js
/**
 * @description Show the tooltip
 * @param {boolean} useDelay - Whether to apply delay when showing, default is true
 * @return {void}
 */
show(useDelay);

/**
 * @description Hide the tooltip
 * @param {boolean} useDelay - Whether to apply delay when hiding, default is true
 * @return {void}
 */
hide(useDelay);

/**
 * @description Toggle the tooltip visibility
 * @return {void}
 */
toggle();

/**
 * @description Destroy the tooltip instance, remove event listeners and DOM elements
 * @return {void}
 */
destroy();
```

## Instance Properties

```js
/**
 * @description drop instance
 * @property {DROP}
 */
drop;
```

## Static Methods

```js
/**
 * @description Destroy all instances
 * @return {void}
 */
destroyAll();
```

## Notes

The `tooltip` component is implemented based on the `Drop` component, with a custom `container` UI.

Differences from `drop` component parameters:

1. `tooltip` component's `mode` parameter defaults to `hover`, indicating hover trigger mode.
2. `tooltip` component's `delay` parameter defaults to `100`, indicating a show/hide delay of `100` milliseconds.
3. `tooltip` component's `offset` parameter defaults to `8`, indicating a distance of `8` pixels from the target element.
4. `tooltip` component's `message` parameter corresponds to the `Drop` component's `content` parameter, but only supports `string` type.
