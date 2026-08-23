# Form

Form renders a form from field configuration and includes the built-in `Validator` validation module and submit data collection.

<Badge text="defineComponent" theme="primary"/>

## Example

:::details Click to expand details
<div class="demo"></div>
:::

## Import

```js
import { createForm } from 'vanilla-jui';
```

## Basic Usage

Use `createForm(props)` to create a form instance:

```js
const form = createForm({
  fields: [
    {
      type: 'email',
      payload: {
        label: 'Email address',
        name: 'email',
        placeholder: 'Enter email',
        required: true,
      },
    },
  ],
  validator: {
    rules: {
      email: { required: true, email: true },
    },
    messages: {
      email: { required: 'Email required', email: 'Invalid email' },
    },
  },
  onSubmit: async (data, form) => {
    form.state.submitting = true;
    await saveUser(data);
    form.setState({ submitting: false });
  },
}).mount('.form-demo');
```

- `createForm(props)` only creates the instance and initializes state. It does not create DOM immediately.
- Calling `build()` only builds the form root node. It does not mount automatically.
- Call `mount(container)` to mount to a specified container, or use the form root node `form.element` to mount manually.

## Parameters

`createForm(props)`

| Parameter         | Type                           | Default        | Description                                                          |
| ----------------- | ------------------------------ | -------------- | -------------------------------------------------------------------- |
| `fields`          | `Array<FormItem>`              | `[]`           | Form item configuration and the entry point for dynamic form chaining |
| `validator`       | `object`                       | `{}`           | `rules`, `messages`, `vanilla`, and other options passed to `Validator` |
| `onSubmit`        | `Function \| null`             | `null`         | Triggered after validation passes. Parameters are `(data, form)`      |
| `onReset`         | `Function \| null`             | `null`         | Triggered on reset. Parameters are `(event, form)`                   |
| `id`              | `string \| null`               | Auto-generated | Form root node id                                                    |
| `style`           | `string \| object`             | `''`           | Inline style for the form root node                                  |
| `vertical`        | `boolean`                      | `true`         | Vertical form layout                                                 |
| `itemVertical`    | `boolean`                      | `true`         | Vertical layout for form fields                                      |
| `buttons`         | `boolean \| string`            | See table below | Remove or reverse button order                                      |
| `buttonsPosition` | `'start' \| 'center' \| 'end'` | `'start'`      | Horizontal position of the button group                              |
| `size`            | `'sm' \| 'md' \| 'lg'`         | `'md'`         | Form size                                                            |
| `className`       | `object`                       | See table below | Custom form style classes                                           |

### fields

Format: `Array<FormItem>`.

Each control `FormItem` is an object containing `{ type, payload, next? }`. A fixed form can configure only `type` and `payload`; a dynamic form uses `next(current, acients)` to override the default array order and decide the next form item based on the current field value.

- `type`: Control type, such as `text`, `email`, `password`, `select`, `radio`, `checkbox`, `switch`, `file`, `custom`, and more.
- `payload`: Control configuration, including `label`, `name`, and other properties.
- `next`: The next control, used for dynamic form chaining.

Common `payload` properties:

| Property       | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| `label`        | Field label. Pass `false` or omit it to skip rendering the label  |
| `name`         | Form field name, used by `FormData` and Validator rule matching   |
| `options`      | Options array for `select`, `radio`, and multi-select `checkbox`  |
| `value`        | Default value. Multi-select checkbox can receive an array         |
| `checked`      | Default checked state for a single checkbox or switch             |
| `required`     | Required marker, renders the native `required` attribute          |
| `placeholder`  | Input prompt                                                      |
| `autocomplete` | Applies only to controls that support it, such as input and textarea |
| `help`         | Help text below the field                                         |
| `disabled`     | Disabled control                                                  |
| `readonly`     | Read-only control                                                 |
| `content`      | Custom content rendered when `type: 'custom'`                     |

### Chain

`(current, acients) => FormItem \| null`

Chain expansion has an internal protection limit: one render can expand at most 1000 form items. This prevents incorrect `next()` loops or dynamic chains that never end. It is not a business field count setting; normal forms do not need to care about this limit.

Example: dynamically switch the next form item based on the value of a `select` control:

```js
const input = {
  type: 'text',
  payload: {
    label: 'Dynamic Input',
    name: 'dynamicValue',
  },
  next: null,
};

const textarea = {
  type: 'textarea',
  payload: {
    label: 'Dynamic Textarea',
    name: 'dynamicValue',
  },
  next: null,
};

const selector = {
  type: 'select',
  payload: {
    label: 'Next Field Type',
    name: 'fieldType',
    value: 'input',
    required: true,
    options: [
      { value: 'input', text: 'Render input next' },
      { value: 'textarea', text: 'Render textarea next' },
    ],
  },
  next(current) {
    return current.payload.value === 'textarea' ? textarea : input;
  },
};

const form = createForm({
  fields: [selector],
}).mount(document.querySelector('#demo'));
```

