# ID

## 导入

```ts
import { randomId, uuid } from 'vanilla-jui';
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
