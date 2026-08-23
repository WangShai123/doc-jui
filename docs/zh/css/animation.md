# 动画

> 推荐使用 `tailwindcss`, `unocss` 等 CSS 工具，更有利于个性化定制 UI 和按需构建最小化 CSS 文件。

默认样式文件中的 CSS 动画类。

## 动画类

```css
animation-iteration-count: infinite;
animation-delay: 5s;
animation-duration: 3s;
```

| 类名                      | 描述           | 示例                                  | 循环 |
| ------------------------- | -------------- | ------------------------------------- | ---- |
| `animate-none`            | 禁用动画       |                                       | -    |
| `animate-spin`            | 旋转动画       | <span class="spin"></span>            | 是   |
| `animate-ping`            | 脉冲动画（强） | <span class="ping"></span>            | 是   |
| `animate-pulse`           | 脉冲动画（弱） | <span class="pulse"></span>           | 是   |
| `animate-bounce`          | 弹跳动画       | <span class="bounce"></span>          | 是   |
| `animate-fade-in`         | 淡入动画       | <span class="fade-in"></span>         | -    |
| `animate-fade-out`        | 淡出动画       | <span class="fade-out"></span>        | -    |
| `animate-shake`           | 摇晃动画       | <span class="shake"></span>           | -    |
| `animate-slide-to-top`    | 上滑动画       | <span class="slide-to-top"></span>    | -    |
| `animate-slide-to-bottom` | 下滑动画       | <span class="slide-to-bottom"></span> | -    |
| `animate-slide-to-left`   | 左滑动画       | <span class="slide-to-left"></span>   | -    |
| `animate-slide-to-right`  | 右滑动画       | <span class="slide-to-right"></span>  | -    |

## 动画属性

### data-reveal

为元素设置 `data-reveal` 属性，实现容器渐入显示的动画效果。详情参考首页中卡片的渐入显示效果。

根据属性值，实现不同的显示延迟。支持：

- `data-reveal`
- `data-reveal="2"`
- `data-reveal="3"`
- `data-reveal="4"`

```html
<!-- 第一个渐入显示 -->
<div class="card" data-reveal>...</div>
<!-- 第二个渐入显示 -->
<div class="card" data-reveal="2">...</div>
<!-- 第三个渐入显示 -->
<div class="card" data-reveal="3">...</div>
<!-- 第四个渐入显示 -->
<div class="card" data-reveal="4">...</div>
```

```vp-script
import { insert, jsx } from 'vanilla-signal';
import { icon, addIcons, q } from 'vanilla-jui';

addIcons({
    hexagon: '<path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5ZM16.3469 4.5H7.65311L3.311 12L7.65311 19.5H16.3469L20.689 12L16.3469 4.5Z"></path>'
});
insert(q('.spin'), jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-spin' })
}));
insert(q('.ping'), jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-ping' })
}));
insert(q('.pulse'), jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-pulse' })
}));
insert(q('.bounce'), jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-bounce' })
}));
insert(q('.fade-in'), jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-fade-in', style: 'animation-iteration-count: infinite;animation-duration: 1s;' })
}));
insert(q('.fade-out'), jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-fade-out', style: 'animation-iteration-count: infinite;animation-duration: 1s;' })
}));
insert(q('.shake'), jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-shake', style: 'animation-iteration-count: infinite;animation-duration: 1s;' })
}));
insert(q('.slide-to-top'), jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-slide-to-top', style: 'animation-iteration-count: infinite;animation-duration: 1s;' })
}));
insert(q('.slide-to-bottom'), jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-slide-to-bottom', style: 'animation-iteration-count: infinite;animation-duration: 1s;' })
}));
insert(q('.slide-to-left'), jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-slide-to-left', style: 'animation-iteration-count: infinite;animation-duration: 1s;' })
}));
insert(q('.slide-to-right'), jsx('icon', {
    children: icon('hexagon', { width: 20, class: 'animate-slide-to-right', style: 'animation-iteration-count: infinite;animation-duration: 1s;' })
}));
```
