# Swiper

Swiper is a lightweight carousel component. It supports reactive data management, touch and drag, autoplay, loop, pagination, navigation, lazy loading, image carousel, custom content carousel, custom styles, and related features.

<Badge text="defineComponent" theme="primary"/> <Badge text="RenderableContent"/>

## Example

:::tabs
@tab Example
<div class="demo"></div>
@tab Code

```js
import { createSwiper, q } from 'vanilla-jui';

const createFakeSwipers = (serial) => ({
  title: String(serial),
  image: `https://picsum.photos/300/200/?random=${serial}`,
  blank: false,
});

const requestSwiperItems = async () =>
  new Promise((resolve) => {
    resolve([1, 2, 3].map(createDemoSwiperItem));
  });

createSwiper({
  data: requestSwiperItems,
}).mount(q('.demo'));
```

:::

## Import

```ts
import { createSwiper } from 'vanilla-jui';
```

## Basic Usage

```ts
createSwiper({
  data: [
    { image: '/img/a.jpg', title: 'A' },
    { image: '/img/b.jpg', title: 'B' },
  ],
}).mount(q('.demo'));
```

## Options

`createSwiper(props)`

| Option            | Type                                   | Default | Description |
| ----------------- | -------------------------------------- | ------- | ----------- |
| `id`              | `string \| null`                       | `null`  | Root node id created by the component |
| `data`            | `SwiperDataItem[] \| SwiperDataLoader` | `[]`    | Initial data or async data function |
| `loop`            | `boolean`                              | `true`  | Whether loop playback is enabled |
| `autoplay`        | `boolean`                              | `true`  | Whether autoplay is enabled |
| `delay`           | `number`                               | `3000`  | Autoplay interval, minimum execution at 16ms |
| `lazyload`        | `boolean`                              | `true`  | Whether images are lazy-loaded |
| `pagination`      | `boolean`                              | `true`  | Whether pagination indicators are shown |
| `navigation`      | `boolean`                              | `true`  | Whether previous/next navigation is shown |
| `speed`           | `number`                               | `300`   | Switch animation duration |
| `touchRatio`      | `number`                               | `1`     | Drag distance ratio |
| `touchAngle`      | `number`                               | `45`    | Horizontal swipe detection angle, range `0-90` |
| `longSwipesMs`    | `number`                               | `300`   | Long-swipe time threshold |
| `longSwipesRatio` | `number`                               | `0.05`  | Swipe ratio that triggers switching, range `0-1` |
| `preventClick`    | `boolean`                              | `true`  | Whether to prevent accidental clicks on interactive elements after dragging |
| `className`       | `Partial<SwiperClassNames>`            | See below | Custom class names |

### data

`data` supports object arrays `SwiperDataItem[]` or function `SwiperDataLoader`:

```ts
type SwiperDataLoader = (
  swiper: Swiper
) => SwiperDataItem[] | Promise<SwiperDataItem[]>;
```

Each array item supports:

| Field      | Type                        | Description |
| ---------- | --------------------------- | ----------- |
| `image`    | `string \| null`            | Image URL. When `lazyload: true`, it is first written to `data-lazy` |
| `url`      | `string \| null`            | When present, the slide renders as `<a>` |
| `title`    | `string \| null`            | Title text, rendered as `.swiper-slide-title` |
| `sort`     | `number \| null`            | Sort value. Items with sort are placed first in ascending order |
| `blank`    | `boolean \| null`           | Link target. Default `true` means `_blank`, `false` means `_self` |
| `children` | `RenderableContent \| null` | Custom slide content, with higher priority than `image/title` |

The `children` function receives `{ swiper, item, index }`.

### className

| Field                   | Default                       |
| ----------------------- | ----------------------------- |
| `root`                  | `j-swiper`                    |
| `wrapper`               | `swiper-wrapper`              |
| `slide`                 | `swiper-slide`                |
| `image`                 | `swiper-image`                |
| `title`                 | `swiper-slide-title`          |
| `pagination`            | `swiper-pagination`           |
| `paginationHorizontal`  | `is-horizontal`               |
| `paginationClickable`   | `is-clickable`                |
| `paginationBulletGroup` | `is-bullet`                   |
| `indicator`             | `swiper-pagination-indicator` |
| `bullet`                | `swiper-pagination-bullet`    |
| `navigation`            | `swiper-navigation`           |
| `prev`                  | `is-prev`                     |
| `next`                  | `is-next`                     |
| `active`                | `is-active`                   |
| `disabled`              | `is-disabled`                 |

## Instance Properties

| Property            | Description |
| ------------------- | ----------- |
| `props`             | Normalized initialization configuration |
| `state`             | Reactive state object |
| `runtime.built`     | Whether the owned view has been created |
| `runtime.mounted`   | Whether the root node is currently mounted |
| `runtime.destroyed` | Whether the instance has been destroyed |
| `element`           | Stable root node after build |

### state

| Field        | Type               | Description |
| ------------ | ------------------ | ----------- |
| `data`       | `SwiperDataItem[]` | Data source. Slides update through a keyed list |
| `loading`    | `boolean`          | Async data function loading state |
| `index`      | `number`           | Current real slide index, excluding loop clones |
| `trackIndex` | `number`           | Internal track index, including clones in loop mode |
| `transform`  | `number`           | X-axis offset of the wrapper |
| `animating`  | `boolean`          | Whether switch animation is running |
| `width`      | `number`           | Root node width |

## Instance Methods

| Method                     | Description |
| -------------------------- | ----------- |
| `build()`                  | Creates offline DOM and initializes reactive bindings |
| `mount(container)`         | Builds and mounts current `element` into the specified container |
| `unmount()`                | Removes the root node and keeps state and reactive owner |
| `next()`                   | Switches to the next slide |
| `prev()`                   | Switches to the previous slide |
| `slideTo(index)`           | Switches to the specified real index |
| `slideToTrack(trackIndex)` | Switches to the specified track index |
| `play()`                   | Starts autoplay |
| `pause()`                  | Stops autoplay |
| `resume()`                 | Restores playback according to current `autoplay` configuration |
| `restartAutoplay()`        | Restarts the autoplay timer |
| `setState(patch)`          | Updates reactive state |
| `destroy()`                | Destroys the instance and cleans up events, timers, and reactive bindings |

Shared controller methods also include `own()`, `use()`, `on()`, `off()` and `emit()`. See [Define Component](../core/define.html).

## Usage Rules

In real business code:

- Swipers are often stable data with low-frequency updates. Store them in client `localStorage` or `indexedDB` with a reasonable cache strategy to reduce unnecessary requests.
- Set a `max-width` on the container according to product design, and use `aspect-ratio` to control the `data-swiper` ratio.

```vp-script
import { createSwiper, q } from 'vanilla-jui';
import { jsx, insert, createEffect } from 'vanilla-signal';

