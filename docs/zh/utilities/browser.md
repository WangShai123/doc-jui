# 浏览器

## 导入

```ts
import {
  checkModernBrowser,
  copy,
  isMobile,
  isModernBrowser,
} from 'vanilla-jui';
```

## isMobile

检测当前环境是否为移动端。

```ts
export function isMobile(): boolean {}
```

## isModernBrowser

检测当前运行环境是否支持 ES2022 现代浏览器能力。

```ts
export function isModernBrowser(): boolean {}
```

## copy

复制文本到剪贴板。

```ts
/**
 * 复制文本到剪贴板
 *
 * - 优先调用 Clipboard API
 * - 降级使用 execCommand
 *
 * @param {unknown} text 需要复制的文本（接受任意类型，内部会安全转换为字符串）。
 * @returns {Promise<boolean>} 是否复制成功
 */
export async function copy(text: unknown): Promise<boolean> {}
```
