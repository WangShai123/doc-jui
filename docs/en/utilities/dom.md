# DOM

Common DOM utility functions.

## Import

```ts
import {
  all,
  isElement,
  isNode,
  isRenderableContent,
  joinClasses,
  lazyRender,
  q,
  requireContainer,
  resolveContainer,
  resolveElement,
  resolveNode,
  resolveNodeList,
} from 'vanilla-jui';
```

## Query

### q

Syntax sugar for `querySelector`.

```ts
/**
 * Get the first element matching a CSS selector.
 *
 * @param {string} selector CSS selector.
 * @param {Element | Document} [context=document] Selector context. Defaults to document.
 * @returns {Element | null} The first matched element, or `null`.
 */
export function q(
  selector: string,
  context?: Element | Document
): Element | null {}

// Example
createTabs(props).mount(q('.tabs'));
```

### all

Syntax sugar for `querySelectorAll`. It returns an array created with `Array.from()`.

```ts
/**
 * Get all elements matching a CSS selector as an array.
 *
 * @param {string} selector CSS selector.
 * @param {Element | Document} [context=document] Selector context. Defaults to document.
 * @returns {Element[]} All matched elements.
 */
export function all(
  selector: string,
  context?: Element | Document
): Element[] {}

// Example
const tabs = all('.tab');
```

## Content Checks

`RenderableContent<TContext>` is the common renderable content type in JUI. It supports:

- `Node`
- `string`, `number`, `boolean`
- `null`, `undefined`
- Recursive readonly arrays of the values above
- `(context) => RenderableContent<TContext>`

```ts
/**
 * Check whether a value is renderable component content.
 *
 * @param {unknown} value Value to check.
 * @returns {boolean} Check result.
 */
export function isRenderableContent(
  value: unknown
): value is RenderableContent {}
```

## Type Predicates

| Method             | Return value                                  |
| ------------------ | --------------------------------------------- |
| `isNode(value)`    | Whether the value is a `Node` in this runtime |
| `isElement(value)` | Whether the value is an `Element` in this runtime |

In SSR environments without matching DOM constructors, both return `false`.

## Reference Resolution

| Method                 | Result                                                       |
| ---------------------- | ------------------------------------------------------------ |
| `resolveNodeList(ref)` | All nodes; `null` when empty, unmatched, or an array contains a non-Node |
| `resolveNode(ref)`     | A Node, the first selector result, or the first node in an array |
| `resolveElement(ref)`  | An Element, the first selector element, or the first Element in an array |

`DOMReference` is often shortened to `ref`. It can be a `Node`, CSS selector, recursive node array, or `false | null | undefined`.

```ts
resolveNodeList(['#app']); // null. Array items must already be Nodes.
resolveNodeList('#app'); // [HTMLElement] or null
resolveElement([new Text('x'), document.body]); // document.body
```

### Container References

`resolveContainer(container, namespace = 'Component', expect = 'element')`

```ts
/**
 * Resolve a container reference consistently.
 *
 * @param {Element|Node|string|Array|false|null|undefined} container Container reference, selector, node, or array.
 * @param {string} [namespace='Component'] Error namespace.
 * @param {'node'|'element'|'array'} [expect='element'] Expected return type.
 * @returns {Node|Element|Node[]|null}
 */
export function resolveContainer<TExpect extends ContainerExpect = 'element'>(
  container: DOMReference,
  namespace: string = 'Component',
  expect: TExpect = 'element' as TExpect
): ResolveContainerResult<TExpect> | null {}
```

### Required References

`requireContainer(...)` returns a non-`null` container reference.

```ts
/**
 * Resolve a container and require it to exist.
 *
 * @param {Element|Node|string|Array|false|null|undefined} container Container reference, selector, node, or array.
 * @param {string} [namespace='Component'] Error namespace.
 * @param {'node'|'element'|'array'} [expect='element'] Expected return type.
 * @returns {Node|Element|Node[]}
 */
export function requireContainer<TExpect extends ContainerExpect = 'element'>(
  container: DOMReference,
  namespace: string = 'Component',
  expect: TExpect = 'element' as TExpect
): RequireContainerResult<TExpect> {}
```

### Merging Class Names

`joinClasses(...)` merges multiple class names, removes duplicates, and returns the result.

```ts
/**
 * Merge multiple class names, remove duplicates, and return the result.
 *
 * @param {ClassNameToken[]} tokens Class name tokens.
 * @returns {string} Merged class name string.
 */
export function joinClasses(...tokens: ClassNameToken[]): string {}
```

## Rendering

### Lazy Rendering

`lazyRender(target, callback, options?)`

Calls `callback` when the target first enters the IntersectionObserver viewport, then stops observing. `target` can be a CSS selector or an Element. The returned cleanup function is idempotent.

```ts
/**
 * Run a render callback when the target element enters the viewport. Runs once and then cleans up.
 *
 * Supports selector strings and Elements. When the target is not mounted yet, DOM changes are observed by default.
 * If IntersectionObserver is unavailable, the callback runs immediately so rendering still works in fallback environments.
 * @param {string|Element} target CSS selector or DOM element.
 * @param {Function} renderCallback Render callback. Runs once.
 * @param {Object} [options] Options.
 * @returns {Function} Cleanup function that stops observation.
 */
export function lazyRender(
  target: LazyRenderTarget,
  renderCallback: LazyRenderCallback,
  options: LazyRenderOptions = {}
): CleanupFunction {}
```

| Option       | Default | Description                                  |
| ------------ | ------- | -------------------------------------------- |
| `threshold`  | `0.1`   | IntersectionObserver threshold               |
| `rootMargin` | `'0px'` | observer root margin                         |
| `root`       | `null`  | observer root                                |
| `waitForDOM` | `true`  | Whether to wait with MutationObserver when the target is not mounted |

- Renders immediately when IntersectionObserver is unavailable.
- Also calls back immediately when the target does not exist and `waitForDOM: false`, or when MutationObserver is unavailable.
- Emits a warning and returns an empty cleanup function when `target` has an invalid type.
- Throws `TypeError` when `callback` is not a function.

### Loading State

`createLoading(x, y)` creates a common loading-state node.

<div class="demo"></div>

```ts
export type flexPosition = 'center' | 'flex-start' | 'flex-end';

/**
 * Create a common loading-state node.
 *
 * @param {flexPosition} [xDirection='center'] Horizontal alignment.
 * @param {flexPosition} [yDirection='center'] Vertical alignment.
 * @returns {HTMLDivElement} Loading-state node.
 */
export function createLoading(
  xDirection: flexPosition = 'center',
  yDirection: flexPosition = 'center'
): HTMLDivElement {}
```

```vp-script
import { createLoading, q } from 'vanilla-jui';
import { insert, jsx } from 'vanilla-signal';

insert(q('.demo'), jsx('div',{
  style:{
    width: '24px',
    height: '24px',
    position: 'relative'
  },
  children: createLoading()
}));
```