const link= jsx`<link rel="stylesheet" href="../../public/common.css">`;
insert(document.head,link);

insert(q('.demo'), jsx('div', {className: 'swiper-demo'}));

let swiperItemSerial = 3;
const createDemoSwiperItem = (serial) => ({
  title: String(serial),
  image: `https://picsum.photos/300/200/?random=${serial}`,
  blank: false,
});
const requestSwiperItems = async () =>
  new Promise((resolve) => setTimeout(() => resolve([1, 2, 3].map(createDemoSwiperItem)), 1000));
const demoSwiper = createSwiper({
  autoplay: false,
  data: requestSwiperItems,
}).mount(q('.swiper-demo'));
createEffect(() => console.log(demoSwiper.state.loading));
insert(
  q('.demo'),
  jsx('div', {
    style: {
      display: 'flex',
      gap: '8px',
      marginTop: '8px',
    },
    children: [
      jsx('button', {
        type: 'button',
        className: 'j-button is-outline',
        children: 'Add data',
        onClick: () => {
          swiperItemSerial += 1;
          const nextIndex = demoSwiper.state.data.length;
          demoSwiper.state.data.push(createDemoSwiperItem(swiperItemSerial));
          demoSwiper.slideTo(nextIndex);
        },
      }),
      jsx('button', {
        type: 'button',
        className: 'j-button is-error',
        children: 'Delete current item',
        onClick: () => {
          if (demoSwiper.realCount === 0) return;
          demoSwiper.state.data.splice(demoSwiper.realIndex, 1);
        },
      }),
    ],
  })
);
```
