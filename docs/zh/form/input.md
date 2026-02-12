# 输入框

## 基础结构

```html
<input type="text" class="j-input is-{variant} is-{size} is-{status}" {disabled} placeholder="" id="" name="">
```

## 基础变体

设置类 `is-{variant}` 实现不同变体的输入框。

<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
    <input type="text" class="j-input" placeholder="默认" id="default-input">
    <input type="text" class="j-input is-line" placeholder="is-line" id="line-input">
    <input type="text" class="j-input is-ghost" placeholder="ghost" id="ghost-input">
    <input type="text" class="j-input is-blank" placeholder="blank" id="blank-input">
</div>

## 禁用状态

设置属性 `disabled` 实现禁用状态。

<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
    <input type="text" class="j-input is-disabled" placeholder="默认 禁用" id="disabled-input" disabled="">
    <input type="text" class="j-input is-line" placeholder="is-line 禁用" id="line-input-disabled" disabled="">
    <input type="text" class="j-input is-ghost" placeholder="ghost 禁用" disabled="" id="ghost-input-disabled">
    <input type="text" class="j-input is-blank" placeholder="blank 禁用" disabled="" id="blank-input-disabled">
</div>

## 不同尺寸

设置类 `is-{size}` 实现不同尺寸的输入框。

<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
    <input type="text" class="j-input is-sm" placeholder="sm: small" id="small-input">
    <input type="text" class="j-input is-md" placeholder="md: 默认" id="md-input">
    <input type="text" class="j-input is-lg" placeholder="lg: large" id="large-input">
</div>

## 验证状态

设置类 `is-{status}` 改变输入框的状态样式。

- `is-valid`
- `is-invalid`

<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
    <input type="text" class="j-input is-sm is-valid" placeholder="valid" id="valid">
    <input type="text" class="j-input is-md is-invalid" placeholder="invalid" id="invalid">
</div>

## 输入框组

输入框组按视觉结果分为两组:

- 外置组: 兄弟元素与输入框处于同一行。
- 内置组: 兄弟元素处于输入框内嵌元素。

### 外置组

设置类 `input-group` 包裹输入框，实现输入框外置组。

- 附加元素使用 `el-addon` 类包裹
- 附加元素可自由摆放位置

```html
<div class="input-group">
    <input type="text" class="j-input" placeholder="">
    <span class="el-addon">
        ...其他元素
    </span>
</div>
```

<div class="grid-container grid-col-1 grid-col-sm-2 my-4">
    <div class="input-group">
        <input type="text" class="j-input">
        <div class="el-addon">
            <button class="j-button is-default">Button</button>
        </div>
    </div>
    <div class="input-group">
        <div class="el-addon">
            <button class="j-button is-default">Button</button>
        </div>
        <input type="text" class="j-input">
    </div>
</div>

<div class="grid-container grid-col-1 grid-col-sm-2 my-4">
    <div class="input-group">
        <div class="el-addon">
            <div class="is-text">https://</div>
        </div>
        <input type="text" class="j-input">
        <div class="el-addon">
            <div class="is-text">.com</div>
        </div>
    </div>
    <div class="input-group">
        <div class="el-addon">
            <div class="is-text">$</div>
        </div>
        <input type="number" class="j-input">
    </div>
</div>

<div class="grid-container grid-col-1 grid-col-sm-2 my-4">
    <div class="input-group">
        <div class="el-addon">
            <div class="is-text">https://</div>
        </div>
        <select class="j-select">
            <option>请选择</option>
            <option value="1">中国</option>
            <option value="2">美国</option>
            <option value="3">英国</option>
        </select>
        <div class="el-addon">
            <div class="is-text icon-close"></div>
        </div>
    </div>
    <div class="input-group">
        <select class="j-select">
            <option>请选择</option>
            <option value="1">中国</option>
            <option value="2">美国</option>
            <option value="3">英国</option>
        </select>
        <div class="el-addon">
            <div class="is-text icon-close"></div>
        </div>
    </div>
</div>

### 内置组

设置类 `input-inner-group` 包裹输入框，实现输入框内置组。

- 附加元素使用 `el-addon` 类包裹
- 附加元素可自由摆放位置

```html
<div class="input-inner-group">
    <input type="text" class="j-input" placeholder="">
    <span class="el-addon">
        ...其他元素
    </span>
</div>
```

<div class="grid-container grid-col-1 grid-col-sm-2 my-4">
    <div class="input-inner-group">
        <input type="text" class="j-input" placeholder="常规图标">
        <span class="el-addon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>
        </span>
    </div>
    <div class="input-inner-group">
        <span class="el-addon">
            <span class="icon-loader"></span>
        </span>
        <input type="text" class="j-input" placeholder="状态图标">
    </div>
</div>

<div class="grid-container grid-col-1 grid-col-sm-2 my-4">
    <div class="input-inner-group">
        <input type="text" class="j-input" placeholder="弱文本">
        <span class="el-addon">
            <span class="el-text">单位</span>
        </span>
    </div>
    <div class="input-inner-group">
        <span class="el-addon is-text">
            <span class="el-text">文本</span>
        </span>
        <input type="text" class="j-input" placeholder="高亮文本">
    </div>
</div>

<div class="grid-container grid-col-1 grid-col-sm-2 my-4">
    <div class="input-inner-group">
        <input type="text" class="j-input" placeholder="普通按钮">
        <span class="el-addon is-text">
            <button class="j-button is-outline is-sm">更新</button>
        </span>
    </div>
    <div class="input-inner-group">
        <span class="el-addon is-text">
            <button class="j-button is-default is-sm is-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"></path></svg>
            </button>
        </span>
        <input type="text" class="j-input" placeholder="图标按钮">
    </div>
</div>

对于多元素附加的个性化场景，您需自行微调 `input` 的 `padding` 样式。

<div class="grid-container grid-col-1 grid-col-sm-2 my-4">
    <div class="input-inner-group">
        <input type="text" class="j-input" placeholder="多元素附加">
        <span class="el-addon is-text">
            <button class="j-button is-outline is-sm">更新</button>
            <button class="j-button is-default is-sm">重置</button>
            <button class="j-button is-danger is-sm">删除</button>
        </span>
    </div>
</div>
