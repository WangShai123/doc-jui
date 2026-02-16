# What is JUI?

JUI is a component library based on native JavaScript, designed to help beginners quickly learn and build web pages.

1. It helps beginners get immediate feedback during the learning process, gradually increasing self-identity and gaining motivation for further learning.
2. It helps beginners gradually build an understanding and application ability of Web UI through practical operation and practice.

## Design Principles

JUI's definition strictly follows the W3C Web guidelines, defining basic structures with standardized and concise syntax, leaving ample space for user personalization.

## Component Members

JUI includes `CSS` stylesheets and a `JavaScript` component library; the former defines the style of the components, and the latter defines the behavior of the components.

1. Basic Atomic Classes: Preset common atomic classes to help quickly define element styles.
2. Components: Provides a variety of common components by default to help quickly define interactive behaviors.

## Component Files

JUI provides three different forms of `JavaScript` files, Use as needed:

::: details `jui.umd.js` UMD Specification

Loaded and executed immediately. All components are mounted on the `jui` object.

:::

::: details `jui.esm.js` ES Module Standard

ES Module Standard. All components are mounted on the `jui` object, does not support Tree-shaking.

:::

::: details `jui.module.js` ES Module Standard

ES Module standard, supports Tree-shaking, effectively reducing bundle size.

:::

JUI provides two different forms of `CSS` files, which can be used as needed:

- `jui.min.css` Full `CSS` style file.
- `jui.pure.min.css` Pure theme and component `CSS` style file without `utilities` classes.

## Naming Conventions

- Basic Rule:
  1. Use camel case naming. The first letter is lowercase, and the first letter of each subsequent word is capitalized.
  2. Use an `_` prefix for internal methods, and compress and package method names and property names.
  3. Outer container named according to the brand; component objects are named according to business logic; internal members are named according to their role.
- Naming Principles:
  1. Convenient for user customization
  2. Compatible with mainstream CSS tools (Tailwind CSS)
  3. Minimize pollution of user business characteristics
- CSS Class Naming
  1. Component Classes: Only the outer container uses the `j-` prefix naming, e.g., `j-modal`; internal child element classes have no prefix, e.g., `modal-header`.
  2. Status Classes: Named with the `is-` prefix, e.g., `is-active`.
  3. Utility Classes: Inherit `Tailwind CSS` naming conventions.
- JavaScript Component Naming
  1. Components: Consistent with CSS class naming, e.g., `modal`.
  2. Methods: Use CamelCase naming, first letter lowercase, subsequent words capitalized, e.g., `modal`, `showLoading()`.
  3. Events: Named with the `on` prefix, e.g., `onShow`. Event states correspond to general tense and perfect tense, e.g., `onShow` and `onShown`.

## Compatibility

`ES2018`
