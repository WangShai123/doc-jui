# 表单验证

`Validator` 是用于验证表单数据的验证器。

## 应用示例

<form class="j-form is-vertical is-item-vertical w-2xs" id="form-validator">
    <div class="form-item">
        <label for="email" class="item-label is-required">Email address</label>
        <div class="form-control">
            <input type="email" name="email" class="j-input" id="email" placeholder="Enter email" autocomplete="email">
        </div>
    </div>
    <div class="form-item">
        <label for="password" class="item-label is-required">Password</label>
        <div class="form-control">
            <input type="password" name="password" class="j-input" id="password" placeholder="Password" autocomplete="current-password">
        </div>
    </div>
    <div class="form-item">
        <label for="password" class="item-label is-required">Password</label>
        <div class="form-control">
            <input type="password" name="password_repeat" class="j-input" placeholder="Password" autocomplete="current-password">
        </div>
    </div>
    <div class="form-item">
        <label class="form-control">
            <div class="j-checkbox is-horizontal">
                <label>
                    <input type="checkbox" name="agreement" class="j-input">
                    <span>同意...</span>
                </label>
            </div>
        </label>
    </div>
    <div class="form-buttons">
        <button type="submit" class="j-button is-primary">提交</button>
        <button type="reset" class="j-button is-ghost">重置</button>
    </div>
</form>

## 使用方法

::: code-group

```php [example.php]
<?php
// 在 PHP 中动态载入组件脚本：
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
const { validator, toast } = jui;

const form = q("form#form-validator");
// 新建表单验证器实例，赋值给 test
const test = new validator(
  form,
  {
    rules: {
      email: {
        required: true,
        email: true,
        minLength: 8,
        maxLength: 10,
        noChinese: true,
      },
      password: {
        required: true,
        minLength: 6,
        maxLength: 8,
        noSpace: true,
        noSpecial: true,
        pattern: /^[A-Z].*$/,
      },
      password_repeat: {
        required: true,
        equalTo: "password",
      },
      agreement: {
        checked: true,
      },
    },
    messages: {
      email: {
        required: "请输入邮箱",
        email: "请输入正确的邮箱",
        minLength: "邮箱长度不能小于8位",
        maxLength: "邮箱长度不能大于10位",
        noChinese: "不允许使用中文",
      },
      password: {
        required: "请输入密码",
        minLength: "密码长度不能小于6位",
        maxLength: "密码长度不能大于8位",
        noSpace: "不允许使用空格",
        noSpecial: "不允许使用特殊字符",
        pattern: "首字母必须大写",
      },
      password_repeat: {
        required: "请输入密码",
        equalTo: "两次输入的密码不一致",
      },
      agreement: {
        checked: "请勾选同意协议",
      },
    },
  },
  false,
); // 实例化的第三个参数默认为 false，即关闭事件自动绑定，改用手动模式，便于控制灵活交互提醒

// 自定义表单提交事件
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // 实例方法 validate 返回验证结果
  const result = test.validate();
  // 实例属性 message 返回错误消息
  if (!result && test.message) {
    toast.error(test.message);
  } else {
    toast.success(t("formValidated"));
  }
});
form.addEventListener("reset", (e) => {
  // 实例方法 reset 重置验证器实例状态
  test.reset();
});
```

:::

## 参数说明

```js
/**
 * @description 创建一个表单验证器
 * @param {HTMLElement} element - 表单元素
 * @param {Object} options - 配置项
 *     - @property {Object} rules - 验证规则
 *         - @var {Object} 待验证字段的name属性和规则集
 *     - @property {Object} messages - 错误消息
 *         - @var {Object} 对应验证字段和规则的具体错误消息
 * @param {Boolean} bindEvents - 是否自动绑定表单事件
 */
new validator(element, options, bindEvents);
```

## 规则集

- 在规则描述对象 `rules` 中，以 `name` 属性为键，规则集为值。
- 在规则集对象中，以规则属性为键，规则目标为值。

| 规则属性      | 类型    | 描述                                           |
| ------------- | ------- | ---------------------------------------------- |
| **required**  | Boolean | 是否必填                                       |
| **minLength** | Number  | 最小长度                                       |
| **maxLength** | Number  | 最大长度                                       |
| **email**     | Boolean | 是否为邮箱                                     |
| **noSpace**   | Boolean | 不允许包含空格                                 |
| **noSpecial** | Boolean | 不允许包含特殊字符                             |
| **noChinese** | Boolean | 不允许包含中文                                 |
| **equalTo**   | String  | 验证两个字段是否相等，值为待验证的字段name属性 |
| **checked**   | Boolean | 是否选中                                       |
| **pattern**   | String  | 正则表达式                                     |

## 实例方法

```js
/**
 * @description 执行验证
 * @return {Boolean} 是否验证通过
 */
validate();

/**
 * @description 重置验证状态
 * @return {Void}
 */
reset();

/**
 * @description 销毁实例
 * @return {Void}
 */
destroy();
```

## 实例属性

```js
/**
 * @description 表单根元素
 * @type {Element}
 */
root;

/**
 * @description 验证错误信息
 * @type {String}
 */
message;

/**
 * @description 验证结果
 * @type {Boolean}
 * @default true
 */
valid;
```

## 静态方法

```js
/**
 * @description 销毁所有实例
 * @return {Void}
 * @static
 */
destroyAll();
```
