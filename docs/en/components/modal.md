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

| Option       | Type                                                               | Default    | Description |
| ------------ | ------------------------------------------------------------------ | ---------- | ----------- |
| `content`    | `string \| number \| boolean \| Node \| Array \| Function \| null` | `''`       | Initial content, also the initial value of `state.content` |
| `cache`      | `boolean`                                                          | `false`    | Whether to cache the resolved result of function-style async `content` |
| `ttl`        | `number`                                                           | `0`        | Content cache TTL in milliseconds; `0` means no expiration |
| `position`   | `string`                                                           | `'center'` | Modal layout position, such as `top-center` or `bottom-right` |
| `showCancel` | `boolean`                                                          | `true`     | Whether to show the cancel button |
| `showClose`  | `boolean`                                                          | `true`     | Whether to show the top-right close button |
| `header`     | `boolean`                                                          | `true`     | Whether to render the header node |
| `footer`     | `boolean`                                                          | `true`     | Whether to render the footer node |
| `fullscreen` | `boolean`                                                          | `false`    | Whether to use fullscreen mode |
| `escClose`   | `boolean`                                                          | `false`    | Whether Esc can close the modal |
| `bgClose`    | `boolean`                                                          | `false`    | Whether clicking the backdrop can close the modal |
| `onShow`     | `(modal) => void \| Promise<void>`                                 | `null`     | Triggered when showing starts |
| `onShown`    | `(modal) => void \| Promise<void>`                                 | `null`     | Triggered after shown |
| `onHide`     | `(modal) => void \| Promise<void>`                                 | `null`     | Triggered when hiding starts |
| `onHidden`   | `(modal) => void \| Promise<void>`                                 | `null`     | Triggered after hidden and removed from the DOM |
| `onConfirm`  | `(modal) => void \| Promise<void>`                                 | `null`     | Triggered on confirm. The caller decides whether to close |
| `onCancel`   | `(modal) => void \| Promise<void>`                                 | `null`     | Triggered by `data-action="cancel/close"` |
| `style`      | `string \| object \| null`                                         | `null`     | Inline style for the modal body |
| `id`         | `string \| null`                                                   | Generated  | Modal id. Empty string or `null` generates one automatically |
| `text`       | `object`                                                           | See below  | Initial text configuration |
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

| Option    | Type     | Default   | Description |
| --------- | -------- | --------- | ----------- |
| `title`   | `string` | `Tip`     | Modal title |
| `confirm` | `string` | `Confirm` | Confirm button text |
| `cancel`  | `string` | `Cancel`  | Cancel button text |

### className

Custom class names. The `className` configuration contains:

| Option       | Default                  | Description |
| ------------ | ------------------------ | ----------- |
| `layout`     | `j-popup-layout`         | Modal layout root node |
| `modal`      | `j-modal`                | Modal body |
| `header`     | `modal-header`           | Header |
| `body`       | `modal-body`             | Content area |
| `footer`     | `modal-footer`           | Footer |
| `title`      | `modal-title`            | Title |
| `button`     | `j-button`               | Base button class |
| `closeBtn`   | `is-icon is-sm is-ghost` | Close button class |
| `cancelBtn`  | `is-ghost`               | Cancel button class |
| `confirmBtn` | `is-primary`             | Confirm button class |

## Instance Properties

| Property            | Description |
| ------------------- | ----------- |
| `props`             | Normalized initialization configuration |
| `state`             | Reactive state object, also the main runtime UI source |
| `runtime.built`     | Whether the owned view has been created |
| `runtime.mounted`   | Whether the root node is currently mounted |
| `runtime.destroyed` | Whether the instance has been destroyed |
| `element`           | Stable root node after build |

### state

Runtime data that needs attention is stored in reactive `state`:

| Field        | Description |
| ------------ | ----------- |
| `visible`    | Whether it is visible |
| `content`    | Current content source |
| `loading`    | Function-style async `content` is resolving |
| `processing` | Async `onConfirm` or `onCancel` is processing |

During `processing`, confirm, cancel, close, Esc, backdrop click, and related interaction entries are blocked.

`setState()` only accepts legal state patches. It throws if a field name or value type does not match.

## Instance Methods

| Method             | Description |
| ------------------ | ----------- |
| `build()`          | Creates the Modal skeleton and returns the current instance |
| `show()`           | Sets `state.visible = true` |
| `hide()`           | Sets `state.visible = false` |
| `setState(patch)`  | Sets reactive state fields |
| `reset()`          | Restores initial content, clears cache and runtime state |
| `mount(container)` | Builds and mounts the root node. Normal business code more often uses `show()` |
| `unmount()`        | Removes the root node while keeping state and view owner |
| `destroy()`        | Destroys the instance and releases DOM, events, and reactive resources |

