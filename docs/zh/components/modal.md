# 模态框

Modal 运行时的交互由 `createDeepStore` 创建的 `state` 驱动。`build()` 只创建 Modal 骨架；`show()` 时根据 `content`、`cache` 和 `ttl` 幂等装载内容。

<Badge text="defineComponent" theme="primary"/> <Badge text="RenderableContent"/>

## 示例

:::details 点击展开查看详情
<div class="demo"></div>
:::

## 导入

```js
import { createModal } from 'vanilla-jui';
```

## 基础用法

使用 `createModal(props)` 创建 Modal 实例：

```js
const dialog = createModal({
  text: {
    title: 'Delete item',
    confirm: 'Delete',
    cancel: 'Cancel',
  },
  content: 'Are you sure you want to delete this item?',
  onConfirm: async (modal) => {
    await deleteItem();
    modal.hide();
  },
}).build();

dialog.show();
```

## 参数

`createModal(props)`

在 JUI 中，类型 `RenderableContent` 表示可以渲染的合法内容类型，包括 `string | number | boolean | Node | Array | Function | null`。

| 参数         | 类型                                                               | 默认值     | 说明                                         |
| ------------ | ------------------------------------------------------------------ | ---------- | -------------------------------------------- |
| `content`    | `string \| number \| boolean \| Node \| Array \| Function \| null` | `''`       | 初始内容，也是 `state.content` 初值          |
| `cache`      | `boolean`                                                          | `false`    | 是否缓存函数型异步 `content` 的解析结果      |
| `ttl`        | `number`                                                           | `0`        | 内容缓存有效期，单位毫秒；`0` 表示不过期     |
| `position`   | `string`                                                           | `'center'` | 弹窗布局位置，如 `top-center` `bottom-right` |
| `showCancel` | `boolean`                                                          | `true`     | 是否显示取消按钮                             |
| `showClose`  | `boolean`                                                          | `true`     | 是否显示右上角关闭按钮                       |
| `header`     | `boolean`                                                          | `true`     | 是否渲染头部节点                             |
| `footer`     | `boolean`                                                          | `true`     | 是否渲染底部节点                             |
| `fullscreen` | `boolean`                                                          | `false`    | 是否全屏                                     |
| `escClose`   | `boolean`                                                          | `false`    | 是否允许 Esc 关闭                            |
| `bgClose`    | `boolean`                                                          | `false`    | 是否允许点击背景关闭                         |
| `onShow`     | `(modal) => void \| Promise<void>`                                 | `null`     | 开始显示时触发                               |
| `onShown`    | `(modal) => void \| Promise<void>`                                 | `null`     | 显示后触发                                   |
| `onHide`     | `(modal) => void \| Promise<void>`                                 | `null`     | 开始隐藏时触发                               |
| `onHidden`   | `(modal) => void \| Promise<void>`                                 | `null`     | 隐藏并移除 DOM 后触发                        |
| `onConfirm`  | `(modal) => void \| Promise<void>`                                 | `null`     | 确认时触发，由调用方决定是否关闭             |
| `onCancel`   | `(modal) => void \| Promise<void>`                                 | `null`     | `data-action="cancel/close"` 触发            |
| `style`      | `string \| object \| null`                                         | `null`     | 弹窗主体内联样式                             |
| `id`         | `string \| null`                                                   | 自动生成   | 弹窗 id；空字符串或 `null` 会自动生成        |
| `text`       | `object`                                                           | 见下表     | 初始化文案配置                               |
| `className`  | `object`                                                           | 见下表     | 覆盖组件结构类名，仅初始化时生效             |

`content` 会作为初始状态进入 `state`，可在运行时通过 `state.content` 或 `setState({ content })` 更新。其余参数都是实例结构或行为配置，实例创建后保持固定。

### content

`content` 为 `RenderableContent` 类型，支持字符串、数字、布尔值、DOM 节点、节点数组、函数和空值。

- 字符串始终按文本渲染，不解析 HTML。
- 函数型 `content` 会收到当前 Modal 实例，返回值继续按同一套内容规则渲染。

```js
const dialog = createModal({
  text: { title: 'Preview' },
  content: (modal) => `Current title: ${modal.props.text.title}`,
}).build();
```

