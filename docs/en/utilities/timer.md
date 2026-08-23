# Timer

## Import

```ts
import { timer } from 'vanilla-jui';
```

## timer

`timer` is a module-level timeout registry managed by string keys.

- Calling `start()` again with the same key clears the old timeout first.
- The record is deleted automatically after the callback runs.

```ts
timer.start('toast:42', 3000, () => closeToast(42));
timer.start('toast:42', 5000, () => closeToast(42)); // Replaces the previous one
timer.cancel('toast:42');
```

### Static Methods

| Member                                 | Description                                      |
| -------------------------------------- | ------------------------------------------------ |
| `timer.start(key, duration, callback)` | Creates or replaces a timeout                    |
| `timer.cancel(key)`                    | Clears a timeout by key; no-op when missing      |
| `timer.timers`                         | Underlying mutable records, for diagnostics only |

The registry is shared by all callers. Keys should include a component or instance namespace to avoid collisions.
