# 表单

Form 用于按字段配置渲染表单，并内置 `Validator` 验证模块与提交数据收集。

<Badge text="defineComponent" theme="primary"/>

## 示例

:::details 点击展开查看详情
<div class="demo"></div>
:::

## 导入

```js
import { createForm } from 'vanilla-jui';
```

## 基础用法

使用 `createForm(props)` 创建表单实例：

```js
const form = createForm({
  fields: [
    {
      type: 'email',
      payload: {
        label: 'Email address',
        name: 'email',
        placeholder: 'Enter email',
        required: true,
      },
    },
  ],
  validator: {
    rules: {
      email: { required: true, email: true },
    },
    messages: {
      email: { required: 'Email required', email: 'Invalid email' },
    },
  },
  onSubmit: async (data, form) => {
    form.state.submitting = true;
    await saveUser(data);
    form.setState({ submitting: false });
  },
}).mount('.form-demo');
```

- `createForm(props)` 只创建实例并初始化状态，不会立即创建 DOM。
- 调用 `build()` 后只会构建表单根节点，不会自动挂载。
- 调用 `mount(container)` 挂载到指定容器，或使用表单根节点 `form.element` 手动挂载。

## 参数

`createForm(props)`

| 参数              | 类型                           | 默认值    | 说明                                                              |
| ----------------- | ------------------------------ | --------- | ----------------------------------------------------------------- |
| `fields`          | `Array<FormItem>`              | `[]`      | 表单项配置，也是动态表单责任链入口                                |
| `validator`       | `object`                       | `{}`      | 传给 `Validator` 验证模块的 `rules`、`messages`、`vanilla` 等配置 |
| `onSubmit`        | `Function \| null`             | `null`    | 校验通过后触发，参数为 `(data, form)`                             |
| `onReset`         | `Function \| null`             | `null`    | 重置时触发，参数为 `(event, form)`                                |
| `id`              | `string \| null`               | 自动生成  | 表单根节点 id                                                     |
| `style`           | `string \| object`             | `''`      | 表单根节点内联样式                                                |
| `vertical`        | `boolean`                      | `true`    | 表单纵向布局                                                      |
| `itemVertical`    | `boolean`                      | `true`    | 表单字段纵向布局                                                  |
| `buttons`         | `boolean \| string`            | 见下表    | 移除或反转按钮位置                                                |
| `buttonsPosition` | `'start' \| 'center' \| 'end'` | `'start'` | 按钮组水平位置                                                    |
| `size`            | `'sm' \| 'md' \| 'lg'`         | `'md'`    | 表单大小                                                          |
| `className`       | `object`                       | 见下表    | 自定义表单样式类类                                                |

### fields

格式：`Array<FormItem>`。

每个控件 `FormItem` 是一个对象，包含 `{ type, payload, next? }`。固定表单可以只配置 `type` 和 `payload`；动态表单通过 `next(current, acients)` 覆盖默认数组顺序，按当前字段值决定下一个表单项。

- `type`：控件类型，如 `text`, `email`、`password`、`select`, `radio`, `checkbox`, `switch`, `file`, `custom` 等。
- `payload`：控件配置，包含 `label`、`name` 等属性。
- `next`：下一个控件，用于动态表单责任链。

常用 `payload` 属性：

| 属性           | 说明                                               |
| -------------- | -------------------------------------------------- |
| `label`        | 字段标签；传 `false` 或省略时不渲染标签            |
| `name`         | 表单字段名，用于 `FormData` 和 Validator 规则匹配  |
| `options`      | `select`、`radio`、多选 `checkbox` 的选项数组      |
| `value`        | 默认值；多选 checkbox 可传数组                     |
| `checked`      | 单个 checkbox 或 switch 的默认选中状态             |
| `required`     | 必填标记，渲染原生 `required` 属性                 |
| `placeholder`  | 输入提示                                           |
| `autocomplete` | 仅适用于支持该属性的具体控件，如 input、textarea等 |
| `help`         | 字段下方帮助文本                                   |
| `disabled`     | 禁用控件                                           |
| `readonly`     | 只读控件                                           |
| `content`      | `type: 'custom'` 时渲染的自定义内容                |

### 责任链

`(current, acients) => FormItem \| null`

责任链展开有内部保护上限：单次渲染最多展开 1000 个表单项，用于防止错误的 `next()` 循环或永不终止的动态链。它不是业务字段数量配置；正常表单不需要感知这个上限。

示例，根据 `select` 控件值动态切换下一个表单项：

