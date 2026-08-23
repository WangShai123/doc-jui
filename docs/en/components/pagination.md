# Pagination

Pagination renders pagination buttons based on `total`, `page.size`, `page.current`, and page-window configuration, and notifies the business layer through `onChange(page, instance)` when the page number changes.

<Badge text="defineComponent" theme="primary"/>

## Example

:::tabs
@tab Example
<div class="demo"></div>
@tab Code

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

## Import

```ts
import { createPagination } from 'vanilla-jui';
```

## Basic Usage

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

## Options

| Field       | Type               | Default                       | Description |
| ----------- | ------------------ | ----------------------------- | ----------- |
| `total`     | `number`           | `0`                           | Total data count. Must be a finite number greater than or equal to `0` |
| `page`      | `object`           | `{ size: 10, current: 1 }`    | Initial pagination state |
| `count`     | `object`           | `{ sibling: 1, boundary: 1 }` | Initial page-window configuration |
| `lock`      | `boolean`          | `true`                        | Whether to lock pagination before async switching completes |
| `onChange`  | `Function \| null` | `null`                        | Triggered after page changes, with `(page, instance)` |
| `className` | `object`           | Default class-name object     | Overrides structural class names |

### page

| Field     | Type     | Description |
| --------- | -------- | ----------- |
| `size`    | `number` | Items per page. Must be an integer greater than `0` |
| `current` | `number` | Current page number. Must be an integer greater than `0` |

### count

| Field      | Type     | Description |
| ---------- | -------- | ----------- |
| `sibling`  | `number` | Number of adjacent pages kept on each side of current page. Must be a non-negative integer |
| `boundary` | `number` | Number of pages kept at the beginning and end. Must be a non-negative integer |

### onChange

`onChange(page, instance)`

| Field      | Type     | Description |
| ---------- | -------- | ----------- |
| `page`     | `object` | Current pagination state, including `size` and `current` |
| `instance` | `object` | Pagination instance object |

### className

| Field     | Default                      |
| --------- | ---------------------------- |
| `root`    | `j-pagination`               |
| `list`    | `pagination`                 |
| `item`    | `item`                       |
| `more`    | `more`                       |
| `button`  | `j-button is-icon is-ghost`  |
| `current` | `j-button is-icon is-active` |
| `loading` | `animate-spin`               |

## Instance Properties

### state

| Field                  | Type      | Description |
| ---------------------- | --------- | ----------- |
| `state.total`          | `number`  | Total data count |
| `state.page.size`      | `number`  | Items per page |
| `state.page.current`   | `number`  | Current page number |
| `state.count.sibling`  | `number`  | Adjacent page count on each side of current page |
| `state.count.boundary` | `number`  | Boundary page count at the beginning and end |
| `state.locked`         | `boolean` | Whether currently locked during async switching |

## Instance Methods

| Method              | Description |
| ------------------- | ----------- |
| `build()`           | Creates offline DOM |
| `mount(container)`  | Builds and mounts the root node |
| `unmount()`         | Removes the root node and keeps state |
| `go(page)`          | Jumps to the specified page |
| `setState({ ... })` | Updates pagination state |
| `destroy()`         | Destroys the instance and releases events and DOM |

Shared controller methods also include `own()`, `use()`, `on()`, `off()`, and `emit()`. See [Define Component](../core/define.html).

## Usage Rules

Initial page data should be loaded by business code. The pagination component is only responsible for rendering pagination buttons, page windows, and triggering further loading.

- Implement the data request method on the business side.
- Implement the data rendering method on the business side, wrapping the data response if needed, for example with a query manager.
- In the pagination component's `onChange`, call the data rendering method to update pagination state and view.

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
