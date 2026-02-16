# Modal Component

## Basic Structure

Basic HTML static structure:

::: code-group

```html [HTML DOM Structure]
<div
  class="j-popup-layout"
  role="dialog"
  aria-modal="true"
  aria-labelledby="$id__title"
>
  <div class="j-modal {is-fullscreen}" id="" role="document">
    <div class="modal-header">
      <div class="modal-title" id="$id__title">Modal Title</div>
      <icon
        class="modal-close"
        data-action-close
        role="button"
        aria-label="close"
        tabindex="0"
        >×</icon
      >
    </div>
    <div class="modal-body">Custom Modal Body Content</div>
    <div class="modal-footer">
      <button
        type="button"
        class="j-button is-ghost modal-cancel"
        data-action-close
      >
        Cancel
      </button>
      <button
        type="button"
        class="j-button is-primary modal-confirm"
        data-action-confirm
      >
        Confirm
      </button>
    </div>
  </div>
</div>
```

:::

## Modal Types

- Basic Modal
- Fullscreen Modal
- Form Modal

## Examples

<div class="flex gap-4 flex-wrap my-4">
    <button class="j-button is-default example-modal-basic">Basic Modal</button>
    <button class="j-button is-primary example-modal-fullscreen">Fullscreen Modal</button>
    <button class="j-button is-outline example-modal-form">Form Modal</button>
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
const { modal } = jui;
// Initialize modal
const testModal = new modal({
  title: "Prompt",
  content: "This is a prompt modal",
  confirmText: "Confirm",
  cancelText: "Cancel",
  onHide: function () {
    console.log("Cancel");
  },
  onConfirm: function () {
    console.log("Confirm");
  },
});
// Open modal and register events
testModal.show();
// Close modal and destroy events
testModal.hide();
```

:::

## Parameters

```js
/**
 * @description Initialize a modal instance.
 * @param {object} options Modal configuration object
 *  - @property {string} title Modal title
 *  - @property {string} content Modal content
 *  - @property {string} confirmText Confirm button text
 *  - @property {string} cancelText Cancel button text
 *  - @property {boolean} showCancel Whether to display the cancel button, default `true`
 *  - @property {boolean} showClose Whether to display the close button, default `true`
 *  - @property {boolean} fullscreen Whether to display fullscreen, default `false`
 *  - @property {boolean} header Whether to display the header bar, default `true`
 *  - @property {boolean} footer Whether to display the footer bar, default `true`
 *  - @property {boolean} position Modal position, default `center`, optional values: `center`, `top-cener`, `bottom-center`, `left`, `right`, `top-left`, `top-right`, `bottom-left`, `bottom-right`
 *  - @property {boolean} escClose Whether to allow closing the modal by pressing ESC key, default `false`
 *  - @property {boolean} bgClose Whether to allow closing the modal by clicking the background, default `false`
 *  - @property {string} style Custom inline style for the j-modal container, default `null`
 *  - @property {string} id Custom ID for the j-modal container, default is a random hash value
 *  - @property {function} onShow Callback function triggered when the modal opens, default `null`
 *  - @property {function} onShown Callback function triggered after the modal opens, default `null`
 *  - @property {function} onHide Callback function triggered when the modal closes, default `null`
 *  - @property {function} onHidden Callback function triggered after the modal closes, default `null`
 *  - @property {function} onConfirm Callback function triggered when the confirm button is clicked, default `null`. Supports asynchronous operations; continues execution after returning Promise.resolve.
 *  - @property {function} onSubmit Callback function triggered when the form modal is submitted, default `null`. Supports asynchronous operations; continues execution after returning Promise.resolve.
 *  - @property {Array<object>} fields Form data, used for form modals. Default `null`
 *  - @property {boolean} lazy Lazy loading, default `false`. true: Create DOM and cache when show() is called; false: Create DOM and cache during instantiation, show() only handles interaction
 *
 * @returns {Modal} Modal instance
 */
