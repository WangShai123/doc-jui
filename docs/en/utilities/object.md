# Object

## Import

```ts
import { isPlainObject } from 'vanilla-jui';
```

## isPlainObject

`isPlainObject(value)` checks whether a value is a plain object.

- Object literals and `Object.create(null)` return `true`.
- Arrays, functions, DOM nodes, and class instances return `false`.

```ts
isPlainObject({ value: 1 }); // true
isPlainObject([]); // false
isPlainObject(new Date()); // false
```

In schema, use `type: 'plainObject'`, or use `plain: true` together with `type: 'object'`.
