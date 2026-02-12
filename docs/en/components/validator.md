# Form Validation

`Validator` is a validator used to validate form data.

## Application Example

<form class="j-form is-vertical is-item-vertical w-2xs" id="form-validator">
    <div class="form-item">
        <label for="email" class="item-label is-required">Email address</label>
        <div class="form-control">
            <input type="email" name="email" class="j-input" id="email" placeholder="Enter email" autocomplete="email">
        </div>
    </div>
    <div class="form-item">
        <label for="password" class="item-label is-required">Password</label>
        <div class="form-control">
            <input type="password" name="password" class="j-input" id="password" placeholder="Password" autocomplete="current-password">
        </div>
    </div>
    <div class="form-item">
        <label for="password" class="item-label is-required">Password</label>
        <div class="form-control">
            <input type="password" name="password_repeat" class="j-input" placeholder="Password" autocomplete="current-password">
        </div>
    </div>
    <div class="form-item">
        <label class="form-control">
            <div class="j-checkbox is-horizontal">
                <label>
                    <input type="checkbox" name="agreement" class="j-input">
                    <span>Agree to terms...</span>
                </label>
            </div>
        </label>
    </div>
    <div class="form-buttons flex gap-2">
        <button type="submit" class="j-button is-primary">Submit</button>
        <button type="reset" class="j-button is-ghost">Reset</button>
    </div>
</form>

## Usage

::: code-group

```php [example.php]
<?php
// Dynamically load component scripts in PHP:
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
const { validator, toast } = jui;

const form = q("form#form-validator");
// Create a new form validator instance and assign it to test
const test = new validator(
  form,
  {
    rules: {
      email: {
        required: true,
        email: true,
        minLength: 8,
        maxLength: 10,
        noChinese: true,
      },
      password: {
        required: true,
        minLength: 6,
        maxLength: 8,
        noSpace: true,
        noSpecial: true,
        pattern: /^[A-Z].*$/,
      },
      password_repeat: {
        required: true,
        equalTo: "password",
      },
      agreement: {
        checked: true,
      },
    },
    messages: {
      email: {
        required: "Please enter email",
        email: "Please enter a valid email",
        minLength: "Email length cannot be less than 8 characters",
        maxLength: "Email length cannot be greater than 10 characters",
        noChinese: "Chinese characters are not allowed",
      },
      password: {
        required: "Please enter password",
        minLength: "Password length cannot be less than 6 characters",
        maxLength: "Password length cannot be greater than 8 characters",
        noSpace: "Spaces are not allowed",
        noSpecial: "Special characters are not allowed",
        pattern: "First letter must be uppercase",
      },
      password_repeat: {
        required: "Please enter password",
        equalTo: "The two passwords entered do not match",
      },
      agreement: {
        checked: "Please check to agree to the terms",
      },
    },
  },
  false,
); // The third parameter of instantiation defaults to false, which disables automatic event binding and switches to manual mode for flexible interactive notifications

// Custom form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Instance method validate returns validation result
  const result = test.validate();
  // Instance property message returns error message
  if (!result && test.message) {
    toast.error(test.message);
  } else {
    toast.success(t("formValidated"));
  }
});
form.addEventListener("reset", (e) => {
  // Instance method reset resets validator instance state
  test.reset();
});
```

:::

## Parameters

```js
/**
 * @description Create a form validator
 * @param {HTMLElement} element - Form element
 * @param {Object} options - Configuration options
 *     - @property {Object} rules - Validation rules
 *         - @var {Object} Field name attributes and rule sets to be validated
 *     - @property {Object} messages - Error messages
 *         - @var {Object} Specific error messages for corresponding validation fields and rules
 * @param {Boolean} bindEvents - Whether to automatically bind form events
 */
new validator(element, options, bindEvents);
```

## Rule Set

- In the rule description object `rules`, use the `name` attribute as the key and the rule set as the value.
- In the rule set object, use rule properties as keys and rule targets as values.

| Rule Property | Type    | Description                                    |
| ------------- | ------- | ---------------------------------------------- |
| **required**  | Boolean | Whether required                               |
| **minLength** | Number  | Minimum length                                 |
| **maxLength** | Number  | Maximum length                                 |
| **email**     | Boolean | Whether it is an email                         |
| **noSpace**   | Boolean | Spaces not allowed                             |
| **noSpecial** | Boolean | Special characters not allowed                 |
| **noChinese** | Boolean | Chinese characters not allowed                 |
| **equalTo**   | String  | Verify if two fields are equal, value is the name attribute of the field to be validated |
| **checked**   | Boolean | Whether checked                                |
| **pattern**   | String  | Regular expression                             |

## Instance Methods

```js
/**
 * @description Execute validation
 * @return {Boolean} Whether validation passes
 */
validate();

/**
 * @description Reset validation status
 * @return {Void}
 */
reset();

/**
 * @description Destroy instance
 * @return {Void}
 */
destroy();
```

## Instance Properties

```js
/**
 * @description Form root element
 * @type {Element}
 */
root;

/**
 * @description Validation error message
 * @type {String}
 */
message;

/**
 * @description Validation result
 * @type {Boolean}
 * @default true
 */
valid;
```

## Static Methods

```js
/**
 * @description Destroy all instances
 * @return {Void}
 * @static
 */
destroyAll();
```
