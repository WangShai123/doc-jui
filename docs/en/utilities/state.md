# State

## Import

```ts
import {
  createStateSync,
  getStoreVersion,
  stateSnapshot,
  trackStoreVersion,
} from 'vanilla-jui';
```

## createStateSync

`createStateSync(read, sync, options?)`

Bridges reactive reads to expensive imperative side effects and returns a dispose function. Declarative attributes, text, and lists should depend on state directly and should not use this to manage DOM a second time.

| Option         | Default       | Description                                      |
| -------------- | ------------- | ------------------------------------------------ |
| `deferInitial` | `true`        | Whether `createWatch` delays the first callback  |
| `flushInitial` | `false`       | Whether to run `sync` synchronously on the first callback |
| `flush`        | `'microtask'` | Whether later updates are merged through a microtask or run synchronously |

```ts
const disposeSync = createStateSync(
  () => ({ width: state.width, version: getStoreVersion(state.data) }),
  ({ width }) => thirdPartyWidget.resize(width),
  { flush: 'microtask' }
);

disposeSync();
```

`sync` may return a Promise, but the scheduler does not wait for async results in sequence. If an ordered async flow is needed, add cancellation or version checks in the business layer.

## getStoreVersion

<Badge>Store helpers</Badge>

`getStoreVersion(value)` reads the numeric `__version__` of an object. Other values return `0`.

## stateSnapshot

<Badge>Store helpers</Badge>

`stateSnapshot(value)` uses `unwrap()` from `vanilla-signal` to get a non-proxy snapshot.

## trackStoreVersion

<Badge>Store helpers</Badge>

`trackStoreVersion(value)` reactively reads `__version__` and returns the original input.
