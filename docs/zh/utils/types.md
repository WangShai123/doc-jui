# 类型验证

应用于类型判断和运行时检查。

## 获取类型

返回更精确的类型字符串：`null`、`HTMLElement`、`array` 或 `typeof` 的结果。

```js
/**
 * @description 获取类型
 * @param {*} val 任意值
 * @return {string} 类型字符串
 */
const getType = (val) => {}
```

## 类型验证 

验证参数类型是否符合预期。支持：多类型、多断言条件、自定义错误信息。

::: code-group

```js [参数说明]
/**
 * @description 类型验证
 * @param {String} name 参数名
 * @param {*} value 待验证的值
 * @param {String|Array} expectedTypes 预期类型
 * @param {Array|Function} conditions 额外的断言条件。可为函数或 `{ test, message }` 对象，用于做额外断言并在不通过时抛出带信息的错误。
 * @return {Boolean} 是否通过验证
 */
const validate = (name, value, expectedTypes, conditions = []) => { }
```

```js [示例]
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

## 函数判断

判断是否为普通的函数（含构造函数）。通过 `typeof` 与 `prototype` 校验。

```js
/**
 * @description 函数判断
 * @param {Function} fn 待判断的函数
 * @return {boolean}
 */
const isFunction = (fn) => {}
```

## 类判断

判断是否为类。通过检测 `Function.prototype.toString` 返回值是否以 `class` 开头来判断 ES6 class。

```js
/**
 * @description 类判断
 * @param {Function} fn 待判断的类
 * @return {boolean}
 */
const isClass = (fn) => {}
```