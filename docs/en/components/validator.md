# Form Validation

Validator is a form validation module. It only reads form fields, runs validation rules, writes failed states, and creates error hint nodes.

<Badge text="UI Primitive" theme="error"/>

## Example

:::details Click to expand details
<div class="demo"></div>
:::

## Import

```js
import { createValidator } from 'vanilla-jui';
```

## Basic Usage

Use `createValidator` to create a Validator instance:

```js
const validator = createValidator(form, {
  rules: {
    email: { required: true, email: true },
    password: { required: true, minLength: 6 },
    plan: { selected: true },
  },
  messages: {
    email: { required: 'Email required', email: 'Invalid email' },
    password: { minLength: 'Password too short' },
    plan: { selected: 'Plan required' },
  },
  vanilla: false,
  onSubmit: (validator) => {
    console.log(validator.runtime.valid);
  },
});
```

## Parameters

`createValidator(element, props, bindEvents)`

| Parameter    | Type                                | Default | Description                         |
| ------------ | ----------------------------------- | ------- | ----------------------------------- |
| `element`    | `string \| HTMLFormElement \| Node` | -       | Form element to bind                |
| `props`      | `object`                            | `{}`    | Validation configuration            |
| `bindEvents` | `boolean`                           | `false` | Whether to bind submit/reset events |

### element

The first parameter `element` must be resolvable to an `HTMLFormElement`; otherwise, an error is thrown.

### props

The second parameter `props` is a validation configuration object, including validation rules, error messages, and more.

| Field            | Type               | Default      | Description                                      |
| ---------------- | ------------------ | ------------ | ------------------------------------------------ |
| `rules`          | `object`           | `{}`         | Field validation rules. Keys must match form field `name` |
| `messages`       | `object`           | `{}`         | Custom error messages, indexed by field name and rule name |
| `vanilla`        | `boolean`          | `false`      | Whether to enable browser-native validation      |
| `onSubmit`       | `Function \| null` | `null`       | Called after all fields pass validation          |
| `className`      | `object`           | `{}`         | Custom class names                               |
| `className.help` | `string`           | `help-block` | Class name for error hints                       |

- `vanilla: false` is the default behavior. It sets the form's `noValidate` to `true`. Even if fields render native constraints such as `required` or `type="email"`, the browser's native validation bubbles will not be triggered; only Validator's own `rules` run on submit.
- To enable the browser's native form validation capability, set `vanilla: true`. This automatically skips Validator's own `rules`.
- `destroy()` restores the `noValidate` state from before the instance was created.

### bindEvents

The third parameter `bindEvents` is a `Boolean`, defaulting to `false`.

- `false`: You need to call the `validate` method manually. Advantage: custom validation interactions, such as showing errors through toast or other UI.
- `true`: Automatically binds the form's `submit` and `reset` events. `submit` prevents the default submission and runs `validate()` automatically.

## Instance Properties

| Property          | Description                              |
| ----------------- | ---------------------------------------- |
| `element`         | Current form element. It is `null` after destroy |
| `props`           | Normalized validation configuration      |
| `runtime.valid`   | Whether the latest validation passed     |
| `runtime.error`   | Whether there are currently reported error fields |
| `runtime.message` | Latest failed message                    |

After `destroy()`, both `element` and `props` become `null`; event listeners and validation hints are cleaned up.

## Instance Methods

### `validate()`

Run form validation and return whether it passes. It only validates fields that have a `name` and are configured in `props.rules`. After all fields pass, it calls `props.onSubmit(validator)`.

```js
if (validator.validate()) {
  // passed
}
```

### `reset(options)`

Reset validation state.

```js
validator.reset();
validator.reset({ native: false });
```

| Parameter | Default | Description                         |
| --------- | ------- | ----------------------------------- |
| `native`  | `true`  | Whether to call native form reset   |

### `destroy()`

Destroy the Validator instance: unbind events, clean validation hints, release the form reference, and mark the instance as destroyed.

