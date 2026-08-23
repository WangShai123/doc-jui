# 通知

通知组件是一种临时显示消息的组件，通常用于通知用户操作结果或提示信息。它不需要实例化，直接通过静态方法展示消息。

<Badge text="UI Primitive" theme="error"/>

## 示例

:::details 点击展开查看详情
<div class="demo"></div>
:::

## 导入

```ts
import { Toast } from 'vanilla-jui';
```

## 基础用法

```ts
const { success, error, lite, confirm } = Toast;

success('保存成功');
error('保存失败', { duration: 3000 });

lite('已更新');

confirm('确认删除吗？', {
  onConfirm: () => {
    // 确认删除
  },
});
```

## 静态方法

| 方法                  | 默认值             | 说明                       |
| --------------------- | ------------------ | -------------------------- |
| `Toast.show(m, o)`    | `''`, `{}`         | 基础通知，展示指定主题消息 |
| `Toast.info(m, o)`    | `''`, `{}`         | show 语法糖                |
| `Toast.primary(m, o)` | `''`, `{}`         | show 语法糖                |
| `Toast.success(m, o)` | `''`, `{}`         | show 语法糖                |
| `Toast.warning(m, o)` | `''`, `{}`         | show 语法糖                |
| `Toast.error(m, o)`   | `''`, `{}`         | show 语法糖                |
| `Toast.lite(m, d, c)` | `''`, `2000`, `{}` | 轻提示通知                 |
| `Toast.confirm(m, p)` | `''`, `{}`         | 确认通知                   |
| `Toast.configure(o)`  | `{}`               | 配置默认类名               |
| `Toast.hide(t)`       |                    | 隐藏指定通知               |
| `Toast.clearAll()`    |                    | 清理所有通知               |
| `Toast.destroyAll()`  |                    | `clearAll()` 的别名        |

`theme` 枚举值：`info` | `success` | `warning` | `error` | `primary`

### show

`Toast.show(message, options)`

| 选项           | 默认值       | 说明                                                |
| -------------- | ------------ | --------------------------------------------------- |
| `duration`     | `3000`       | 消息停留时间，单位毫秒                              |
| `theme`        | `info`       | 消息主题                                            |
| `once`         | `false`      | 是否仅展示一次                                      |
| `loading`      | `false`      | 响应式加载状态；为 `true` 时显示 loading 图标和文案 |
| `text`         | `{}`         | 文案配置                                            |
| `text.loading` | `Loading...` | 加载中文案                                          |
| `onClose`      | `null`       | 在用户主动关闭通知后触发                            |
| `onCancel`     | `null`       | 在 `loading` 状态变更前关闭通知后触发               |

### loading

从业务端传递响应式信号 `loading`，用于在操作过程中显示加载状态。

用户点击关闭时，Toast 会先进入关闭流程并释放响应式绑定。

```js
const [loading, setLoading] = createSignal(true);

Toast.info('保存完成', {
  duration: 3000,
  loading,
  text: { loading: '保存中...' },
  onCancel: () => controller.abort(),
});

submit().finally(() => setLoading(false));
```

### 语法糖

`show` 方法对应不同主题状态，提供若干快捷方法，分别为：

- `info`
- `primary`
- `success`
- `warning`
- `error`

### confirm

`Toast.confirm(message, options)`

| 选项           | 默认值       | 说明             |
| -------------- | ------------ | ---------------- |
| `theme`        | `info`       | 操作型消息主题   |
| `once`         | `true`       | 是否仅展示一次   |
| `text`         | `{}`         | 操作按钮文本     |
| `text.close`   | 关闭/Close   | 关闭按钮文本     |
| `text.confirm` | 确认/Confirm | 确认按钮文本     |
| `onConfirm`    | `null`       | 点击确认按钮回调 |
| `onClose`      | `null`       | 点击关闭按钮回调 |

## className

`Toast.configure({ className })` 可覆盖全局默认类名。

`show()`、快捷方法和 `confirm()` 支持通过选项中的 `className` 单次覆盖。

`lite()` 面向最简洁场景，第三个参数直接传入 className 配置。

| 字段         | 默认值               | 说明           |
| ------------ | -------------------- | -------------- |
| `container`  | `j-toast-container`  | 容器           |
| `toast`      | `j-toast`            | 普通 Toast     |
| `icon`       | `el-icon`            | 图标           |
| `message`    | `el-text`            | 文案           |
| `lite`       | `j-toast-lite`       | 轻提示 Toast   |
| `confirm`    | `j-toast is-confirm` | 确认型 Toast   |
| `buttons`    | `toast-buttons`      | 按钮区域       |
| `button`     | `j-button is-sm`     | 操作按钮基础类 |
| `closeBtn`   | `is-ghost`           | 关闭按钮类     |
| `confirmBtn` | `is-outline`         | 确认按钮类     |
| `info`       | `is-info`            | 信息类型类     |
| `success`    | `is-success`         | 成功类型类     |
| `warning`    | `is-warning`         | 警告类型类     |
| `error`      | `is-error`           | 错误类型类     |
| `primary`    | `is-primary`         | 主色类型类     |

```vp-script
import { Toast, q } from 'vanilla-jui';
import { jsx, insert, createSignal } from 'vanilla-signal';
const demo = jsx('div', {
    style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    children: [
        jsx('div', {
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
            },
            children: [
                jsx('button', {
                    className: 'j-button is-default',
                    children: '默认 Toast',
                    onClick: () => Toast.show('Hi, Toast'),
                }),
                jsx('button', {
                    className: 'j-button is-primary',
                    children: '主色 Toast',
                    onClick: () => Toast.primary('Hi, Primary Toast'),
                }),
                jsx('button', {
                    className: 'j-button is-success',
                    children: '成功 Toast',
                    onClick: () => Toast.success('Hi, Success Toast'),
                }),
                jsx('button', {
                    className: 'j-button is-warning',
                    children: '警告 Toast',
                    onClick: () => Toast.warning('Hi, Warning Toast'),
                }),
                jsx('button', {
                    className: 'j-button is-error',
                    children: '错误 Toast',
                    onClick: () => Toast.error('Hi, Error Toast'),
                }),
            ]
        }),
        jsx('div', {
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
            },
            children: [
                jsx('button', {
                    className: 'j-button is-default',
                    children: '单例 Toast',
                    onClick: () => Toast.info('Hi, Singleton Toast', {once:true}),
                }),
                jsx('button', {
                    className: 'j-button is-secondary',
                    children: '轻提示 Toast',
                    onClick: () => Toast.lite('Hi, Lite Toast'),
                }),
                jsx('button', {
                    className: 'j-button is-outline',
                    children: '确认 Toast',
                    onClick: () => Toast.confirm('Hi, Confirm Toast', {
                        onConfirm: () => Toast.lite('已确认'),
                    }),
                }),
            ]
        }),
        jsx('div', {
            children: jsx('button', {
                className: 'j-button is-default',
                children: '异步 Toast 用法',
                onClick: () => {
                    const [loading, setLoading] = createSignal(true);
                    let timer = null;
                    const reset = () => {
                        if (timer) clearTimeout(timer);
                        timer = null;
                        setLoading(true);
                    };
                    Toast.show('Hi, Async Toast', {
                        duration: 3000,
                        loading,
                        onCancel: () => {
                            Toast.lite('已取消');
                            reset();
                        },
                        onClose: reset,
                        once: true
                    });
                    timer = setTimeout(() => {
                        timer = null;
                        setLoading(false);
                    }, 1000);
                },
            })
        })
    ]
})
insert(q('.demo'), demo);
```
