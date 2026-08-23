# 轮播图

Swiper 是轻量轮播组件，支持数据响应式管理、触摸与拖拽、自动播放、循环播放、分页、导航、懒加载、图片轮播、自定义内容轮播、自定义样式等功能。

<Badge text="defineComponent" theme="primary"/> <Badge text="RenderableContent"/>

## 示例

:::tabs
@tab 示例
<div class="demo"></div>
@tab 代码

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

## 导入

```ts
import { createSwiper } from 'vanilla-jui';
```

## 基础用法

```ts
createSwiper({
  data: [
    { image: '/img/a.jpg', title: 'A' },
    { image: '/img/b.jpg', title: 'B' },
  ],
}).mount(q('.demo'));
```

## 参数

`createSwiper(props)`

| 参数              | 类型                                   | 默认值 | 说明                           |
| ----------------- | -------------------------------------- | ------ | ------------------------------ |
| `id`              | `string \| null`                       | `null` | 组件创建的根节点 id            |
| `data`            | `SwiperDataItem[] \| SwiperDataLoader` | `[]`   | 初始数据或异步数据函数         |
| `loop`            | `boolean`                              | `true` | 是否循环播放                   |
| `autoplay`        | `boolean`                              | `true` | 是否自动播放                   |
| `delay`           | `number`                               | `3000` | 自动播放间隔，最低按 16ms 执行 |
| `lazyload`        | `boolean`                              | `true` | 是否延迟加载图片               |
| `pagination`      | `boolean`                              | `true` | 是否显示分页指示器             |
| `navigation`      | `boolean`                              | `true` | 是否显示前后导航               |
| `speed`           | `number`                               | `300`  | 切换动画时长                   |
| `touchRatio`      | `number`                               | `1`    | 拖拽距离倍率                   |
| `touchAngle`      | `number`                               | `45`   | 横向滑动判定角度，范围 `0-90`  |
| `longSwipesMs`    | `number`                               | `300`  | 长滑动时间阈值                 |
| `longSwipesRatio` | `number`                               | `0.05` | 触发切换的滑动比例，范围 `0-1` |
| `preventClick`    | `boolean`                              | `true` | 拖拽后是否阻止交互元素误点击   |
| `className`       | `Partial<SwiperClassNames>`            | 见下表 | 自定义样式类                   |

### data

`data` 支持对象数组 `SwiperDataItem[]` 或函数 `SwiperDataLoader`：

```ts
type SwiperDataLoader = (
  swiper: Swiper
) => SwiperDataItem[] | Promise<SwiperDataItem[]>;
```

数组每项支持：

| 字段       | 类型                        | 说明                                                      |
| ---------- | --------------------------- | --------------------------------------------------------- |
| `image`    | `string \| null`            | 图片地址；`lazyload: true` 时先写入 `data-lazy`           |
| `url`      | `string \| null`            | 有值时 slide 渲染为 `<a>`                                 |
| `title`    | `string \| null`            | 标题文本，渲染为 `.swiper-slide-title`                    |
| `sort`     | `number \| null`            | 排序值；有 sort 的项排在前面，升序排列                    |
| `blank`    | `boolean \| null`           | 链接打开方式；默认 `true` 为 `_blank`，`false` 为 `_self` |
| `children` | `RenderableContent \| null` | 自定义 slide 内容，优先级高于 `image/title`               |

`children` 函数会收到 `{ swiper, item, index }`。

### className

| 字段                    | 默认值                        |
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

## 实例属性

| 属性                | 说明                  |
| ------------------- | --------------------- |
| `props`             | 归一化后的初始化配置  |
| `state`             | 响应式状态对象        |
| `runtime.built`     | 是否已创建 owned view |
| `runtime.mounted`   | 根节点当前是否挂载    |
| `runtime.destroyed` | 实例是否已销毁        |
| `element`           | build 后的稳定根节点  |

### state

| 字段         | 类型               | 说明                                 |
| ------------ | ------------------ | ------------------------------------ |
| `data`       | `SwiperDataItem[]` | 数据源，由 keyed 列表更新 slide      |
| `loading`    | `boolean`          | 异步数据函数加载状态                 |
| `index`      | `number`           | 当前真实 slide 索引，不含 loop clone |
| `trackIndex` | `number`           | 内部轨道索引，loop 模式包含 clone    |
| `transform`  | `number`           | wrapper 的 X 轴偏移                  |
| `animating`  | `boolean`          | 是否处于切换动画中                   |
| `width`      | `number`           | 根节点宽度                           |

## 实例方法

| 方法                       | 说明                                   |
| -------------------------- | -------------------------------------- |
| `build()`                  | 创建离线 DOM，并初始化响应式绑定       |
| `mount(container)`         | 构建并把当前 `element` 挂载到指定容器  |
| `unmount()`                | 移除根节点，保留 state 和响应式 owner  |
| `next()`                   | 切换到下一张                           |
| `prev()`                   | 切换到上一张                           |
| `slideTo(index)`           | 切换到指定真实索引                     |
| `slideToTrack(trackIndex)` | 切换到指定轨道索引                     |
| `play()`                   | 启动自动播放                           |
| `pause()`                  | 停止自动播放                           |
| `resume()`                 | 按当前 `autoplay` 配置恢复播放         |
| `restartAutoplay()`        | 重启自动播放计时器                     |
| `setState(patch)`          | 更新响应式状态                         |
| `destroy()`                | 销毁实例并清理事件、定时器、响应式绑定 |

公共控制器方法还包括 `own()`、`use()`、`on()`、`off()` 和 `emit()`，语义见 [定义组件](../core/define.html)。

## 使用规范

在实际业务中：

- Swipers 常为确定数据，低频更新，建议存储在客户端 `localStorage` 或 `indexedDB` 中，设定合理的缓存策略，减少非必要请求。
- 建议根据业务设计，对容器设置 `max-width` 最大宽度，使用 `aspect-ratio` 属性控制 `data-swiper` 比例。

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
        children: '添加数据',
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
        children: '删除当前项',
        onClick: () => {
          if (demoSwiper.realCount === 0) return;
          demoSwiper.state.data.splice(demoSwiper.realIndex, 1);
        },
      }),
    ],
  })
);
```
