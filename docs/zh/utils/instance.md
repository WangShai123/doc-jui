# 实例管理

应用于对象/组件实例的缓存、过期与销毁管理。

## 单例代理

根据 `Class` 构造并返回一个代理实例，支持缓存与过期管理。

::: code-group

```js [参数说明]
/**
 * 单例代理
 * @param {Function} Class 构造函数（必需）
 * @param {Array} args 传递给构造函数的参数数组（可选）
 * @param {String} cacheKey 缓存键（可选），为空时会自动生成 hashKey
 * @param {Boolean} isReset 是否重置缓存（可选），若为 true，会强制重新构建实例并覆盖缓存。
 * @param {Number} ttl 缓存有效期（可选），单位毫秒，默认 null 表示无有效期限制。当访问代理时会刷新计时器，计时器到期后会自动 `release`。
 * @return {Proxy} 代理对象（proxy），对访问会在需要时刷新 TTL。
 */
singleton(Class, args = [], cacheKey = '', isReset = false, ttl = null) {}
```

```js [示例]
const inst1 = singleton(MyService);

const inst2 = singleton(MyService, [opt], "my-service", false, 60000);
```

:::

## 释放实例

释放指定缓存键下的实例；若实例定义了 `destroy()` 方法会调用它，然后从缓存移除并清理计时器。

```js
/**
 * @description 释放指定缓存键下的实例
 * @param {string} key - 缓存键
 * @returns {void}
 */
const release = (key) => {};
```

## 销毁所有

销毁并清空所有缓存实例与计时器，会对每个实例尝试调用 `destroy()`。

```js
/**
 * @description 销毁所有缓存实例与计时器
 * @returns {void}
 */
const destroyAll = () => {};
```

## 服务管理

`service` 是一个简单的服务管理对象，包含：

- `instances`：内部 Map
- `get(key, factory)`：惰性创建并返回实例
- `destroy(key)`：调用实例的 `destroy()`（若存在），并从 Map 删除
- `destroyAll()`：销毁并清空所有实例
