# Signal

`Signal` is a lightweight, engineering-grade, self-use reactive system implementation inspired by SolidJS's mental model. It is written entirely in native JavaScript without relying on build tools (such as Vite or Rollup), JSX, or any framework, making it suitable for browser environments.

## Core Concepts

- **Reactive-driven DOM updates**: Data changes → Automatically trigger side effects (`effect`) → Update UI.
- **Fine-grained reactivity**: Each `signal` is an independent reactive unit, tracking/updating only the parts that truly depend on it.
- **No virtual DOM**: Directly manipulates the real `DOM`, achieving declarative updates through binding functions (e.g., `bindText`).
- **Composable & nestable**: Supports nested `effects`, scope management, error boundaries, and other advanced features.
- **Scheduler control**: Supports scheduling strategies such as `batch`, `startTransition`, and `flushSync` for performance optimization.

The core `APIs` and implementation principles are as follows:

## createSignal

```js
createSignal(initialValue);
```

::: tip Principle

- Returns two functions: `[read, write]`.
- When `read()` is called, if there is a current `Listener` (i.e., a running `effect`), it is added to the `signal`'s subscriber set `subs`.
- `write(newValue)` triggers all subscribers to re-execute (via `schedule(effect)`).

:::

## createEffect

```js
createEffect(fn);
```

::: tip Principle

- Creates an `effect` object containing a `run()` method.
- While executing `fn()`, it automatically reads `signals`, thereby establishing dependencies.
- When a dependent `signal` updates, the `effect` is rescheduled for execution.
- Supports automatic cleanup (`onCleanup`) and nested scopes.

:::

## createMemo

```js
createMemo(fn);
```

::: tip Principle

- Internally wraps `fn` with `createEffect` and caches the result.
- Recomputes only when the dependent `signal`'s value changes (determined via `equals`).
- Returns `a read-only signal` that can be tracked by other `effects`.

:::

## createStore

```js
createStore(obj);
createDeepStore(obj);
```

::: tip Principle

- Uses `Proxy` to intercept object property access/assignment.
- Each property corresponds to an internal `signal`.
- `createDeepStore` recursively proxies nested objects and arrays, supporting deep reactivity.

:::

> 📌 Array mutation methods (e.g., push, sort) are also intercepted and trigger updates.

## createResource

```js
createResource(fetcher, options);
```

::: tip Principle

- Encapsulates asynchronous data loading, returning `[read, { state, reload }]`.
- Supports `loading`, `error`, and `data` states.
- Built-in race condition handling (only retains results from the latest request).
- Can be combined with `createSuspense` to implement "loading" fallbacks.

:::

```js
const [user, { state }] = createResource(() => fetchUser(id));
```

> ⚠️ Calling user() while still loading will throw a Promise, used for Suspense.

## createSuspense

```js
createSuspense(renderFn, fallback);
```

::: tip Principle

- Captures Promises thrown in `renderFn` (from `createResource`).
- Returns `fallback`, then reschedules rendering after the Promise resolves.

:::

```js
const view = createSuspense(
  () => html`<div>${user().name}</div>`,
  html`<div>Loading...</div>`,
);
```

> 🔄 Similar to React Suspense but based on Promise capture.

## DOM Binding

DOM binding functions eliminate the need for template engines. All bindings automatically respond to data changes via `createEffect`.

| Function                                        | Purpose                                     |
| ----------------------------------------------- | ------------------------------------------- |
| `bindText(el, signal)`                          | Bind text content                           |
| `bindAttr(el, name, signal)`                    | Bind HTML attributes                        |
| `bindStyle(el, name, signal)`                   | Bind CSS styles                             |
| `bindShow(el, signal)`                          | Control `display` show/hide                 |
| `bindIf(anchor, condition, factory)`            | Conditional rendering (insert/remove nodes) |
| `bindList(anchor, listSignal, render, options)` | List rendering (supports keys)              |

## Scheduling and Batching

- `batch(fn)`: Batch updates to avoid multiple effect triggers.
- `startTransition(fn)`: Low-priority updates (e.g., search input) that do not block the UI.
- `flushSync(fn)`: Synchronously force refresh (for interactive feedback).

## Scope and Lifecycle

- `createRoot(fn)` / `createScope(fn)`: Create effect containers for unified cleanup.
- `onCleanup(fn)`: Executes cleanup when an effect or scope is destroyed.
- `onMount(fn)`: Executes in a microtask after the effect runs for the first time (similar to component mounting).

## Error Handling

- `createErrorBoundary(fn, fallback)`: Captures errors in effects and provides a fallback.
- `catchError(fn, fallback)`: Simple try-catch wrapper.

## Use Cases

- Small web applications or embedded components
- Projects that avoid introducing large frameworks
- Independent modules in micro-frontend architectures
- Scenarios requiring fine-grained control over update logic
