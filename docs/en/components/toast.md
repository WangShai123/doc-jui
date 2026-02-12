# Toast

## Basic Structure

::: code-group

```html [HTML]
<div class="j-toast-container">
  <div class="j-toast is-{type} toast-{show|hide}">
    <span class="toast-icon"> Icon Element </span>
    <span class="toast-message"> Message </span>
  </div>
  { Other toasts }
</div>
```

:::

## Toast Types

- `info`: Informational message—used for general toasts. Supports stacking multiple messages.
- `success`: Success message—used to indicate successful operations. Supports stacking multiple messages.
- `warning`: Warning message—used for cautionary alerts. Supports stacking multiple messages.
- `error`: Error message—used for error toasts. Supports stacking multiple messages.
- `lite`: Lightweight tip—used for simple, non-intrusive prompts. Only one message can be displayed at a time.

## Examples

<div class="flex gap-4 flex-wrap">
    <button class="j-button is-primary example-toast-info">Info</button>
    <button class="j-button is-success example-toast-success">Success</button>
    <button class="j-button is-warning example-toast-warning">Warning</button>
    <button class="j-button is-danger example-toast-error">Error</button>
</div>
<div class="my-4"><button class="j-button is-default example-toast-lite">Lite</button></div>

## Usage

::: code-group

```php [example.php]
<?php
// Dynamically load the component script in PHP:
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
// Call as static methods
const { toast } = jui;

// Standard toast
toast.show("This is a regular informational message.", 2000, "info");
// Success toast
toast.show("Operation succeeded!", 2000, "success");
// Warning toast
toast.show("Warning: Please confirm your action.", 2000, "warning");
// Error toast
toast.show(
  "Operation failed. Please contact the administrator.",
  2000,
  "error",
);

// Lightweight tip
toast.lite("This is a simple tip.", 2000);

// Convenient shorthand methods
toast.success("Operation succeeded!", 2000);
toast.info("This is a regular informational message.", 2000);
toast.warning("Warning: Please confirm your action.", 2000);
toast.error("Operation failed. Please contact the administrator.", 2000);
```

:::

## Parameters

```js
/**
 * @description Displays a toast. Multiple messages can be stacked.
 * @param {string} message The toast content.
 * @param {number} duration Display duration in milliseconds. Default: 3000 ms.
 * @param {string} type toast type. Options: 'info', 'success', 'warning', 'error'. Default: 'info'.
 * @returns {void}
 */
show(message, duration, type);

/**
 * @description Displays a lightweight tip. Only one message can be shown at a time.
 * @param {string} message The tip content.
 * @param {number} duration Display duration in milliseconds. Default: 2000 ms.
 * @returns {void}
 */
lite(message, duration);

/**
 * @description Convenient shorthand methods.
 * @param {string} message The toast content.
 * @param {number} duration Display duration in milliseconds. Default: 3000 ms.
 * @returns {void}
 */
info(message, duration);
success(message, duration);
warning(message, duration);
error(message, duration);
```

## Styling

The Toast component uses fixed global styles by default and does not inherit any theme-specific styling.
