# Cookie

Provides a simple interface for reading, writing, and removing Cookies.

## Get Cookie

::: code-group
```js [Parameter Description]
/**
 * @description Read the value of the specified Cookie
 * @param {String} name Cookie name
 * @return {String|null} Cookie value, returns null if not exists
 */
const getCookie = (name) => {}
```
```js [Example]
import { getCookie } from 'jui'

const token = getCookie('auth_token')
if (token) {
  console.log('User authenticated:', token)
}
```
:::

## Set Cookie

Set Cookie, expires in 1 day by default, `sameSite=strict`, `path=/`.

::: code-group
``` js [Parameter Description]
/**
 * @description Set Cookie
 * @param {String} name Cookie name
 * @param {String} value Cookie value
 * @param {Number} seconds Cookie expiration time in seconds, default 86400 seconds (1 day)
 * @return {String|Null} Returns Cookie value on success, null on failure
 */
const setCookie = (name, value, seconds = 86400) => {}
```
``` js [Example]
import { setCookie } from 'jui'

const success = setCookie('auth_token', 'abc123xyz', 7 * 24 * 60 * 60) // 7 days
console.log('Set result:', success)
```
:::

## Remove Cookie

::: code-group
```js [Parameter Description]
/**
 * @description Remove Cookie
 * @param {String} name Cookie name
 * @return {Boolean} Whether successful
 */
const removeCookie = (name) => {}
```
``` js [Example]
import { removeCookie } from 'jui'

const success = removeCookie('auth_token')
console.log('Remove result:', success)
```
:::

## Custom Configuration

If you need to customize more Cookie configurations, please use [Store](/en/advanced/store) and its `setOptions` method.
