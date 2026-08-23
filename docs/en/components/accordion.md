# Accordion

Accordion is a collapsible panel component for showing multiple content areas.

<Badge text="defineComponent" theme="primary"/> <Badge text="RenderableContent"/>

## Example

:::details Click to expand details
<div class="demo"></div>
:::

## Import

```js
import { createAccordion } from 'vanilla-jui';
```

## Basic Usage

Use `createAccordion(props)` to create an AccordionPanel instance:

```js
const accordion = createAccordion({
  active: 'usage',
  data: [
    { name: 'intro', title: 'Intro', content: 'Intro content' },
    {
      name: 'profile',
      title: ({ index }) => `Panel ${index + 1}`,
      content: ({ item }) => `Panel name: ${item.name}`,
    },
  ],
});
const container = document.querySelector('#demo');
if (container) accordion.mount(container);
```

## Parameters

`createAccordion(props)`

| Parameter     | Type                                | Default             | Description                                      |
| ------------- | ----------------------------------- | ------------------- | ------------------------------------------------ |
| `data`        | `AccordionItem[]`                   | See the table below | Initial non-empty panel configuration list       |
| `id`          | `string \| null`                    | Auto-generated      | Root node id; generated automatically when empty |
| `active`      | `number \| string \| Array \| null` | `0`                 | Initial active item                              |
| `collapsible` | `boolean`                           | `false`             | Allow closing the currently active item          |
| `multiple`    | `boolean`                           | `false`             | Allow multiple panels to be expanded at once     |
| `direction`   | `'vertical' \| 'horizontal'`        | `vertical`          | Layout and expand animation direction            |
| `className`   | `object`                            | See the table below | Override component structure class names         |
| `onChange`    | `Function \| null`                  | `null`              | Callback after the user switches panels          |

### data

In JUI, the `RenderableContent` type means any legal content that can be rendered, including `string | number | boolean | Node | Array | Function | null`.

| Field     | Type                | Description                                                   |
| --------- | ------------------- | ------------------------------------------------------------- |
| `name`    | `string`            | Optional; generated automatically when empty. A fixed value must be unique |
| `title`   | `string`            | Panel title                                                   |
| `content` | `RenderableContent` | Panel content                                                 |
| `cache`   | `boolean`           | Whether to cache the result of function content               |
| `ttl`     | `number`            | Cache lifetime in milliseconds; `0` means it never expires    |

### onChange

`onChange(index, name, headerRef, panelRef, accordion)`

| Parameter   | Description                                      |
| ----------- | ------------------------------------------------ |
| `index`     | Current active panel index                       |
| `name`      | Current active panel name                        |
| `headerRef` | DOM reference for the current active panel header |
| `panelRef`  | DOM reference for the current active panel content |
| `accordion` | Current instance                                 |

### className

| Field     | Default            | Description  |
| --------- | ------------------ | ------------ |
| `root`    | `j-accordion`      | Root node    |
| `header`  | `accordion-header` | Panel header |
| `title`   | `header-title`     | Title area   |
| `arrow`   | `header-arrow`     | Arrow area   |
| `panel`   | `accordion-panel`  | Panel area   |
| `content` | `panel-content`    | Content area |

## Instance Properties

| Property            | Description                                           |
| ------------------- | ----------------------------------------------------- |
| `props`             | Normalized creation-time configuration                |
| `state.data`        | Reactive panel data, updated by the keyed list after changes |
| `state.activeNames` | Names of currently expanded panels                    |
| `state.loading`     | Async function content is being resolved              |
| `element`           | Stable root node generated after `build()`            |
| `runtime`           | `built`, `mounted`, and `destroyed` states            |
| `current`           | Current main panel, including `index` and `name`      |

### state

Put runtime data that needs attention into the reactive `state`:

| Field         | Description                                |
| ------------- | ------------------------------------------ |
| `activeNames` | Names of currently expanded panels         |
| `data`        | Panel data list                            |
| `loading`     | Async function `content` is being resolved |

Update the view from state, for example:

```js
// Add a data item
accordion.state.data.push({
  name: 'faq',
  title: 'FAQ',
  content: 'FAQ content',
});

// Update a data item
const faq = accordion.state.data.find((item) => item.name === 'faq');
if (faq) faq.title = 'FAQ updated';

// Delete a data item
accordion.state.data = accordion.state.data.filter(
  (item) => item.name !== 'faq'
);
```

## Instance Methods

| Method                  | Description                                                   |
| ----------------------- | ------------------------------------------------------------- |
| `build()`               | Create DOM, bind events, and sync the initial state           |
| `mount(container)`      | Build and mount to the specified container                    |
| `unmount()`             | Remove the root node from the current container               |
| `activate(indexOrName)` | Activate, expand, or collapse the specified panel             |
| `setState(patch)`       | Set reactive state fields                                     |
| `destroy()`             | Destroy the instance, remove mounted DOM, and release resources |

Common controller methods also include `own()`, `use()`, `on()`, `off()`, and `emit()`. See [Define Component](../core/define.html) for their meaning.

```vp-script
import { createAccordion, q, Toast } from 'vanilla-jui';
import { createSignal, jsx } from 'vanilla-signal';

const [asyncCount, setAsyncCount] = createSignal(10);
let asyncAccordionRequestCount = 0;
let asyncAccordionCountdownTimer = null;
let asyncAccordionCountdownStopTimer = null;
const startAsyncAccordionCountdown = () => {
    if (asyncAccordionCountdownTimer) clearInterval(asyncAccordionCountdownTimer);
    if (asyncAccordionCountdownStopTimer) clearTimeout(asyncAccordionCountdownStopTimer);

    setAsyncCount(10);
    asyncAccordionCountdownTimer = setInterval(() => {
        setAsyncCount((value) => {
            const next = value - 1;
            return next > 0 ? next : 0;
        });
    }, 1000);
    asyncAccordionCountdownStopTimer = setTimeout(() => {
        clearInterval(asyncAccordionCountdownTimer);
        asyncAccordionCountdownTimer = null;
        asyncAccordionCountdownStopTimer = null;
        setAsyncCount(0);
    }, 10_000);
};

const loadAsyncAccordionContent = () =>
    new Promise((resolve) => {
        const requestIndex = asyncAccordionRequestCount + 1;
        setTimeout(() => {
            asyncAccordionRequestCount = requestIndex;
            startAsyncAccordionCountdown();
            resolve(
                jsx('div', {
                    children: [
                        jsx('p', {
                            children: `Async API request #${requestIndex}`,
                        }),
                        jsx('p', {
                            style: { marginBlock: '4px' },
                            children: 'This accordion data item has caching enabled. The cache time is 10 seconds.',
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

createAccordion({
    data: [
        {
            name: 'profile',
            title: ({ index }) => `Sync Panel ${index + 1}`,
            content: ({ item }) => `Sync panel name: ${item.name}`,
        },
        {
            name: 'settings',
            title: ({ index }) => `Sync Panel ${index + 1}`,
            content: ({ item }) => `Sync panel name: ${item.name}`,
        },
        {
            name: 'async',
            title: 'Async Panel',
            content: () => loadAsyncAccordionContent(),
            cache: true,
            ttl: 10_000,
        },
    ],
    onChange: (index, name, header, panel, accordion) => {
        Toast.lite(`${name} panel opened`);
        console.log(header)
        console.log(panel)
    },
}).mount(q('.demo'));
```