函数型 `content` 可以返回 Promise。

- 异步 `content` 解析期间，Modal 会自动更新 `state.loading` 为 `true`，视图层会显示遮罩和加载图标动画。
- 同步 `content` 函数不会进入 loading。
- `cache: false` 时，每次 show 都会重新解析函数型 `content`。
- `cache: true` 时，Modal 会复用同一个 content 源的解析结果。
- `ttl` 单位为毫秒，`0` 表示不过期。

```js
const dialog = createModal({
  text: { title: 'Remote preview' },
  cache: true,
  ttl: 30_000,
  content: async () => {
    const data = await loadPreview();
    return data.summary;
  },
}).build();
```

### text

自定义文案。`text` 配置包含以下字段：

| 参数      | 类型     | 默认值    | 说明         |
| --------- | -------- | --------- | ------------ |
| `title`   | `string` | `Tip`     | 弹窗标题     |
| `confirm` | `string` | `Confirm` | 确认按钮文案 |
| `cancel`  | `string` | `Cancel`  | 取消按钮文案 |

### className

自定义样式类。`className` 配置包含以下字段：

| 参数         | 默认值                   | 说明           |
| ------------ | ------------------------ | -------------- |
| `layout`     | `j-popup-layout`         | 弹窗布局根节点 |
| `modal`      | `j-modal`                | 弹窗主体       |
| `header`     | `modal-header`           | 头部           |
| `body`       | `modal-body`             | 内容区         |
| `footer`     | `modal-footer`           | 底部           |
| `title`      | `modal-title`            | 标题           |
| `button`     | `j-button`               | 按钮基础类     |
| `closeBtn`   | `is-icon is-sm is-ghost` | 关闭按钮类     |
| `cancelBtn`  | `is-ghost`               | 取消按钮类     |
| `confirmBtn` | `is-primary`             | 确认按钮类     |

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

| 字段         | 说明                                    |
| ------------ | --------------------------------------- |
| `visible`    | 是否显示                                |
| `content`    | 当前内容源                              |
| `loading`    | 异步函数型 `content` 正在解析           |
| `processing` | 异步 `onConfirm` 或 `onCancel` 正在处理 |

`processing` 期间会阻止确认、取消、关闭、Esc 和背景点击等交互入口。

`setState()` 只接收合法的状态补丁。传入的字段名或值类型不匹配，会抛出错误。

## 实例方法

| 方法               | 说明                                      |
| ------------------ | ----------------------------------------- |
| `build()`          | 创建 Modal 骨架并返回当前实例             |
| `show()`           | 设置 `state.visible = true`               |
| `hide()`           | 设置 `state.visible = false`              |
| `setState(patch)`  | 设置响应式状态字段                        |
| `reset()`          | 恢复初始 content，清空缓存和运行状态      |
| `mount(container)` | 构建并挂载根节点；普通业务更常用 `show()` |
| `unmount()`        | 移除根节点，保留 state 和 view owner      |
| `destroy()`        | 销毁实例，释放 DOM、事件和响应式资源      |

公共控制器方法还包括 `own()`、`use()`、`on()`、`off()` 和 `emit()`，语义见 [定义组件](../core/define.html)。

### 生命周期

`build()` 创建 owned view 和稳定根节点，但不解析内容、不插入文档。

`show()` 设置 `state.visible = true`，挂载根节点、锁定滚动、绑定事件，并按缓存策略解析 `state.content`。

`hide()` 设置 `state.visible = false`，触发离场动画。Modal 的入场和离场由公共 presence 机制协调。

`destroy()` 销毁实例，释放 DOM、事件和响应式资源。

## data-action

内容区可以放置带 `data-action` 属性的自定义元素，Modal 会统一代理处理。

| 值        | 行为                               |
| --------- | ---------------------------------- |
| `close`   | 执行 `onCancel(modal)`，成功后隐藏 |
| `cancel`  | 执行 `onCancel(modal)`，成功后隐藏 |
| `confirm` | 执行 `onConfirm(modal)`            |

`bgClose` 和 `escClose` 会直接隐藏 Modal，不会触发 `onCancel`。

