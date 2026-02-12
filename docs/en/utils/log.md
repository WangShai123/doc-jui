# Log

Define common frontend log interfaces in `G3-Web` project.

## console

Provide concise log output interface, wrapping native `console` methods. No operation in non-browser environments.

::: code-group
```js [Parameter Description]
/**
 * @description Log output
 * @param {String} type Log type
 * @param {...any} args Log arguments
 * @return {void}
 */
const log = (type='info', ...args) => {}
```
```js [Example]
import { log } from 'jui'

// Output logs of different levels
log('info', 'Application started')
log('warn', 'About to expire', { expiresIn: '1 day' })
log('error', 'Request failed', error)
log('debug', 'Debug information', data)
```
:::
