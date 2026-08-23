# HTTP

## 导入

```ts
import { postJson, restUrl } from 'vanilla-jui';
```

## restUrl

`restUrl`，返回 当前站点的 WordPress REST 根地址。

它是加载时常量，history/navigation 后不会重新计算。

非浏览器环境为 `''`。

## postJson

`postJson<T>(url, body, options?)` 是基于 `fetch` 和 `JSON` 数据预处理的 `POST` 请求的助手函数。简单封装，处理常规场景。

```ts
const result = await postJson<{ id: number }>('/api/items', { title: 'One' });
```

`options` 类型为 `Omit<RequestInit, 'method' | 'body'>`。调用方不能覆盖 method 或 body；其他 fetch 选项会透传。未提供 `Content-Type` 时自动设置 `application/json`，自定义值会保留。

对于复杂的HTTP工具请求，推荐使用 `vanilla-signal-query` 和 `vanilla-request`。
