# 类型定义

## 导入

```ts
import {
  getType,
  isDomElementValue,
  isDomNodeValue,
  isHtmlElementValue,
  isNilValue,
  isRenderablePrimitive,
  isRenderableValue,
  resolveProps,
  validateParam,
} from 'vanilla-jui';
```

## 原子类型判定

| 方法                    | 判定范围                                         |
| ----------------------- | ------------------------------------------------ |
| `isNilValue`            | `null                                            | undefined` |
| `isDomNodeValue`        | DOM `Node`                                       |
| `isDomElementValue`     | DOM `Element`                                    |
| `isHtmlElementValue`    | DOM `HTMLElement`                                |
| `isRenderablePrimitive` | string、number、boolean                          |
| `isRenderableValue`     | nullish、renderable primitive、函数、数组或 Node |

`isRenderableValue` 只判定内容类别，不把值转换成节点，也不解析 HTML 字符串。组件内容渲染遵循 `vanilla-signal` children 语义。

## getType

`getType(value)` 在 `typeof` 上增加 `null`、`array`、`HTMLElement` 和 `Node`：

```ts
getType(null); // "null"
getType([]); // "array"
getType(document.body); // "HTMLElement"
```

## validateParam

`validateParam(name, value, rule?, namespace?)`

按声明式规则校验单个值，成功时原样返回 value，失败时抛出自动生成的
`Validator: <namespace>.<name> ...` 错误。

rule 可直接写类型名/类型名数组，也可使用 `ParamRule`：

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

### 类型规则

`type` 与 `types` 等价；同时出现时 `types` 优先。

支持 `typeof` 类型名，以及 `null`、`array`、`Node`、`Element`、`HTMLElement`、`plainObject` 和 `renderable`。

### 约束规则

| 字段                      | 适用值       | 行为                             |
| ------------------------- | ------------ | -------------------------------- |
| `required`                | 任意         | 禁止 null/undefined              |
| `enum`                    | 任意         | 必须由 `includes()` 命中         |
| `nonEmpty`                | string/array | 长度必须大于 0                   |
| `minLength`, `maxLength`  | string/array | 长度上下限                       |
| `finite`, `integer`       | number       | 有限数、整数                     |
| `min`, `max`              | number       | 包含边界                         |
| `greaterThan`, `lessThan` | number       | 不包含边界                       |
| `plain`                   | object       | 必须为 plain object              |
| `items`                   | array        | 递归校验每个元素                 |
| `shape`                   | object       | 递归校验声明字段                 |
| `conditions`              | 任意         | 函数或 `{ test, message? }` 列表 |
| `validate`                | 任意         | 最后的业务谓词                   |
| `message`                 | 任意         | 仅覆盖 `validate` 失败消息       |

长度/数字/plain 等专项约束只在值属于对应类别时运行，因此 schema 应同时声明
`type`。例如 `{ nonEmpty: true }` 本身不会拒绝数字。

## resolveProps

`resolveProps(input?, schema?, namespace?)`

统一完成组件 props 解析，顺序固定为：

1. 浅复制用户 input，并为 schema 中缺失的 key 填入 default。
2. 按 schema 顺序执行所有 `normalize(value, context)`。
3. 按 schema 顺序执行 `validateParam()`。

```ts
const schema = {
  id: {
    default: null,
    types: ['string', 'null'],
    normalize: (value) => (typeof value === 'string' ? value.trim() : value),
  },
  data: {
    default: [],
    type: 'array',
    items: { type: 'plainObject' },
  },
};

const props = resolveProps(input, schema, 'List.props');
```

### Defaults 与 normalize

- 数组和 plain object default 每次浅克隆，避免实例间共享顶层容器。
- `factory: true` 且 default 为函数时，函数用于生成默认值。
- 普通函数 default 不会执行。
- normalize context 包含 `{ key, input, options, schema }`；`options` 是正在解析的
  完整结果，因此可读取其他已填充 default 的字段。
- schema 未声明的 input key 会保留在返回对象中，不会被剔除。

input 必须为非数组对象；`null`/`undefined` 按空对象处理。`resolveProps` 不会深克隆
用户值，组件若需要隔离可变 data，应在 normalize 或解析后显式克隆。
