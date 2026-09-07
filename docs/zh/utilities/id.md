# ID

## 导入

```ts
import { hashQueryParams, randomId, uuid } from 'vanilla-jui';
```

## uuid

生成 RFC 4122 v4 形式的 UUID。

```ts
/**
 * 生成 RFC 4122 v4 形式的 UUID。
 *
 * - 优先使用 crypto.randomUUID()
 * - 降级使用 crypto.getRandomValues() 生成 16 字节并设置 version/variant 位
 *
 * @throws {Error} 环境不支持 randomUUID 和 getRandomValues
 * @returns {string} 标准 UUID v4 字符串
 */
export function uuid(): string {}

const id = uuid(); // 例如 "3b241101-e2bb-4d7a-8702-9e3c0a2b6c7d"
```

## randomId

生成适合 DOM id 的随机字符串。

```ts
/**
 * 生成适合 DOM id 的随机字符串
 *
 * @param {number} [length=8] - 字符串长度，范围 1 到 87381
 * @returns {string} 随机字符串
 * @throws {Error} 长度不在有效范围内时抛出错误
 */
export function randomId(length: number = 8): string {}
```

该函数不是 UUID，也不承诺跨系统的永久唯一性；安全令牌应使用专门的协议与编码。

## hashQueryParams

`hashQueryParams(params, bytes?)`

对查询参数对象生成稳定的 SHA-256 哈希片段，常用于缓存 key、请求去重 key 或列表查询状态标识。

```ts
const key = await hashQueryParams({
  page: 1,
  sort: ' desc ',
});
```

处理规则：

- `params` 必须是非 null 对象。
- 顶层 key 会按字典序排序。
- 顶层字符串值会执行 `trim()`。
- 规范化后的对象使用 `JSON.stringify()` 序列化。
- 对序列化字符串计算 SHA-256。
- 默认取前 8 字节，转换为 36 进制字符串。

```ts
export async function hashQueryParams(
  params: Record<string, unknown>,
  bytes: number = 8
): Promise<string> {}
```

参数值应是可 JSON 序列化的查询状态，例如 string、number、boolean、null、数组或普通对象。

`bytes` 范围是 `1` 到 `32`。值越大，碰撞概率越低，生成的 key 通常也越长。

当前实现依赖 `crypto.subtle.digest('SHA-256', ...)`。在不支持 Web Crypto digest 的环境中会抛出：

```txt
hashQueryParams only works in secure context.
```

非安全上下文、旧浏览器或测试环境中如需使用该方法，应先确认运行环境提供 `crypto.subtle`。
