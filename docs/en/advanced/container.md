# Service Container

`container` is a lightweight dependency injection and service container.

## Binding Types

Supports three binding types:

- Class (constructor)
- Factory function (factory)
- Plain value (value)

## Container Support

- Singleton caching
- Constructor dependency injection
- Runtime parameter override

## Facade Method

Get global singleton container instance through `Container.run()`.

## Quick Example

::: code-group

```js [index.js]
import { container } from "jui";

const container = Container.run();

class Logger {}
class Service {
  constructor(logger, name) {
    this.logger = logger;
    this.name = name;
  }
}

container.bind("logger", Logger, { singleton: true });
container.bind("service", Service, { deps: ["logger"] });
container.bind("config", { port: 3000 });

// Get singleton service (depends on logger)
const svc = container.get("service");
// Pass runtime parameters, bypass singleton cache
const svc2 = container.get("service", "runArg");
```

:::

## API Reference

- `static run()` -> `Container`
  - Return container singleton (`Container._instance`).

- `bind(id, target, options = {})` -> `this`
  - Automatically select binding based on `target` type: class => `bindClass`, function => `bindFactory` (heuristically determines if it's a constructor), non-function => `bindValue`.
  - Common `options` fields: `singleton` (boolean), `deps` (dependency ID list).

- `bindClass(id, Class, singleton = false, deps = [])` -> `this`
  - Bind class constructor. `deps` are constructor pre-dependencies, injected in order.

- `bindFactory(id, factory, singleton = false)` -> `this`
  - Bind factory function, factory signature is typically `(container, ...args) => instance`.

- `bindValue(id, value)` -> `this`
  - Bind any value, value is immediately written to instance cache (value is always singleton).

- `get(id, ...userParams)` -> `any`
  - Get service instance or value. If it's a class or factory, supports singleton caching (only caches when no `userParams` passed); passing `userParams` will prevent singleton caching and create temporary instance.

- `has(id)` -> `boolean`
  - Check if service is bound.

- `unbind(id)` -> `boolean`
  - Remove service binding and release service instance, delete service data

- `destroy(id)` -> `boolean`
  - Destroy service instance cache (do not clear bindings)

- `destroyAll()` -> `void`
  - Destroy all service instances (do not clear bindings)

- `reset()` -> `void`
  - Clear all bindings and instance cache (for testing).

## Service Data Operations

Container internally maintains `serviceData` (Map), providing operations for service additional data:

- `setData(abstract, key, value)`
- `getData(abstract, key)`
- `hasData(abstract, key)`
- `removeData(abstract, key)`

Note: Current implementation requires target `abstract` to exist in `serviceData`, otherwise these methods will throw errors; code does not provide public interface for automatic initialization of `serviceData` entries.

## Errors and Edge Cases

- `bindClass` / `bindFactory` will throw `TypeError` when type mismatch occurs.
- `get` will throw clear error messages when requesting unbound services or missing class dependencies.

## todo

- Add lifecycle hooks (like `init` / `destroy`) or decorator syntax to simplify automatic injection.
