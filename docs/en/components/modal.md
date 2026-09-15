---
client:
  entry:
    - modal
---

# Modal

Modal runtime interaction is driven by `state` created with `createDeepStore`. `build()` only creates the Modal skeleton. When `show()` runs, content is mounted idempotently according to `content`, `cache`, and `ttl`.

<Badge text="defineComponent" theme="primary"/> <Badge text="RenderableContent"/>

## Example

:::details Click to expand
<div class="demo"></div>
:::

## Import

```js
import { createModal } from 'vanilla-jui';
```

## Basic Usage

Use `createModal(props)` to create a Modal instance:

```js
const dialog = createModal({
  text: {
    title: 'Delete item',
    confirm: 'Delete',
    cancel: 'Cancel',
  },
  content: 'Are you sure you want to delete this item?',
  onConfirm: async (modal) => {
    await deleteItem();
    modal.hide();
  },
}).build();

dialog.show();
```

## Options

`createModal(props)`

In JUI, `RenderableContent` means legal renderable content, including `string | number | boolean | Node | Array | Function | null`.

| Option       | Type                                                               | Default    | Description                                                               |
| ------------ | ------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------- |
| `content`    | `string \| number \| boolean \| Node \| Array \| Function \| null` | `''`       | Initial content, also the initial value of `state.content`                |
| `cache`      | `boolean`                                                          | `false`    | Whether to cache the resolved result of function-style async `content`    |
| `ttl`        | `number`                                                           | `0`        | Content cache TTL in milliseconds; `0` means no expiration                |
| `position`   | `string`                                                           | `'center'` | Modal layout position, such as `top-center` or `bottom-right`             |
| `showCancel` | `boolean`                                                          | `true`     | Whether to show the cancel button                                         |
| `showClose`  | `boolean`                                                          | `true`     | Whether to show the top-right close button                                |
| `header`     | `boolean`                                                          | `true`     | Whether to render the header node                                         |
| `footer`     | `boolean`                                                          | `true`     | Whether to render the footer node                                         |
| `fullscreen` | `boolean`                                                          | `false`    | Whether to use fullscreen mode                                            |
| `escClose`   | `boolean`                                                          | `false`    | Whether Esc can close the modal                                           |
| `bgClose`    | `boolean`                                                          | `false`    | Whether clicking the backdrop can close the modal                         |
| `onShow`     | `(modal) => void \| Promise<void>`                                 | `null`     | Triggered when showing starts                                             |
| `onShown`    | `(modal) => void \| Promise<void>`                                 | `null`     | Triggered after shown                                                     |
| `onHide`     | `(modal) => void \| Promise<void>`                                 | `null`     | Triggered when hiding starts                                              |
| `onHidden`   | `(modal) => void \| Promise<void>`                                 | `null`     | Triggered after hidden and removed from the DOM                           |
| `onConfirm`  | `(modal) => void \| Promise<void>`                                 | `null`     | Triggered on confirm. The caller decides whether to close                 |
| `onCancel`   | `(modal) => void \| Promise<void>`                                 | `null`     | Triggered by `data-action="cancel/close"`                                 |
| `style`      | `string \| object \| null`                                         | `null`     | Inline style for the modal body                                           |
| `id`         | `string \| null`                                                   | Generated  | Modal id. Empty string or `null` generates one automatically              |
| `text`       | `object`                                                           | See below  | Initial text configuration                                                |
| `className`  | `object`                                                           | See below  | Overrides structural class names. Only takes effect during initialization |

`content` enters `state` as the initial state. At runtime it can be updated through `state.content` or `setState({ content })`. Other options are instance structure or behavior configuration and stay fixed after the instance is created.

### content

`content` is `RenderableContent`. It supports string, number, boolean, DOM node, node array, function, and empty value.

- Strings are always rendered as text and are not parsed as HTML.
- Function-style `content` receives the current Modal instance, and its return value is rendered by the same content rules.

```js
const dialog = createModal({
  text: { title: 'Preview' },
  content: (modal) => `Current title: ${modal.props.text.title}`,
}).build();
```

Function-style `content` can return a Promise.

