# HTTP

简单通用的 HTTP 请求封装。

## 发送 POST 请求

默认 POST 请求头为 `Content-Type: application/json`，自动 JSON 序列化请求体，并自动 JSON 反序列化响应体。

::: code-group
```js [参数说明]
/**
 * @description 发送 POST 请求
 * @param {String} url 请求地址
 * @param {Object} body 请求体，自动 JSON 序列化
 * @return {Promise} Promise，解析为响应端 JSON 反序列化后的对象/数组
 */
const postJson = (url, body) => {}
```
```js [示例]
import { postJson } from 'jui'

// 发送用户数据
postJson('/api/users', { name: 'Alice', email: 'alice@example.com' })
  .then(data => {
    console.log('响应:', data)  // { id: 123, name: 'Alice', ... }
  })
  .catch(err => {
    console.error('请求失败:', err)
  })

// 使用 async/await
async function saveUser(name, email) {
  try {
    const result = await postJson('/api/users', { name, email })
    console.log('用户已保存:', result)
  } catch (err) {
    console.error('保存失败:', err)
  }
}
```
:::