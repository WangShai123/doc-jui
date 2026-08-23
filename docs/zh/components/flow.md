# 流程

Flow 是一个流程状态控制器，提供步骤切换、数据缓存、异步 hook、错误回滚、busy 防重入等功能。它以 headless 使用为主，同时也提供一份默认基础 UI，面向常用轻量流程场景。

<Badge text="defineComponent" theme="primary"/> <Badge text="RenderableContent"/>

## 示例

:::tabs
@tab 示例
<div class="demo"></div>
@tab 代码

```ts
const baseSteps = () => [
  {
    id: 'account',
    title: '账号信息',
    content: () =>
      jsx('p', {
        children: [
          '填写账号基础信息。当前步骤内容只渲染在 ',
          jsx('code', { children: 'flow-body' }),
          '。',
        ],
      }),
    data: { email: 'demo@example.com' },
  },
  {
    id: 'profile',
    title: '资料完善',
    content: ({ data }) => {
      const email = typeof data.email === 'string' ? data.email : '未填写';
      return jsx('p', {
        children: ['全局缓存 email：', jsx('strong', { children: email })],
      });
    },
  },
  {
    id: 'confirm',
    title: '确认提交',
    content: () =>
      jsx('p', { children: '最后一步会把 Next 按钮显示为 Finish。' }),
  },
];
createFlow({
  id: 'flow-default-demo',
  steps: baseSteps(),
  showReset: true,
}).mount(q('.demo'));
```

:::

