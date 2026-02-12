# 服务容器

`Container` 是一个轻量级的依赖注入与服务容器。

## 绑定类型

支持三种绑定类型：

- 类（constructor）
- 工厂函数（factory）
- 普通值（value）

## 容器支持

- 单例缓存
- 构造函数依赖注入
- 运行时参数覆盖

## 门面方法

通过 `Container.run()` 获取全局单例容器实例。

## 快速示例

::: code-group

```js [index.js]
import {container} from 'jui'

const container = Container.run()

class Logger {}
class Service {
    constructor(logger, name) {
        this.logger = logger;
        this.name = name
    }
}

container.bind('logger', Logger, { singleton: true })
container.bind('service', Service, { deps: ['logger'] })
container.bind('config', { port: 3000 })

// 获取单例 service（依赖 logger）
const svc = container.get('service')
// 传入运行时参数，绕过单例缓存
const svc2 = container.get('service', 'runArg')
```

:::

## API 参考

- `static run()` -> `Container`
  - 返回容器单例（`Container._instance`）。

- `bind(id, target, options = {})` -> `this`
  - 根据 `target` 类型自动选择绑定：类 => `bindClass`，函数 => `bindFactory`（会启发式判断是否为构造函数），非函数 => `bindValue`。
  - `options` 常用字段：`singleton`（布尔），`deps`（依赖 ID 列表）。

- `bindClass(id, Class, singleton = false, deps = [])` -> `this`
  - 绑定类构造函数。`deps` 为构造函数前置依赖，按顺序注入。

- `bindFactory(id, factory, singleton = false)` -> `this`
  - 绑定工厂函数，工厂签名常为 `(container, ...args) => instance`。

- `bindValue(id, value)` -> `this`
  - 绑定任意值，值会立即写入实例缓存（值总是单例）。

- `get(id, ...userParams)` -> `any`
  - 获取服务实例或值。若为类或工厂，支持单例缓存（仅在未传入 `userParams` 时缓存）；传入 `userParams` 会阻止单例缓存生效并创建临时实例。

- `has(id)` -> `boolean`
  - 检查服务是否已绑定。

- `reset()` -> `void`
  - 清空所有绑定与实例缓存（用于测试）。

## 服务数据操作

容器内部维护 `serviceData`（Map），提供对服务附加数据的操作：

- `setData(abstract, key, value)`
- `getData(abstract, key)`
- `hasData(abstract, key)`
- `removeData(abstract, key)`

注意：当前实现要求目标 `abstract` 在 `serviceData` 中已存在，否则这些方法会抛出错误；代码未提供自动初始化 `serviceData` 条目的公开接口。

## 错误与边界情况

- `bindClass` / `bindFactory` 在类型不匹配时会抛出 `TypeError`。
- `get` 在请求未绑定服务或类依赖缺失时会抛出明确错误信息。

## todo

- 增加生命周期钩子（如 `init` / `destroy`）或装饰器语法以简化自动注入。
