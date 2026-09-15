---
client:
  entry:
    - sticky
---

# Sticky

Sticky keeps elements fixed while scrolling, often used for sidebar widget sticking. It is a behavior controller that works around existing DOM.

<Badge text="UI Primitive" theme="error"/>

## Example

:::details Click to expand
Scroll to see the sticky and stacking effect:
<div class="demo"></div>
:::

## Import

```js
import { createSticky } from 'vanilla-jui';
```

## Basic Usage

```js
const sticky = createSticky({
  target: '.sidebar .widget',
  top: 16,
  gap: 16,
});

sticky.build();
```

`target` can be a single element, CSS selector, or element array. When multiple targets are passed, the component calculates from top to bottom in resolved order:

```js
createSticky({
  target: [
    document.querySelector('#toc'),
    document.querySelector('#latest-posts'),
  ],
}).build();
```

## Options

`createSticky(props)`

| Field       | Type                                         | Default     | Description |
| ----------- | -------------------------------------------- | ----------- | ----------- |
| `target`    | `string \| Element \| Node \| Array \| null` | `null`      | Target elements that need sticky behavior |
| `parent`    | `string \| Element \| Node \| null`          | `null`      | Optional single scope used to limit target queries |
| `max`       | `number`                                     | `10`        | Maximum number of target elements this instance can manage |
| `top`       | `number`                                     | `16`        | Top offset of the first sticky item, in px |
| `gap`       | `number`                                     | `16`        | Gap between multiple sticky elements, in px |
| `overflow`  | `'destroy' \| 'ignore'`                      | `'destroy'` | Strategy when the result exceeds `max` |
| `reactive`  | `boolean`                                    | `false`     | Whether to observe parent DOM changes and automatically resolve targets again |
| `onReBuild` | `Function \| null`                           | `null`      | Triggered after each top recalculation, with the current Sticky instance |

### target

`target` can be a single element, CSS selector, or element array. When multiple targets are passed, the component calculates from top to bottom in resolved order:

```js
createSticky({
  target: [
    document.querySelector('#toc'),
    document.querySelector('#latest-posts'),
  ],
}).build();
```

### parent

In complex layouts, passing a `parent` scope is recommended to limit selector queries inside a specific parent.

- When `target` is a string, only matching elements inside `parent` are queried.
- When `target` is an element or element array, only elements that belong to `parent` are kept.

### max

`max` controls how many target elements the current instance may manage. When exceeded, `overflow` decides the strategy:

```js
createSticky({
  parent: '.sidebar',
  target: '.widget',
  max: 3,
  overflow: 'destroy',
}).build();
```

| `overflow`  | Behavior |
| ----------- | -------- |
| `'destroy'` | Keeps the last `max` targets from the current resolved result and ignores earlier targets |
| `'ignore'`  | Keeps the current instance empty and does not modify target elements |

## Instance Properties

| Property                 | Type        | Description |
| ------------------------ | ----------- | ----------- |
| `props`                  | `object`    | Normalized configuration object |
| `state`                  | `DeepStore` | Reactive state |
| `runtime`                | `object`    | Runtime state |
| `runtime.built`          | `boolean`   | Whether it has been built |
| `runtime.destroyed`      | `boolean`   | Whether it has been destroyed |
| `runtime.reBuilding`     | `boolean`   | Whether recalculation is running |
| `runtime.reBuildFrameId` | `number`    | Recalculation frame ID |

`Sticky`'s parent, targets, and original style snapshots are stored in the closure and are not exposed as a public DOM map.

## Instance Methods

| Method      | Description |
| ----------- | ----------- |
| `build()`   | Creates the Sticky instance and returns the current instance |
| `reBuild()` | Resolves the target collection again |
| `destroy()` | Destroys the instance and restores original target styles |

### reBuild

Resolves the target collection again and returns the current instance.

- Suitable for manual calls after targets are added/removed or content height changes.
- When `reactive: true`, parent DOM changes automatically schedule this method.

## State Boundary

The calculation result of each target inside the current instance:

- Property: `state.items`
- Type: `Array<{ key: string, index: number, top: number }>`

