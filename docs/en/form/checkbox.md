# Checkbox

## Basic Structure

```html
<div class="j-checkbox is-{direction}">
    <label>
        <input type="checkbox" class="j-input" name="" checked>
        <span>Option 1</span>
    </label>
    <label>
        <input type="checkbox" class="j-input" name="">
        <span>Option 2</span>
    </label>
    <label>
        <input type="checkbox" class="j-input" name="">
        <span>Option 3</span>
    </label>
</div>
```

## Two Directions

1. `.is-horizontal`: Horizontal direction
2. `.is-vertical`: Vertical direction

<div class="j-checkbox is-horizontal">
    <label>
        <input type="checkbox" class="j-input" name="checkbox-horizontal" checked="">
        <span>Option 1</span>
    </label>
    <label>
        <input type="checkbox" class="j-input" name="checkbox-horizontal">
        <span>Option 2</span>
    </label>
    <label>
        <input type="checkbox" class="j-input" name="checkbox-horizontal">
        <span>Option 3</span>
    </label>
</div>

<div class="j-checkbox is-vertical">
    <label>
        <input type="checkbox" class="j-input" name="checkbox-vertical" checked="">
        <span>Option 1</span>
    </label>
    <label>
        <input type="checkbox" class="j-input" name="checkbox-vertical">
        <span>Option 2</span>
    </label>
    <label>
        <input type="checkbox" class="j-input" name="checkbox-vertical">
        <span>Option 3</span>
    </label>
</div>

## Switch

```html
<label class="j-switch is-{type} is-{sm|md}">
    <input type="checkbox" name="">
    <span class="switch-slider"></span>
</label>
```

1. `is-default`: Supports sizes `is-sm`, `is-md`

<div class="flex gap-4">
    <label class="j-switch is-default is-sm">
        <input type="checkbox" name="switch-default-sm">
        <span class="switch-slider"></span>
    </label>
    <label class="j-switch is-default is-md">
        <input type="checkbox" name="switch-default-md">
        <span class="switch-slider"></span>
    </label>
</div>

2. `is-line`: Supports sizes `is-sm`, `is-md`

<div class="flex gap-4">
    <label class="j-switch is-line is-sm">
        <input type="checkbox" name="switch-line-sm">
        <span class="switch-slider"></span>
    </label>
    <label class="j-switch is-line is-md">
        <input type="checkbox" name="switch-line-md">
        <span class="switch-slider"></span>
    </label>
</div>
