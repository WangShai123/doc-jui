# 常规工具

## UUID

生成标准的 UUID v4 字符串。

::: code-group

```js [参数说明]
/**
 * @description 生成 UUID v4
 * @return {string} UUID
 */
const uuid = () => {}
```

```js [示例]
import { uuid } from 'jui'

const id = uuid()  // '550e8400-e29b-41d4-a716-446655440000'
```

:::

::: tip 内部逻辑
- 优先使用: `crypto.randomUUID()`（现代浏览器）
- 安全降级: `fallback` 到 `crypto.getRandomValues()` 手动生成 UUID
:::

## 随机 ID

生成指定长度的随机字符串 ID（仅包含字母和数字，不包含易混淆字符）。

::: code-group

```js [参数说明]
/**
 * @description 生成指定长度的随机字符串 ID
 * @param {Number} length 默认 8，范围 [1, 32]
 * @return {String}
 * @throws {Error} 长度超出范围
 */
const randomId = (length = 8) => {}
```

```js [示例]
import { randomId } from 'jui'

const id = randomId()      // 'rs99ii27'
const longId = randomId(16) // 'nm8bu3i3vez5f8ya'
```

:::

## 简单转义

转义 HTML 特殊字符，防止 XSS 攻击。

::: code-group

```bash [支持字符串]
`&` > `&amp;`
`<` > `&lt;`
`>` > `&gt;`
`"` > `&quot;`
`'` > `&#39;`
```

```js [参数说明]
/**
 * @description 简单转义 HTML 特殊字符
 * @param {String} text 待转义的文本
 * @return {String} 转义后的文本
 */
const escapeHtml = (text) => {}
```

```js [示例]
import { escapeHtml } from 'jui'

escapeHtml('<script>alert("xss")</script>')
// '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
```

:::

## 检测移动设备

检测当前设备是否为移动设备。

::: code-group

```js [参数说明]
/**
 * @description 检测当前设备是否为移动设备
 * @return {Boolean} 是否为移动设备
 */
const isMobile = () => {}
```

```js [示例]
import { isMobile } from 'jui'

const isMobile = isMobile()
if (isMobile) console.log('当前在移动设备上')
```
:::

::: tip 内部逻辑
- 优先使用: 检查 `navigator.userAgentData.mobile`（Chromium 84+）
- 安全降级: `User-Agent` 字符串匹配
:::
