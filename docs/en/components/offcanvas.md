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

```vp-script
import { createOffcanvas, q } from 'vanilla-jui';
import { jsx, insert, createSignal } from 'vanilla-signal';

const demo1 = jsx('div', {
  style: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  children: [
    jsx('button', {
      className: 'j-button is-default',
      children: 'Default',
      onClick: () => {
        createOffcanvas({
          onHidden: (i) => {
            i.destroy();
          },
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: 'Change Direction and Remove Blur Filter',
      onClick: () => {
        createOffcanvas({
          direction: 'right',
          filter: false,
          onHidden: (i) => {
            i.destroy();
          },
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: 'Stack 1',
      onClick: () => {
        createOffcanvas({
          direction: 'top',
          overlay: false,
          onHidden: (i) => {
            i.destroy();
          },
          content: jsx('div', {
            style: 'display:flex;justify-content:center;align-items:center;height:100%;background:var(--ui-fg-muted)',
            children: jsx`<button class="j-button is-default" data-action="close">Close</button>`
          })
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: 'Stack 2',
      onClick: () => {
        createOffcanvas({
          direction: 'bottom',
          overlay: false,
          filter: false,
          onHidden: (i) => {
            i.destroy();
          },
          content: jsx('div', {
            style: 'display:flex;justify-content:center;align-items:center;height:100%;background:var(--tone-solid)',
            children: jsx`<button class="j-button is-default" data-action="close">Close</button>`
          })
        })
          .build()
          .show();
      },
    }),
  ],
});

const [offcanvasCount, setOffcanvasCount] = createSignal(10);
let asyncOffcanvasRequestCount = 0;
let offcanvasCountdownTimer = null;
let offcanvasCountdownStopTimer = null;
const startOffcanvasCountdown = () => {
  if (offcanvasCountdownTimer) clearInterval(offcanvasCountdownTimer);
  if (offcanvasCountdownStopTimer) clearTimeout(offcanvasCountdownStopTimer);

  setOffcanvasCount(10);
  offcanvasCountdownTimer = setInterval(() => {
    setOffcanvasCount((value) => {
      const next = value - 1;
      return next > 0 ? next : 0;
    });
  }, 1000);
  offcanvasCountdownStopTimer = setTimeout(() => {
    clearInterval(offcanvasCountdownTimer);
    offcanvasCountdownTimer = null;
    offcanvasCountdownStopTimer = null;
    setOffcanvasCount(0);
  }, 10000);
};
const loadAsyncOffcanvasContent = () =>
  new Promise((resolve) => {
    const requestIndex = asyncOffcanvasRequestCount + 1;
    setTimeout(() => {
      asyncOffcanvasRequestCount = requestIndex;
      startOffcanvasCountdown();
      resolve(
        jsx('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            padding: '24px',
          },
          children: [
            jsx('p', {
              children: `Async API request #${requestIndex}`,
            }),
            jsx('p', {
              style: {marginBlock: '4px'},
              children: 'This offcanvas has caching enabled. The cache time is 10 seconds.',
            }),
            jsx('p', {
              style: {marginBlock: '4px'},
              children: 'Within 10 seconds, repeatedly opening the offcanvas will show the cached content.',
            }),
            jsx('p', {
              style: {marginBlock: '4px'},
              children: 'After 10 seconds, the content expires and will be requested and rendered again.',
            }),
            jsx('p', {
              style: {
                marginTop: '24px',
                display: 'flex',
                gap: '8px',
              },
              children: [
                jsx('button', {
                  className: 'j-button is-secondary',
                  type: 'button',
                  children: () =>
                    offcanvasCount() > 0
                      ? `Countdown ${offcanvasCount()} seconds`
                      : 'Cache expired',
                }),
                jsx('button', {
                  className: 'j-button is-primary',
                  type: 'button',
                  'data-action': 'close',
                  children: 'Close',
                }),
              ],
            }),
          ],
        })
      );
    }, 1000);
  });
const asyncOffcanvas = createOffcanvas({
    direction: 'right',
    content: () => loadAsyncOffcanvasContent(),
    cache: true,
    ttl: 10000,
});
asyncOffcanvas.build();
const demo2 = jsx('div', {
    style: {
        marginBlock: '16px',
    },
    children: jsx('button', {
        className: 'j-button is-outline',
        children: 'Async Content Offcanvas',
        onClick: () => {
            asyncOffcanvas.show();
        },
    }),
});
insert(q('.demo'), [demo1, demo2]);
```