Shared controller methods also include `own()`, `use()`, `on()`, `off()`, and `emit()`. See [Define Component](../core/define.html).

### Lifecycle

`build()` creates the owned view and stable root node, but does not resolve content or insert anything into the document.

`show()` sets `state.visible = true`, mounts the root node, locks scrolling, binds events, and resolves `state.content` according to the cache policy.

`hide()` sets `state.visible = false` and starts the leave animation. Modal enter and leave are coordinated by the shared presence mechanism.

`destroy()` destroys the instance and releases DOM, events, and reactive resources.

## data-action

The content area can contain custom elements with `data-action`. Modal handles them through delegated processing.

| Value     | Behavior |
| --------- | -------- |
| `close`   | Runs `onCancel(modal)`, then hides after success |
| `cancel`  | Runs `onCancel(modal)`, then hides after success |
| `confirm` | Runs `onConfirm(modal)` |

`bgClose` and `escClose` directly hide Modal and do not trigger `onCancel`.

## Practice

Try combining `createModal` and `createFlow` to build a dynamic authorization flow modal, including register, login, forgot password, success feedback, failure feedback, and similar states.

```vp-script
import { q, createModal, createForm, createFlow, Toast, icon } from 'vanilla-jui';
import { insert, jsx, createSignal } from 'vanilla-signal';
const demo1 = jsx('div', {
  style: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  children: [
    jsx('button', {
      className: 'j-button is-default',
      children: 'Default modal',
      onClick: () => {
        createModal({
          text: {title: 'Default modal'},
          content: 'This is a default modal',
          onConfirm: (e) => {
            e.hide();
            Toast.info('Confirmed');
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: 'Fullscreen modal',
      onClick: () => {
        createModal({
          text: {title: 'Fullscreen modal'},
          content: 'This is a fullscreen modal',
          fullscreen: true,
          onConfirm: (e) => {
            e.hide();
            Toast.info('Confirmed');
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: 'Esc close',
      onClick: () => {
        createModal({
          text: {title: 'Esc close'},
          content: 'This modal can be closed with Esc',
          escClose: true,
          onConfirm: (e) => {
            e.hide();
            Toast.info('Confirmed');
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: 'Backdrop close',
      onClick: () => {
        createModal({
          text: {title: 'Backdrop close'},
          content: 'This modal can be closed by clicking the backdrop',
          bgClose: true,
          onConfirm: (e) => {
            e.hide();
            Toast.info('Confirmed');
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
  ],
});
const demo2 = jsx('div', {
  style: {
    display: 'flex',
    gap: '8px',
    marginTop: '16px',
  },
  children: [
    jsx('button', {
      className: 'j-button is-default',
      children: 'Change position',
      onClick: () => {
        createModal({
          text: {title: 'Change position'},
          content: 'Change the modal position',
          position: 'top',
          onConfirm: (e) => {
            e.hide();
            Toast.info('Confirmed');
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: 'Another position',
      onClick: () => {
        createModal({
          text: {title: 'Another position'},
          content: 'Change the modal position again',
          position: 'bottom-right',
          onConfirm: (e) => {
            e.hide();
            Toast.info('Confirmed');
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-outline',
      children: 'Custom UI',
      onClick: () => {
        createModal({
          text: {title: 'Custom UI'},
          header: false,
          footer: false,
          onHidden: (e) => e.destroy(),
          content: jsx`<div style="width:276px;display:flex;flex-direction:column;align-items:center;gap:calc(var(--space)*4);">
              <div style="width:24px;fill:currentColor">${icon('warning')}</div>
              <div style="margin-bottom:12px">Confirm this dangerous operation?</div>
              <div style="display:flex;gap:calc(var(--space)*4);">
                <button class="j-button is-ghost is-sm" data-action="close">Cancel</button>
                <button class="j-button is-danger is-sm" data-action="confirm">Confirm</button>
              </div>
            </div>`,
            onConfirm: (e) => {
              e.hide();
              Toast.lite('Confirmed');
            },
        })
          .build()
          .show();
      },
    }),
  ],
});
const [count, setCount] = createSignal(10);
let asyncContentRequestCount = 0;
let countdownTimer = null;
let countdownStopTimer = null;
const startCacheCountdown = () => {
  if (countdownTimer) clearInterval(countdownTimer);
  if (countdownStopTimer) clearTimeout(countdownStopTimer);

  setCount(10);
  countdownTimer = setInterval(() => {
    setCount((value) => {
      const next = value - 1;
      return next > 0 ? next : 0;
    });
  }, 1000);
  countdownStopTimer = setTimeout(() => {
    clearInterval(countdownTimer);
    countdownTimer = null;
    countdownStopTimer = null;
    setCount(0);
  }, 10000);
};
const loadAsyncModalContent = () =>
  new Promise((resolve) => {
    const requestIndex = asyncContentRequestCount + 1;
    setTimeout(() => {
      asyncContentRequestCount = requestIndex;
      startCacheCountdown();
      resolve(
        jsx('div', {
          children: [
            jsx('p', {
              children: `Async request #${requestIndex}`,
            }),
            jsx('p', {
              style: {marginBlock: '4px'},
              children: 'This modal has content caching enabled. The cache lasts 10 seconds.',
            }),
            jsx('p', {
                style: {marginBlock: '4px'},
                children: 'Within 10 seconds, reopening the modal shows the cached content.'
            }),
            jsx('p', {
                style: {marginBlock: '4px'},
                children: 'After 10 seconds, the content expires and will be requested and rendered again.'
            }),
            jsx('p', {
                style: {
                    marginTop: '24px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                },
                children: [
                    jsx('button', {
                        className: 'j-button is-secondary',
                        'data-action': 'cancel',
                        children: ()=> `${count() > 0 ? `Countdown ${count()}s` : 'Cache expired'}`,
                    }),
                    jsx('button', {
                        className: 'j-button is-primary',
                        'data-action': 'confirm',
                        children: 'Got it',
                    })
                ]
            }),
          ],
        })
      );
    }, 1000);
  });
