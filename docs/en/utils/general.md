# General Utilities

## UUID

Generate standard UUID v4 strings.

::: code-group

```js [Parameter Description]
/**
 * @description Generate UUID v4
 * @return {string} UUID
 */
const uuid = () => {}
```

```js [Example]
import { uuid } from 'jui'

const id = uuid()  // '550e8400-e29b-41d4-a716-446655440000'
```

:::

::: tip Internal Logic
- Priority use: `crypto.randomUUID()` (modern browsers)
- Safe fallback: `fallback` to `crypto.getRandomValues()` manual UUID generation
:::

## Random ID

Generate random string IDs of specified length (containing only letters and numbers, excluding easily confused characters).

::: code-group

```js [Parameter Description]
/**
 * @description Generate random string ID of specified length
 * @param {Number} length Default 8, range [1, 32]
 * @return {String}
 * @throws {Error} Length out of range
 */
const randomId = (length = 8) => {}
```

```js [Example]
import { randomId } from 'jui'

const id = randomId()      // 'rs99ii27'
const longId = randomId(16) // 'nm8bu3i3vez5f8ya'
```

:::

## Simple Escape

Escape HTML special characters to prevent XSS attacks.

::: code-group

```bash [Supported Strings]
`&` > `&amp;`
`<` > `&lt;`
`>` > `&gt;`
`"` > `&quot;`
`'` > `&#39;`
```

```js [Parameter Description]
/**
 * @description Simple escape HTML special characters
 * @param {String} text Text to escape
 * @return {String} Escaped text
 */
const escapeHtml = (text) => {}
```

```js [Example]
import { escapeHtml } from 'jui'

escapeHtml('<script>alert("xss")</script>')
// '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
```

:::

## Mobile Device Detection

Detect whether the current device is a mobile device.

::: code-group

```js [Parameter Description]
/**
 * @description Detect whether the current device is a mobile device
 * @return {Boolean} Whether it is a mobile device
 */
const isMobile = () => {}
```

```js [Example]
import { isMobile } from 'jui'

const isMobile = isMobile()
if (isMobile) console.log('Currently on mobile device')
```
:::

::: tip Internal Logic
- Priority use: Check `navigator.userAgentData.mobile` (Chromium 84+)
- Safe fallback: `User-Agent` string matching
:::