new modal(options);
```

## Instance Methods

```js
/**
 * @description Open the modal and register events.
 * @returns {void}
 */
show();

/**
 * @description Close the modal and automatically destroy the instance.
 * @returns {void}
 */
hide();

/**
 * @description Show loading state.
 * @returns {void}
 */
showLoading();

/**
 * @description Hide loading state.
 * @returns {void}
 */
hideLoading();

/**
 * @description Manually set modal content.
 * @param {string} content - Modal content
 * @returns {void}
 */
setContent(content);

/**
 * @description Manually set modal fields.
 * @param {object} fields - Modal fields
 * @returns {void}
 */
setFields(fields);

/**
 * @description Add additional data fields outside of form fields for use in the submit method.
 * @param {object} field - Field
 * @returns {void}
 */
addField(field);

/**
 * @description Destroy the current instance.
 * @returns {void}
 */
destroy();
```

## Static Methods

```js
/**
 * @description Destroy all instances.
 * @returns {void}
 */
destroyAll();
```

## Instance Properties

```js
/**
 * @description Whether the modal is visible.
 * @property {boolean} isVisible
 */
isVisible;

/**
 * @description Root element of the modal.
 * @property {HTMLElement} root
 */
root;

/**
 * @description Modal configuration options.
 * @property {object} options
 */
options;

/**
 * @description Field data in form modals.
 * @property {Array<object>} fields
 */
fields;
```

`isVisible` Status and Events:

| Event                    | Status |
| ------------------------ | ------ |
| `onShow`                 | false  |
| `onShown`                | true   |
| `onConfirm` / `onSubmit` | true   |
| `onHide`                 | true   |
| `onHidden`               | false  |

## Form Data

When fields exists, the modal will automatically create a form, and the fields in the form will be rendered based on the data in fields.

```js
/**
 * @description Field configuration in form modals.
 * @property {Array<object>} fields Array of form field configurations
 *  - @property {string} label Field label
 *  - @property {string} type Field type Supported types:
 *      - @var text Text input box
 *      - @var email Email input box
 *      - @var password Password input box
 *      - @var select Dropdown selection box
 *      - @var textarea Multi-line text input box
 *      - @var number Number input box
 *      - @var file File upload box
 *      - @var color Color picker
 *      - @var date Date picker
 *      - @var datetime-local DateTime picker
 *      - @var month Month picker
 *      - @var week Week picker
 *      - @var time Time picker
 *  - @property {string} name Input box name
 *  - @property {string} id Input box ID, optional, uses hash value if not set
 *  - @property {string} placeholder Input box placeholder text
 *  - @property {string} value Default value of the input box
 *  - @property {boolean} required Whether it is required, default `false`
 *  - @property {boolean} disabled Whether it is disabled, default `false`
 *  - @property {Array<object>} options Dropdown selection options, valid only when `type` is `select`
 *     - @property {string} value Option value
 *     - @property {string} text Option text
 */
fields;
```

## Data Example

```js
fields: [
  {
    label: "Username",
    type: "text",
    name: "username",
    placeholder: "Please enter username",
    required: true,
    value: "test",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Please enter email",
    required: true,
    disabled: true,
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter your password",
    required: true,
  },
  {
    label: "Country",
    type: "select",
    name: "country",
    options: [
      { value: "cn", text: "China" },
      { value: "us", text: "USA", disabled: true },
      { value: "uk", text: "UK" },
    ],
    required: true,
  },
  {
    label: "Remarks",
    type: "textarea",
    name: "remark",
    placeholder: "Please enter remarks",
  },
];
```

## Event Delegation

Set the attribute `data-action-{$action_type}` on elements to automatically bind and trigger events through event delegation.

1. `data-action-close` Close
2. `data-action-cancel` Cancel
3. `data-action-confirm` Confirm

## Styling

The style of the Modal component will be rendered according to the current theme.