```js
const input = {
  type: 'text',
  payload: {
    label: 'Dynamic Input',
    name: 'dynamicValue',
  },
  next: null,
};

const textarea = {
  type: 'textarea',
  payload: {
    label: 'Dynamic Textarea',
    name: 'dynamicValue',
  },
  next: null,
};

const selector = {
  type: 'select',
  payload: {
    label: 'Next Field Type',
    name: 'fieldType',
    value: 'input',
    required: true,
    options: [
      { value: 'input', text: 'Render input next' },
      { value: 'textarea', text: 'Render textarea next' },
    ],
  },
  next(current) {
    return current.payload.value === 'textarea' ? textarea : input;
  },
};

const form = createForm({
  fields: [selector],
}).mount(document.querySelector('#demo'));
```

### buttons

`buttons: false` 时不渲染按钮组，适合由外部容器通过实例属性或实例方法 `requestSubmit()` 自定义交互时机和行为。

### className

自定义样式类。className 配置包含以下字段：

| 属性               | 默认值                | 说明             |
| ------------------ | --------------------- | ---------------- |
| `form`             | `j-form`              | 表单容器         |
| `vertical`         | `is-vertical`         | 表单垂直布局     |
| `horizontal`       | `is-horizontal`       | 表单水平布局     |
| `itemVertical`     | `is-item-vertical`    | 表单项垂直布局   |
| `itemHorizontal`   | `is-item-horizontal`  | 表单项水平布局   |
| `item`             | `form-field`          | 表单项容器       |
| `label`            | `field-legend`        | 表单项标签       |
| `required`         | `is-required`         | 必填标记         |
| `control`          | `field-control`       | 表单项控件容器   |
| `helpInvalid`      | `is-invalid`          | 无效状态提示     |
| `buttons`          | `form-buttons`        | 按钮组容器       |
| `button`           | `j-button`            | 通用按钮         |
| `submitBtn`        | `is-primary`          | 提交按钮         |
| `resetBtn`         | `is-ghost`            | 重置按钮         |
| `input`            | `j-input`             | 输入框           |
| `textarea`         | `j-textarea`          | 文本域           |
| `select`           | `j-select`            | 选择框           |
| `radio`            | `j-radio`             | 单选框           |
| `checkbox`         | `j-checkbox`          | 多选框           |
| `choiceVertical`   | `is-vertical`         | 多选控件垂直布局 |
| `choiceHorizontal` | `is-horizontal`       | 多选控件水平布局 |
| `choiceGroup`      | `is-group`            | 多选控件分组布局 |
| `radioLabel`       | `radio-label`         | 单选框标签       |
| `radioText`        | `radio-text`          | 单选框文本       |
| `switch`           | `j-switch is-default` | 开关             |
| `switchSlider`     | `switch-slider`       | 开关滑块         |

## 实例属性

| 属性                | 说明                                     |
| ------------------- | ---------------------------------------- |
| `props`             | 归一化后的初始化配置                     |
| `state`             | 响应式状态对象，也是运行时 UI 的主要来源 |
| `runtime.built`     | 是否已创建 owned view                    |
| `runtime.mounted`   | 根节点当前是否挂载                       |
| `runtime.destroyed` | 实例是否已销毁                           |
| `element`           | build 后的稳定根节点                     |

### state

把运行时需要关注的数据放入响应式 `state`：

| 字段         | 说明             |
| ------------ | ---------------- |
| `fields`     | 表单项数据列表   |
| `submitting` | 是否正在提交表单 |

- `fields`：更新状态，触发表单渲染。
- `submitting`：更新状态，触发表单提交动画。

## 实例方法

| 方法                | 说明                                                     |
| ------------------- | -------------------------------------------------------- |
| `validate()`        | 执行内置 Validator 校验，返回是否通过                    |
| `collectData()`     | 返回当前 `FormData` 汇总后的普通对象                     |
| `build()`           | 构建 DOM；只生成 root，不自动挂载                        |
| `mount(container)`  | 构建并挂载根节点                                         |
| `unmount()`         | 移除根节点，保留 state 和 view owner                     |
| `requestSubmit()`   | 触发表单提交                                             |
| `reset()`           | 重置校验状态和提交数据                                   |
| `setFields(fields)` | 更新响应式 `state.fields`，由责任链和 keyed 列表更新字段 |
| `resetFields()`     | 恢复初始化字段                                           |
| `setState(patch)`   | 更新响应式状态字段                                       |
| `destroy()`         | 销毁实例，释放 Validator、渲染和事件资源                 |

- 校验规则复用 `Validator` 验证模块的规则与消息格式。
- 需要优先使用浏览器原生表单验证能力时，设置 `validator.vanilla: true`。

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
