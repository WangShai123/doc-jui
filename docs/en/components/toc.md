# Table of Contents

Toc scans headings from a content source and automatically generates a page table of contents.

<Badge text="defineComponent" theme="primary"/>

## Example

See the right-side table of contents on this document page.

## Import

```js
import { createToc } from 'vanilla-jui';
```

## Basic Usage

```js
createToc({
  target: '.article-content',
  headings: 'h2, h3',
  offset: 80,
}).mount(q('.article-sidebar'));
```

## Options

| Field                   | Type                                | Default             | Description                                                                |
| ----------------------- | ----------------------------------- | ------------------- | -------------------------------------------------------------------------- |
| `target`                | `string \| Element \| Node \| null` | `'.j-editor'`       | Single content area to scan                                                |
| `headings`              | `string`                            | `'h2, h3'`          | Heading selector                                                           |
| `offset`                | `number`                            | `80`                | Top offset for locating the current heading, in px                         |
| `reactive`              | `boolean`                           | `false`             | Whether to observe target DOM changes and sync `state.items` automatically |
| `className`             | `object`                            | See below           | Custom class names                                                         |
| `onChange`              | `Function \| null`                  | `null`              | Called after active item changes with `(item, index, toc)`                 |
| `title`                 | `boolean`                           | `false`             | Whether to show the title of the TOC                                       |
| `indicator`             | `object`                            | `{}`                | Custom indicator styles                                                    |
| `indicator.width`       | `string`                            | `2px`               | Indicator width                                                            |
| `indicator.heightRatio` | `number`                            | `5`                 | Indicator height ratio, valid values `1-10`                                |
| `indicator.radius`      | `string`                            | `2px`               | Indicator border radius                                                    |
| `indicator.left`        | `string`                            | `0`                 | Indicator left offset                                                      |
| `indicator.color`       | `string`                            | `var(--tone-solid)` | Indicator color                                                            |

## Instance Properties

| Property  | Type                  | Description                 |
| --------- | --------------------- | --------------------------- |
| `props`   | `object`              | Normalized options          |
| `state`   | `DeepStore`           | Reactive state              |
| `runtime` | `object`              | Lifecycle flags             |
| `element` | `HTMLElement \| null` | Stable TOC root after build |

### state

| Property        | Type                                                 | Description                               |
| --------------- | ---------------------------------------------------- | ----------------------------------------- |
| `items`         | `Array<{ id: string, text: string, level: number }>` | Heading data                              |
| `current.index` | `number`                                             | Current active item index, `-1` when none |
| `current.item`  | `object \| null`                                     | Current active item data                  |

### runtime

| Property    | Type      | Description             |
| ----------- | --------- | ----------------------- |
| `built`     | `boolean` | Whether it is built     |
| `mounted`   | `boolean` | Whether it is mounted   |
| `destroyed` | `boolean` | Whether it is destroyed |

### onChange

`onChange(item, index, toc)`

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| `item`    | `object` | Current active item data  |
| `index`   | `number` | Current active item index |
| `toc`     | `Toc`    | Current Toc instance      |

### className

| Property    | Default         | Description                      |
| ----------- | --------------- | -------------------------------- |
| `toc`       | `j-toc`         | TOC root element class name      |
| `title`     | `toc-title`     | TOC title element class name     |
| `list`      | `toc-list`      | TOC list element class name      |
| `link`      | `toc-link`      | TOC link element class name      |
| `indicator` | `toc-indicator` | TOC indicator element class name |

## Instance Methods

| Method            | Default  | Description            |
| ----------------- | -------- | ---------------------- |
| `build()`         |          | Builds TOC view        |
| `mount()`         |          | Mounts TOC view        |
| `activate(index)` | `number` | Sets active item index |
| `unmount()`       |          | Unmounts TOC view      |
| `destroy()`       |          | Destroys TOC view      |

Shared controller methods also include `own()`, `use()`, `on()`, `off()`, and `emit()`. See [Define Component](../core/define.html).
