# Reactive（响应式）

`Reactive` 是一个轻量的、受 `Vue` 启发的简易响应式功能。

主要原语有：`reactive`、`ref`、`effect`、`computed`，并包含 `track`/`trigger` 的内部实现与依赖清理逻辑。

## 核心概念

- 依赖收集：在 `effect` 执行期间，读取响应式对象或 `ref` 时会将当前 effect 注册为依赖（`track`）。
- 触发更新：当响应式属性被写入时，`trigger` 会查找并调用相关的 effect。
- 清理：每次 effect 重新执行前会移除先前收集的依赖（`cleanupEffect`）。

## API

- `reactive(obj)`：将一个对象包装为响应式对象（嵌套对象会递归返回响应式代理）。
- `ref(value)`：创建一个具备 `.value` 读取/写入的响应式单值容器。
- `effect(fn)`：注册响应式副作用；在依赖的值变化时会自动重新执行。返回一个可通过 `stop()` 停止的 effect。首次创建时会立即执行一次。
- `computed(getter)`：基于依赖计算缓存值（惰性求值），并提供 `.value` 访问与 `stop()` 停止方法。

## 使用示例

```js
import { reactive, ref, effect, computed } from 'jui'

const state = reactive({ count: 0 })
const doubled = computed(() => state.count * 2)

effect(() => {
  console.log('count:', state.count, 'doubled:', doubled.value)
})

state.count = 1 // 会触发 effect

const r = ref(10)
effect(() => console.log(r.value))
r.value = 20
```

## 注意事项

- `reactive` 只会代理对象；非对象会原样返回。
- `effect` 在执行期间会成为 `activeEffect`，从而被 `track` 捕获；同一 effect 被多次执行前会先清理旧依赖以避免内存泄露。
- 该实现为基础版本，适合在小型项目或工具库中使用；复杂场景（例如异步更新去抖、任务调度优先级）不建议使用或自行扩展。
