# Icons

Icons is a built-in SVG icon utility. It provides functional APIs to get icon nodes or strings and supports custom extension.

<Badge text="UI Primitive" theme="error"/>

## Import

```js
import { icon, iconHtml, getRegistedIconPath, addIcons } from 'vanilla-jui';
```

## Basic Usage

```js
// Returns SVGElement, can be used directly in jsx/render
jsx('button', { children: icon('close') });
// Or use a jsx template string
jsx`<button>${icon('close')}</button>`;

// Returns SVG string, for innerHTML composition
const html = iconHtml('success');
container.innerHTML = html;
```

## Built-in Icons

Only a small set of common icon `path` definitions is built in.

| Name          | Example | Description |
| ------------- | ------- | ----------- |
| `info`        |         | Info |
| `success`     |         | Success, check mark |
| `warning`     |         | Warning, exclamation mark |
| `error`       |         | Error, cross |
| `arrow-left`  |         | Left arrow |
| `arrow-right` |         | Right arrow |
| `arrow-up`    |         | Up arrow |
| `arrow-down`  |         | Down arrow |
| `more`        |         | More, three dots |
| `close`       |         | Close, cross |
| `loader`      |         | Loading |
| `menu`        |         | Menu, three lines |
| `palette`     |         | Palette |
| `message`     |         | Message |
| `chat`        |         | Chat |
| `discuss`     |         | Discuss |

## Methods

### icon

Gets an SVG icon node.

```
icon(name, props?) → SVGElement
```

| Parameter | Type     | Default | Description |
| --------- | -------- | ------- | ----------- |
| `name`    | `string` | —       | Icon name |
| `props`   | `object` | `{}`    | SVG attributes. `className` is automatically mapped to `class` |

**Returns**: `SVGElement`.

**Throws**: `Error` when the icon does not exist or when not in a DOM environment.

```js
icon('close');
icon('success', { className: 'icon-lg', style: 'color: green' });
icon('info', { 'data-action': 'info' }); // Non-SVG attribute
```

### iconHtml

Gets the full SVG string. Use it only when string composition or writing to `innerHTML` is necessary.

```
iconHtml(name) → string
```

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| `name`    | `string` | Icon name |

**Returns**: `string` — full `<svg>...</svg>` markup.

```js
iconHtml('close');
// → '<svg xmlns="..." viewBox="0 0 24 24" ...>...</svg>'
```

### getRegistedIconPath

Gets a shallow copy of the currently registered icon path fragments.

```
getRegistedIconPath() → Record<string, string>
```

**Returns**: `Record<string, string>` — a map from icon names to SVG paths.

```js
const icons = getRegistedIconPath();
// { info: '<path d="..."', success: '<path d="..."', ... }
```

### addIcons

Registers custom icons in batch. Values should be SVG path fragments (`<path ...>`) and should not include the outer `<svg>`.

```
addIcons(svgPathObjects) → void
```

| Parameter        | Type                     | Description |
| ---------------- | ------------------------ | ----------- |
| `svgPathObjects` | `Record<string, string>` | Map from icon names to SVG paths |

**Throws**: `Error` when the argument is not a valid object or when a path does not start with `<`.

```js
addIcons({
  star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>',
  bolt: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>',
});

// Can be used after registration
icon('star');
```

```vp-script
import { q, all, icon, getRegistedIconPath } from 'vanilla-jui';
import { render } from 'vanilla-signal';

const icons = getRegistedIconPath();
const iconsKeys = Object.keys(icons);
const body = q('table tbody');
const tds = all('tr td:nth-child(2)', body)

for (let i = 0; i < tds.length; i++) {
  tds[i].style.verticalAlign = 'middle';
  render(icon(iconsKeys[i], {width:16}), tds[i])
}
```