const asyncModal = createModal({
    text: {title: 'Async content modal'},
    content: async () => await loadAsyncModalContent(),
    style: 'min-height: 200px',
    cache: true,
    ttl: 10000,
    footer: false,
    onConfirm: (e) => {
        e.hide();
        Toast.lite('Got it');
    },
}).build()

const modalInputItem = {
  type: 'text',
  payload: {
    name: 'message',
    label: 'Input',
    placeholder: 'The input type is currently selected',
    required: true,
  },
  next: null,
};
const modalTextareaItem = {
  type: 'textarea',
  payload: {
    name: 'message',
    label: 'Textarea',
    placeholder: 'The textarea type is currently selected',
    required: true,
  },
  next: null,
};
const modalPublishItem = {
  type: 'switch',
  payload: {
    name: 'publish',
    label: 'Confirm publish',
    value: '1',
    checked: false,
    help: 'You must confirm publishing before submitting data.',
  },
  next: null,
};
const modalFieldTypeItem = {
  type: 'radio',
  payload: {
    name: 'messageType',
    label: 'Message type',
    value: 'input',
    required: true,
    options: [
      { value: 'input', text: 'Input' },
      { value: 'textarea', text: 'Textarea' },
    ],
  },
  next: null,
};
modalFieldTypeItem.next = (current) =>
  current.payload.value === 'textarea' ? modalTextareaItem : modalInputItem;
modalInputItem.next = () => modalPublishItem;
modalTextareaItem.next = () => modalPublishItem;
let dynamicFormModal;
const dynamicModalForm = createForm({
  fields: [modalFieldTypeItem],
  buttons: 'reverse',
  buttonsPosition: 'end',
  onSubmit: async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    Toast.success('Dynamic form submitted. See the submitted data in the console.');
    console.table(data)
    dynamicModalForm.reset();
    dynamicFormModal.hide();
  },
  validator: {
    rules: {
      message: {
        required: true,
        minLength: 5,
      },
      publish: {
        checked: true,
      },
    },
    messages: {
      message: {
        required: 'Please enter a message',
        minLength: 'The message must be at least 5 characters',
      },
      publish: {
        checked: 'Please confirm publishing first',
      },
    },
  },
}).build();
dynamicFormModal = createModal({
  text: {
    title: 'Dynamic form modal',
  },
  content: () => dynamicModalForm.element,
  footer: false,
}).build();
const demo3 = jsx('div', {
  style: {
    marginBlock: '16px',
  },
  children: [
    jsx('button', {
      className: 'j-button is-primary',
      children: 'Async content modal',
      onClick: () => {
        asyncModal.show();
      },
    }),
  ],
});
const demo4 = jsx('div', {
  style: {
    marginBlock: '16px',
  },
  children: [
    jsx('button', {
      className: 'j-button is-outline',
      children: 'Combine Form to build a dynamic form modal',
      onClick: () => {
        dynamicFormModal.show();
      },
    }),
  ],
});
insert(q('.demo'), [demo1, demo2, demo3, demo4]);

```
