# DOM

DOM 常用工具函数集。

## 导入

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

## 查询

### q

`querySelector` 语法糖。

```ts
/**
 * 根据 CSS 选择器获取第一个匹配的元素
 *
 * @param {string} selector CSS 选择器
 * @param {Element | Document} [context=document] 选择器上下文，默认 document
 * @returns {Element | null} 第一个匹配的元素或 `null`
 */
export function q(
  selector: string,
  context?: Element | Document
): Element | null {}

// 示例
createTabs(props).mount(q('.tabs'));
```

### all

`querySelectorAll` 语法糖，返回 `Array.from()` 转换后的数组。

```ts
/**
 * 根据 CSS 选择器获取所有匹配的元素的数组
 *
 * @param {string} selector CSS 选择器
 * @param {Element | Document} [context=document] 选择器上下文，默认 document
 * @returns {Element[]} 所有匹配的元素数组
 */
export function all(
  selector: string,
  context?: Element | Document
): Element[] {}

// 示例
const tabs = all('.tab');
```

## 内容判定

`RenderableContent<TContext>` 是 JUI 中常用的可渲染内容类型，支持：

- `Node`
- `string`、`number`、`boolean`
- `null`、`undefined`
- 上述值的递归只读数组
- `(context) => RenderableContent<TContext>`

```ts
/**
 * 判断是否为组件可渲染内容类型。
 *
 * @param {unknown} value 待判断值
 * @returns {boolean} 判定结果
 */
export function isRenderableContent(
  value: unknown
): value is RenderableContent {}
```

## 类型谓词

| 方法               | 返回值                     |
| ------------------ | -------------------------- |
| `isNode(value)`    | 当前环境中是否为 `Node`    |
| `isElement(value)` | 当前环境中是否为 `Element` |

无对应 DOM 构造器的 SSR 环境中，两者返回 `false`。

## 引用解析

| 方法                   | 结果                                             |
| ---------------------- | ------------------------------------------------ |
| `resolveNodeList(ref)` | 所有节点；空/无匹配/数组含非 Node 时为 `null`    |
| `resolveNode(ref)`     | Node、selector 第一个结果或数组第一个节点        |
| `resolveElement(ref)`  | Element、selector 第一个元素或数组第一个 Element |

`DOMReference` 简写 `ref`，可以是 `Node`、CSS selector、递归节点数组或
`false | null | undefined`。

```ts
resolveNodeList(['#app']); // null，数组成员必须已经是 Node
resolveNodeList('#app'); // [HTMLElement] 或 null
resolveElement([new Text('x'), document.body]); // document.body
```

### 容器引用

`resolveContainer(container, namespace = 'Component', expect = 'element')`

```ts
/**
 * 统一解析容器引用。
 *
 * @param {Element|Node|string|Array|false|null|undefined} container 容器引用、选择器、节点或数组。
 * @param {string} [namespace='Component'] 错误命名空间。
 * @param {'node'|'element'|'array'} [expect='element'] 期望返回类型。
 * @returns {Node|Element|Node[]|null}
 */
export function resolveContainer<TExpect extends ContainerExpect = 'element'>(
  container: DOMReference,
  namespace: string = 'Component',
  expect: TExpect = 'element' as TExpect
): ResolveContainerResult<TExpect> | null {}
```

### 强制引用

`requireContainer(...)` 返回非 `null` 的容器引用。

```ts
/**
 * 强制解析容器并要求返回值存在。
 *
 * @param {Element|Node|string|Array|false|null|undefined} container 容器引用、选择器、节点或数组。
 * @param {string} [namespace='Component'] 错误命名空间。
 * @param {'node'|'element'|'array'} [expect='element'] 期望返回类型。
 * @returns {Node|Element|Node[]}
 */
export function requireContainer<TExpect extends ContainerExpect = 'element'>(
  container: DOMReference,
  namespace: string = 'Component',
  expect: TExpect = 'element' as TExpect
): RequireContainerResult<TExpect> {}
```

### 合并类名

`joinClasses(...)` 合并多个类名，去重并返回结果。

```ts
/**
 * 合并多个类名，去重并返回结果。
 *
 * @param {ClassNameToken[]} tokens 类名数组
 * @returns {string} 合并后的类名字符串
 */
export function joinClasses(...tokens: ClassNameToken[]): string {}
```

## 渲染

### 懒渲染

`lazyRender(target, callback, options?)`

目标首次进入 IntersectionObserver 可视区域时调用 callback，并停止观察。target 可为 CSS selector 或 Element，返回幂等清理函数。

```ts
/**
 * 当目标元素进入可视区域时执行渲染回调，仅执行一次后自动清理。
 *
 * 支持选择器字符串或 Element。目标尚未挂载时默认等待 DOM 变化；不支持
 * IntersectionObserver 时会立即执行回调，保证降级环境也能渲染。
 * @param {string|Element} target CSS 选择器或 DOM 元素。
 * @param {Function} renderCallback 渲染回调函数，仅执行一次。
 * @param {Object} [options] 配置项。
 * @returns {Function} 停止观察的清理函数。
 */
export function lazyRender(
  target: LazyRenderTarget,
  renderCallback: LazyRenderCallback,
  options: LazyRenderOptions = {}
): CleanupFunction {}
```

| 选项         | 默认值  | 说明                                     |
| ------------ | ------- | ---------------------------------------- |
| `threshold`  | `0.1`   | IntersectionObserver threshold           |
| `rootMargin` | `'0px'` | observer root margin                     |
| `root`       | `null`  | observer root                            |
| `waitForDOM` | `true`  | 目标未挂载时是否用 MutationObserver 等待 |

- 不支持 IntersectionObserver 时立即渲染。
- 目标尚不存在且 `waitForDOM: false`，或环境不支持 MutationObserver 时也立即回调。
- target 类型非法时发出 warning 并返回空清理函数；
- callback 不是函数时抛出 `TypeError`。

### 加载状态

`createLoading(x, y)` 创建通用加载状态节点。

<div class="demo"></div>

```ts
export type flexPosition = 'center' | 'flex-start' | 'flex-end';

/**
 * 创建通用加载状态节点。
 *
 * @param {flexPosition} [xDirection='center'] 水平方向对齐方式。
 * @param {flexPosition} [yDirection='center'] 垂直方向对齐方式。
 * @returns {HTMLDivElement} 加载状态节点。
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
