# 快速开始

Vanilla-JUI 是一个将响应式 UI、设计令牌 和 CSS 工程解耦的 Web UI 基础设施。无需框架锁定，帮助快速构建高质量的交互网页。

在之后的文档中，Vanilla-JUI 将被简称为 JUI。

## 设计原则

遵循 W3C 的 Web 准则，用规范和简洁的语法定义基础结构，留下充足的用户个性化空间。

## 特性

- **框架无关**：不依赖于任何前端框架，直接在任意网页中挂载。
- **细粒度响应式**：基于信号的细粒度响应式系统，通过数据驱动组件状态更新。定义状态、派生计算、渲染视图。
- **可组合组件**：组件之间可以自由组合，通过状态引用传递数据，构建复杂交互。
- **统一 API**：组件 API 简约一致，无需记忆，操作 `state` 数据即更新视图交互。
- **100% 自定义样式**：支持丢弃内置样式，利用 className 机制，消费 tailwind 等 CSS 工具，实现完全自定义样式。
- **多维主题**：基于设计令牌和根节点状态的多维主题 CSS 架构，轻松实现千人千面的主题模式。
- **常用工具**：附带 ID、Events、Timer 等常用工具和 DOM 语法糖。

## 用法

在 `G3-Web` 项目中，使用 `JEALER\G3\Utilities\Frontend` 类中的静态方法 `css()` 或 `umd()` 或 `esm()`，按需引入层叠样式表和脚本文件。

:::tabs
@tab G3-Web

```php
<?php
use JEALER\G3\Utilities\Frontend;

// 引入 JUI CSS 层叠样式表
Frontend::css('jui');

// 引入 JUI esm 组件
Frontend::esm('jui');

// 引入 JUI umd 组件
Frontend::umd('jui');
```

解构 jui 对象，引入 Toast 组件

```js
const { Toast } = jui;
Toast.show('这是一个测试 Toast');
```

@tab NPM

```bash
npm install vanilla-jui@latest
```

静态 import 引入

```js
import { Toast } from 'vanilla-jui';
Toast.show('这是一个测试 Toast');
```

@tab CDN

```html
<!-- UMD，全局变量 jui -->
<script src="https://unpkg.com/vanilla-jui@latest/dist/index.umd.js"></script>
<script>
  const { Toast } = jui;
  Toast.show('这是一个测试 Toast');
</script>

<!-- ESM -->
<script type="module">
  import { Toast } from 'https://unpkg.com/vanilla-jui@latest/dist/index.js';
  Toast.show('这是一个测试 Toast');
</script>

<!-- 按需引入默认 css 样式，支持自定义主题 或 使用 tailwindcss 等 CSS 工具 -->
<link
  rel="stylesheet"
  href="https://unpkg.com/vanilla-jui@latest/dist/index.css"
/>
```

:::

## 项目依赖

JUI 基于 `W3` 模块 构建，项目依赖以外部库的形式存在，并未打包在源码中。包含：

- [vanilla-signal](https://npmjs.com/package/vanilla-signal) 用于响应式状态管理，是细粒度响应式运行时。
- [vanilla-signal-i18n](https://npmjs.com/package/vanilla-signal-i18n) 用于国际化，是基于 `vanilla-signal` 的响应式国际化管理器
- [vanilla-create-storage](https://npmjs.com/package/vanilla-create-storage) 用于客户端存储，为 `cookie`, `localStorage`, `sessionStorage` 等提供统一的 API。

### 使用 G3-Web

使用 `Frontend::umd('jui')` 引入 JUI 时，会自动加载依赖库，无需手动引用，直接在你的 JS 脚本或 PHP 模板中通过全局变量使用。如：

```js
// 直接解构使用 JUI
const { Toast } = jui;
// 直接解构使用关联依赖
`const { createSignal } = vanillaSignal`;
```

使用 `Frontend::esm('jui')` 引入 JUI 时，会自动在页面中写入 import map，无需手动引用，直接在你的 JS 脚本中使用静态导入。如：

```js
// import 静态导入 vanilla-jui
import { Toast } from 'vanilla-jui';
// import 静态导入 vanilla-signal
import { createSignal } from 'vanilla-signal';
```

### 使用 NPM

自动安装并加载依赖库，无需手动引用。

```js
import { createModal } from 'vanilla-jui';
import { createSignal, jsx } from 'vanilla-signal';
import { t } from 'vanilla-signal-i18n';
import { createStorage } from 'vanilla-create-storage';
```

### 使用 CDN

需要在 `vanilla-jui` 之前，手动引入这三个依赖库：

```html
<script src="https://unpkg.com/vanilla-signal@latest/dist/index.umd.js"></script>
<script src="https://unpkg.com/vanilla-signal-i18n@latest/dist/index.umd.js"></script>
<script src="https://unpkg.com/vanilla-create-storage@latest/dist/index.umd.js"></script>
<script src="https://unpkg.com/vanilla-jui@latest/dist/index.umd.js"></script>
```

## 源码架构

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

## 兼容性

`ES2022`

你可以修改 `vite.config.ts` 中的 `target` 选项，来修改兼容性的构建目标。
