# 输入框

> 推荐使用 `tailwindcss`, `unocss` 等 CSS 工具，更有利于个性化定制 UI 和按需构建最小化 CSS 文件。

默认样式文件中的 CSS 输入框类。

<Badge text="CSS" theme="warning"/>

## 基础 DOM

使用类 `j-{type}` 来描述输入框类型样式。

:::tabs
@tab 示例

<Group>
<input type="text" class="j-input" id="input">
<input type="file" class="j-input" id="file">
<input type="datetime-local" class="j-input" id="datetime-local">
<select class="j-select" id="select">
    <option value="1">选项1</option>
    <option value="2">选项2</option>
    <option value="3">选项3</option>
</select>
</Group>

<div class="block"><textarea class="j-textarea" id="textarea"></textarea></div>

@tab 代码

```html
<input type="text" class="j-input" id="" />
<input type="file" class="j-input" id="" />
<input type="datetime-local" class="j-input" id="" />
<select class="j-select" id="">
  <option value="1">选项1</option>
  <option value="2">选项2</option>
  <option value="3">选项3</option>
</select>
<textarea class="j-textarea" id=""></textarea>
```

:::

## 输入框尺寸

设置类 `is-{size}` 实现不同尺寸的输入框。

:::tabs
@tab 示例

<Group>
<input type="text" class="j-input is-sm" id="input-sm">
<input type="text" class="j-input is-md" id="input-md">
<input type="text" class="j-input is-lg" id="input-lg">
</Group>

<Group>
<select class="j-select is-sm" id="select-sm">
  <option value="1">选项1</option>
  <option value="2">选项2</option>
  <option value="3">选项3</option>
</select>
<select class="j-select is-md" id="select-md">
  <option value="1">选项1</option>
  <option value="2">选项2</option>
  <option value="3">选项3</option>
</select>
<select class="j-select is-lg" id="select-lg">
  <option value="1">选项1</option>
  <option value="2">选项2</option>
  <option value="3">选项3</option>
</select>
</Group>

@tab 代码

```html
<input type="text" class="j-input is-sm" id="" />
<input type="text" class="j-input is-md" id="" />
<input type="text" class="j-input is-lg" id="" />
```

:::

## 输入框组

使用类 `.input-group` 或 `.input-inner-group` 来描述输入框组样式。

:::tabs
@tab 示例

<Group>
    <div class="input-group">
        <div class="el-addon">
            <div class="is-text">text</div>
        </div>
        <input type="text" class="j-input" id="input-group-text" />
        <div class="el-addon">
            <div class="j-button">button</div>
        </div>
    </div>
    <div class="input-group">
        <div class="el-addon">
            <div class="is-text">text</div>
        </div>
        <select class="j-select" id="input-group-select">
            <option value="1">选项1</option>
            <option value="2">选项2</option>
            <option value="3">选项3</option>
        </select>
        <div class="el-addon">
            <div class="j-button">button</div>
        </div>
    </div>
    <div class="input-inner-group">
        <div class="el-addon">
            <div class="is-text">text</div>
        </div>
        <input type="text" class="j-input" id="input-inner-group-text" />
    </div>
    <div class="input-inner-group">
        <div class="el-addon is-text">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
        </div>
        <input type="text" class="j-input" id="input-inner-group-text-advanced" />
        <div class="el-addon is-text">
            <button class="j-button is-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
            </button>
        </div>
    </div>
</Group>

@tab 代码

```html
<div class="input-group">
  <div class="el-addon">
    <div class="is-text">text</div>
  </div>
  <input type="text" class="j-input" id="input-group-text" />
  <div class="el-addon">
    <div class="j-button">button</div>
  </div>
</div>

<div class="input-inner-group">
  <div class="el-addon">icon</div>
  <input type="text" class="j-input" id="input-inner-group-text-advanced" />
  <div class="el-addon">
    <button class="j-button is-icon">icon</button>
  </div>
</div>
```

:::
