# Browser

## Import

```ts
import {
  checkModernBrowser,
  copy,
  isMobile,
  isModernBrowser,
} from 'vanilla-jui';
```

## isMobile

Checks whether the current environment is a mobile device.

```ts
export function isMobile(): boolean {}
```

## isModernBrowser

Checks whether the current runtime supports the ES2022 capabilities required by modern browsers.

```ts
export function isModernBrowser(): boolean {}
```

## copy

Copies text to the clipboard.

```ts
/**
 * Copy text to the clipboard.
 *
 * - Prefer the Clipboard API
 * - Fall back to execCommand
 *
 * @param {unknown} text Text to copy. Any type is accepted and safely converted to string internally.
 * @returns {Promise<boolean>} Whether the copy succeeded.
 */
export async function copy(text: unknown): Promise<boolean> {}
```
