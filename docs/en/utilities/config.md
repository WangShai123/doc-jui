# Config

Config utilities parse options and props for components, UI primitives, and shared helpers. They centralize defaults, shallow/deep merge, nested schema parsing, normalize, and validation, so component code can consume already-resolved config.

## Import

```ts
import {
  cloneConfigValue,
  mergeConfigValue,
  mergeDeepConfig,
  mergeShallowConfig,
  resolveConfig,
  type ConfigRule,
  type ConfigSchema,
  type MergeStrategy,
} from 'vanilla-jui';
```

## resolveConfig

`resolveConfig(input?, schema?, namespace?)`

The parsing order is fixed:

1. Validate that input is a non-array object. `null` and `undefined` are treated as an empty object.
2. Resolve defaults for fields declared in the schema.
3. Merge user values with defaults according to each field's `merge` strategy.
4. If a field declares a nested `schema`, recursively resolve the child config.
5. After all fields are resolved, run `normalize(value, context)`.
6. Finally, run `validateParam()`.

```ts
const schema = {
  id: {
    defaultFactory: randomId,
    type: 'string',
  },
  className: {
    default: {
      root: 'j-panel',
      body: 'panel-body',
    },
    type: 'plainObject',
    merge: 'shallow',
  },
} satisfies ConfigSchema;

const props = resolveConfig(
  { className: { body: 'custom-body' } },
  schema,
  'Panel.props'
);

props.className;
// { root: 'j-panel', body: 'custom-body' }
```

## ConfigRule

`ConfigRule` extends the validation rules used by `validateParam()` and adds config parsing fields:

| Field            | Description                                                         |
| ---------------- | ------------------------------------------------------------------- |
| `default`        | Static default value                                                |
| `defaultFactory` | Called on every parse to create a dynamic default                   |
| `merge`          | Merge strategy for the user value and default value                 |
| `schema`         | Nested config schema, resolved and validated recursively            |
| `normalize`      | Semantic transform, run after all fields have been defaulted/merged |

`undefined` is treated as missing config:

```ts
const props = resolveConfig(
  { size: undefined },
  {
    size: { default: 'md', type: 'string' },
  },
  'Button.props'
);

props.size; // "md"
```

## MergeStrategy

The default `merge` strategy is `replace`. Supported values:

| Strategy        | Behavior                                                         |
| --------------- | ---------------------------------------------------------------- |
| `replace`       | User value replaces the default value                            |
| `shallow`       | Merges only the first level of plain objects                     |
| `deep`          | Recursively merges plain objects; arrays, functions, DOM replace |
| Custom function | `(defaultValue, inputValue, context) => value`                   |

Arrays are not concatenated automatically. Non-plain objects are not recursively merged.

```ts
const schema = {
  className: {
    default: {
      root: 'j-tooltip',
      ui: {
        primary: 'is-primary',
        success: 'is-success',
      },
    },
    type: 'plainObject',
    merge: 'deep',
  },
} satisfies ConfigSchema;

const props = resolveConfig(
  { className: { ui: { primary: 'custom-primary' } } },
  schema,
  'Tooltip.props'
);

props.className;
// {
//   root: 'j-tooltip',
//   ui: { primary: 'custom-primary', success: 'is-success' }
// }
```

## Nested Schema

A parent field's `schema` recursively resolves child config. After the parent normalize function runs, the value is validated against the nested schema again, so normalize cannot silently produce an invalid child structure.

```ts
const schema = {
  text: {
    default: {
      confirm: 'Confirm',
      cancel: 'Cancel',
    },
    type: 'plainObject',
    merge: 'shallow',
    schema: {
      confirm: 'string',
      cancel: 'string',
    },
  },
} satisfies ConfigSchema;
```

## Normalize Context

`normalize(value, context)` receives:

| Field     | Description                              |
| --------- | ---------------------------------------- |
| `key`     | Current field name                       |
| `path`    | Full field path with namespace           |
| `input`   | Original input object                    |
| `options` | Config object after defaults and merging |
| `schema`  | Current config schema                    |

Because normalize runs after all fields have been resolved, it can read other resolved fields:

```ts
const schema = {
  min: { default: 1, type: 'number' },
  max: { default: 10, type: 'number' },
  value: {
    default: 0,
    type: 'number',
    normalize: (value, { options }) =>
      Math.min(
        options.max as number,
        Math.max(options.min as number, value as number)
      ),
  },
} satisfies ConfigSchema;
```

## Merge Utilities

The lower-level merge helpers can also be used directly:

```ts
cloneConfigValue(value);
mergeShallowConfig(defaultValue, inputValue);
mergeDeepConfig(defaultValue, inputValue);
mergeConfigValue(defaultValue, inputValue, 'deep', {
  key: 'className',
  path: 'Tooltip.props.className',
});
```

These helpers only recurse into plain objects and ignore unsafe keys such as `__proto__`, `prototype`, and `constructor`.
