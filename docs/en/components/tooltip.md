# Tooltip

Tooltip displays short messages on an element. It is a text-tip controller and a UI wrapper built on top of `Drop`.

<Badge text="UI Primitive" theme="error"/>

## Example

:::details Click to expand
<div class="demo"></div>
:::

## Import

```ts
import { createTooltip } from 'vanilla-jui';
```

## Basic Usage

```ts
const tooltip = createTooltip(button, {
  message: 'Changes are synced after saving',
});
```

## Options

| Option        | Type                                         | Default   | Description |
| ------------- | -------------------------------------------- | --------- | ----------- |
| `message`     | `string`                                     | `''`      | Tooltip text. It is trimmed and cannot be empty |
| `mode`        | `'click' \| 'hover'`                         | `'hover'` | Trigger mode |
| `position`    | Drop position                                | `'auto'`  | Floating-layer position, same as Drop |
| `offset`      | `number`                                     | `8`       | Distance from target |
| `theme`       | `false \| 'reverse' \| 'primary' \| ...`     | `false`   | Theme color |
| `cache`       | `boolean`                                    | `false`   | Passed to Drop content cache |
| `ttl`         | `number`                                     | `0`       | Cache TTL passed to Drop, in milliseconds |
| `delay`       | `number \| { show?: number, hide?: number }` | `100`     | Show/hide delay in milliseconds |
| `hoverIntent` | `boolean`                                    | `true`    | Enables hover intent in hover mode |
| `name`        | `string \| null`                             | `null`    | Tooltip name, passed to Drop and content node |
| `id`          | `string \| null`                             | `null`    | Floating-layer id, passed to Drop |
| `className`   | `object`                                     | See below | Overrides Tooltip content class names |
| `onShown`     | `Function \| null`                           | `null`    | Callback after Drop is shown |
| `onHidden`    | `Function \| null`                           | `null`    | Callback after Drop is hidden |

### theme

Available theme values: `reverse`, `primary`, `success`, `warning`, `error`.

### className

| Field        | Default      | Description |
| ------------ | ------------ | ----------- |
| `container`  | `j-tooltip`  | Tooltip content container |
| `message`    | `el-text`    | Tooltip text node |
| `ui`         | `{}`         | Theme class-name map |
| `ui.reverse` | `is-reverse` | Reverse theme class |
| `ui.primary` | `is-primary` | Primary theme class |
| `ui.success` | `is-success` | Success theme class |
| `ui.warning` | `is-warning` | Warning theme class |
| `ui.error`   | `is-error`   | Error theme class |

## Instance Properties

| Property  | Description |
| --------- | ----------- |
| `element` | Underlying Drop root node; `null` after destroy |
| `drop`    | Underlying Drop instance; `null` after destroy |

## Instance Methods

Same as Drop instance methods.

| Method           | Description |
| ---------------- | ----------- |
| `show(useDelay)` | Shows the tooltip |
| `hide(useDelay)` | Hides the tooltip |
| `toggle()`       | Toggles display state |
| `destroy()`      | Destroys Tooltip and the underlying Drop |

```vp-script
import { createTooltip, q } from 'vanilla-jui';
import { jsx, insert } from 'vanilla-signal';
insert(q('.demo'), jsx('div', {
    style:{
        display:'flex',
        flexWrap:'wrap',
        gap:'8px',
    },
    children:[
        jsx('button', {
            className: 'tooltip-demo j-button is-default',
            children:'Tooltip',
        }),
        jsx('button', {
            className: 'tooltip-theme-demo j-button is-error',
            children:'Themed tooltip',
        }),
    ]
}));
createTooltip(q('.tooltip-demo'), {
    message: 'Changes are synced after saving',
    position: 'top-center'
});
createTooltip(q('.tooltip-theme-demo'), {
    message: 'This cannot be restored after deletion',
    theme: 'error',
    position: 'top-center'
});
```
