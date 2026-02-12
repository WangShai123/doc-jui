# Tip

## Basic Structure

```html
<div class="j-tip is-{type}">
    <div class="tip-icon">{ element }</div>
    <div class="tip-title">Tip</div>
    <div class="tip-content">This is a tip message.</div>
</div>
```

## Examples

<div class="j-tip">
    <div class="tip-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path></svg>
    </div>
    <div class="tip-title">Authorization Error</div>
    <div class="tip-content">Login has expired, please log in again.</div>
</div>

<div class="j-tip is-success my-4">
    <div class="tip-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM16.4524 8.22183L17.8666 9.63604L11.5026 16L7.25999 11.7574L8.67421 10.3431L11.5019 13.1709L16.4524 8.22183Z"></path></svg>
    </div>
    <div class="tip-title">Authorization Success</div>
    <div class="tip-content">You have obtained temporary authorization, valid for 1 hour.</div>
</div>

<div class="j-tip is-warning my-4">
    <div class="tip-title">Warning</div>
    <div class="tip-content">Temporary authorization is about to expire, please refresh in time.</div>
</div>

<div class="j-tip is-danger my-4">
    <div class="tip-content">Login has expired, please log in again.</div>
</div>

## Usage

```html
<!-- is-default: Default tip -->
<div class="j-tip is-default">
    <div class="tip-icon">{Icon Element}</div>
    <div class="tip-title">Authorization Error</div>
    <div class="tip-content">Login has expired, please log in again.</div>
</div>

<!-- is-success: Success tip -->
<div class="j-tip is-success">
    <div class="tip-icon">{Icon Element}</div>
    <div class="tip-title">Authorization Success</div>
    <div class="tip-content">You have obtained temporary authorization, valid for 1 hour.</div>
</div>

<!-- is-warning: Warning tip -->
<div class="j-tip is-warning">
    <div class="tip-title">Warning</div>
    <div class="tip-content">Temporary authorization is about to expire, please refresh in time.</div>
</div>

<!-- is-danger: Danger tip -->
<div class="j-tip is-danger">
    <div class="tip-content">Login has expired, please log in again.</div>
</div>
```

## Different Types

Set class `is-{type}` to implement different types of tips.

- `is-default`: Default tip
- `is-success`: Success tip
- `is-warning`: Warning tip
- `is-danger`: Danger tip
