# Config

配置解析工具用于组件、UI 原语和业务工具的 options/props 解析。它统一处理默认值、浅/深合并、嵌套 schema、normalize 和校验，让组件内部只消费已解析配置。

## 导入

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

解析顺序固定为：

1. 校验 input 必须是非数组对象；`null`/`undefined` 按空对象处理。
2. 为 schema 声明字段解析默认值。
3. 对用户传入值按字段 `merge` 策略合并。
4. 如果字段声明了嵌套 `schema`，递归解析子配置。
5. 所有字段解析完成后，再执行 `normalize(value, context)`。
6. 最后执行 `validateParam()` 校验。

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

`ConfigRule` 继承 `validateParam()` 的校验规则，并增加配置解析字段：

| 字段             | 说明                                               |
| ---------------- | -------------------------------------------------- |
| `default`        | 静态默认值                                         |
| `defaultFactory` | 每次解析时调用，用于生成动态默认值                 |
| `merge`          | 用户值与默认值的合并策略                           |
| `schema`         | 嵌套配置 schema，递归解析并校验                    |
| `normalize`      | 语义转换函数，在所有字段默认值和合并完成后统一执行 |

`undefined` 会被视为未传入配置：

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

`merge` 默认是 `replace`，可选值：

| 策略       | 行为                                           |
| ---------- | ---------------------------------------------- |
| `replace`  | 用户传入值整体替换默认值                       |
| `shallow`  | 只合并 plain object 的第一层                   |
| `deep`     | 递归合并 plain object；数组、函数、DOM 等替换  |
| 自定义函数 | `(defaultValue, inputValue, context) => value` |

数组不会自动拼接。非 plain object 不会递归合并。

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

## 嵌套 schema

父字段的 `schema` 会递归解析子配置。父字段 normalize 执行后，仍会按嵌套 schema 再次校验，避免 normalize 产生非法结构。

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

## normalize context

`normalize(value, context)` 的 context 包含：

| 字段      | 说明                         |
| --------- | ---------------------------- |
| `key`     | 当前字段名                   |
| `path`    | 带 namespace 的完整字段路径  |
| `input`   | 原始 input 对象              |
| `options` | 已完成默认值和合并的配置对象 |
| `schema`  | 当前配置 schema              |

因为 normalize 在所有字段解析完成后统一执行，所以可以读取其他字段的已解析值：

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

## merge 工具

底层合并工具也可单独使用：

```ts
cloneConfigValue(value);
mergeShallowConfig(defaultValue, inputValue);
mergeDeepConfig(defaultValue, inputValue);
mergeConfigValue(defaultValue, inputValue, 'deep', {
  key: 'className',
  path: 'Tooltip.props.className',
});
```

这些工具只递归处理 plain object，并会忽略 `__proto__`、`prototype`、`constructor` 等危险 key。
