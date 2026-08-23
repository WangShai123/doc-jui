# 菜单

Menu 是轻量菜单组件，用于展示常规桌面导航菜单、侧边栏菜单、移动端底部工具栏菜单。

<Badge text="defineComponent" theme="primary"/>

## 示例

:::details 点击展开查看详情
<div class="demo"></div>
:::

## 导入

```ts
import { createMenu } from 'vanilla-jui';
```

## 基础用法

```ts
const menu = createMenu({
  type: 'mobile',
  data: [
    { id: 'home', title: 'Home', url: '#home' },
    { id: 'account', title: 'Account', type: 1, url: '#account' },
    { id: 'login', title: 'Login', type: 2, url: '#login' },
    {
      id: 'docs',
      title: 'Docs',
      children: [{ id: 'api', title: 'API', url: '#api' }],
    },
  ],
}).mount(q('.menu-wrap'));
```

## 参数

| 字段        | 类型                             | 默认值         | 说明                  |
| ----------- | -------------------------------- | -------------- | --------------------- |
| `type`      | `string \| undefined`            | `undefined`    | 菜单类型              |
| `id`        | `string \| null`                 | 自动生成       | 根列表 `<ul>` 节点 id |
| `user`      | `number \| () => number`         | `0`            | 用户状态              |
| `data`      | `MenuItem[] \| () => MenuItem[]` | `[]`           | 菜单数据              |
| `backText`  | `string`                         | `返回 \| Back` | 侧边栏菜单返回项文案  |
| `className` | `object`                         | 见下表         | 自定义样式类          |

## 实例属性

### type

菜单类型，可选值：

- `undefined`：默认值，常规桌面导航菜单。
- `mobile`：侧边栏菜单。
- `bottom`：移动端底部工具栏菜单。

### data

初始菜单数据或外部响应式菜单数据源。

格式：`MenuItem[] \| () => MenuItem[]`

| 字段       | 类型                 | 说明               |
| ---------- | -------------------- | ------------------ |
| `id`       | `string \| number`   | 菜单项 id          |
| `title`    | `string \| number`   | 菜单项标题         |
| `type`     | `MenuItemRenderType` | 用户态渲染类型     |
| `url`      | `string`             | 菜单项链接         |
| `target`   | `string`             | 菜单项链接打开方式 |
| `classes`  | `string \| string[]` | 菜单项类名         |
| `children` | `MenuItem[]`         | 子菜单项           |

菜单项通过 `MenuItem.type` 控制是否参与渲染：

| MenuItem.type | 行为               |
| ------------- | ------------------ |
| `0`           | 始终渲染，默认值   |
| `1`           | 仅用户已登录时渲染 |
| `2`           | 仅用户未登录时渲染 |

如果子项全部被隐藏，父项不会渲染子菜单结构。

### state

| 字段         | 类型         | 说明                                  |
| ------------ | ------------ | ------------------------------------- |
| `user`       | `number`     | 当前用户 id，大于 `0` 时视为已登录    |
| `data`       | `MenuItem[]` | 当前菜单数据，更新后由 keyed 列表更新 |
| `activeKeys` | `string[]`   | 当前展开或激活的菜单项 key            |

`user` 字段可用于根据用户状态动态切换菜单项，支持响应式状态。

### className

| 字段          | 默认值                   |
| ------------- | ------------------------ |
| `root`        | `j-menu`                 |
| `list`        | `menu`                   |
| `item`        | `menu-item`              |
| `hasChildren` | `menu-item-has-children` |
| `link`        | `menu-link`              |
| `subMenu`     | `sub-menu`               |
| `active`      | `is-active`              |
| `backItem`    | `menu-item back`         |
| `backIcon`    | `el-icon el-prefix`      |
| `text`        | `menu-text`              |

## 实例方法

| 方法                | 说明                     |
| ------------------- | ------------------------ |
| `build()`           | 创建离线 DOM             |
| `mount(container)`  | 构建并挂载根节点         |
| `unmount()`         | 移除根节点，保留 state   |
| `setState({ ... })` | 更新菜单状态             |
| `destroy()`         | 销毁实例，释放事件和 DOM |

公共控制器方法还包括 `own()`、`use()`、`on()`、`off()` 和 `emit()`，语义见 [定义组件](../core/define.html)。

```vp-script
import { createMenu, q, createOffcanvas } from 'vanilla-jui';
import { jsx, insert, Show, createSignal, createEffect } from 'vanilla-signal';

const data = [
    { id: 'home', title: 'Home', url: '#home' },
    { id: 'category', title: 'Category', type: 1, url: '#category' },
    {
      id: 'docs',
      title: 'Docs',
      children: [
        { id: 'api', title: 'API', url: '#api' },
        { id: 'guide', title: 'Guide', url: '#guide' },
      ],
    },
    { id: 'user', title: 'User', type: 2, url: '#user' },
]
const oc = createOffcanvas({
    direction: 'left',
    content: createMenu({
        type: 'mobile',
        data
    }).build().element,
}).build();
const bm = createMenu({
    type: 'bottom',
    data
});
const dm = createMenu({
    data
});
const [b,setB] = createSignal(false);
const [d,setD] = createSignal(false);
insert(q('.demo'), ()=>jsx('div', {
    style: {
        display:'flex',
        flexWrap:'wrap',
        gap:'8px'
    },
    children:[
        Show({
            when: () => d(),
            children: ()=>jsx('button',{
                className: 'j-button is-error',
                children: '销毁桌面菜单',
                onClick:()=> {
                    dm.unmount();
                    setD(false);
                }
            }),
            fallback: ()=>jsx('button',{
                className: 'j-button is-outline',
                children: '启用桌面菜单',
                onClick:()=> {
                    dm.mount(q('header'))
                    setD(true);
                }
            }),
        }),
        jsx('button',{
            className: 'j-button is-default',
            children: '侧边栏菜单',
            onClick:()=>oc.show()
        }),
        Show({
            when: () => b(),
            children: ()=>jsx('button',{
                className: 'j-button is-error',
                children: '销毁底部菜单',
                onClick:()=> {
                    bm.unmount();
                    setB(false);
                }
            }),
            fallback: ()=>jsx('button',{
                className: 'j-button is-outline',
                children: '启用底部菜单',
                onClick:()=> {
                    bm.mount(q('body'))
                    setB(true);
                }
            }),
        }),
    ]
}))
```
