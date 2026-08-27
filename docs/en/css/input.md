# Input

> CSS tools such as `tailwindcss` and `unocss` are recommended. They make UI customization easier and help build smaller CSS files on demand.

CSS input classes in the default stylesheet.

<Badge text="CSS" theme="warning"/>

## Basic DOM

Set the `is-{type}` class to create different input types.

:::tabs
@tab Example

<Group>
<input type="text" class="j-input" id="input">
<input type="file" class="j-input" id="file">
<input type="datetime-local" class="j-input" id="datetime-local">
<select class="j-select" id="select">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
</select>
</Group>

<div class="block"><textarea class="j-textarea" id="textarea"></textarea></div>

@tab Code

```html
<input type="text" class="j-input" id="" />
<input type="file" class="j-input" id="" />
<input type="datetime-local" class="j-input" id="" />
<select class="j-select" id="">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
<textarea class="j-textarea" id=""></textarea>
```

:::

## Input Size

Set the `is-{size}` class to create different input sizes.

:::tabs
@tab Example

<Group>
<input type="text" class="j-input is-sm" id="input-sm">
<input type="text" class="j-input is-md" id="input-md">
<input type="text" class="j-input is-lg" id="input-lg">
</Group>

<Group>
<select class="j-select is-sm" id="select-sm">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
<select class="j-select is-md" id="select-md">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
<select class="j-select is-lg" id="select-lg">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
</Group>

@tab Code

```html
<input type="text" class="j-input is-sm" id="" />
<input type="text" class="j-input is-md" id="" />
<input type="text" class="j-input is-lg" id="" />
```

:::

## Input Group

Use the `.input-group` or `.input-inner-group` class to describe input group styles.

:::tabs
@tab Example

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
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
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

@tab Demo

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
