# HTTP

## Import

```ts
import { postJson, restUrl } from 'vanilla-jui';
```

## restUrl

`restUrl` returns the current site's WordPress REST root URL.

It is a load-time constant and is not recalculated after history or navigation changes.

In non-browser environments, it is `''`.

## postJson

`postJson<T>(url, body, options?)` is a helper for `POST` requests based on `fetch` and JSON data preparation. It is a small wrapper for common cases.

```ts
const result = await postJson<{ id: number }>('/api/items', { title: 'One' });
```

`options` has the type `Omit<RequestInit, 'method' | 'body'>`. Callers cannot override method or body. Other fetch options are passed through. When `Content-Type` is not provided, `application/json` is set automatically; custom values are preserved.

For complex HTTP request tools, prefer `vanilla-signal-query` and `vanilla-request`.
