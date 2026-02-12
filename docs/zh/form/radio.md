# 单选框

## 基本结构

```html
<div class="j-radio is-{direction}">
    <label class="radio-label">
        <input type="radio" class="j-input" name="" checked>
        <span class="radio-text">选项一</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="">
        <span class="radio-text">选项二</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="">
        <span class="radio-text">选项三</span>
    </label>
</div>
```

## 两个方向

1. `.is-horizontal`：水平方向
2. `.is-vertical`：垂直方向

<div class="j-radio is-horizontal my-4">
    <label class="radio-label">
        <input type="radio" class="j-input" name="radio" checked="">
        <span class="radio-text">选项一</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="radio">
        <span class="radio-text">选项二</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="radio">
        <span class="radio-text">选项三</span>
    </label>
</div>

<div class="j-radio is-vertical my-4">
    <label class="radio-label">
        <input type="radio" class="j-input" name="radio2" checked="">
        <span class="radio-text">选项一</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="radio2">
        <span class="radio-text">选项二</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="radio2">
        <span class="radio-text">选项三</span>
    </label>
</div>

## 个性化单选框

```html
<div class="j-radio is-{type}">
    ...
</div>
```

1. `is-group`

<div class="j-radio is-group">
    <label class="radio-label">
        <input type="radio" class="j-input" name="demo-group" checked="">
        <span class="radio-text">选项一</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="demo-group">
        <span class="radio-text">选项二</span>
    </label>
    <label class="radio-label">
        <input type="radio" class="j-input" name="demo-group">
        <span class="radio-text">选项三</span>
    </label>
</div>