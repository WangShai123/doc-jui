# 分页

Pagination 是分页组件，它根据 `total`、`page.size`、`page.current` 和页码窗口配置渲染分页按钮，并在页码变化时通过 `onChange(page, instance)` 通知业务层加载数据。

<Badge text="defineComponent" theme="primary"/>

## 示例

:::tabs
@tab 示例
<div class="demo"></div>
@tab 代码

```js
import { createPagination, q } from 'vanilla-jui';
import { render, jsx } from 'vanilla-signal';

const query = async (id = 1) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};

const renderPost = (res) => {
  const result = jsx('div', {
    className: 'post',
    children: [
      jsx('h4', {
        children: res.title,
      }),
      jsx('p', {
        children: res.body,
      }),
    ],
  });
  render(result, q('.list-wrap'));
};

void query(1).then((res) => {
  renderPost(res);
  createPagination({
    total: 100,
    page: { size: 1, current: 1 },
    count: { sibling: 1, boundary: 1 },
    onChange: async (c) => {
      renderPost(await query(c));
    },
  }).mount(q('.pagination-wrapper'));
});
```

:::

## 导入

```ts
import { createPagination } from 'vanilla-jui';
```

## 基础用法

```ts
const pagination = createPagination({
  total: 100,
  page: { size: 10, current: 1 },
  count: { sibling: 1, boundary: 1 },
  onChange(page, instance) {
    loadPage(page, instance.state.page.size);
  },
}).mount(q('.demo'));
```

## 参数

| 字段        | 类型               | 默认值                        | 说明                                      |
| ----------- | ------------------ | ----------------------------- | ----------------------------------------- |
| `total`     | `number`           | `0`                           | 总数据数，必须是大于等于 `0` 的有限数     |
| `page`      | `object`           | `{ size: 10, current: 1 }`    | 初始分页状态                              |
| `count`     | `object`           | `{ sibling: 1, boundary: 1 }` | 初始页码窗口配置                          |
| `lock`      | `boolean`          | `true`                        | 异步切换未完成前是否锁定分页              |
| `onChange`  | `Function \| null` | `null`                        | 页码变化后触发，参数为 `(page, instance)` |
| `className` | `object`           | 默认类名对象                  | 覆盖结构类名                              |

### page

| 字段      | 类型     | 说明                              |
| --------- | -------- | --------------------------------- |
| `size`    | `number` | 每页数据量，必须是大于 `0` 的整数 |
| `current` | `number` | 当前页码，必须是大于 `0` 的整数   |

### count

| 字段       | 类型     | 说明                                     |
| ---------- | -------- | ---------------------------------------- |
| `sibling`  | `number` | 当前页左右保留的相邻页数，必须是非负整数 |
| `boundary` | `number` | 首尾边界保留页数，必须是非负整数         |

### onChange

`onChange(page, instance)`

| 字段       | 类型     | 说明                                   |
| ---------- | -------- | -------------------------------------- |
| `page`     | `object` | 当前分页状态，包含 `size` 和 `current` |
| `instance` | `object` | 分页实例对象                           |

### className

| 字段      | 默认值                       |
| --------- | ---------------------------- |
| `root`    | `j-pagination`               |
| `list`    | `pagination`                 |
| `item`    | `item`                       |
| `more`    | `more`                       |
| `button`  | `j-button is-icon is-ghost`  |
| `current` | `j-button is-icon is-active` |
| `loading` | `animate-spin`               |

## 实例属性

### state

| 字段                   | 类型      | 说明                       |
| ---------------------- | --------- | -------------------------- |
| `state.total`          | `number`  | 总数据数                   |
| `state.page.size`      | `number`  | 每页数据量                 |
| `state.page.current`   | `number`  | 当前页码                   |
| `state.count.sibling`  | `number`  | 当前页左右相邻页数         |
| `state.count.boundary` | `number`  | 首尾边界页数               |
| `state.locked`         | `boolean` | 当前是否处于异步切换锁定中 |

## 实例方法

| 方法                | 说明                     |
| ------------------- | ------------------------ |
| `build()`           | 创建离线 DOM             |
| `mount(container)`  | 构建并挂载根节点         |
| `unmount()`         | 移除根节点，保留 state   |
| `go(page)`          | 跳转到指定页码           |
| `setState({ ... })` | 更新分页状态             |
| `destroy()`         | 销毁实例，释放事件和 DOM |

公共控制器方法还包括 `own()`、`use()`、`on()`、`off()` 和 `emit()`，语义见 [定义组件](../core/define.html)。

## 使用规范

初始页数据，由业务代码主动加载，分页组件仅负责渲染分页按钮、页码窗口、进一步加载触发。

- 业务端实现数据请求方法。
- 业务端实现数据渲染方法，包裹数据响应（查询管理器）。
- 在分页组件的 `onChange` 中，调用执行数据渲染方法，更新分页状态和视图。

```vp-script
import { createPagination, q, createLoading } from 'vanilla-jui';
import { render, insert, jsx } from 'vanilla-signal';

insert(q('.demo'), ()=>jsx('div', {
  children:[
    jsx('div', {
      className: 'list-wrap',
    }),
     jsx('div', {
      className: 'pagination-wrapper',
    })
  ]
}));

const query = async (id=1) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};

const renderPost = (res) => {
  const result = jsx('div',{
    className: 'post',
    children:[
      jsx('h4', {
        children: res.title,
      }),
      jsx('p', {
        style: {marginBottom: '1rem'},
        children: res.body,
      }),
    ]
  });
  render(result, q('.list-wrap'));
}

render(createLoading(), q('.list-wrap'));
void query(1).then((res)=>{
  renderPost(res);
  createPagination({
    total: 100,
    page: { size: 1, current: 1 },
    count: { sibling: 1, boundary: 1 },
    onChange: async (c)=> {
      renderPost( await query(c));
    }
  }).mount(q('.pagination-wrapper'));
})

```
