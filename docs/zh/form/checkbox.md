# 多选框

## 基本结构

```html
<div class="j-checkbox is-{direction}">
  <label>
    <input type="checkbox" name="" checked />
    <span>选项一</span>
  </label>
  <label>
    <input type="checkbox" name="" />
    <span>选项二</span>
  </label>
  <label>
    <input type="checkbox" name="" />
    <span>选项三</span>
  </label>
</div>
```

## 两个方向

1. `.is-horizontal`：水平方向
2. `.is-vertical`：垂直方向

<div class="j-checkbox is-horizontal">
    <label>
        <input type="checkbox" name="checkbox-horizontal" checked="">
        <span>选项一</span>
    </label>
    <label>
        <input type="checkbox" name="checkbox-horizontal">
        <span>选项二</span>
    </label>
    <label>
        <input type="checkbox" name="checkbox-horizontal">
        <span>选项三</span>
    </label>
</div>

<div class="j-checkbox is-vertical">
    <label>
        <input type="checkbox" name="checkbox-vertical" checked="">
        <span>选项一</span>
    </label>
    <label>
        <input type="checkbox" name="checkbox-vertical">
        <span>选项二</span>
    </label>
    <label>
        <input type="checkbox" name="checkbox-vertical">
        <span>选项三</span>
    </label>
</div>

## 开关

```html
<label class="j-switch is-{type} is-{sm|md}">
  <input type="checkbox" name="" />
  <span class="switch-slider"></span>
</label>
```

1. `is-default`：支持尺寸 `is-sm`、`is-md`、`is-lg`

<div class="flex gap-4">
    <label class="j-switch is-default is-sm">
        <input type="checkbox" name="switch-default-sm">
        <span class="switch-slider"></span>
    </label>
    <label class="j-switch is-default is-md">
        <input type="checkbox" name="switch-default-md">
        <span class="switch-slider"></span>
    </label>
    <label class="j-switch is-default is-lg">
        <input type="checkbox" name="switch-default-md">
        <span class="switch-slider"></span>
    </label>
</div>

2. `is-line`：支持尺寸 `is-sm`、`is-md`、`is-lg`

<div class="flex gap-4">
    <label class="j-switch is-line is-sm">
        <input type="checkbox" name="switch-line-sm">
        <span class="switch-slider"></span>
    </label>
    <label class="j-switch is-line is-md">
        <input type="checkbox" name="switch-line-md">
        <span class="switch-slider"></span>
    </label>
    <label class="j-switch is-line is-lg">
        <input type="checkbox" name="switch-line-md">
        <span class="switch-slider"></span>
    </label>
</div>
