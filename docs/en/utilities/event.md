# Events

## Import

```ts
import { createEventManager, listen } from 'vanilla-jui';
```

## createEventManager

`createEventManager()` creates an instance-level event registry. Each listener is identified by a non-empty string key.

### Instance Methods

| Method                                     | Return value | Behavior                                             |
| ------------------------------------------ | ------------ | ---------------------------------------------------- |
| `on(key, target, type, handler, options?)` | `() => void` | Unbinds the old listener before rebinding the same key |
| `off(key)`                                 | `boolean`    | Unbinds and deletes the record; returns `false` when missing |
| `clear()`                                  | `void`       | Unbinds all recorded listeners                       |
| `size()`                                   | `number`     | Current record count                                 |

```ts
const events = createEventManager();
events.on('root-click', root, 'click', handleClick);
events.on('window-resize', window, 'resize', handleResize, { passive: true });

componentOwn(() => events.clear());
```

- Repeated keys mean replacement. This is useful when a component rebuilds and binds again. Empty keys throw `TypeError`.
- The cleanup function returned by `on()` only unbinds the underlying event. It does not delete the record from the manager Map. Use `off(key)` when the registry must be updated immediately, and use `clear()` at the end of the lifecycle.

## listen

`listen(target, type, handler, options?)` is syntax sugar for `addEventListener`.

- Returns an **idempotent unbind function**.
- Unbinding uses the same `handler` and `options` used during binding.

```ts
const stop = listen(window, 'resize', () => measure());
stop();
stop(); // No side effects
```
