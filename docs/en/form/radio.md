# Radio

## Basic Structure

```html
<div class="j-radio is-{direction}">
    <label class="radio-label">
        <input type="radio" class="j-input" name="" checked>
        <span class="radio-text">Option 1</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="">
        <span class="radio-text">Option 2</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="">
        <span class="radio-text">Option 3</span>
    </label>
</div>
```

## Two Directions

1. `.is-horizontal`: Horizontal direction
2. `.is-vertical`: Vertical direction

<div class="j-radio is-horizontal my-4">
    <label class="radio-label">
        <input type="radio" class="j-input" name="radio" checked="">
        <span class="radio-text">Option 1</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="radio">
        <span class="radio-text">Option 2</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="radio">
        <span class="radio-text">Option 3</span>
    </label>
</div>

<div class="j-radio is-vertical my-4">
    <label class="radio-label">
        <input type="radio" class="j-input" name="radio2" checked="">
        <span class="radio-text">Option 1</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="radio2">
        <span class="radio-text">Option 2</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="radio2">
        <span class="radio-text">Option 3</span>
    </label>
</div>

## Custom Radio

```html
<div class="j-radio is-{type}">
    ...
</div>
```

1. `is-group`

<div class="j-radio is-group">
    <label class="radio-label">
        <input type="radio" class="j-input" name="demo-group" checked="">
        <span class="radio-text">Option 1</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="demo-group">
        <span class="radio-text">Option 2</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="demo-group">
        <span class="radio-text">Option 3</span>
    </label>
</div>
