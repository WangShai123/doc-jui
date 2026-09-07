# ID

## Import

```ts
import { hashQueryParams, randomId, uuid } from 'vanilla-jui';
```

## uuid

Generates an RFC 4122 v4 UUID.

```ts
/**
 * Generate an RFC 4122 v4 UUID.
 *
 * - Prefer crypto.randomUUID()
 * - Fall back to crypto.getRandomValues() to generate 16 bytes and set version/variant bits
 *
 * @throws {Error} When the environment supports neither randomUUID nor getRandomValues.
 * @returns {string} Standard UUID v4 string.
 */
export function uuid(): string {}

const id = uuid(); // For example "3b241101-e2bb-4d7a-8702-9e3c0a2b6c7d"
```

## randomId

Generates a random string suitable for a DOM id.

```ts
/**
 * Generate a random string suitable for a DOM id.
 *
 * @param {number} [length=8] - String length, from 1 to 87381.
 * @returns {string} Random string.
 * @throws {Error} Throws when length is outside the valid range.
 */
export function randomId(length: number = 8): string {}
```

This function is not a UUID and does not promise permanent uniqueness across systems. Use a dedicated protocol and encoding for security tokens.

## hashQueryParams

`hashQueryParams(params, bytes?)`

Creates a stable SHA-256 hash fragment from a query parameter object. It is useful for cache keys, request dedupe keys, or identifiers for list query state.

```ts
const key = await hashQueryParams({
  page: 1,
  sort: ' desc ',
});
```

Processing rules:

- `params` must be a non-null object.
- Top-level keys are sorted alphabetically.
- Top-level string values are trimmed.
- The normalized object is serialized with `JSON.stringify()`.
- The serialized string is hashed with SHA-256.
- The first 8 bytes are used by default and converted to a base-36 string.

```ts
export async function hashQueryParams(
  params: Record<string, unknown>,
  bytes: number = 8
): Promise<string> {}
```

Parameter values should be JSON-serializable query state, such as string, number, boolean, null, arrays, or plain objects.

`bytes` must be between `1` and `32`. Higher values reduce collision risk and usually produce longer keys.

The current implementation depends on `crypto.subtle.digest('SHA-256', ...)`. If Web Crypto digest is unavailable, it throws:

```txt
hashQueryParams only works in secure context.
```

In non-secure contexts, older browsers, or test environments, make sure `crypto.subtle` is available before using this method.