```js
validator.destroy();
```

## Built-in Rules

### Text Fields

| Rule        | Type             | Description                                  |
| ----------- | ---------------- | -------------------------------------------- |
| `required`  | `boolean`        | String value cannot be empty                 |
| `minLength` | `number`         | Minimum character count                      |
| `maxLength` | `number`         | Maximum character count                      |
| `equalTo`   | `string`         | Must match the value of the specified `name` field |
| `email`     | `boolean`        | Email format validation                      |
| `noSpace`   | `boolean`        | Disallow spaces                              |
| `noChinese` | `boolean`        | Disallow Chinese characters                  |
| `noSpecial` | `boolean`        | Disallow special characters such as `@#$%^&*` |
| `pattern`   | `string\|RegExp` | Custom regular expression                    |

### Select

| Rule       | Type      | Description                              |
| ---------- | --------- | ---------------------------------------- |
| `selected` | `boolean` | Select at least one non-empty value      |
| `multiple` | `boolean` | In multi-select mode, select at least one item |
| `min`      | `number`  | Minimum selected item count in multi-select mode |
| `max`      | `number`  | Maximum selected item count in multi-select mode |

### Radio

Validator currently has no radio-specific built-in rule. To validate a radio group, you can use a custom `validate` rule to read the checked state of radios with the same name.

### Checkbox

| Rule      | Type      | Description                                             |
| --------- | --------- | ------------------------------------------------------- |
| `checked` | `boolean` | Whether a single checkbox is in the specified checked state |
| `min`     | `number`  | Minimum checked count for a checkbox group; does not apply to switch |
| `max`     | `number`  | Maximum checked count for a checkbox group; does not apply to switch |

```js
const validator = createValidator('#form', {
  rules: {
    features: { min: 2, max: 3 },
  },
  messages: {
    features: {
      min: 'Select at least 2 items',
      max: 'Select at most 3 items',
    },
  },
});
```

### Switch

| Rule      | Type      | Description                              |
| --------- | --------- | ---------------------------------------- |
| `checked` | `boolean` | Whether the switch is in the specified checked state |

### File Fields

| Rule      | Type      | Description                                      |
| --------- | --------- | ------------------------------------------------ |
| `file`    | `boolean` | Whether a file is required                       |
| `minSize` | `number`  | Minimum file byte size                           |
| `maxSize` | `number`  | Maximum file byte size                           |
| `accept`  | `string`  | Allowed file types, comma-separated, such as `.jpg,.png` or `image/*` |

### Custom Rules

```js
const validator = createValidator('#form', {
  rules: {
    username: {
      validate: (element, validator) => {
        if (element.value.includes('admin')) return 'Cannot contain admin';
        return true;
      },
    },
  },
});
```

The `validate` function receives the field element and the current Validator instance, and returns:

| Return Value | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| `true`       | Validation passed                                              |
| `false`      | Validation failed, using the error text configured in `messages` |
| `string`     | Validation failed, using this string as the error text         |

## Error Hint DOM

Validator first uses the nearest `[data-field-control]` as the field container. If it cannot find one, it uses the field's direct parent element. The error hint node is written into the current field container:

```html
<div data-field-control="email">
  <input name="email" />
  <div class="help-block" data-validator-help="email" data-valid="false">
    Email required
  </div>
</div>
```

- **Attribute selectors**: Validator relies on attribute names as interaction selectors. Existing static help text under `[data-field-help]` is not overwritten. Dynamic error hints are only created and deleted through `[data-validator-help]`.
- **Validation interaction**: When validation fails, the error field is marked with `[data-validator-help]` and `[data-valid]`. After validation passes, the markers are removed.
- **Automatic validation**: After submit or a manual `validate()` call fails, Validator uses the error field records stored in `runtime.error` to automatically revalidate on `input` / `change` events. After the `runtime.error` records are cleared, the automatic validation events are also cleared.
- **Custom error styles**: You can use the `className` configuration to customize error hint styles.

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
