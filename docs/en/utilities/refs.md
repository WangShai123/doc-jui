# Element References

## Import

```ts
import { createElementRef, createKeyedElementRefs } from 'vanilla-jui';
```

## createElementRef

`createElementRef` creates a mutable single-element reference. It provides a readonly getter `current`, plus `set(element)` and `clear()`. It does not automatically track disconnected nodes, so components should call `clear()` when destroyed.

```ts
const panel = createElementRef<HTMLElement>();
const node = jsx('aside', { ref: panel.set });

panel.current?.focus();
panel.clear();
```

## createKeyedElementRefs

Stores multiple elements by business key. `bind(key)` returns a function that can be passed directly to a JSX `ref`. When binding happens inside a vanilla-signal `owner`, cleanup of the node's reactive scope automatically deletes the record if it still points to that node.

```ts
const rows = createKeyedElementRefs<string, HTMLElement>();

jsx('div', { ref: rows.bind(item.id) });
rows.get(item.id)?.scrollIntoView();
rows.elements; // ReadonlyMap
rows.delete(item.id);
rows.clear();
```

Binding another node to the same key replaces the old node. Cleanup from the old scope will not accidentally delete the new node.

Use `delete(key)` to clean up element references when deleting items from keyed collections.
