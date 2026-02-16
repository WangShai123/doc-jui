# 模态框组件

## 基础结构

::: code-group

```html [HTML]
<div
  class="j-popup-layout"
  role="dialog"
  aria-modal="true"
  aria-labelledby="$id__title"
>
  <div class="j-modal {is-fullscreen}" id="" role="document">
    <div class="modal-header">
      <div class="modal-title" id="$id__title">模态框标题</div>
      <icon
        class="modal-close"
        data-action="close"
        role="button"
        aria-label="close"
        tabindex="0"
        >×</icon
      >
    </div>
    <div class="modal-body">自定义模态框主体内容</div>
    <div class="modal-footer">
      <button
        type="button"
        class="j-button is-ghost modal-cancel"
        data-action="close"
      >
        取消
      </button>
      <button
        type="button"
        class="j-button is-primary modal-confirm"
        data-action="confirm"
      >
        确定
      </button>
    </div>
  </div>
</div>
```

:::

## 模态框类型

- 基础模态框
- 全屏模态框
- 表单模态框

## 应用示例

<div class="flex gap-4 flex-wrap my-4">
    <button class="j-button is-default example-modal-basic">基础模态框</button>
    <button class="j-button is-primary example-modal-fullscreen">全屏模态框</button>
    <button class="j-button is-outline example-modal-form">表单模态框</button>
</div>

## 使用方法

::: code-group

```php [example.php]
<?php
// 在 PHP 中动态载入组件脚本：
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
const { modal } = jui;
// 初始化模态框
const testModal = new modal({
  title: "提示",
  content: "这是一个提示模态框",
  confirmText: "确定",
  cancelText: "取消",
  onHide: function () {
    console.log("取消");
  },
  onConfirm: function () {
    console.log("确定");
  },
});
// 打开模态框，并注册事件
testModal.show();
// 关闭模态框，并销毁事件
testModal.hide();
```

:::

## 参数说明

```js
/**
 * @description 初始化模态框实例。
 * @param {object} options 模态框配置对象
 *  - @property {string} title 模态框标题
 *  - @property {string} content 模态框内容
 *  - @property {string} confirmText 确定按钮文本
 *  - @property {string} cancelText 取消按钮文本
 *  - @property {boolean} showCancel 是否显示取消按钮，默认 `true`
 *  - @property {boolean} showClose 是否显示关闭按钮，默认 `true`
 *  - @property {boolean} fullscreen 是否全屏显示，默认 `false`
 *  - @property {boolean} header 是否显示标题栏，默认 `true`
 *  - @property {boolean} footer 是否显示底部栏，默认 `true`
 *  - @property {boolean} position 模态框位置，默认 `center`，可选 `center`, `top-center`, `bottom-center`, `left`, `right`, `top-left`, `top-right`, `bottom-left`, `bottom-right`
 *  - @property {boolean} escClose 是否允许按下 ESC 键关闭模态框，默认 `false`
 *  - @property {boolean} bgClose 是否允许点击背景关闭模态框，默认 `false`
 *  - @property {string} style 为 j-modal 容器自定义行内样式，默认 `null`
 *  - @property {string} id 为 j-modal 容器自定义 id，默认 hash 随机值
 *  - @property {function} onShow 模态框打开时触发的回调函数，默认 `null`
 *  - @property {function} onShown 模态框打开后触发的回调函数，默认 `null`
 *  - @property {function} onHide 关闭模态框时触发的回调函数，默认 `null`
 *  - @property {function} onHidden 模态框关闭后触发的回调函数，默认 `null`
 *  - @property {function} onConfirm 点击确定按钮时触发的回调函数，默认`null`。支持异步操作，返回 Promise.resolve 后继续执行。
 *  - @property {function} onSubmit 表单模态框提交时触发的回调函数，默认`null`。支持异步操作，返回 Promise.resolve 后继续执行。
 *  - @property {Array<object>} fields 表单数据，用于表单模态框。默认 `null`
 *  - @property {boolean} lazy 懒加载，默认 `false`。true: show()时创建DOM并缓存；false: 实例化时创建DOM并缓存 show()仅负责交互
 *
 * @returns {Modal} 模态框实例
 */
new modal(options);
```

## 实例方法

