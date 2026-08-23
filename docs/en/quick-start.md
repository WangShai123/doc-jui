# Quick Start

Vanilla-JUI is Web UI infrastructure that separates reactive UI, design tokens, and CSS engineering. It avoids framework lock-in and helps you build high-quality interactive pages quickly.

In the rest of the documentation, Vanilla-JUI is shortened to JUI.

## Design Principles

JUI follows W3C Web guidelines, defines basic structures with standard and concise syntax, and leaves enough room for user customization.

## Features

- **Framework agnostic**: It does not depend on any frontend framework and can be mounted directly in any web page.
- **Fine-grained reactivity**: A signal-based reactive system drives component state updates. Define state, derive values, and render views from data.
- **Composable components**: Components can be combined freely. Data can be passed through state references to build complex interactions.
- **Unified API**: Component APIs are small and consistent. Updating `state` data updates the view and interaction.
- **Fully custom styles**: You can drop the built-in styles and use the className mechanism with Tailwind or other CSS tools to build fully custom styles.
- **Multi-dimensional themes**: A theme CSS architecture based on design tokens and root-node state makes personalized theme modes easy to build.
- **Common utilities**: Includes common ID, Events, Timer utilities and DOM helper syntax.

## Usage

In a `G3-Web` project, use the static `css()`, `umd()`, or `esm()` methods on `JEALER\G3\Utilities\Frontend` to import stylesheets and scripts as needed.

:::tabs
@tab G3-Web

```php
<?php
use JEALER\G3\Utilities\Frontend;

// Import the JUI CSS stylesheet
Frontend::css('jui');

// Import JUI ESM components
Frontend::esm('jui');

// Import JUI UMD components
Frontend::umd('jui');
```

Destructure the jui object and use the Toast component:

```js
const { Toast } = jui;
Toast.show('This is a test Toast');
```

@tab NPM

```bash
npm install vanilla-jui@latest
```

Use a static import:

```js
import { Toast } from 'vanilla-jui';
Toast.show('This is a test Toast');
```

@tab CDN

```html
<!-- UMD, global variable: jui -->
<script src="https://unpkg.com/vanilla-jui@latest/dist/index.umd.js"></script>
<script>
  const { Toast } = jui;
  Toast.show('This is a test Toast');
</script>

<!-- ESM -->
<script type="module">
  import { Toast } from 'https://unpkg.com/vanilla-jui@latest/dist/index.js';
  Toast.show('This is a test Toast');
</script>

<!-- Import the default CSS on demand. Custom themes and CSS tools such as Tailwind CSS are supported. -->
<link
  rel="stylesheet"
  href="https://unpkg.com/vanilla-jui@latest/dist/index.css"
/>
```

:::

## Project Dependencies

JUI is built on `W3` modules. Project dependencies are external libraries and are not bundled into the source code. They include:

- [vanilla-signal](https://npmjs.com/package/vanilla-signal), a signal-based fine-grained reactive runtime for reactive state management.
- [vanilla-signal-i18n](https://npmjs.com/package/vanilla-signal-i18n), a reactive internationalization manager based on `vanilla-signal`.
- [vanilla-create-storage](https://npmjs.com/package/vanilla-create-storage), a client-side storage utility that provides a unified API for `cookie`, `localStorage`, and `sessionStorage`.

### Using G3-Web

When `Frontend::umd('jui')` imports JUI, dependency libraries are loaded automatically. You can use them through global variables in JavaScript scripts or PHP templates:

```js
// Destructure and use JUI directly
const { Toast } = jui;
// Destructure and use related dependencies directly
const { createSignal } = vanillaSignal;
```

When `Frontend::esm('jui')` imports JUI, an import map is written into the page automatically. You can use static imports directly in JavaScript:

```js
// Static import from vanilla-jui
import { Toast } from 'vanilla-jui';
// Static import from vanilla-signal
import { createSignal } from 'vanilla-signal';
```

### Using NPM

Dependencies are installed and loaded automatically. No manual imports for dependency setup are needed.

```js
import { createModal } from 'vanilla-jui';
import { createSignal, jsx } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';
import { createStorage } from 'vanilla-create-storage';
```

### Using CDN

Before loading `vanilla-jui`, manually load these three dependency libraries:

```html
<script src="https://unpkg.com/vanilla-signal@latest/dist/index.umd.js"></script>
<script src="https://unpkg.com/vanilla-signal-i18n@latest/dist/index.umd.js"></script>
<script src="https://unpkg.com/vanilla-create-storage@latest/dist/index.umd.js"></script>
<script src="https://unpkg.com/vanilla-jui@latest/dist/index.umd.js"></script>
```

## Source Architecture

:::tree
vanilla-jui/
├── src/
│ ├── components/ [collapsed]
│ ├── core/
│ ├── css/
│ │ ├── themes/
│ │ │ ├── default/
│ │ ├── tokens.css
│ │ ├── ...css
│ ├── icons/
│ ├── locales/
│ ├── primitives/
│ ├── utilities/
│ ├── validation/
│ ├── index.ts
│ ├── types.d.ts
:::

## Compatibility

`ES2022`

You can change the build compatibility target by editing the `target` option in `vite.config.ts`.
