# 状态

## 导入

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

把响应式读取桥接到昂贵的命令式副作用，并返回销毁函数。声明式属性、文本和列表应直接依赖 state，不应通过它二次管理 DOM。

| 选项           | 默认值        | 说明                              |
| -------------- | ------------- | --------------------------------- |
| `deferInitial` | `true`        | 是否让 `createWatch` 延迟初次回调 |
| `flushInitial` | `false`       | 初次回调出现时是否同步执行 `sync` |
| `flush`        | `'microtask'` | 后续更新使用微任务合并或同步执行  |

```ts
const disposeSync = createStateSync(
  () => ({ width: state.width, version: getStoreVersion(state.data) }),
  ({ width }) => thirdPartyWidget.resize(width),
  { flush: 'microtask' }
);

disposeSync();
```

`sync` 可以返回 Promise，但调度器不会串行等待异步结果；需要有序异步流程时，应在业务层增加取消或版本控制。

## getStoreVersion

<Badge>Store helpers</Badge>

`getStoreVersion(value)` 读取对象的数字 `__version__`；其他值返回 `0`。

## stateSnapshot

<Badge>Store helpers</Badge>

`stateSnapshot(value)` 使用 `vanilla-signal` 的 `unwrap()` 获取非代理快照。

## trackStoreVersion

<Badge>Store helpers</Badge>

`trackStoreVersion(value)` 响应式读取 `__version__` 并原样返回输入。
