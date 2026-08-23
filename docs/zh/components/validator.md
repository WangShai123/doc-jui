# 表单验证

Validator 是表单校验模块，它只负责读取表单字段、执行规则校验、写入失败状态和错误提示节点。

<Badge text="UI Primitive" theme="error"/>

## 示例

:::details 点击展开查看详情
<div class="demo"></div>
:::

## 导入

```js
import { createValidator } from 'vanilla-jui';
```

## 基础用法

使用 `createValidator` 创建 Validator 实例：

```js
const validator = createValidator(form, {
  rules: {
    email: { required: true, email: true },
    password: { required: true, minLength: 6 },
    plan: { selected: true },
  },
  messages: {
    email: { required: 'Email required', email: 'Invalid email' },
    password: { minLength: 'Password too short' },
    plan: { selected: 'Plan required' },
  },
  vanilla: false,
  onSubmit: (validator) => {
    console.log(validator.runtime.valid);
  },
});
```

## 参数

`createValidator(element, props, bindEvents)`

| 参数         | 类型                                | 默认值  | 说明                       |
| ------------ | ----------------------------------- | ------- | -------------------------- |
| `element`    | `string \| HTMLFormElement \| Node` | -       | 要绑定的表单元素           |
| `props`      | `object`                            | `{}`    | 校验配置                   |
| `bindEvents` | `boolean`                           | `false` | 是否绑定 submit/reset 事件 |

### element

第一个参数 `element` 必须可解析为 `HTMLFormElement`，否则会抛出错误。

### props

第二个参数 `props` 是校验配置对象，包含校验规则、错误提示等。

| 字段             | 类型               | 默认值       | 说明                                      |
| ---------------- | ------------------ | ------------ | ----------------------------------------- |
| `rules`          | `object`           | `{}`         | 字段校验规则，key 必须匹配表单字段 `name` |
| `messages`       | `object`           | `{}`         | 自定义错误提示，按字段名和规则名索引      |
| `vanilla`        | `boolean`          | `false`      | 是否启用浏览器原生校验能力                |
| `onSubmit`       | `Function \| null` | `null`       | 所有字段通过校验后调用                    |
| `className`      | `object`           | `{}`         | 自定义类名                                |
| `className.help` | `string`           | `help-block` | 错误提示的类名                            |

- `vanilla: false` 是默认行为，会把表单的 `noValidate` 设置为 `true`。即使字段上渲染了 `required`、`type="email"` 等原生约束，也不会触发浏览器原生校验气泡；提交时只执行 Validator 自己的 `rules`。
- 需要启用浏览器原生表单验证能力时，设置 `vanilla: true`。将自动跳过 `rules` 自身的校验规则。
- `destroy()` 会恢复创建实例前的 `noValidate` 状态。

### bindEvents

第三个参数 `bindEvents` 为 `Boolean` 类型，默认值为 `false`。

- `false`: 用户需手动调用 `validate` 方法进行校验。优点：自定义验证交互，如“通过 toast 等其他交互提示错误”。
- `true`: 自动绑定表单的 `submit` 和 `reset` 事件，`submit` 会阻止默认提交并自动执行 `validate()` 验证方法。

## 实例属性

| 属性              | 说明                          |
| ----------------- | ----------------------------- |
| `element`         | 当前表单元素，销毁后为 `null` |
| `props`           | 归一化后的校验配置            |
| `runtime.valid`   | 最近一次校验是否通过          |
| `runtime.error`   | 当前是否存在已报告的错误字段  |
| `runtime.message` | 最近一次失败消息              |

`destroy()` 后，`element` 和 `props` 都会变为 `null`，事件监听和校验提示会被清理。

## 实例方法

### `validate()`

执行表单校验，并返回是否通过。只会校验有 `name` 且在 `props.rules` 中配置了规则的字段。所有字段通过后会调用 `props.onSubmit(validator)`。

```js
if (validator.validate()) {
  // passed
}
```

### `reset(options)`

重置校验状态。

```js
validator.reset();
validator.reset({ native: false });
```

| 参数     | 默认值 | 说明                   |
| -------- | ------ | ---------------------- |
| `native` | `true` | 是否调用表单原生 reset |

### `destroy()`

销毁 Validator 实例：解绑事件、清理校验提示、释放表单引用，并将实例标记为 destroyed。

```js
validator.destroy();
```

## 内置规则

### 文本字段

| 规则        | 类型             | 说明                         |
| ----------- | ---------------- | ---------------------------- |
| `required`  | `boolean`        | 字符串值不能为空             |
| `minLength` | `number`         | 最短字符数                   |
| `maxLength` | `number`         | 最长字符数                   |
| `equalTo`   | `string`         | 必须与指定 `name` 字段值一致 |
| `email`     | `boolean`        | 邮箱格式校验                 |
| `noSpace`   | `boolean`        | 禁止空格                     |
| `noChinese` | `boolean`        | 禁止中文字符                 |
| `noSpecial` | `boolean`        | 禁止 `@#$%^&*` 等特殊字符    |
| `pattern`   | `string\|RegExp` | 自定义正则                   |

