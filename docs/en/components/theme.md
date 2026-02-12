# Theme Mode

Use the `theme` component to enable custom themes in your application, including elements:

1. Theme colors
2. Border radius size
3. Shadow size
4. Font size
5. Dark mode

## Examples

Visit [Component Preview](/dashboard.html), click the `Theme` button in the top right corner of the page to open the theme interaction panel.

Mechanism: Add corresponding class names to the `HTML` document `document.documentElement` as needed: `j-theme-indigo`, `j-radius-sm`, `j-shadow-sm`, `j-font-sm`, `dark`.

## Usage

::: code-group

```php [example.php]
<?php
// Dynamically load component scripts in PHP:
use JEALER\G3\Utilities\Frontend;

Frontend::loadScript('jui');
```

```js [index.js]
const { offcanvas, theme, on } = jui;

// Initialize theme component
const newTheme = new theme();
// Get theme interaction panel (returns DOM node)
const themePanel = newTheme.createPanel();
// Mount to your desired DOM node CustomNode
CustomNode.appendChild(themePanel);
// For example, mount to offcanvas component
const themeOffcanvas = new offcanvas({
  overlay: true,
  direction: "right",
  content: themePanel,
});
on(yourButton, "click", () => {
  themeOffcanvas.show();
});
```

:::

## Parameters

```js
/**
 * @description Create theme interaction panel
 * @param {String} containerClass Theme interaction panel container class name, default "j-theme-pallette"
 * @param {Object} panelConfig Theme default configuration
 *   - @property {String} mode Theme mode, default dark, options: light, dark
 *   - @property {String} theme Theme color, default indigo, options: gray, olive, tomato, ruby, pink, violet, indigo, blue, teal, grass, mint, lime, yellow, orange, gold
 *   - @property {String} radius Border radius size, default sm, options: none, sm, md
 *   - @property {String} shadow Shadow size, default sm, options: none, sm, md
 *   - @property {String} font Font size, default sm, options: sm, md
 * @returns {HTMLElement} Theme interaction panel node
 */
createPanel((containerClass = "j-theme-pallette"), (panelConfig = null));
```

## Local Storage

- Theme configuration will be stored in local `localstorage`.
- When opening the application next time, the theme will be restored according to user's local configuration first.
- Storage key name `jui.theme`

## Multi-language Support

The theme interaction panel will automatically switch languages according to the user device's language settings.

Supported languages:

- Chinese
- English
