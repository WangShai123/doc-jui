# Type Validation

Applied to type judgment and runtime checking.

## Get Type

Return more precise type string: `null`, `HTMLElement`, `array` or result of `typeof`.

```js
/**
 * @description Get type
 * @param {*} val Any value
 * @return {string} Type string
 */
const getType = (val) => {}
```

## Type Validation 

Validate whether parameter type meets expectations. Supports: multiple types, multiple assertion conditions, custom error messages.

::: code-group

```js [Parameter Description]
/**
 * @description Type validation
 * @param {String} name Parameter name
 * @param {*} value Value to validate
 * @param {String|Array} expectedTypes Expected types
 * @param {Array|Function} conditions Additional assertion conditions. Can be function or `{ test, message }` object, used for additional assertions and throw error with message when failed.
 * @return {Boolean} Whether validation passes
 */
const validate = (name, value, expectedTypes, conditions = []) => { }
```

```js [Example]
validate('onChange', onChange, ['function', 'null'])

validate('age', age, 'number', (v) => v > 0)

validate('direction', direction, 'string', [
  {
    test: (v) => ['top', 'bottom', 'left', 'right'].includes(v),
    message: 'direction expects one of [top, bottom, left, right]',
  },
  {
    ...
  }
])
```

:::

## Function Judgment

Judge whether it is a ordinary function (including constructor). Verified through `typeof` and `prototype`.

```js
/**
 * @description Function judgment
 * @param {Function} fn Function to judge
 * @return {boolean}
 */
const isFunction = (fn) => {}
```

## Class Judgment

Judge whether it is a class. Judge ES6 class by detecting whether `Function.prototype.toString` return value starts with `class`.

```js
/**
 * @description Class judgment
 * @param {Function} fn Class to judge
 * @return {boolean}
 */
const isClass = (fn) => {}
```
