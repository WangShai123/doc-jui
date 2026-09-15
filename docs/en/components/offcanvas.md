---
client:
  entry:
    - offcanvas
---

# Offcanvas

Offcanvas is a global slide-out panel component for side menus, filter panels, mobile drawers, and similar UI.

<Badge text="defineComponent" theme="primary"/> <Badge text="RenderableContent"/>

## Example

:::details Click to expand details
<div class="demo"></div>
:::

## Import

```js
import { createOffcanvas } from 'vanilla-jui';
```

## Basic Usage

Use `createOffcanvas(props)` to create an Offcanvas instance:

```js
const panel = createOffcanvas({
  direction: 'right',
  content: 'Hello Panel',
}).build();

// Sync call
panel.show();

// Async call
await panel.show();
```

## Parameters

`createOffcanvas(props)`

In JUI, the `RenderableContent` type means any legal content that can be rendered, including `string | number | boolean | Node | Array | Function | null`.

| Parameter      | Type                                     | Default        | Description                                      |
| -------------- | ---------------------------------------- | -------------- | ------------------------------------------------ |
| `content`      | `RenderableContent`                      | `""`           | Panel content. Function content can return async content |
| `overlay`      | `boolean`                                | `true`         | Whether to show the overlay                      |
| `filter`       | `boolean`                                | `true`         | Whether the overlay enables the blur filter      |
| `bodyOverflow` | `boolean`                                | `true`         | Whether to control body overflow while shown     |
| `cache`        | `boolean`                                | `false`        | Whether to cache the result of function content  |
| `ttl`          | `number`                                 | `0`            | Cache lifetime in milliseconds                   |
| `direction`    | `"top" \| "right" \| "bottom" \| "left"` | `"left"`       | Slide-out direction, written to `data-direction` |
| `animate`      | `string`                                 | `"slide"`      | Animation name, written to `data-animate`        |
| `bgClose`      | `boolean`                                | `true`         | Close by clicking the overlay                    |
| `escClose`     | `boolean`                                | `true`         | Close with Escape                                |
| `id`           | `string \| null`                         | Auto-generated | Panel id                                         |
| `className`    | `object`                                 | See table below | Custom style classes                            |
| `onShow`       | `Function \| null`                       | `null`         | Before-show callback, supports Promise           |
| `onShown`      | `Function \| null`                       | `null`         | After-show callback                              |
| `onHide`       | `Function \| null`                       | `null`         | Before-hide callback, supports Promise           |
| `onHidden`     | `Function \| null`                       | `null`         | After-hide callback                              |

### content

All `RenderableContent` `content` usage is the same.

Please refer to the `content` usage in [Modal](modal.html). This section is omitted here.

### className

| Field      | Default               |
| ---------- | --------------------- |
| `root`     | `j-offcanvas`         |
| `overlay`  | `j-offcanvas-overlay` |
| `content`  | `offcanvas-content`   |

## Instance Properties

| Property            | Description                                      |
| ------------------- | ------------------------------------------------ |
| `props`             | Normalized initialization configuration          |
| `state`             | Reactive state object and the main source for runtime UI |
| `runtime.built`     | Whether the owned view has been created          |
| `runtime.mounted`   | Whether the root node is currently mounted       |
| `runtime.destroyed` | Whether the instance has been destroyed          |
| `element`           | Stable root node after build                     |

### state

Put runtime data that needs attention into the reactive `state`:

| Field      | Description                                |
| ---------- | ------------------------------------------ |
| `content`  | Current content source                     |
| `loading`  | Async function `content` is being resolved |
| `visible`  | Whether it is visible                      |

Common controller methods also include own(), use(), on(), off(), and emit(). See [Define Component](../core/define.html) for their meaning.

## Instance Methods

| Method                  | Description                                      |
| ----------------------- | ------------------------------------------------ |
| `build()`               | Create offline DOM                               |
| `show()`                | Insert into the document and show the panel      |
| `hide()`                | Hide and remove the panel from the document      |
| `setState({ content })` | Update content state                             |
| `destroy()`             | Destroy the instance and release events, timers, and DOM |

## data-action

The content area can contain custom elements with the `data-action` attribute. Offcanvas delegates and handles them in one place.

| Value   | Behavior        |
| ------- | --------------- |
| `close` | Close the panel |