## 课后作业

尝试使用 `createModal` 和 `createFlow` 组合实现一个动态授权流程模态框，包含：注册、登录、忘记密码、各类成功反馈、失败反馈等。

```vp-script
import { q, createModal, createForm, createFlow, Toast, icon } from 'vanilla-jui';
import { insert, jsx, createSignal } from 'vanilla-signal';
const demo1 = jsx('div', {
  style: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  children: [
    jsx('button', {
      className: 'j-button is-default',
      children: '默认模态框',
      onClick: () => {
        createModal({
          text: {title: '默认模态框'},
          content: '这是一个默认模态框',
          onConfirm: (e) => {
            e.hide();
            Toast.info('已确认');
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: '全屏模态框',
      onClick: () => {
        createModal({
          text: {title: '全屏模态框'},
          content: '这是一个全屏模态框',
          fullscreen: true,
          onConfirm: (e) => {
            e.hide();
            Toast.info('已确认');
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: 'esc 关闭',
      onClick: () => {
        createModal({
          text: {title: 'esc 关闭'},
          content: '这是一个支持 esc 关闭的模态框',
          escClose: true,
          onConfirm: (e) => {
            e.hide();
            Toast.info('已确认');
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: '点击背景关闭',
      onClick: () => {
        createModal({
          text: {title: '点击背景关闭'},
          content: '这是一个支持点击背景关闭的模态框',
          bgClose: true,
          onConfirm: (e) => {
            e.hide();
            Toast.info('已确认');
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
  ],
});
const demo2 = jsx('div', {
  style: {
    display: 'flex',
    gap: '8px',
    marginTop: '16px',
  },
  children: [
    jsx('button', {
      className: 'j-button is-default',
      children: '换个位置',
      onClick: () => {
        createModal({
          text: {title: '换个位置'},
          content: '为模态框换个位置',
          position: 'top',
          onConfirm: (e) => {
            e.hide();
            Toast.info('已确认');
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-default',
      children: '再换个位置',
      onClick: () => {
        createModal({
          text: {title: '再换个位置'},
          content: '为模态框再换个位置',
          position: 'bottom-right',
          onConfirm: (e) => {
            e.hide();
            Toast.info('已确认');
          },
          onHidden: (e) => e.destroy(),
        })
          .build()
          .show();
      },
    }),
    jsx('button', {
      className: 'j-button is-outline',
      children: '自定义 UI',
      onClick: () => {
        createModal({
          text: {title: '自定义 UI'},
          header: false,
          footer: false,
          onHidden: (e) => e.destroy(),
          content: jsx`<div style="width:276px;display:flex;flex-direction:column;align-items:center;gap:calc(var(--space)*4);">
              <div style="width:24px;fill:currentColor">${icon('warning')}</div>
              <div style="margin-bottom:12px">确认执行这项危险操作？</div>
              <div style="display:flex;gap:calc(var(--space)*4);">
                <button class="j-button is-ghost is-sm" data-action="close">取消</button>
                <button class="j-button is-danger is-sm" data-action="confirm">确认</button>
              </div>
            </div>`,
            onConfirm: (e) => {
              e.hide();
              Toast.lite('已确认');
            },
        })
          .build()
          .show();
      },
    }),
  ],
});
const [count, setCount] = createSignal(10);
let asyncContentRequestCount = 0;
let countdownTimer = null;
let countdownStopTimer = null;
const startCacheCountdown = () => {
  if (countdownTimer) clearInterval(countdownTimer);
  if (countdownStopTimer) clearTimeout(countdownStopTimer);

  setCount(10);
  countdownTimer = setInterval(() => {
    setCount((value) => {
      const next = value - 1;
      return next > 0 ? next : 0;
    });
  }, 1000);
  countdownStopTimer = setTimeout(() => {
    clearInterval(countdownTimer);
    countdownTimer = null;
    countdownStopTimer = null;
    setCount(0);
  }, 10000);
};
const loadAsyncModalContent = () =>
  new Promise((resolve) => {
    const requestIndex = asyncContentRequestCount + 1;
    setTimeout(() => {
      asyncContentRequestCount = requestIndex;
      startCacheCountdown();
      resolve(
        jsx('div', {
          children: [
            jsx('p', {
              children: `异步接口请求 第 ${requestIndex} 次`,
            }),
            jsx('p', {
              style: {marginBlock: '4px'},
              children: '当前模态框已经开启缓存功能，缓存时间为 10 秒。',
            }),
            jsx('p', {
                style: {marginBlock: '4px'},
                children: '10 秒内，反复打开模态框，将显示缓存内容。'
            }),
            jsx('p', {
                style: {marginBlock: '4px'},
                children: '10 秒后，内容过期，将重新请求并渲染。'
            }),
            jsx('p', {
                style: {
                    marginTop: '24px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                },
                children: [
                    jsx('button', {
                        className: 'j-button is-secondary',
                        'data-action': 'cancel',
                        children: ()=> `${count() > 0 ? `倒计时 ${count()} 秒` : '缓存已过期'}`,
                    }),
                    jsx('button', {
                        className: 'j-button is-primary',
                        'data-action': 'confirm',
                        children: '我知道了',
                    })
                ]
            }),
          ],
        })
      );
    }, 1000);
  });
const asyncModal = createModal({
    text: {title: '异步内容模态框'},
    content: async () => await loadAsyncModalContent(),
    style: 'min-height: 200px',
    cache: true,
    ttl: 10000,
    footer: false,
    onConfirm: (e) => {
        e.hide();
        Toast.lite('我知道了');
    },
}).build()

const modalInputItem = {
  type: 'text',
  payload: {
    name: 'message',
    label: 'Input',
    placeholder: '当前选择了 input 类型',
    required: true,
  },
  next: null,
};
const modalTextareaItem = {
  type: 'textarea',
  payload: {
    name: 'message',
    label: 'Textarea',
    placeholder: '当前选择了 textarea 类型',
    required: true,
  },
  next: null,
};
const modalPublishItem = {
  type: 'switch',
  payload: {
    name: 'publish',
    label: '确认发布',
    value: '1',
    checked: false,
    help: '提交数据前，必需勾选确认发布。',
  },
  next: null,
};
const modalFieldTypeItem = {
  type: 'radio',
  payload: {
    name: 'messageType',
    label: '消息类型',
    value: 'input',
    required: true,
    options: [
      { value: 'input', text: 'Input' },
      { value: 'textarea', text: 'Textarea' },
    ],
  },
  next: null,
};
modalFieldTypeItem.next = (current) =>
  current.payload.value === 'textarea' ? modalTextareaItem : modalInputItem;
modalInputItem.next = () => modalPublishItem;
modalTextareaItem.next = () => modalPublishItem;
let dynamicFormModal;
const dynamicModalForm = createForm({
  fields: [modalFieldTypeItem],
  buttons: 'reverse',
  buttonsPosition: 'end',
  onSubmit: async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    Toast.success('动态表单提交成功，请在控制台查看提交数据');
    console.table(data)
    dynamicModalForm.reset();
    dynamicFormModal.hide();
  },
  validator: {
    rules: {
      message: {
        required: true,
        minLength: 5,
      },
      publish: {
        checked: true,
      },
    },
    messages: {
      message: {
        required: '请输入消息',
        minLength: '消息长度不能小于 5 个字符',
      },
      publish: {
        checked: '请先确认发布',
      },
    },
  },
}).build();
dynamicFormModal = createModal({
  text: {
    title: '动态表单模态框',
  },
  content: () => dynamicModalForm.element,
  footer: false,
}).build();
const demo3 = jsx('div', {
  style: {
    marginBlock: '16px',
  },
  children: [
    jsx('button', {
      className: 'j-button is-primary',
      children: '异步内容模态框',
      onClick: () => {
        asyncModal.show();
      },
    }),
  ],
});
const demo4 = jsx('div', {
  style: {
    marginBlock: '16px',
  },
  children: [
    jsx('button', {
      className: 'j-button is-outline',
      children: '组合 Form 组件，实现动态表单模态框',
      onClick: () => {
        dynamicFormModal.show();
      },
    }),
  ],
});
insert(q('.demo'), [demo1, demo2, demo3, demo4]);

```
