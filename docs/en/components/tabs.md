---
client:
  entry:
    - tabs
---

# Tabs

<Badge text="defineComponent" theme="primary"/> <Badge text="RenderableContent"/>

## Example

:::details Click to expand details
<div class="demo"></div>
:::

## Import

```js
import { createTabs } from 'vanilla-jui';
```

## Basic Usage

Use `createTabs(props)` to create a Tabs instance:

```js
const tabs = createTabs({
  active: 'profile',
  data: [
    { name: 'account', title: 'Account', content: 'Account content' },
    { name: 'profile', title: 'Profile', content: 'Profile content' },
  ],
});
tabs.mount(document.querySelector('.demo'));
```

## Parameters

| Field       | Type                                          | Default             | Description                                  |
| ----------- | --------------------------------------------- | ------------------- | -------------------------------------------- |
| `data`      | `TabItem[]`                                   | See the table below | Tab item list, using `name` as keyed identity |
| `id`        | `string \| null`                              | Auto-generated      | Root node `id`                               |
| `direction` | `"top" \| "bottom" \| "left" \| "right"`      | `"top"`             | Layout direction                             |
| `active`    | `number \| string`                            | `0`                 | Default active item. Can be an index or `name` |
| `disabled`  | `number \| string \| Array<number \| string>` | `[]`                | Default disabled items                       |
| `onChange`  | `Function \| null`                            | `null`              | Triggered after the active item changes      |
| `className` | `object`                                      | See the table below | Custom style classes                         |

### data

Format: `Array<TabItem>`.

Each `TabItem` is an object that contains the `name`, `title`, `content`, `cache`, and `ttl` fields.

| Field     | Type                | Required | Description                                                |
| --------- | ------------------- | -------- | ---------------------------------------------------------- |
| `name`    | `string`            | No       | Unique tab name. Generated automatically when omitted       |
| `title`   | `RenderableContent` | Yes      | Tab title content                                          |
| `content` | `RenderableContent` | Yes      | Panel content                                              |
| `cache`   | `boolean`           | No       | Whether to cache the result of function content             |
| `ttl`     | `number`            | No       | Cache lifetime in milliseconds; `0` means it never expires  |

### onChange

`onChange(index, name, tabRef, panelRef) => void | Promise<void>`

| Parameter  | Type                   | Description                    |
| ---------- | ---------------------- | ------------------------------ |
| `index`    | `number`               | Current active item index      |
| `name`     | `string \| number`     | Current active item name       |
| `tabRef`   | `Element \| undefined` | Current active tab element     |
| `panelRef` | `Element \| undefined` | Current active panel element   |

### className

| Field       | Default       |
| ----------- | ------------- |
| `root`      | `j-tabs`      |
| `wrap`      | `tab-wrap`    |
| `list`      | `tab-list`    |
| `tab`       | `tab-item`    |
| `panelWrap` | `panel-list`  |
| `panel`     | `panel-item`  |
| `disabled`  | `is-disabled` |
| `dragging`  | `dragging`    |

## Instance Properties

| Property            | Type             | Description                            |
| ------------------- | ---------------- | -------------------------------------- |
| `props`             | `object`         | Normalized initialization configuration |
| `state`             | See the table below | Reactive state object                |
| `current.index`     | `number`         | Current active index                   |
| `current.name`      | `string \| null` | Current active name                    |
| `runtime.built`     | `boolean`        | Whether the owned view has been created |
| `runtime.mounted`   | `boolean`        | Whether the root node is currently mounted |
| `runtime.destroyed` | `boolean`        | Whether the instance has been destroyed |
| `element`           | `Element`        | Stable root node after build           |

### state

Put runtime data that needs attention into the reactive `state`:

| Field       | Type                                          | Description                                      |
| ----------- | --------------------------------------------- | ------------------------------------------------ |
| `data`      | `TabItem[]`                                   | Tab item data source. The keyed list updates tabs and content |
| `active`    | `number \| string`                            | Current desired active item. Can be an index or name |
| `disabled`  | `number \| string \| Array<number \| string>` | Current disabled items                          |
| `draggable` | `boolean`                                     | Whether the tab list can be dragged              |
| `dragging`  | `boolean`                                     | Whether drag scrolling is currently active       |
| `loading`   | `boolean`                                     | Async function content is being resolved         |

## Instance Methods

| Method                 | Description                                  |
| ---------------------- | -------------------------------------------- |
| `build()`              | Create offline DOM and return the current instance |
| `mount(container)`     | Build and mount the root node                |
| `activate(value)`      | Activate the specified index or name         |
| `setState(patch)`      | Batch-update reactive state                  |
| `setState(key, value)` | Update a single state field                  |
| `unmount()`            | Remove the root node and keep state          |
| `destroy()`            | Destroy the instance and remove the root node created by the component |

Common controller methods also include `own()`, `use()`, `on()`, `off()`, and `emit()`. See [Define Component](../core/define.html) for their meaning.

