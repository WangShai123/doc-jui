# Instance Management

Cache, expiration and destruction management applied to object/component instances.

## Singleton Proxy

Construct and return a proxy instance based on `Class`, supporting cache and expiration management.

::: code-group

```js [Parameter Description]
/**
 * Singleton proxy
 * @param {Function} Class Constructor function (required)
 * @param {Array} args Arguments array passed to constructor (optional)
 * @param {String} cacheKey Cache key (optional), auto-generates hashKey when empty
 * @param {Boolean} isReset Whether to reset cache (optional), if true, forces rebuild instance and overwrites cache.
 * @param {Number} ttl Cache validity period (optional), unit milliseconds, default null means no validity limit. Timer refreshes on proxy access, automatically `release` when timer expires.
 * @return {Proxy} Proxy object, refreshes TTL on access when needed.
 */
singleton(Class, args = [], cacheKey = '', isReset = false, ttl = null) {}
```

```js [Example]
const inst1 = singleton(MyService);

const inst2 = singleton(MyService, [opt], "my-service", false, 60000);
```

:::

## Release Instance

Release instance under specified cache key; if instance defines `destroy()` method, it will be called, then remove from cache and clean timer.

```js
/**
 * @description Release instance under specified cache key
 * @param {string} key - Cache key
 * @returns {void}
 */
const release = (key) => {};
```

## Destroy All

Destroy and clear all cached instances and timers, will attempt to call `destroy()` on each instance.

```js
/**
 * @description Destroy all cached instances and timers
 * @returns {void}
 */
const destroyAll = () => {};
```

## Service Management

`service` is a simple service management object, containing:

- `instances`: Internal Map
- `get(key, factory)`: Lazily create and return instance
- `destroy(key)`: Call instance's `destroy()` (if exists), and delete from Map
- `destroyAll()`: Destroy and clear all instances