### buttons

When `buttons: false`, the button group is not rendered. This is useful when an external container controls the timing and behavior of interactions through instance properties or instance methods such as `requestSubmit()`.

### className

Custom style classes. The className configuration contains the following fields:

| Property           | Default               | Description                    |
| ------------------ | --------------------- | ------------------------------ |
| `form`             | `j-form`              | Form container                 |
| `vertical`         | `is-vertical`         | Vertical form layout           |
| `horizontal`       | `is-horizontal`       | Horizontal form layout         |
| `itemVertical`     | `is-item-vertical`    | Vertical form item layout      |
| `itemHorizontal`   | `is-item-horizontal`  | Horizontal form item layout    |
| `item`             | `form-field`          | Form item container            |
| `label`            | `field-legend`        | Form item label                |
| `required`         | `is-required`         | Required marker                |
| `control`          | `field-control`       | Form item control container    |
| `helpInvalid`      | `is-invalid`          | Invalid state hint             |
| `buttons`          | `form-buttons`        | Button group container         |
| `button`           | `j-button`            | Common button                  |
| `submitBtn`        | `is-primary`          | Submit button                  |
| `resetBtn`         | `is-ghost`            | Reset button                   |
| `input`            | `j-input`             | Input                          |
| `textarea`         | `j-textarea`          | Textarea                       |
| `select`           | `j-select`            | Select                         |
| `radio`            | `j-radio`             | Radio                          |
| `checkbox`         | `j-checkbox`          | Checkbox                       |
| `choiceVertical`   | `is-vertical`         | Vertical layout for choices    |
| `choiceHorizontal` | `is-horizontal`       | Horizontal layout for choices  |
| `choiceGroup`      | `is-group`            | Group layout for choices       |
| `radioLabel`       | `radio-label`         | Radio label                    |
| `radioText`        | `radio-text`          | Radio text                     |
| `switch`           | `j-switch is-default` | Switch                         |
| `switchSlider`     | `switch-slider`       | Switch slider                  |

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

| Field        | Description              |
| ------------ | ------------------------ |
| `fields`     | Form item data list      |
| `submitting` | Whether the form is submitting |

- `fields`: Updating this state triggers form rendering.
- `submitting`: Updating this state triggers the form submit animation.

## Instance Methods

| Method              | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| `validate()`        | Run the built-in Validator validation and return whether it passes |
| `collectData()`     | Return a plain object collected from the current `FormData`    |
| `build()`           | Build DOM. It only creates root and does not mount automatically |
| `mount(container)`  | Build and mount the root node                                  |
| `unmount()`         | Remove the root node and keep state and view owner             |
| `requestSubmit()`   | Trigger form submit                                            |
| `reset()`           | Reset validation state and submitted data                      |
| `setFields(fields)` | Update reactive `state.fields`; the chain and keyed list update fields |
| `resetFields()`     | Restore the initialized fields                                 |
| `setState(patch)`   | Update reactive state fields                                   |
| `destroy()`         | Destroy the instance and release Validator, rendering, and event resources |

- Validation rules reuse the rules and message format of the `Validator` validation module.
- To prefer the browser's native form validation capability, set `validator.vanilla: true`.

```vp-script
import { createForm, Toast, q } from 'vanilla-jui';
createForm({
    fields: [
        {
            type: 'email',
            payload: {
                label: 'Email',
                name: 'email',
                required: true,
                placeholder: 'Enter email',
            }
        },
        {
            type: 'password',
            payload: {
                label: 'Password',
                name: 'password',
                required: true,
                placeholder: 'Enter password',
            }
        },
        {
            type: 'password',
            payload: {
                label: 'Confirm Password',
                name: 'confirmPassword',
                required: true,
                placeholder: 'Confirm password',
            }
        }
    ],
    validator: {
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minLength: 6,
                maxLength: 12,
            },
            confirmPassword: {
                required: true,
                equalTo: 'password',
            },
        },
        messages: {
            email: {
                required: 'Email is required',
                email: 'Please enter a valid email address',
            },
            password: {
                required: 'Password is required',
                minLength: 'Password length cannot be less than 6 characters',
                maxLength: 'Password length cannot be greater than 12 characters',
            },
            confirmPassword: {
                required: 'Confirm password is required',
                equalTo: 'The two passwords do not match',
            },
        },
    },
    onSubmit: (data) => {
        Toast.success('Bingo! Form validation succeeded');
        console.table(data);
    },
    style: 'max-width: 280px',
    buttonsPosition: 'start'
}).mount(q('.demo'));
```
