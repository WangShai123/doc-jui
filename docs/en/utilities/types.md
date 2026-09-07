# Types And Validation

## Import

```ts
import {
  getType,
  isDomElementValue,
  isDomNodeValue,
  isHtmlElementValue,
  isNilValue,
  isRenderablePrimitive,
  isRenderableValue,
  validateParam,
} from 'vanilla-jui';
```

## Atomic Type Checks

| Method                  | Checked range                                           |
| ----------------------- | ------------------------------------------------------- |
| `isNilValue`            | `null` or `undefined`                                   |
| `isDomNodeValue`        | DOM `Node`                                              |
| `isDomElementValue`     | DOM `Element`                                           |
| `isHtmlElementValue`    | DOM `HTMLElement`                                       |
| `isRenderablePrimitive` | string, number, boolean                                 |
| `isRenderableValue`     | nullish, renderable primitive, function, array, or Node |

`isRenderableValue` only checks the content category. It does not convert values into nodes or parse HTML strings. Component content rendering follows the `vanilla-signal` children semantics.

## getType

`getType(value)` adds `null`, `array`, `HTMLElement`, and `Node` on top of `typeof`:

```ts
getType(null); // "null"
getType([]); // "array"
getType(document.body); // "HTMLElement"
```

## validateParam

`validateParam(name, value, rule?, namespace?)`

Validates a single value with declarative rules. On success, it returns `value` unchanged. On failure, it throws an automatically generated `Validator: <namespace>.<name> ...` error.

`rule` can be a type name, an array of type names, or a `ParamRule`:

```ts
validateParam(
  'data',
  rows,
  {
    type: 'array',
    nonEmpty: true,
    items: {
      type: 'plainObject',
      shape: {
        title: 'renderable',
        enabled: ['boolean', 'undefined'],
      },
    },
  },
  'Table.props'
);
```

### Type Rules

`type` and `types` are equivalent. If both appear, `types` takes priority.

Supported values include `typeof` type names, plus `null`, `array`, `Node`, `Element`, `HTMLElement`, `plainObject`, and `renderable`.

### Constraint Rules

| Field                     | Applies to   | Behavior                                      |
| ------------------------- | ------------ | --------------------------------------------- |
| `required`                | any          | Disallows null/undefined                      |
| `enum`                    | any          | Must be matched by `includes()`               |
| `nonEmpty`                | string/array | Length must be greater than 0                 |
| `minLength`, `maxLength`  | string/array | Length lower and upper bounds                 |
| `finite`, `integer`       | number       | Finite number, integer                        |
| `min`, `max`              | number       | Inclusive bounds                              |
| `greaterThan`, `lessThan` | number       | Exclusive bounds                              |
| `plain`                   | object       | Must be a plain object                        |
| `items`                   | array        | Recursively validates each item               |
| `shape`                   | object       | Recursively validates declared fields         |
| `conditions`              | any          | Function or `{ test, message? }` list         |
| `validate`                | any          | Final business predicate                      |
| `message`                 | any          | Only overrides the `validate` failure message |

Specialized constraints such as length, number, and plain object checks only run when the value belongs to the matching category, so the schema should also declare `type`. For example, `{ nonEmpty: true }` by itself does not reject numbers.

`validateParam()` only validates a single value or data structure. Use `resolveConfig()` for component configuration parsing, defaults, shallow/deep merge, and normalize.
