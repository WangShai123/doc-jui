# HTTP

Simple and universal HTTP request wrapper.

## Send POST Request

Default POST request header is `Content-Type: application/json`, automatically JSON serializes request body, and automatically JSON deserializes response body.

::: code-group
```js [Parameter Description]
/**
 * @description Send POST request
 * @param {String} url Request URL
 * @param {Object} body Request body, automatically JSON serialized
 * @return {Promise} Promise that resolves to response JSON deserialized object/array
 */
const postJson = (url, body) => {}
```
```js [Example]
import { postJson } from 'jui'

// Send user data
postJson('/api/users', { name: 'Alice', email: 'alice@example.com' })
  .then(data => {
    console.log('Response:', data)  // { id: 123, name: 'Alice', ... }
  })
  .catch(err => {
    console.error('Request failed:', err)
  })

// Using async/await
async function saveUser(name, email) {
  try {
    const result = await postJson('/api/users', { name, email })
    console.log('User saved:', result)
  } catch (err) {
    console.error('Save failed:', err)
  }
}
```
:::
