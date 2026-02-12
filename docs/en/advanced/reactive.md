# Reactive

`Reactive` is a lightweight, Vue-inspired simple reactivity feature.

Main primitives include: `reactive`, `ref`, `effect`, `computed`, along with internal implementation of `track`/`trigger` and dependency cleanup logic.

## Core Concepts

- Dependency collection: During `effect` execution, reading reactive objects or `ref` will register current effect as dependency (`track`).
- Trigger update: When reactive property is written, `trigger` will find and call related effects.
- Cleanup: Before each effect re-execution, previously collected dependencies will be removed (`cleanupEffect`).

## API

- `reactive(obj)`: Wrap an object as reactive object (nested objects will recursively return reactive proxies).
- `ref(value)`: Create a reactive single-value container with `.value` read/write capability.
- `effect(fn)`: Register reactive side effect; automatically re-executes when dependent values change. Returns an effect that can be stopped via `stop()`. Executes once immediately upon creation.
- `computed(getter)`: Compute cached values based on dependencies (lazy evaluation), and provide `.value` access and `stop()` method.

## Usage Example

```js
import { reactive, ref, effect, computed } from 'jui'

const state = reactive({ count: 0 })
const doubled = computed(() => state.count * 2)

effect(() => {
  console.log('count:', state.count, 'doubled:', doubled.value)
})

state.count = 1 // Will trigger effect

const r = ref(10)
effect(() => console.log(r.value))
r.value = 20
```

## Notes

- `reactive` only proxies objects; non-objects are returned as-is.
- `effect` becomes `activeEffect` during execution, thus captured by `track`; same effect will clean up old dependencies before multiple executions to avoid memory leaks.
- This implementation is a basic version, suitable for small projects or utility libraries; complex scenarios (such as async update debouncing, task scheduling priority) are not recommended for use or should be extended.
