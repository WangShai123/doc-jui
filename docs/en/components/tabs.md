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

```vp-script
import { createTabs, q } from 'vanilla-jui';
import { createSignal, jsx, insert } from 'vanilla-signal';

const [asyncCount, setAsyncCount] = createSignal(10);
let asyncTabsRequestCount = 0;
let asyncTabsCountdownTimer = null;
let asyncTabsCountdownStopTimer = null;
const startAsyncTabsCountdown = () => {
    if (asyncTabsCountdownTimer) clearInterval(asyncTabsCountdownTimer);
    if (asyncTabsCountdownStopTimer) clearTimeout(asyncTabsCountdownStopTimer);

    setAsyncCount(10);
    asyncTabsCountdownTimer = setInterval(() => {
        setAsyncCount((value) => {
            const next = value - 1;
            return next > 0 ? next : 0;
        });
    }, 1000);
    asyncTabsCountdownStopTimer = setTimeout(() => {
        clearInterval(asyncTabsCountdownTimer);
        asyncTabsCountdownTimer = null;
        asyncTabsCountdownStopTimer = null;
        setAsyncCount(0);
    }, 10_000);
};

const loadAsyncTabsContent = () =>
    new Promise((resolve) => {
        const requestIndex = asyncTabsRequestCount + 1;
        setTimeout(() => {
            asyncTabsRequestCount = requestIndex;
            startAsyncTabsCountdown();
            resolve(
                jsx('div', {
                    children: [
                        jsx('p', {
                            children: `Async API request #${requestIndex}`,
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: 'This tab data item has caching enabled. The cache time is 10 seconds.',
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: 'Within 10 seconds, repeatedly opening this data item will show the cached content.',
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: 'After 10 seconds, the content expires and will be requested and rendered again.',
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: () =>
                                asyncCount() > 0
                                    ? `Countdown ${asyncCount()} seconds`
                                    : 'Cache expired',
                        }),
                    ],
                })
            );
        }, 1000);
    });

const tabs = createTabs({
    data: [
        {
            name: 'profile',
            title: 'Profile',
            content: 'Sync tab name: profile',
        },
        {
            name: 'settings',
            title: 'Settings',
            content: 'Sync tab name: settings',
        },
        {
            name: 'async',
            title: 'Async',
            content: () => loadAsyncTabsContent(),
            cache: true,
            ttl: 10_000,
        },
    ],
});

const demo = jsx('div', {
    style: {
        marginBlock: '8px',
        display: 'flex',
        gap: '8px',
    },
    children: [
        jsx('button', {
            className: 'j-button is-outline',
            children: 'Add',
            onClick: () => {
                const index = tabs.state.data.length + 1;
                const name = `${Date.now()}`;
                tabs.state.data.push({
                    name,
                    title: `tab-${index}`,
                    content: jsx('div', {
                        children: `Added tab name: ${name}`,
                    }),
                });
                void tabs.activate(name);
            }
        }),
        jsx('button', {
            className: 'j-button is-error',
            disabled: () => tabs.state.data.length === 1,
            children: 'Delete Current Item',
            onClick: () => {
                if (tabs.state.data.length === 1) return;

                const removeIndex = Math.max(0, tabs.current.index);
                tabs.state.data.splice(removeIndex, 1);

                const nextIndex =
                    removeIndex > 0 ? removeIndex - 1 : tabs.state.data.length - 1;
                const nextItem = tabs.state.data[nextIndex];
                if (nextItem) void tabs.activate(nextItem.name);
            }
        }),
    ],
});
const tabsHost = jsx('div');
insert(q('.demo'), [demo, tabsHost]);
tabs.mount(tabsHost);
console.log(tabs)
```
