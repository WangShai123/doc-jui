# Animation

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS animation classes in the default stylesheet.

## Animation Classes

```css
animation-iteration-count: infinite;
animation-delay: 5s;
animation-duration: 3s;
```

| Class                     | Description        | Example                               | Loop |
| ------------------------- | ------------------ | ------------------------------------- | ---- |
| `animate-none`            | Disable animation  |                                       | -    |
| `animate-spin`            | Spin animation     | <span class="spin"></span>            | Yes  |
| `animate-ping`            | Strong pulse       | <span class="ping"></span>            | Yes  |
| `animate-pulse`           | Soft pulse         | <span class="pulse"></span>           | Yes  |
| `animate-bounce`          | Bounce animation   | <span class="bounce"></span>          | Yes  |
| `animate-fade-in`         | Fade in            | <span class="fade-in"></span>         | -    |
| `animate-fade-out`        | Fade out           | <span class="fade-out"></span>        | -    |
| `animate-shake`           | Shake animation    | <span class="shake"></span>           | -    |
| `animate-slide-to-top`    | Slide upward       | <span class="slide-to-top"></span>    | -    |
| `animate-slide-to-bottom` | Slide downward     | <span class="slide-to-bottom"></span> | -    |
| `animate-slide-to-left`   | Slide left         | <span class="slide-to-left"></span>   | -    |
| `animate-slide-to-right`  | Slide right        | <span class="slide-to-right"></span>  | -    |

## Animation Attributes

### data-reveal

Set the `data-reveal` attribute on an element to make a container fade in. See the card reveal effect on the home page for details.

Different attribute values create different display delays. Supported forms:

- `data-reveal`
- `data-reveal="2"`
- `data-reveal="3"`
- `data-reveal="4"`

```html
<!-- First fade-in item -->
<div class="card" data-reveal>...</div>
<!-- Second fade-in item -->
<div class="card" data-reveal="2">...</div>
<!-- Third fade-in item -->
<div class="card" data-reveal="3">...</div>
<!-- Fourth fade-in item -->
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
