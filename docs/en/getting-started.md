# Getting Started

## Usage

In a `G3-Web` project, use the `loadStyle()` and `loadScript()` methods or the `loadModule()` method from the `JEALER\G3\Utilities\Frontend` class to import stylesheets and script files on demand.

::: code-group

```php [example.php]
<?php
use JEALER\G3\Utilities\Frontend;

// Import JUI CSS stylesheet
Frontend::loadStyle('jui');

// Import JUI ESM components
Frontend::loadModule('jui');

// Import JUI UMD components
Frontend::loadScript('jui');
```

```js [index.js]
/**
 * @description Taking `modal` component and `UMD` format as an example:
 */

// Method 1: Use the jui object directly
const testModal = new jui.modal({
  title: "Test Modal",
  content: "This is a test modal",
});

// Method 2: Destructure the jui object
const { modal } = jui;
const testModal = new modal({
  title: "Test Modal",
  content: "This is a test modal",
});
```

:::

## Rebuilding

You can rebuild the source files according to your needs. The `src` directory contains the source files.

### CSS

Relevant files are imported and combined by layer using `@layout`, in the following order:

1. Color Configuration: `@color` - color.css
2. Theme Configuration: `@theme` - theme.css
3. Basic Styles: `@base` - base.css
4. Layout Styles: `@layout` - layout.css
5. Icon Styles: `@icon` - icon.css
6. Component Styles: `@components` - components.css
7. Utility Classes: `@utilities` - utilities.css
8. Status Classes: `@status` - status.css

### JavaScript

Relevant files are divided by component, with each component having a separate file named after the component, e.g., `modal.js`.

1. `utilities.js`
2. `container.js`
3. `signal.js`
4. `store.js`
5. `modal.js`
6. `toast.js`
7. `offcanvas.js`
8. `theme.js`
9. `tabs.js`
10. `accordion.js`
11. `drop.js`
12. `tooltip.js`
13. `validator.js`
14. `parabola.js`
