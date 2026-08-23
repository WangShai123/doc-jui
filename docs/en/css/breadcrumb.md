# Breadcrumb

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS breadcrumb classes in the default stylesheet.

## Basic DOM

```html
<div class="j-breadcrumb is-{direction} is-{size}" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Level 1</a></li>
    <li><a href="#">Level 2</a></li>
    <li class="is-active"><a href="#" aria-current="page">Current</a></li>
  </ul>
</div>
```

## Sizes

Set the `is-{size}` class to change breadcrumb size.

- `is-sm` small
- `is-md` medium
- `is-lg` large

## Directions

Set the `is-{direction}` class to change breadcrumb alignment.

- `is-left`
- `is-right`
- `is-center`

## Separators

Set the `is-{separator}` class to change the breadcrumb separator.

- `is-dot`
- `is-arrow`
- `is-dash`