- While async `content` is resolving, Modal automatically sets `state.loading` to `true`, and the view layer shows the overlay and loading icon animation.
- Synchronous `content` functions do not enter loading.
- When `cache: false`, function-style `content` is resolved again on every show.
- When `cache: true`, Modal reuses the resolved result from the same content source.
- `ttl` is in milliseconds. `0` means no expiration.

```js
const dialog = createModal({
  text: { title: 'Remote preview' },
  cache: true,
  ttl: 30_000,
  content: async () => {
    const data = await loadPreview();
    return data.summary;
  },
}).build();
```

### text

Custom text. The `text` configuration contains:

| Option    | Type     | Default   | Description         |
| --------- | -------- | --------- | ------------------- |
| `title`   | `string` | `Tip`     | Modal title         |
| `confirm` | `string` | `Confirm` | Confirm button text |
| `cancel`  | `string` | `Cancel`  | Cancel button text  |

### className

Custom class names. The `className` configuration contains:

| Option       | Default                  | Description            |
| ------------ | ------------------------ | ---------------------- |
| `layout`     | `j-popup-layout`         | Modal layout root node |
| `modal`      | `j-modal`                | Modal body             |
| `header`     | `modal-header`           | Header                 |
| `body`       | `modal-body`             | Content area           |
| `footer`     | `modal-footer`           | Footer                 |
| `title`      | `modal-title`            | Title                  |
| `button`     | `j-button`               | Base button class      |
| `closeBtn`   | `is-icon is-sm is-ghost` | Close button class     |
| `cancelBtn`  | `is-ghost`               | Cancel button class    |
| `confirmBtn` | `is-primary`             | Confirm button class   |

## Instance Properties

| Property            | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `props`             | Normalized initialization configuration                |
| `state`             | Reactive state object, also the main runtime UI source |
| `runtime.built`     | Whether the owned view has been created                |
| `runtime.mounted`   | Whether the root node is currently mounted             |
| `runtime.destroyed` | Whether the instance has been destroyed                |
| `element`           | Stable root node after build                           |

### state

Runtime data that needs attention is stored in reactive `state`:

| Field        | Description                                   |
| ------------ | --------------------------------------------- |
| `visible`    | Whether it is visible                         |
| `content`    | Current content source                        |
| `loading`    | Function-style async `content` is resolving   |
| `processing` | Async `onConfirm` or `onCancel` is processing |

During `processing`, confirm, cancel, close, Esc, backdrop click, and related interaction entries are blocked.

`setState()` only accepts legal state patches. It throws if a field name or value type does not match.

## Instance Methods

| Method             | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| `build()`          | Creates the Modal skeleton and returns the current instance                    |
| `show()`           | Sets `state.visible = true`                                                    |
| `hide()`           | Sets `state.visible = false`                                                   |
| `setState(patch)`  | Sets reactive state fields                                                     |
| `reset()`          | Restores initial content, clears cache and runtime state                       |
| `mount(container)` | Builds and mounts the root node. Normal business code more often uses `show()` |
| `unmount()`        | Removes the root node while keeping state and view owner                       |
| `destroy()`        | Destroys the instance and releases DOM, events, and reactive resources         |

Shared controller methods also include `own()`, `use()`, `on()`, `off()`, and `emit()`. See [Define Component](../core/define.html).

### Lifecycle

`build()` creates the owned view and stable root node, but does not resolve content or insert anything into the document.

`show()` sets `state.visible = true`, mounts the root node, locks scrolling, binds events, and resolves `state.content` according to the cache policy.

`hide()` sets `state.visible = false` and starts the leave animation. Modal enter and leave are coordinated by the shared presence mechanism.

`destroy()` destroys the instance and releases DOM, events, and reactive resources.

## data-action

The content area can contain custom elements with `data-action`. Modal handles them through delegated processing.

| Value     | Behavior                                         |
| --------- | ------------------------------------------------ |
| `close`   | Runs `onCancel(modal)`, then hides after success |
| `cancel`  | Runs `onCancel(modal)`, then hides after success |
| `confirm` | Runs `onConfirm(modal)`                          |

`bgClose` and `escClose` directly hide Modal and do not trigger `onCancel`.

## Practice

Try combining `createModal` and `createFlow` to build a dynamic authorization flow modal, including register, login, forgot password, success feedback, failure feedback, and similar states.
