---
client:
  entry:
    - toast
---

# Toast

The Toast component displays temporary messages. It is usually used to tell users the result of an action or show a short prompt. It does not need to be instantiated. You show messages directly through static methods.

<Badge text="UI Primitive" theme="error"/>

## Example

:::details Click to expand details
<div class="demo"></div>
:::

## Import

```ts
import { Toast } from 'vanilla-jui';
```

## Basic Usage

```ts
const { success, error, lite, confirm } = Toast;

success('Saved');
error('Save failed', { duration: 3000 });

lite('Updated');

confirm('Confirm delete?', {
  onConfirm: () => {
    // Confirm deletion
  },
});
```

## Static Methods

| Method                | Default            | Description                               |
| --------------------- | ------------------ | ----------------------------------------- |
| `Toast.show(m, o)`    | `''`, `{}`         | Basic toast, shows a message with a theme |
| `Toast.info(m, o)`    | `''`, `{}`         | Shortcut for show                         |
| `Toast.primary(m, o)` | `''`, `{}`         | Shortcut for show                         |
| `Toast.success(m, o)` | `''`, `{}`         | Shortcut for show                         |
| `Toast.warning(m, o)` | `''`, `{}`         | Shortcut for show                         |
| `Toast.error(m, o)`   | `''`, `{}`         | Shortcut for show                         |
| `Toast.lite(m, d, c)` | `''`, `2000`, `{}` | Lightweight toast                         |
| `Toast.confirm(m, p)` | `''`, `{}`         | Confirm toast                             |
| `Toast.configure(o)`  | `{}`               | Configure default class names             |
| `Toast.hide(t)`       |                    | Hide a specific toast                     |
| `Toast.clearAll()`    |                    | Clear all toasts                          |
| `Toast.destroyAll()`  |                    | Alias of `clearAll()`                     |

`theme` values: `info` | `success` | `warning` | `error` | `primary`

### show

`Toast.show(message, options)`

| Option         | Default      | Description                                                          |
| -------------- | ------------ | -------------------------------------------------------------------- |
| `duration`     | `3000`       | Message display time in milliseconds                                 |
| `theme`        | `info`       | Message theme                                                        |
| `once`         | `false`      | Whether to show only once                                            |
| `loading`      | `false`      | Reactive loading state. When `true`, shows the loading icon and text |
| `text`         | `{}`         | Text configuration                                                   |
| `text.loading` | `Loading...` | Text shown while loading                                             |
| `onClose`      | `null`       | Triggered after the user actively closes the toast                   |
| `onCancel`     | `null`       | Triggered when the toast is closed before `loading` changes          |

### loading

Pass a reactive `loading` signal from business code to show a loading state during an operation.

When the user clicks close, Toast first enters the closing flow and releases the reactive binding.

```js
const [loading, setLoading] = createSignal(true);

Toast.info('Saved', {
  duration: 3000,
  loading,
  text: { loading: 'Saving...' },
  onCancel: () => controller.abort(),
});

submit().finally(() => setLoading(false));
```

### Shortcuts

The `show` method provides several shortcuts for different theme states:

- `info`
- `primary`
- `success`
- `warning`
- `error`

### confirm

`Toast.confirm(message, options)`

| Option         | Default         | Description                     |
| -------------- | --------------- | ------------------------------- |
| `once`         | `true`          | Whether to show only once       |
| `text`         | `{}`            | Action button text              |
| `text.close`   | Close/Close     | Close button text               |
| `text.confirm` | Confirm/Confirm | Confirm button text             |
| `onConfirm`    | `null`          | Callback for the confirm button |
| `onClose`      | `null`          | Callback for the close button   |

## className

`Toast.configure({ className })` can override the global default class names.

`show()`, shortcuts, and `confirm()` support one-time overrides through the `className` option.

`lite()` is for the simplest use cases. Its third parameter accepts the className configuration directly.

| Field        | Default              | Description                   |
| ------------ | -------------------- | ----------------------------- |
| `container`  | `j-toast-container`  | Container                     |
| `toast`      | `j-toast`            | Regular Toast                 |
| `icon`       | `el-icon`            | Icon                          |
| `message`    | `el-text`            | Text                          |
| `lite`       | `j-toast-lite`       | Lightweight Toast             |
| `confirm`    | `j-toast is-confirm` | Confirm Toast                 |
| `buttons`    | `toast-buttons`      | Button area                   |
| `button`     | `j-button is-sm`     | Base class for action buttons |
| `closeBtn`   | `is-ghost`           | Close button class            |
| `confirmBtn` | `is-outline`         | Confirm button class          |
| `info`       | `is-info`            | Info type class               |
| `success`    | `is-success`         | Success type class            |
| `warning`    | `is-warning`         | Warning type class            |
| `error`      | `is-error`           | Error type class              |
| `primary`    | `is-primary`         | Primary type class            |

