# Parabola

`parabola` is used to create parabolic animations between two elements.

## Application Scenarios

For example: Animation when clicking to add products to the shopping cart.

## Examples

<div style="width:280px">
    <div class="flex justify-between" style="margin-bottom:120px">
        <button type="button" class="j-button is-default" id="from-point">Start 1</button>
        <button type="button" class="j-button is-outline" id="end-point-2">End 2</button>
    </div>
    <div class="flex justify-between">
        <button type="button" class="j-button is-default" id="from-point-2">Start 2</button>
        <button type="button" class="j-button is-outline" id="end-point">End 1</button>
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
const { parabola, q, on } = jui;

const from = q("#from-point");
const to = q("#end-point");
on(from, "click", () => {
  const ball = new parabola({
    from,
    to,
    direction: "top-right",
  });
  ball.start();
});
```

:::

## Parameters

```js
/**
 * @description Create a parabolic animation
 * @param {Object} options Configuration options
 *  - @property {HTMLElement|String} from Start element or selector string of the start element
 *  - @property {HTMLElement|String} to End element or selector string of the end element
 *  - @property {String} direction Parabola direction, options: top-right, top-left, bottom-right, bottom-left, center
 *  - @property {Number} showDelay Parabola display delay time, default 0
 *  - @property {Number} hideDelay Parabola disappearance delay time, default 0
 *  - @property {Function} onShow Parabola display callback
 *  - @property {Function} onHidden Callback after parabola disappears
 *  - @property {Object} ball Parabola ball parameters
 *      - @property {String} color Ball color, default var(--primary) inherits theme color
 *      - @property {String} size Ball diameter, default 10px
 */
new parabola(options);
```

## Instance Methods

```js
/**
 * @description Start the parabola
 * @method start
 * @return {void}
 */
start();

/**
 * @description Destroy the parabola
 * @method destroy
 * @return {void}
 */
destroy();
```

## Instance Properties

```js
/**
 * @description Parabola disappearance status
 * @property {Boolean} hidden
 * @default false
 */
hidden;
```

## Notes

The parabola automatically disappears by default, removes DOM elements, and destroys itself automatically.
