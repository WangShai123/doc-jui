# Form

## Basic Structure

```html
<!-- Form display mode -->
<form class="j-form is-{vertical|horizontal} is-item-{vertical|horizontal} {customClass}" id="{id}" data-form="{name}">
    <!-- Form item -->
    <div class="form-item">
        <!-- Form label -->
        <label for="email" class="item-label is-{required}">Email</label>
        <!-- Form control -->
        <div class="form-control">
            <!-- Form input element -->
            <input type="email" class="j-input" id="email" placeholder="Enter email" autocomplete="email" required />
            <!-- Form help block -->
            <div class="help-block is-{valid|invalid}">{Help block message}</div>
        </div>
    </div>
    <div class="form-item">{ ... }</div>
    <!-- Form action buttons -->
    <div class="form-buttons">
        <button type="submit" class="j-button is-primary">Submit</button>
        <button type="reset" class="j-button is-ghost">Reset</button>
    </div>
</form>
```

## Examples

### Vertical Form

<form class="j-form is-vertical is-item-vertical w-2xs my-4">
    <div class="form-item">
        <label for="email" class="item-label is-required">Email address</label>
        <div class="form-control">
            <input type="email" name="email" class="j-input" id="email" placeholder="Enter email" autocomplete="email">
        </div>
    </div>
    <div class="form-item">
        <label for="password" class="item-label is-required">Password</label>
        <div class="form-control">
            <input type="password" name="password" class="j-input" id="password" placeholder="Password" autocomplete="current-password">
        </div>
    </div>
    <div class="form-item">
        <label for="file" class="item-label">File input</label>
        <div class="form-control">
            <input type="file" id="file" class="j-input">
            <div class="help-block">Example block-level help text here.</div>
        </div>
    </div>
    <div class="form-item">
        <label class="item-label"><input type="checkbox" class="j-input">Agree to...</label>
    </div>
    <div class="form-buttons flex gap-2">
        <button type="submit" class="j-button is-primary">Submit</button>
        <button type="reset" class="j-button is-ghost">Reset</button>
    </div>
</form>

### Horizontal Form

<form class="j-form is-horizontal is-item-horizontal my-4">
    <div class="form-item">
        <label for="email-horizontal" class="item-label is-required">Email</label>
        <div class="form-control">
            <input type="email" class="j-input" id="email-horizontal" placeholder="Enter email" autocomplete="email">
        </div>
    </div>
    <div class="form-item">
        <label for="password-horizontal" class="item-label is-required">Password</label>
        <div class="form-control">
            <input type="password" class="j-input" id="password-horizontal" placeholder="Password" autocomplete="current-password">
            <div class="help-block">Example block-level help text here.</div>
        </div>
    </div>
    <div class="form-buttons flex gap-1">
        <button type="submit" class="j-button is-primary">Submit</button>
        <button type="reset" class="j-button is-ghost">Reset</button>
    </div>
</form>
