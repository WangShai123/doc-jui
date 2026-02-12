# 日志

定义 `G3-Web` 项目中的前端常用日志接口。

## console

提供简洁的日志输出接口，包装原生 `console` 方法。非浏览器环境，无操作。

::: code-group
```js [参数说明]
/**
 * @description 日志输出
 * @param {String} type 日志类型
 * @param {...any} args 日志参数
 * @return {void}
 */
const log = (type='info', ...args) => {}
```
```js [示例]
import { log } from 'jui'

// 输出不同级别日志
log('info', '应用已启动')
log('warn', '即将过期', { expiresIn: '1天' })
log('error', '请求失败', error)
log('debug', '调试信息', data)
```
:::