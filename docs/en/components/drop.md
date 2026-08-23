# Drop

Drop is a dropdown container component and a general floating-layer behavior controller.

<Badge text="UI Primitive" theme="error"/> <Badge text="RenderableContent"/>

## Example

:::details Click to expand
<div class="demo"></div>
:::

## Import

```ts
import { createDrop } from 'vanilla-jui';
```

## Basic Usage

```ts
const drop = createDrop(button, {
  mode: 'click',
  position: 'bottom-left',
  content: 'Drop content',
});
```

## Options

`createDrop(DOMReference, options)`

| Option        | Type                                         | Default   | Description |
| ------------- | -------------------------------------------- | --------- | ----------- |
| `mode`        | `'click' \| 'hover'`                         | `'click'` | Trigger mode |
| `position`    | `string`                                     | `'auto'`  | Floating-layer position |
| `offset`      | `number`                                     | `10`      | Distance from target |
| `content`     | `RenderableContent`                          | `''`      | Floating-layer content. Function content can return async content |
| `cache`       | `boolean`                                    | `false`   | Whether to cache function content result |
| `ttl`         | `number`                                     | `0`       | Content cache TTL in milliseconds |
| `delay`       | `number \| { show?: number, hide?: number }` | `0`       | Show/hide delay in milliseconds |
| `delay.show`  | `number`                                     | `0`       | Show delay |
| `delay.hide`  | `number`                                     | `0`       | Hide delay |
| `hoverIntent` | `boolean`                                    | `true`    | Enables hover-intent detection in hover mode |
| `name`        | `string \| null`                             | `null`    | Container name, written to `data-drop` |
| `id`          | `string \| null`                             | `null`    | Container id. Generated when omitted |
| `className`   | `object`                                     | See below | Custom class names |
| `onShown`     | `Function \| null`                           | `null`    | Callback after shown |
| `onHidden`    | `Function \| null`                           | `null`    | Callback after hidden |

### position

The default `position` is `auto`, which chooses a position intelligently.

Available values: `top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`, `left`, `right`.

### hoverIntent

- Purpose: checks mouse movement distance and time to decide whether the user really intends to hover on the target, instead of just passing through.
- Scope: only works when `mode` is `hover`.
- Condition: should be used together with `delay`.

### className

| Field       | Default          | Description |
| ----------- | ---------------- | ----------- |
| `root`      | `j-drop`         | Floating-layer root |
| `container` | `drop-container` | Content container |

## Instance Properties

| Property    | Description |
| ----------- | ----------- |
| `props`     | Normalized options |
| `element`   | Floating-layer root; `null` after `destroy()` |
| `target`    | Trigger element; `null` after `destroy()` |
| `isVisible` | Whether it is currently visible |
| `delayShow` | Normalized show delay in milliseconds |
| `delayHide` | Normalized hide delay in milliseconds |

## Instance Methods

| Method           | Default | Description |
| ---------------- | ------- | ----------- |
| `show(useDelay)` | `true`  | Shows the layer, applying delay by default |
| `hide(useDelay)` | `true`  | Hides the layer, applying delay by default |
| `toggle()`       |         | Toggles visible state |
| `destroy()`      |         | Destroys the instance, unbinds events, and removes DOM |

```vp-script
import { q, createDrop } from 'vanilla-jui';
import { jsx, insert, createSignal } from 'vanilla-signal';

insert(q('.demo'), jsx('div', {
  style: {
    display:'flex',
    flexWrap:'wrap',
    gap:'8px'
  },
  children: [
    jsx`<div class="j-button is-default click-demo">Click trigger</div>`,
    jsx`<div class="j-button is-default hover-demo">Hover trigger</div>`,
    jsx`<div class="j-button is-default async-demo">Async content</div>`,
  ],
}));
createDrop(q('.click-demo'), {
  content: 'Drop Content',
});
createDrop(q('.hover-demo'), {
  mode: 'hover',
  hoverIntent: true,
  delay: 50,
  content: 'Drop Content',
});

const [count, setCount] = createSignal(10);
let asyncDropCountdownTimer = null;
let asyncDropCountdownStopTimer = null;
const startAsyncDropCountdown = () => {
  if (asyncDropCountdownTimer) clearInterval(asyncDropCountdownTimer);
  if (asyncDropCountdownStopTimer) clearTimeout(asyncDropCountdownStopTimer);

  setCount(10);
  asyncDropCountdownTimer = setInterval(() => {
    setCount((value) => Math.max(value - 1, 0));
  }, 1000);
  asyncDropCountdownStopTimer = setTimeout(() => {
    clearInterval(asyncDropCountdownTimer);
    asyncDropCountdownTimer = null;
    asyncDropCountdownStopTimer = null;
    setCount(0);
  }, 10000);
};
const loadAsyncDropContent = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      startAsyncDropCountdown();
      resolve(
        jsx('div', {
          style: { padding: '8px' },
          children: () =>
            `Rendered successfully. Cached for 10 seconds. ${count() > 0 ? `Countdown ${count()}s` : 'Cache expired'}`,
        })
      );
    }, 1000);
  });

createDrop(q('.async-demo'), {
  position: 'bottom-left',
  content: () => loadAsyncDropContent(),
  cache: true,
  ttl: 10000,
});
```
