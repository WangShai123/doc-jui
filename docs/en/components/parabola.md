---
client:
  entry:
    - parabola
---

# Parabola

Parabola is a parabolic animation UI primitive, often used for add-to-cart animation and similar operation feedback.

<Badge text="UI Primitive" theme="error"/>

## Example

:::details Click to expand
<div class="demo"></div>
:::

## Import

```js
import { createParabola } from 'vanilla-jui';
```

## Basic Usage

```js
const parabola = createParabola({
  from: document.querySelector('#add-to-cart'),
  to: document.querySelector('#cart'),
});

parabola.show();
```

## Options

| Field       | Type                                | Default    | Description |
| ----------- | ----------------------------------- | ---------- | ----------- |
| `from`      | `string \| Element \| Node \| null` | `null`     | Start element |
| `to`        | `string \| Element \| Node \| null` | `null`     | End element |
| `direction` | `string`                            | `'center'` | Sampling position on the start element |
| `showDelay` | `number`                            | `0`        | Delay before animation starts, in milliseconds |
| `ball`      | `object`                            | See below  | Ball style configuration |
| `className` | `object`                            | `{}`       | Ball class names |
| `onShow`    | `Function \| null`                  | `null`     | Triggered when a single ball starts animation |
| `onHidden`  | `Function \| null`                  | `null`     | Triggered when a single ball animation ends and is removed |

### direction

| Value            | Description |
| ---------------- | ----------- |
| `'center'`       | Starts from the center of the start element |
| `'top-right'`    | Starts from the top-right of the start element |
| `'top-left'`     | Starts from the top-left of the start element |
| `'bottom-right'` | Starts from the bottom-right of the start element |
| `'bottom-left'`  | Starts from the bottom-left of the start element |

### ball

| Field   | Default             | Description |
| ------- | ------------------- | ----------- |
| `color` | `var(--tone-solid)` | Ball color |
| `size`  | `12px`              | Ball size |

### `className`

| Field  | Default         | Description |
| ------ | --------------- | ----------- |
| `ball` | `parabola-ball` | Ball class name |

## Instance Properties

| Property            | Description |
| ------------------- | ----------- |
| `props`             | Normalized configuration |
| `element`           | Instance root node. `null` after destroy and when all balls are cleared |
| `runtime.destroyed` | Whether the instance has been destroyed |

- `destroyed` only means the instance has been manually destroyed. It does not mean a single animation has ended.
- After a single animation ends, only that ball is removed. The instance can still create new balls.

Start element, end element, current ball collection, and delayed-start timers are stored inside the instance closure and are not exposed as a public DOM map.

## Instance Methods

| Method    | Description |
| --------- | ----------- |
| `show`    | Creates a ball and runs the animation |
| `destroy` | Destroys the instance |

