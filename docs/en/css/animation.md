---
client:
  entry:
    - animation
---

# Animation

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS animation classes in the default stylesheet.

<Badge text="CSS" theme="warning"/>

## Animation Classes

```css
animation-iteration-count: infinite;
animation-delay: 5s;
animation-duration: 3s;
```

| Class                     | Description       | Example                               | Loop |
| ------------------------- | ----------------- | ------------------------------------- | ---- |
| `animate-none`            | Disable animation |                                       | -    |
| `animate-spin`            | Spin animation    | <span class="spin"></span>            | Yes  |
| `animate-ping`            | Strong pulse      | <span class="ping"></span>            | Yes  |
| `animate-pulse`           | Soft pulse        | <span class="pulse"></span>           | Yes  |
| `animate-bounce`          | Bounce animation  | <span class="bounce"></span>          | Yes  |
| `animate-fade-in`         | Fade in           | <span class="fade-in"></span>         | -    |
| `animate-fade-out`        | Fade out          | <span class="fade-out"></span>        | -    |
| `animate-shake`           | Shake animation   | <span class="shake"></span>           | -    |
| `animate-slide-to-top`    | Slide upward      | <span class="slide-to-top"></span>    | -    |
| `animate-slide-to-bottom` | Slide downward    | <span class="slide-to-bottom"></span> | -    |
| `animate-slide-to-left`   | Slide left        | <span class="slide-to-left"></span>   | -    |
| `animate-slide-to-right`  | Slide right       | <span class="slide-to-right"></span>  | -    |

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
