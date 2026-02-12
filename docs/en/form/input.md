# Input

## Basic Structure

```html
<input type="text" class="j-input is-{variant} is-{size} is-{status}" {disabled} placeholder="" id="" name="">
```

## Basic Variants

Set class `is-{variant}` to implement different input variants.

<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
    <input type="text" class="j-input" placeholder="Default" id="default-input">
    <input type="text" class="j-input is-line" placeholder="is-line" id="line-input">
    <input type="text" class="j-input is-ghost" placeholder="ghost" id="ghost-input">
    <input type="text" class="j-input is-blank" placeholder="blank" id="blank-input">
</div>

## Disabled State

Set attribute `disabled` to implement disabled state.

<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
    <input type="text" class="j-input is-disabled" placeholder="Default disabled" id="disabled-input" disabled="">
    <input type="text" class="j-input is-line" placeholder="is-line disabled" id="line-input-disabled" disabled="">
    <input type="text" class="j-input is-ghost" placeholder="ghost disabled" disabled="" id="ghost-input-disabled">
    <input type="text" class="j-input is-blank" placeholder="blank disabled" disabled="" id="blank-input-disabled">
</div>

## Different Sizes

Set class `is-{size}` to implement different input sizes.

<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
    <input type="text" class="j-input is-sm" placeholder="sm: small" id="small-input">
    <input type="text" class="j-input is-md" placeholder="md: default" id="md-input">
    <input type="text" class="j-input is-lg" placeholder="lg: large" id="large-input">
</div>

## Validation States

Set class `is-{status}` to change input state styles.

- `is-valid`
- `is-invalid`

<div class="grid-container grid-col-1 grid-col-sm-2 grid-col-md-3 grid-col-lg-4">
    <input type="text" class="j-input is-sm is-valid" placeholder="valid" id="valid">
    <input type="text" class="j-input is-md is-invalid" placeholder="invalid" id="invalid">
</div>

## Input Groups

Input groups are divided into two groups by visual results:

- External group: Sibling elements are on the same line as the input.
- Internal group: Sibling elements are within the input embedded elements.

### External Group

Set class `input-group` to wrap the input, implementing the external input group.

- Additional elements are wrapped with class `el-addon`
- Additional elements can be freely positioned

```html
<div class="input-group">
    <input type="text" class="j-input" placeholder="">
    <span class="el-addon">
        ...other elements
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
            <option>Please select</option>
            <option value="1">China</option>
            <option value="2">USA</option>
            <option value="3">UK</option>
        </select>
        <div class="el-addon">
            <div class="is-text icon-close"></div>
        </div>
    </div>
    <div class="input-group">
        <select class="j-select">
            <option>Please select</option>
            <option value="1">China</option>
            <option value="2">USA</option>
            <option value="3">UK</option>
        </select>
        <div class="el-addon">
            <div class="is-text icon-close"></div>
        </div>
    </div>
</div>

### Internal Group

Set class `input-inner-group` to wrap the input, implementing the internal input group.

- Additional elements are wrapped with class `el-addon`
- Additional elements can be freely positioned

```html
<div class="input-inner-group">
    <input type="text" class="j-input" placeholder="">
    <span class="el-addon">
        ...other elements
    </span>
</div>
```

<div class="grid-container grid-col-1 grid-col-sm-2 my-4">
    <div class="input-inner-group">
        <input type="text" class="j-input" placeholder="Regular icon">
        <span class="el-addon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>
        </span>
    </div>
    <div class="input-inner-group">
        <span class="el-addon">
            <span class="icon-loader"></span>
        </span>
        <input type="text" class="j-input" placeholder="Status icon">
    </div>
</div>

<div class="grid-container grid-col-1 grid-col-sm-2 my-4">
    <div class="input-inner-group">
        <input type="text" class="j-input" placeholder="Weak text">
        <span class="el-addon">
            <span class="el-text">Unit</span>
        </span>
    </div>
    <div class="input-inner-group">
        <span class="el-addon is-text">
            <span class="el-text">Text</span>
        </span>
        <input type="text" class="j-input" placeholder="Highlighted text">
    </div>
</div>

<div class="grid-container grid-col-1 grid-col-sm-2 my-4">
    <div class="input-inner-group">
        <input type="text" class="j-input" placeholder="Regular button">
        <span class="el-addon is-text">
            <button class="j-button is-outline is-sm">Update</button>
        </span>
    </div>
    <div class="input-inner-group">
        <span class="el-addon is-text">
            <button class="j-button is-default is-sm is-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C17.5222 2 22 5.97778 22 10.8889C22 13.9556 19.5111 16.4444 16.4444 16.4444H14.4778C13.5556 16.4444 12.8111 17.1889 12.8111 18.1111C12.8111 18.5333 12.9778 18.9222 13.2333 19.2111C13.5 19.5111 13.6667 19.9 13.6667 20.3333C13.6667 21.2556 12.9 22 12 22C6.47778 22 2 17.5222 2 12C2 6.47778 6.47778 2 12 2ZM10.8111 18.1111C10.8111 16.0843 12.451 14.4444 14.4778 14.4444H16.4444C18.4065 14.4444 20 12.851 20 10.8889C20 7.1392 16.4677 4 12 4C7.58235 4 4 7.58235 4 12C4 16.19 7.2226 19.6285 11.324 19.9718C10.9948 19.4168 10.8111 18.7761 10.8111 18.1111ZM7.5 12C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12ZM16.5 12C15.6716 12 15 11.3284 15 10.5C15 9.67157 15.6716 9 16.5 9C17.3284 9 18 9.67157 18 10.5C18 11.3284 17.3284 12 16.5 12ZM12 9C11.1716 9 10.5 8.32843 10.5 7.5C10.5 6.67157 11.1716 6 12 6C12.8284 6 13.5 6.67157 13.5 7.5C13.5 8.32843 12.8284 9 12 9Z"></path></svg>
            </button>
        </span>
        <input type="text" class="j-input" placeholder="Icon button">
    </div>
</div>

For personalized scenarios with multiple element attachments, you need to manually adjust the `padding` style of the `input`.

<div class="grid-container grid-col-1 grid-col-sm-2 my-4">
    <div class="input-inner-group">
        <input type="text" class="j-input" placeholder="Multiple elements">
        <span class="el-addon is-text">
            <button class="j-button is-outline is-sm">Update</button>
            <button class="j-button is-default is-sm">Reset</button>
            <button class="j-button is-danger is-sm">Delete</button>
        </span>
    </div>
</div>
