# 主题

Theme 是主题配置和主题面板控制器，用于管理应用的主题样式。

<Badge text="UI Primitive" theme="error"/>

## 示例

见页面右上角“主题”按钮。

## 导入

```ts
import { createTheme } from 'vanilla-jui';
```

## 基础用法

```ts
const theme = createTheme();
const themePanel = theme.createPanel();

document.body.appendChild(themePanel);
```

## 参数

| 字段        | 类型     | 默认值       | 说明           |
| ----------- | -------- | ------------ | ----------- |
| `mode`      | `string` | `dark`     | 默认明暗主题    |
| `theme`     | `string` | `indigo`   | 默认主题色主题  |
| `radius`    | `string` | `sm`       | 默认圆角主题    |
| `shadow`    | `string` | `sm`       | 默认阴影主题    |
| `font`      | `string` | `sm`       | 默认字号主题    |
| `key`       | `string` | `ui-theme` | cookie 名称    |
| `className` | `object` | 见下表     | 自定义样式类     |

### mode

明暗主题，可选值：

- `light` 浅色主题。
- `dark` 深色主题。
- `auto` 根据系统偏好自动选择主题。

### className

| 字段         | 默认值                | 说明        |
| ------------ | --------------------- | --------- |
| `panel`      | `j-theme-palette`     | 面板根节点 |
| `title`      | `theme-palette-title` | 标题      |
| `container`  | `palette-container`   | 分组容器   |
| `item`       | `palette-item`        | 分组      |
| `itemTitle`  | `item-title`          | 分组标题   |
| `items`      | `items`               | 按钮列表   |
| `button`     | `j-button is-default` | 面板按钮   |
| `active`     | `is-active`           | 激活状态   |
| `prefix`     | `el-prefix`           | 色块前缀   |
| `swatch`     | `item-hex`            | 主题色块   |
| `buttonText` | `button-text`         | 按钮文本   |

## 实例属性

| 属性    | 说明               |
| ------- | ------------------ |
| `props` | 响应式主题配置对象 |

## 实例方法

| 方法 | 说明 |
| ------ | ------ |
| `createPanel(c,config)` | 创建主题管理面板的离线 DOM |
| `setConfig(config)` | 更新实例配置 |
| `destroy()` | 销毁实例 |

### createPanel

| 参数 | 类型 | 默认值 | 说明 |
| ------ | ------ | -------- | ------ |
| `containerClass` | `string` | `null` | 自定义容器类 |
| `panelConfig` | `Array<object>` | `null` | 自定义面板配置 |

- `containerClass` 自定义容器类。
- `panelConfig` 自定义面板配置。

#### panelConfig

自定义面板明细配置，默认值如下：

```ts
// 示例中的 translate 是翻译函数别名，请忽略。
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



## Head 脚本

在 `head` 中添加以下脚本，防止样式闪烁：

```html
<script>(function(d,k){var v={mode:'light',theme:'indigo',radius:'sm',shadow:'sm',font:'sm'},m=d.cookie.match(new RegExp('(?:^|; )'+k+'=([^;]*)')),o=v;if(m){try{var r=JSON.parse(decodeURIComponent(m[1]));if(r&&typeof r.val==='object')o=Object.assign({},v,r.val)}catch(e){o=v}}try{var c=o.mode==='auto'?matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light':o.mode,h=d.documentElement;h.classList.add(c||'dark','j-theme-'+(o.theme||v.theme),'j-radius-'+(o.radius||v.radius),'j-shadow-'+(o.shadow||v.shadow),'j-font-'+(o.font||v.font))}catch(e){}})(document,'ui-theme');</script>
```
