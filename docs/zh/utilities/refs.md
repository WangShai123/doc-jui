# 元素引用

## 导入

```ts
import { createElementRef, createKeyedElementRefs } from 'vanilla-jui';
```

## createElementRef

`createElementRef` 创建一个可变的单元素引用，提供只读 getter `current`、`set(element)` 和 `clear()`。它不自动跟踪节点断开，组件销毁时应主动 `clear()`。

```ts
const panel = createElementRef<HTMLElement>();
const node = jsx('aside', { ref: panel.set });

panel.current?.focus();
panel.clear();
```

## createKeyedElementRefs

按业务 key 保存多个元素。`bind(key)` 返回可直接交给 JSX `ref` 的函数；绑定发生在 vanilla-signal `owner` 中时，节点对应的 reactive scope 清理会自动删除仍指向该节点的记录。

```ts
const rows = createKeyedElementRefs<string, HTMLElement>();

jsx('div', { ref: rows.bind(item.id) });
rows.get(item.id)?.scrollIntoView();
rows.elements; // ReadonlyMap
rows.delete(item.id);
rows.clear();
```

同一个 key 后绑定的节点会覆盖旧节点；旧 scope 清理时不会误删新节点。

`delete(key)` 用于 keyed collection 删除数据项时同步清理不再需要的元素引用。
