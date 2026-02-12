# 通知

## 基础结构

::: code-group

```html [HTML]
<div class="j-toast-container">
  <div class="j-toast is-{type} toast-{show|hide}">
    <span class="toast-icon"> 图标元素 </span>
    <span class="toast-message"> 消息 </span>
  </div>
  { 其他通知 }
</div>
```

:::

## 通知类型

- `info`：信息，用于常规信息通知，支持多条消息叠加。
- `success`：成功，用于成功信息通知，支持多条消息叠加。
- `warning`：警告，用于警告信息通知，支持多条消息叠加。
- `error`：错误，用于错误信息通知，支持多条消息叠加。
- `lite`：轻提示，用于简单信息提示，同一时间只能展示一条消息。

## 应用示例

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-primary example-toast-info">普通消息</button>
    <button class="j-button is-success example-toast-success">成功提醒</button>
    <button class="j-button is-warning example-toast-warning">警告提醒</button>
    <button class="j-button is-danger example-toast-error">错误提醒</button>
</div>
<div class="my-4"><button class="j-button is-default example-toast-lite">轻提示</button></div>

## 使用方法

::: code-group

```php [example.php]
<?php
// 在 PHP 中动态载入组件脚本：
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
// 按静态方法的方式调用
const { toast } = jui;

// 常规通知
toast.show("这是一条普通信息通知。", 2000, "info");
// 成功通知
toast.show("操作成功！", 2000, "success");
// 警告通知
toast.show("警告：请确认操作。", 2000, "warning");
// 错误通知
toast.show("操作失败，请联系管理员。", 2000, "error");

// 轻提示
toast.lite("这是一条简单提示。", 2000);

// 便捷调用
toast.success("操作成功！", 2000);
toast.info("这是一条普通信息通知。", 2000);
toast.warning("警告：请确认操作。", 2000);
toast.error("操作失败，请联系管理员。", 2000);
```

:::

## 参数说明

```js
/**
 * @description 显示通知，支持多条消息叠加。
 * @param {string} message 通知内容
 * @param {number} duration 通知显示时间（毫秒），默认值为 3000 毫秒
 * @param {string} type 通知类型，可选值为 'info'（普通消息）、'success'（成功提醒）、'warning'（警告提醒）、'error'（错误提醒），默认值为 'info'
 * @returns {void}
 */
show(message, duration, type);

/**
 * @description 显示轻提示，同一时间只能展示一条消息。
 * @param {string} message 提示内容
 * @param {number} duration 提示显示时间（毫秒），默认值为 2000 毫秒
 * @returns {void}
 */
lite(message, duration);

/**
 * @description 便捷调用
 * @param {string} message 通知内容
 * @param {number} duration 通知显示时间（毫秒），默认值为 3000 毫秒
 * @returns {void}
 */
info(message, duration);
success(message, duration);
warning(message, duration);
error(message, duration);
```

## 主题样式

Toast 组件默认使用固定全局样式，不继承任何主题样式。