```js
/**
 * @description 打开模态框，并注册事件。
 * @returns {void}
 */
show();

/**
 * @description 关闭模态框，并自动销毁实例。
 * @returns {void}
 */
hide();

/**
 * @description 显示加载状态。
 * @returns {void}
 */
showLoading();

/**
 * @description 隐藏加载状态。
 * @returns {void}
 */
hideLoading();

/**
 * @description 手动设置模态框内容。
 * @param {string} content - 模态框内容
 * @returns {void}
 */
setContent(content);

/**
 * @description 手动设置模态框字段。
 * @param {object} fields - 模态框字段
 * @returns {void}
 */
setFields(fields);

/**
 * @description 在表单字段外，额外添加数据字段，供 submit 方法使用。
 * @param {object} field - 字段
 * @returns {void}
 */
addField(field);

/**
 * @description 销毁当前实例。
 * @returns {void}
 */
destroy();
```

## 静态方法

```js
/**
 * @description 销毁所有实例。
 * @returns {void}
 */
destroyAll();
```

## 实例属性

```js
/**
 * @description 模态框是否可见。
 * @property {boolean} isVisible
 */
isVisible;

/**
 * @description 模态框根元素。
 * @property {HTMLElement} root
 */
root;

/**
 * @description 模态框配置项。
 * @property {object} options
 */
options;

/**
 * @description 表单模态框中的字段数据。
 * @property {Array<object>} fields
 */
fields;
```

`isVisible` 状态与事件：

| 事件                     | 状态  |
| ------------------------ | ----- |
| `onShow`                 | false |
| `onShown`                | true  |
| `onConfirm` / `onSubmit` | true  |
| `onHide`                 | true  |
| `onHidden`               | false |

## 表单数据

当 `fields` 存在时，模态框会自动创建一个表单，表单中的字段会根据 `fields` 中的数据进行渲染。

```js
/**
 * @description 表单模态框中的字段配置。
 * @property {Array<object>} fields 表单字段配置数组
 *  - @property {string} label 字段标题
 *  - @property {string} type 字段类型 支持:
 *      - @var text 文本输入框
 *      - @var email 邮箱输入框
 *      - @var password 密码输入框
 *      - @var select 下拉选择框
 *      - @var textarea 多行文本输入框
 *      - @var number 数字输入框
 *      - @var file 文件上传框
 *      - @var color 颜色选择框
 *      - @var date 日期选择框
 *      - @var datetime-local 日期时间选择框
 *      - @var month 月份选择框
 *      - @var week 周选择框
 *      - @var time 时间选择框
 *  - @property {string} name 输入框 name
 *  - @property {string} id 输入框 id，可选，未设置时使用 hash 值
 *  - @property {string} placeholder 输入框 提示文本
 *  - @property {string} value 输入框默认值
 *  - @property {boolean} required 是否必填，默认 `false`
 *  - @property {boolean} disabled 是否禁用，默认 `false`
 *  - @property {Array<object>} options 下拉选择框选项，仅在 `type` 为 `select` 时有效
 *     - @property {string} value 选项值
 *     - @property {string} text 选项文本
 */
fields;
```

## 数据示例

```js
fields: [
  {
    label: "用户名",
    type: "text",
    name: "username",
    placeholder: "请输入用户名",
    required: true,
    value: "test",
  },
  {
    label: "邮箱",
    type: "email",
    name: "email",
    placeholder: "请输入邮箱",
    required: true,
    disabled: true,
  },
  {
    label: "密码",
    type: "password",
    name: "password",
    placeholder: "Enter your password",
    required: true,
  },
  {
    label: "国家",
    type: "select",
    name: "country",
    options: [
      { value: "cn", text: "中国" },
      { value: "us", text: "美国", disabled: true },
      { value: "uk", text: "英国" },
    ],
    required: true,
  },
  {
    label: "备注",
    type: "textarea",
    name: "remark",
    placeholder: "请输入备注",
  },
];
```

## 事件委托

为元素设置属性 `data-action="{$action_type}"`，通过事件委托，自动绑定和触发事件。

1. `data-action="close"` 关闭
2. `data-action="cancel"` 取消
3. `data-action="confirm"` 确认

## 主题样式

`Modal` 组件的样式会根据当前主题进行渲染。