更多复杂示例，请见下方[更多示例](#更多示例)。

## 导入

```ts
import { createFlow } from 'vanilla-jui';
```

## 基础用法

```ts
const flow = createFlow({
  steps: [
    { id: 'account', title: 'Account', content: 'Account content' },
    { id: 'profile', title: 'Profile', content: 'Profile content' },
    { id: 'confirm', title: 'Confirm', content: 'Confirm content' },
  ],
});
flow.mount(q('.demo'));
```

## 设计模型

Flow 把复杂流程拆成四层：

| 层级       | 作用                                                       |
| ---------- | ---------------------------------------------------------- |
| `steps`    | 静态步骤定义，包含 `id/title/content/data/modal` 与 hooks  |
| `state`    | 响应式运行时状态，包含当前步骤、历史、数据、loading、error |
| `snapshot` | 对外消费的不可变快照，适合渲染、日志、hook 判断            |
| `element`  | 默认 UI 的根节点；`render: false` 或 build 前为 `null`     |

内部组织遵循项目响应式规范：`state` 保存流程事实，当前步骤、当前步骤数据、按钮状态和 snapshot 基础结构由 memo 派生，默认 UI 和 slot context 消费派生结果。每个 step 的内容是一块业务区块 UI，Flow 不把 step content 当作列表项拆分渲染；列表式局部复用应由业务在自己的 content 内处理。

`next(payload)`、`back(payload)` 和 `goTo(target, payload)` 会把 payload 写入“离开的当前步骤”。当 `cache: true` 时，payload 也会合并进全局 `data`，适合多步表单最终统一提交。

## 参数

`createFlow(props)`

| 参数              | 类型                        | 默认值     | 说明                                  |
| ----------------- | --------------------------- | ---------- | ------------------------------------- |
| `id`              | `string \| null`            | 自动生成   | 默认 UI 根节点 id                     |
| `steps`           | `FlowStep[]`                | `[]`       | 步骤列表，不能为空                    |
| `initial`         | `string \| number \| null`  | `null`     | 初始步骤 id 或索引                    |
| `cache`           | `boolean`                   | `true`     | 是否把步骤 payload 合并到全局 `data`  |
| `linear`          | `boolean`                   | `true`     | 默认步骤条是否禁止跳到未来步骤        |
| `render`          | `boolean`                   | `true`     | 是否启用默认 UI                       |
| `rollbackOnError` | `boolean`                   | `true`     | transition 失败时是否回滚状态         |
| `busyStrategy`    | `'ignore' \| 'throw'`       | `'ignore'` | loading 中重复动作的处理策略          |
| `showBack`        | `boolean`                   | `true`     | 默认 footer 是否显示 back 按钮        |
| `showNext`        | `boolean`                   | `true`     | 默认 footer 是否显示 next/finish 按钮 |
| `showReset`       | `boolean`                   | `false`    | 默认 footer 是否显示 reset 按钮       |
| `text`            | `object`                    | `{}`       | `back/next/finish/reset` 文案配置     |
| `className`       | `object \| string`          | 见下表     | 自定义样式类                          |
| `renderHeader`    | `Function \| false \| null` | `null`     | 自定义 header 内容                    |
| `renderBody`      | `Function \| false \| null` | `null`     | 自定义 body 内容                      |
| `renderFooter`    | `Function \| false \| null` | `null`     | 自定义 footer 内容                    |
| `onChange`        | `Function \| null`          | `null`     | 状态变化后触发                        |
| `onNext`          | `Function \| null`          | `null`     | 全局 next hook                        |
| `onBack`          | `Function \| null`          | `null`     | 全局 back hook                        |
| `onFinish`        | `Function \| null`          | `null`     | 完成时触发                            |
| `onError`         | `Function \| null`          | `null`     | hook 或 guard 错误时触发              |
| `onBusy`          | `Function \| null`          | `null`     | 重复动作被拦截时触发                  |

### busyStrategy

| 值       | 行为                            |
| -------- | ------------------------------- |
| `ignore` | 默认值，直接返回当前快照        |
| `throw`  | 抛出 `code` 为 `FLOW_BUSY` 的错 |

### className

| 字段         | 默认值                 |
| ------------ | ---------------------- |
| `root`       | `j-flow`               |
| `header`     | `flow-header`          |
| `steps`      | `flow-steps`           |
| `step`       | `flow-step`            |
| `active`     | `is-active`            |
| `complete`   | `is-complete`          |
| `stepButton` | `flow-step-button`     |
| `stepIndex`  | `flow-step-index`      |
| `stepTitle`  | `flow-step-title`      |
| `body`       | `flow-body`            |
| `footer`     | `flow-footer`          |
| `button`     | `j-button`             |
| `reset`      | `is-ghost flow-reset`  |
| `back`       | `is-ghost flow-back`   |
| `next`       | `is-primary flow-next` |

## 实例属性

| 属性          | 说明                                        |
| ------------- | ------------------------------------------- |
| `props`       | 归一化后的初始化配置                        |
| `steps`       | 克隆后的步骤列表                            |
| `state`       | 响应式状态对象                              |
| `runtime`     | 运行时标记，包含 `built/destroyed` 等       |
| `element`     | 默认 UI 根节点；`render: false` 时为 `null` |
| `currentStep` | 当前步骤配置                                |
| `currentData` | 当前步骤缓存数据                            |
| `canBack`     | 当前是否可以返回                            |
| `canNext`     | 当前是否可以前进                            |
| `isLast`      | 当前是否最后一步                            |

## 实例方法

| 方法                                  | 说明                                                                   |
| ------------------------------------- | ---------------------------------------------------------------------- |
| `build()`                             | 构建实例；默认 UI 模式会创建 `flow.element`                            |
| `mount(container)`                    | 构建并挂载默认 UI；headless 模式不创建 DOM                             |
| `unmount()`                           | 移除默认 UI 根节点，保留流程状态                                       |
| `next(payload?)`                      | 前进一步；最后一步会调用 `finish()`                                    |
| `back(payload?)`                      | 返回上一步                                                             |
| `goTo(target, payload?, options?)`    | 跳转到指定步骤 id 或索引；`options.direction` 可指定方向               |
| `setData(data)`                       | 合并全局数据                                                           |
| `setStepData(stepId, data, options?)` | 合并指定步骤缓存；step 不存在时抛错；`silent` 为 true 时不触发变更通知 |
| `getStepData(stepId)`                 | 获取指定步骤缓存副本                                                   |
| `snapshot()`                          | 获取当前不可变快照                                                     |
| `subscribe(handler)`                  | 订阅快照变化，返回取消订阅函数                                         |
| `reset()`                             | 重置到初始步骤和初始数据，并取消当前动作                               |
| `finish(payload?)`                    | 完成流程并触发 `onFinish`                                              |
| `destroy()`                           | 销毁实例、移除默认 UI、取消动作并执行清理                              |

公共控制器方法还包括 `own()`、`use()`、`on()`、`off()` 和 `emit()`，语义见 [定义组件](../core/define.html)。

### Snapshot

`snapshot()` 返回当前不可变快照，包含所有状态和数据，适合渲染、日志、hook 判断等。

| 字段            | 说明                            |
| --------------- | ------------------------------- |
| `id`            | Flow id                         |
| `currentId`     | 当前步骤 id                     |
| `currentIndex`  | 当前步骤索引                    |
| `previousId`    | 上一个步骤 id                   |
| `previousIndex` | 上一个步骤索引                  |
| `direction`     | 最近一次切换方向                |
| `history`       | 访问历史                        |
| `data`          | 全局数据副本                    |
| `stepData`      | 全部步骤数据副本                |
| `currentData`   | 当前步骤数据副本                |
| `currentStep`   | 当前步骤的公开配置，不包含 hook |
| `canBack`       | 是否可以返回                    |
| `canNext`       | 是否可以前进                    |
| `isLast`        | 是否最后一步                    |
| `loading`       | 是否有动作执行中                |
| `busyAction`    | 当前执行中的动作                |
| `error`         | 最近一次错误                    |

## 更多示例

### 非线性流程

<div class="linear-demo"></div>

### 自定义首尾

<div class="custom-demo"></div>

### 异步 Hook

<div class="async-demo"></div>

### Headless

<div class="headless-demo"></div>

```vp-script
import { createFlow, q, createLoading, Toast } from 'vanilla-jui';
import { jsx, insert } from 'vanilla-signal';

const baseSteps = () => [
  {
    id: 'account',
    title: '账号信息',
    content: () =>
      jsx('div', {
        children: [
          '填写账号基础信息。当前步骤内容只渲染在 ',
          jsx('code', { children: 'flow-body' }),
          '。',
        ],
      }),
    data: { email: 'demo@example.com' },
  },
  {
    id: 'profile',
    title: '资料完善',
    content: ({ data }) => {
      const email = typeof data.email === 'string' ? data.email : '未填写';
      return jsx('div', {
        children: ['全局缓存 email：', jsx('strong', { children: email })],
      });
    },
  },
  {
    id: 'confirm',
    title: '确认提交',
    content: () =>
      jsx('div', { children: '最后一步会把 Next 按钮显示为 Finish。' }),
  },
];
const a = createFlow({
  id: 'flow-default-demo',
  steps: baseSteps(),
  showReset: true,
}).mount(q('.demo'));
console.log(a.snapshot());

createFlow({
  id: 'flow-free-demo',
  linear: false,
  initial: 'address',
  steps: [
    {
      id: 'cart',
      title: '购物车',
      content: () => jsx('div', { children: '可直接点击任意步骤。' }),
    },
    {
      id: 'address',
      title: '地址',
      content: () => jsx('div', { children: '当前初始步骤。' }),
    },
    {
      id: 'payment',
      title: '支付',
      content: () => jsx('div', { children: '这里模拟非线性流程。' }),
    },
  ],
  showReset: true,
}).mount(q('.linear-demo'));

const createButton = (className, text, onClick, disabled = false) => {
  return jsx('button', {
    type: 'button',
    className,
    'aria-disabled': disabled ? 'true' : 'false',
    children: text,
    disabled,
    onClick,
  });
};

createFlow({
  id: 'flow-custom-demo',
  steps: baseSteps(),
  renderHeader: ({ snapshot, fallback }) => {
    const title =
      typeof snapshot.currentStep?.title === 'string'
        ? snapshot.currentStep.title
        : snapshot.currentId;

    return [
      fallback(),
      jsx('div', { className: 'flow-demo-meta', children: `当前：${title}` }),
    ];
  },
  renderFooter: ({ snapshot, steps, back, next, reset }) => {
    const status = document.createElement('span');
    status.style.display = 'flex';
    status.style.alignItems = 'center';
    status.style.marginRight = '16px';
    status.textContent = `第 ${snapshot.currentIndex + 1} / ${steps.length} 步`;

    return [
      status,
      snapshot.canBack
        ? createButton(
            'j-button is-outline',
            '返回',
            () => void back()
          )
        : null,
      createButton(
        'j-button is-success',
        snapshot.isLast ? '提交' : '继续',
        () => void next()
      ),
      createButton('j-button is-text', '重置', () => reset()),
    ];
  },
}).mount(q('.custom-demo'));

const textValue = (value) => {
  if (typeof value === 'string') return value;
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }
  return '';
};
const collectCurrentForm = (flow) => {
  const form = flow.element?.querySelector('[data-flow-body] form');
  if (!(form instanceof HTMLFormElement)) return null;
  if (!form.reportValidity()) return false;
  return Object.fromEntries(new FormData(form).entries());
};
const createField = (name, label, value = '', placeholder = '') =>
  jsx('form', {
    className: 'j-form is-vertical is-item-vertical',
    style: {
      maxWidth: '280px',
    },
    children: [
      jsx('label', {
        className: 'form-field',
        children: [
          jsx('span', { className: 'field-legend', children: label }),
          jsx('input', {
            className: 'j-input',
            name,
            value,
            required: true,
            autocomplete: name === 'email' ? 'email' : 'name',
            type: name === 'email' ? 'email' : 'text',
            placeholder,
          }),
        ],
      }),
    ],
  });

createFlow({
  id: 'flow-async-demo',
  steps: [
    {
      id: 'intro',
      title: '初始数据',
      data: { name: '王小明', email: 'xiaoming@example.com' },
      content: ({ data }) =>
        jsx('div', {
          children: [
            jsx('p', {
              children: `欢迎，${textValue(data.name)}！点击下一步可以修改个人资料。`,
            }),
            jsx('ul', {
              children: [
                jsx('li', { children: `name: ${textValue(data.name)}` }),
                jsx('li', { children: `email: ${textValue(data.email)}` }),
              ],
            }),
          ],
        }),
    },
    {
      id: 'name',
      title: '填写姓名',
      content: ({ data }) =>
        createField('name', 'Name', textValue(data.name), '请输入姓名'),
    },
    {
      id: 'email',
      title: '填写邮箱',
      content: ({ data }) =>
        createField('email', 'Email', textValue(data.email), '请输入邮箱'),
      onLeave: () => new Promise((resolve) => setTimeout(resolve, 800)),
    },
    {
      id: 'success',
      title: '提交成功',
      content: ({ data }) =>
        jsx('div', {
          children: [
            jsx('div', {
              className: 'j-tip is-success',
              children: jsx('div', {
                className: 'tip-content',
                children: `${textValue(data.name)}的资料已提交成功。`,
              }),
            }),
            jsx('ul', {
              style: { marginTop: '1rem' },
              children: [
                jsx('li', { children: `name: ${textValue(data.name)}` }),
                jsx('li', { children: `email: ${textValue(data.email)}` }),
              ],
            }),
          ],
        }),
    },
  ],
  showReset: true,
  renderFooter: ({ snapshot, flow, back, next, reset }) => {
    const loading = jsx('div', { style: {position:'relative',minWidth:'32px'} });
    if (snapshot.loading) loading.appendChild(createLoading());

    const payloadNext = () => {
      const payload = collectCurrentForm(flow);
      if (payload === false) return;
      void next(payload);
    };

    return [
        loading,
        jsx('div', {
          style: {
            display:'flex',
          },
          children: [
            createButton(
              'j-button is-text flow-reset',
              '重置',
              () => reset(),
              snapshot.loading
            ),
            snapshot.canBack
              ? createButton(
                  'j-button is-ghost flow-back',
                  '上一步',
                  () => void back(collectCurrentForm(flow) || null),
                  snapshot.loading
                )
              : null,
            createButton(
              'j-button is-primary flow-next',
              snapshot.isLast
                ? '完成'
                : snapshot.currentId === 'email'
                  ? '提交'
                  : '下一步',
              payloadNext,
              snapshot.loading
            ),
          ]
        })
      ]
  },
}).mount(q('.async-demo'));

const mountHeadlessFlow = () => {
  const shell = jsx('div', {
    className: 'flow-headless-demo',
    'data-headless-flow': '',
  });
  insert(q('.headless-demo'), shell);

  const flowInstances = new Set();
  const collectForm = (root) => {
    const form = root.querySelector('form');
    if (!(form instanceof HTMLFormElement)) return null;
    if (!form.reportValidity()) return false;
    return Object.fromEntries(new FormData(form).entries());
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


  const validCode = '8426';

  const flow = createFlow({
    id: 'flow-headless-demo',
    render: false,
    steps: [
      { id: 'username', title: '填写用户名' },
      {
        id: 'email',
        title: '填写邮箱',
        onNext: async ({ targetId }) => {
          await delay(800);
          Toast.lite('验证码发送成功', 2000);
          return targetId || 'code';
        },
      },
      {
        id: 'code',
        title: '填写验证码',
        onNext: async ({ payload, targetId }) => {
          await delay(800);
          if (payload?.code !== validCode) {
            Toast.error('验证码不正确，请重新输入', { duration: 2200 });
            return 'code';
          }
          return targetId || 'welcome';
        },
      },
      { id: 'welcome', title: '欢迎' },
    ],
  });
  flow.build();
  flowInstances.add(flow);

  const render = (snapshot) => {
    shell.textContent = '';

    const fieldByStep = {
      username: () =>
        createField(
          'username',
          '',
          textValue(snapshot.data.username),
          '输入用户名'
        ),
      email: () =>
        createField('email', '', textValue(snapshot.data.email), '输入邮箱'),
      code: () =>
        jsx('div', {
          children: [
            createField('code', '', '', '输入验证码'),
            jsx('p', {
              className: 'headless-hint',
              children: `测试验证码：${validCode}`,
            }),
          ],
        }),
    };

    const content =
      snapshot.currentId === 'welcome'
        ? jsx('article', {
            className: 'headless-welcome',
            children: [
              jsx('strong', {
                children: `欢迎，${textValue(snapshot.data.username)}！`,
              }),
              jsx('p', {
                children: `${textValue(snapshot.data.email)} 已完成注册验证。`,
              }),
              createButton('j-button is-primary', '重置当前演示', () =>
                flow.reset()
              ),
            ],
          })
        : jsx('article', {
            className: 'headless-card',
            children: [
              jsx('strong', {
                children: snapshot.currentStep?.title || snapshot.currentId,
              }),
              fieldByStep[snapshot.currentId]?.(),
            ],
          });

    const moveNext = async () => {
      const payload = collectForm(shell);
      if (payload === false) return;
      await flow.next(payload);
    };

    const dynamicAction = (value) =>
      snapshot.loading ? createLoading() : value;
    const dynamicAttr = (value) => (snapshot.loading ? value : '');

    const actions = jsx('div', {
      style: {
        display:'flex',
        gap: '8px',
        marginTop: '8px'
      },
      children:
        snapshot.currentId === 'welcome'
          ? []
          : [
              createButton(
                'j-button is-outline',
                '上一步',
                () => void flow.back(collectForm(shell) || null),
                !snapshot.canBack || snapshot.loading
              ),
              createButton(
                `j-button is-primary ${dynamicAttr('is-icon')}`,
                snapshot.currentId === 'email'
                  ? dynamicAction('发送验证码')
                  : dynamicAction('下一步'),
                () => void moveNext(),
                snapshot.loading
              ),
            ],
    });

    shell.append( content, actions);
  };

  flow.subscribe(render);
};
mountHeadlessFlow();
```
