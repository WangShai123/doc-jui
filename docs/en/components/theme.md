# Theme

Theme is a theme configuration and theme panel controller. It manages application theme styles.

<Badge text="UI Primitive" theme="error"/>

## Example

See the "Theme" button in the top-right corner of the page.

## Import

```ts
import { createTheme } from 'vanilla-jui';
```

## Basic Usage

```ts
const theme = createTheme();
const themePanel = theme.createPanel();

document.body.appendChild(themePanel);
```

## Options

| Field       | Type     | Default    | Description |
| ----------- | -------- | ---------- | ----------- |
| `mode`      | `string` | `dark`     | Default light/dark theme |
| `theme`     | `string` | `indigo`   | Default theme-color theme |
| `radius`    | `string` | `sm`       | Default radius theme |
| `shadow`    | `string` | `sm`       | Default shadow theme |
| `font`      | `string` | `sm`       | Default font-size theme |
| `key`       | `string` | `ui-theme` | Cookie name |
| `className` | `object` | See below  | Custom class names |

### mode

Light/dark theme. Available values:

- `light`: light theme.
- `dark`: dark theme.
- `auto`: choose the theme automatically from system preference.

### className

| Field        | Default               | Description |
| ------------ | --------------------- | ----------- |
| `panel`      | `j-theme-palette`     | Panel root node |
| `title`      | `theme-palette-title` | Title |
| `container`  | `palette-container`   | Group container |
| `item`       | `palette-item`        | Group |
| `itemTitle`  | `item-title`          | Group title |
| `items`      | `items`               | Button list |
| `button`     | `j-button is-default` | Panel button |
| `active`     | `is-active`           | Active state |
| `prefix`     | `el-prefix`           | Swatch prefix |
| `swatch`     | `item-hex`            | Theme color swatch |
| `buttonText` | `button-text`         | Button text |

## Instance Properties

| Property | Description |
| -------- | ----------- |
| `props`  | Reactive theme configuration object |

## Instance Methods

| Method                  | Description |
| ----------------------- | ----------- |
| `createPanel(c,config)` | Creates offline DOM for the theme management panel |
| `setConfig(config)`     | Updates instance configuration |
| `destroy()`             | Destroys the instance |

### createPanel

| Parameter        | Type            | Default | Description |
| ---------------- | --------------- | ------- | ----------- |
| `containerClass` | `string`        | `null`  | Custom container class |
| `panelConfig`    | `Array<object>` | `null`  | Custom panel configuration |

- `containerClass`: custom container class.
- `panelConfig`: custom panel configuration.

#### panelConfig

Custom panel detail configuration. The default is:

```ts
// The translate function in this example is a translation alias. Ignore it.
[
    {
      title: translate('Primary'),
      type: 'theme',
      buttons: [
        ['gray', translate('Gray')],
        ['olive', translate('Olive')],
        ['tomato', translate('Tomato')],
        ['ruby', translate('Ruby')],
        ['pink', translate('Pink')],
        ['violet', translate('Violet')],
        ['indigo', translate('Indigo')],
        ['blue', translate('Blue')],
        ['teal', translate('Teal')],
        ['grass', translate('Grass')],
        ['mint', translate('Mint')],
        ['lime', translate('Lime')],
        ['yellow', translate('Yellow')],
        ['orange', translate('Orange')],
        ['gold', translate('Gold')],
      ],
    },
    {
      title: translate('Radius'),
      type: 'radius',
      buttons: [
        ['none', translate('None')],
        ['sm', translate('sm')],
        ['md', translate('md')],
        ['lg', translate('lg')],
        ['xl', translate('XL')],
        ['round', translate('Round')],
      ],
    },
    {
      title: translate('Shadow'),
      type: 'shadow',
      buttons: [
        ['none', translate('None')],
        ['sm', translate('sm')],
        ['md', translate('md')],
        ['lg', translate('lg')],
      ],
    },
    {
      title: translate('Font'),
      type: 'font',
      buttons: [
        ['sm', translate('sm')],
        ['md', translate('md')],
      ],
    },
    {
      title: translate('Mode'),
      type: 'mode',
      buttons: [
        ['light', translate('Light')],
        ['dark', translate('Dark')],
        ['auto', translate('Auto')],
      ],
    },
];
```



## Head Script

Add the following script in `head` to prevent style flicker:

```html
<script>(function(d,k){var v={mode:'light',theme:'indigo',radius:'sm',shadow:'sm',font:'sm'},m=d.cookie.match(new RegExp('(?:^|; )'+k+'=([^;]*)')),o=v;if(m){try{var r=JSON.parse(decodeURIComponent(m[1]));if(r&&typeof r.val==='object')o=Object.assign({},v,r.val)}catch(e){o=v}}try{var c=o.mode==='auto'?matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light':o.mode,h=d.documentElement;h.classList.add(c||'dark','j-theme-'+(o.theme||v.theme),'j-radius-'+(o.radius||v.radius),'j-shadow-'+(o.shadow||v.shadow),'j-font-'+(o.font||v.font))}catch(e){}})(document,'ui-theme');</script>
```
