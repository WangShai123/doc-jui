# Cookie

提供简洁的 Cookie 读取、写入与删除接口。

## 获取Cookie

::: code-group
```js [参数说明]
/**
 * @description 读取指定 Cookie 的值
 * @param {String} name Cookie 名称
 * @return {String|null} Cookie 值，若不存在，返回 null
 */
const getCookie = (name) => {}
```
```js [示例]
import { getCookie } from 'jui'

const token = getCookie('auth_token')
if (token) {
  console.log('用户已认证:', token)
}
```
:::

## 设置Cookie

设置Cookie，默认 1 天过期，`sameSite=strict`, `path=/`。

::: code-group
``` js [参数说明]
/**
 * @description 设置 Cookie
 * @param {String} name Cookie 名称
 * @param {String} value Cookie 值
 * @param {Number} seconds Cookie 过期时间，单位秒，默认 86400 秒（1 天）
 * @return {String|Null} 设置成功返回 Cookie 值，设置失败返回 null
 */
const setCookie = (name, value, seconds = 86400) => {}
```
``` js [示例]
import { setCookie } from 'jui'

const success = setCookie('auth_token', 'abc123xyz', 7 * 24 * 60 * 60) // 7 天
console.log('设置结果:', success)
```
:::

## 删除Cookie

::: code-group
```js [参数说明]
/**
 * @description 删除 Cookie
 * @param {String} name Cookie 名称
 * @return {Boolean} 是否成功
 */
const removeCookie = (name) => {}
```
``` js [示例]
import { deleteCookie } from 'jui'

const success = deleteCookie('auth_token')
console.log('删除结果:', success)
```
:::

## 自定义配置

如需要自定义 Cookie 更多配置，请使用 [Store](/zh/advanced/store) 和它的 `setOptions` 方法进行操作。