### Select

| 规则       | 类型      | 说明                   |
| ---------- | --------- | ---------------------- |
| `selected` | `boolean` | 至少选择一个非空值     |
| `multiple` | `boolean` | 多选模式下至少选择一项 |
| `min`      | `number`  | 多选模式下最少选择项数 |
| `max`      | `number`  | 多选模式下最多选择项数 |

### Radio

Validator 当前没有 radio 专用内置规则。需要校验 radio 分组时，可以使用 `validate` 自定义规则读取同名 radio 的选中状态。

### Checkbox

| 规则      | 类型      | 说明                                       |
| --------- | --------- | ------------------------------------------ |
| `checked` | `boolean` | 单个 checkbox 是否处于指定选中状态         |
| `min`     | `number`  | checkbox 分组最少选中项数，不作用于 switch |
| `max`     | `number`  | checkbox 分组最多选中项数，不作用于 switch |

```js
const validator = createValidator('#form', {
  rules: {
    features: { min: 2, max: 3 },
  },
  messages: {
    features: {
      min: '至少选择 2 项',
      max: '最多选择 3 项',
    },
  },
});
```

### Switch

| 规则      | 类型      | 说明                        |
| --------- | --------- | --------------------------- |
| `checked` | `boolean` | switch 是否处于指定选中状态 |

### 文件字段

| 规则      | 类型      | 说明                                                |
| --------- | --------- | --------------------------------------------------- |
| `file`    | `boolean` | 文件是否必选                                        |
| `minSize` | `number`  | 文件最小字节数                                      |
| `maxSize` | `number`  | 文件最大字节数                                      |
| `accept`  | `string`  | 允许的文件类型，逗号分隔，如 `.jpg,.png`、`image/*` |

### 自定义规则

```js
const validator = createValidator('#form', {
  rules: {
    username: {
      validate: (element, validator) => {
        if (element.value.includes('admin')) return '不能包含 admin';
        return true;
      },
    },
  },
});
```

`validate` 函数接收字段元素和当前 Validator 实例，返回：

| 返回值   | 说明                                       |
| -------- | ------------------------------------------ |
| `true`   | 校验通过                                   |
| `false`  | 校验失败，使用 `messages` 中配置的错误文案 |
| `string` | 校验失败，并使用该字符串作为错误文案       |

## 错误提示 DOM

Validator 优先使用最近的 `[data-field-control]` 作为字段容器；如果找不到，则使用字段的直接父元素。错误提示节点会写入当前字段容器：

```html
<div data-field-control="email">
  <input name="email" />
  <div class="help-block" data-validator-help="email" data-valid="false">
    Email required
  </div>
</div>
```

- **属性选择器**：Validator 依赖属性名作为交互选择器。已有的 `[data-field-help]` 静态帮助文案不会被覆盖，动态错误提示只通过 `[data-validator-help]` 创建和删除。
- **校验交互**：校验失败时，错误字段会被标记 `[data-validator-help]` 和 `[data-valid]`，校验通过后会移除标记。
- **自动校验**：提交或手动调用 `validate()` 且校验失败后，Validator 会根据 `runtime.error` 存储的错误字段的 `input` / `change` 事件进行自动重验。`runtime.error` 错误记录清空后，自动校验事件也会清空。
- **自定义错误样式**：你可以利用 `className` 配置，来自定义错误提示样式。

```vp-script
import { createForm, Toast, q } from 'vanilla-jui';
createForm({
    fields: [
        {
            type: 'email',
            payload: {
                label: '邮箱',
                name: 'email',
                required: true,
                placeholder: '请输入邮箱',
            }
        },
        {
            type: 'password',
            payload: {
                label: '密码',
                name: 'password',
                required: true,
                placeholder: '请输入密码',
            }
        },
        {
            type: 'password',
            payload: {
                label: '确认密码',
                name: 'confirmPassword',
                required: true,
                placeholder: '请确认密码',
            }
        }
    ],
    validator: {
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minLength: 6,
                maxLength: 12,
            },
            confirmPassword: {
                required: true,
                equalTo: 'password',
            },
        },
        messages: {
            email: {
                required: '邮箱不能为空',
                email: '请输入正确的邮箱格式',
            },
            password: {
                required: '密码不能为空',
                minLength: '密码长度不能小于 6 位',
                maxLength: '密码长度不能大于 12 位',
            },
            confirmPassword: {
                required: '确认密码不能为空',
                equalTo: '两次输入密码不一致',
            },
        },
    },
    onSubmit: (data) => {
        Toast.success('Bingo! 表单验证成功');
        console.table(data);
    },
    style: 'max-width: 280px',
    buttonsPosition: 'start'
}).mount(q('.demo'));
```
