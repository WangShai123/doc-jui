# ID

## Import

```ts
import { randomId, uuid } from 'vanilla-jui';
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
