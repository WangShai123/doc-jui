# Menu

Menu is a lightweight menu component for regular desktop navigation menus, sidebar menus, and mobile bottom toolbar menus.

<Badge text="defineComponent" theme="primary"/>

## Example

:::details Click to expand details
<div class="demo"></div>
:::

## Import

```ts
import { createMenu } from 'vanilla-jui';
```

## Basic Usage

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

## Parameters

| Field       | Type                             | Default             | Description                         |
| ----------- | -------------------------------- | ------------------- | ----------------------------------- |
| `type`      | `string \| undefined`            | `undefined`         | Menu type                           |
| `id`        | `string \| null`                 | Auto-generated      | Root list `<ul>` node id            |
| `user`      | `number \| () => number`         | `0`                 | User state                          |
| `data`      | `MenuItem[] \| () => MenuItem[]` | `[]`                | Menu data                           |
| `backText`  | `string`                         | `Return \| Back`    | Text for the sidebar menu back item |
| `className` | `object`                         | See the table below | Custom style classes                |

## Instance Properties

### type

Menu type. Available values:

- `undefined`: Default value, regular desktop navigation menu.
- `mobile`: Sidebar menu.
- `bottom`: Mobile bottom toolbar menu.

### data

Initial menu data or an external reactive menu data source.

Format: `MenuItem[] \| () => MenuItem[]`

| Field      | Type                 | Description                    |
| ---------- | -------------------- | ------------------------------ |
| `id`       | `string \| number`   | Menu item id                   |
| `title`    | `string \| number`   | Menu item title                |
| `type`     | `MenuItemRenderType` | User-state render type         |
| `url`      | `string`             | Menu item link                 |
| `target`   | `string`             | How the menu item link opens   |
| `classes`  | `string \| string[]` | Menu item class names          |
| `children` | `MenuItem[]`         | Child menu items               |

Menu items use `MenuItem.type` to control whether they take part in rendering:

| MenuItem.type | Behavior                                  |
| ------------- | ----------------------------------------- |
| `0`           | Always render. This is the default        |
| `1`           | Render only when the user is signed in    |
| `2`           | Render only when the user is not signed in |

If all child items are hidden, the parent item will not render the submenu structure.

### state

| Field        | Type         | Description                                                |
| ------------ | ------------ | ---------------------------------------------------------- |
| `user`       | `number`     | Current user id. A value greater than `0` means signed in  |
| `data`       | `MenuItem[]` | Current menu data, updated by the keyed list after changes |
| `activeKeys` | `string[]`   | Keys of the currently expanded or active menu items        |

The `user` field can be used to switch menu items dynamically according to user state, and it supports reactive state.

### className

| Field         | Default                  |
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

## Instance Methods

| Method              | Description                                      |
| ------------------- | ------------------------------------------------ |
| `build()`           | Create offline DOM                               |
| `mount(container)`  | Build and mount the root node                    |
| `unmount()`         | Remove the root node and keep state              |
| `setState({ ... })` | Update menu state                                |
| `destroy()`         | Destroy the instance and release events and DOM  |

Common controller methods also include `own()`, `use()`, `on()`, `off()`, and `emit()`. See [Define Component](../core/define.html) for their meaning.

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
                children: 'Destroy Desktop Menu',
                onClick:()=> {
                    dm.unmount();
                    setD(false);
                }
            }),
            fallback: ()=>jsx('button',{
                className: 'j-button is-outline',
                children: 'Enable Desktop Menu',
                onClick:()=> {
                    dm.mount(q('header'))
                    setD(true);
                }
            }),
        }),
        jsx('button',{
            className: 'j-button is-default',
            children: 'Sidebar Menu',
            onClick:()=>oc.show()
        }),
        Show({
            when: () => b(),
            children: ()=>jsx('button',{
                className: 'j-button is-error',
                children: 'Destroy Bottom Menu',
                onClick:()=> {
                    bm.unmount();
                    setB(false);
                }
            }),
            fallback: ()=>jsx('button',{
                className: 'j-button is-outline',
                children: 'Enable Bottom Menu',
                onClick:()=> {
                    bm.mount(q('body'))
                    setB(true);
                }
            }),
        }),
    ]
}))
```
