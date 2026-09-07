# 色彩令牌

出于最小化默认样式的目的，JUI 默认提供 3 种色彩令牌，且对应亮暗模式：

- UI 结构色：围绕 前景色、背景色、边框、禁用、固定主题预览值等。
- 动态主题色：用于表示的主要操作或强调，根据当前主题配置动态生成。
- 语义状态色：包含 `info`, `success`, `warning`, `danger` 状态颜色。

## UI 结构色

格式：`ui-*`

### 常用 UI 色

这组 token 负责页面骨架、表面层级、边框、遮罩和文本主次关系。

格式：`ui-{state}`

<div class="section-grid" id="ui-grid"></div>

| 令牌                  | 亮色               | 暗色                     | 描述     |
| --------------------- | ------------------ | ------------------------ | -------- |
| `--ui-bg`             | `#ffffff`          | `#030712`                | 主背景   |
| `--ui-bg-subtle`      | `#f9fafb`          | `#111827`                | 微妙背景 |
| `--ui-bg-muted`       | `#f3f4f6`          | `#1f2937`                | 柔和背景 |
| `--ui-surface`        | `#ffffff`          | `#030712`                | 表面     |
| `--ui-surface-subtle` | `#f9fafb`          | `#111827`                | 微妙表面 |
| `--ui-surface-muted`  | `#f3f4f6`          | `#1f2937`                | 柔和表面 |
| `--ui-surface-hover`  | `rgba(0,0,0,0.02)` | `rgba(255,255,255,0.05)` | 悬停状态 |
| `--ui-surface-active` | `rgba(0,0,0,0.04)` | `rgba(255,255,255,0.08)` | 激活状态 |
| `--ui-fg`             | `#111827`          | `#f9fafb`                | 主文本   |
| `--ui-fg-muted`       | `#6b7280`          | `#9ca3af`                | 次要文本 |
| `--ui-fg-soft`        | `#9ca3af`          | `#6b7280`                | 三级文本 |
| `--ui-fg-subtle`      | `#d1d5db`          | `#4b5563`                | 微妙文本 |
| `--ui-border-subtle`  | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.08)` | 浅边框   |
| `--ui-border`         | `rgba(0,0,0,0.1)`  | `rgba(255,255,255,0.12)` | 默认边框 |
| `--ui-border-strong`  | `rgba(0,0,0,0.2)`  | `rgba(255,255,255,0.2)`  | 强边框   |
| `--ui-disabled-bg`    | `rgba(0,0,0,0.04)` | `rgba(255,255,255,0.05)` | 禁用背景 |
| `--ui-disabled-fg`    | `#9ca3af`          | `#6b7280`                | 禁用文本 |

### 固定主题色

15 个固定主题色，适合做主题皮肤、标签、统计图、分类卡片和品牌识别，不必强行都当作背景。

格式：`ui-{theme}`

<div class="section-grid" id="theme-grid"></div>

| 令牌          | 亮色      | 暗色      |
| ------------- | --------- | --------- |
| `--ui-gray`   | `#374151` | `#e5e7eb` |
| `--ui-olive`  | `#717762` | `#d4d9cc` |
| `--ui-tomato` | `#ef4444` | `#fca5a5` |
| `--ui-ruby`   | `#f43f5e` | `#fda4af` |
| `--ui-pink`   | `#ec4899` | `#f9a8d4` |
| `--ui-violet` | `#8b5cf6` | `#c4b5fd` |
| `--ui-indigo` | `#6366f1` | `#a5b4fc` |
| `--ui-blue`   | `#3b82f6` | `#93c5fd` |
| `--ui-teal`   | `#14b8a6` | `#5eead4` |
| `--ui-grass`  | `#22c55e` | `#86efac` |
| `--ui-mint`   | `#06b6d4` | `#67e8f9` |
| `--ui-lime`   | `#84cc16` | `#bef264` |
| `--ui-yellow` | `#eab308` | `#fde047` |
| `--ui-orange` | `#f97316` | `#fdba74` |
| `--ui-gold`   | `#b45309` | `#fbbf24` |

## 动态主题色

用于表示的主要操作或强调，根据当前主题配置动态生成。

格式：`tone-*`

| 令牌                   | 描述                 |
| ---------------------- | -------------------- |
| `--tone-subtle`        | 极浅色调             |
| `--tone-soft`          | 浅色调               |
| `--tone-muted`         | 中等色调             |
| `--tone-weak`          | 极微色调（无透明度） |
| `--tone-wash`          | 极微色调             |
| `--tone-border`        | 默认边框             |
| `--tone-border-strong` | 强边框               |
| `--tone-solid`         | 主色                 |
| `--tone-tint`          | 淡主色               |
| `--tone-shade`         | 深主色               |
| `--tone-solid-hover`   | 悬停状态             |
| `--tone-solid-active`  | 激活状态             |
| `--tone-text`          | 品牌文本             |
| `--tone-text-hover`    | 品牌悬停文本         |
| `--tone-fg`            | 主色上的前景色       |
| `--tone-ring`          | 聚焦环               |
| `--tone-highlight`     | 高亮背景             |
| `--tone-highlight-fg`  | 高亮前景色           |
| `--tone-heading`       | 标题文本             |
| `--tone-subtitle`      | 副标题文本           |
| `--tone-body`          | 正文文本             |
| `--tone-caption`       | 说明文本             |
| `--tone-muted`         | 柔和文本             |
| `--tone-disabled`      | 禁用文本             |
| `--tone-link`          | 链接颜色             |
| `--tone-link-hover`    | 链接悬停             |
| `--tone-link-visited`  | 链接已访问           |
| `--tone-link-active`   | 链接激活             |
| `--tone-link-disabled` | 链接禁用             |
| `--tone-code-bg`       | 代码背景             |
| `--tone-code-fg`       | 代码文本             |
| `--tone-card`          | 卡片背景             |
| `--tone-card-hover`    | 卡片悬停             |
| `--tone-card-border`   | 卡片边框             |
| `--tone-card-shadow`   | 卡片阴影             |

## 语义状态色

状态色适合告诉用户“发生了什么”，例如成功、提醒、危险、信息提示。使用关键字 `info`, `success`, `warning`, `danger` 描述状态颜色。如：`--state-info`, `--state-success-text`。

格式：`state-*`

<div class="section-grid" id="state-grid"></div>

| 令牌                    | 描述           |
| ----------------------- | -------------- |
| `--state-{name}`        | 主色           |
| `--state-{name}-hover`  | 悬停状态       |
| `--state-{name}-active` | 激活状态       |
| `--state-{name}-fg`     | 主色上的前景色 |
| `--state-{name}-text`   | 文本颜色       |
| `--state-{name}-subtle` | 微妙背景       |
| `--state-{name}-soft`   | 柔和背景       |
| `--state-{name}-muted`  | 中等背景       |
| `--state-{name}-weak`   | 极微背景       |
| `--state-{name}-border` | 边框颜色       |
| `--state-{name}-ring`   | 聚焦环         |

## 应用预览

### 应用

下面三个小样例把 `background`, `surface`, `tone` 和 `state` 放在一起，展示更接近真实页面的效果。

<div class="demo-cards" id="demo-cards"></div>

### 背景渐变

这些渐变直接复用现有的主题色、状态色和表面色，每个卡片对应一套背景方案。

<div class="section-grid gradient-grid" id="gradient-grid"></div>

```vp-script
import { insert, jsx } from 'vanilla-signal';

const cssFile = jsx("link", {
    rel: "stylesheet",
    href: "../../public/common.css"
});
insert(document.head, cssFile);

const uiTokens = [
    {
        name: 'App canvas',
        token: '--ui-bg',
        sampleFill: 'var(--ui-bg)',
        sampleInk: 'var(--ui-fg)',
        description: '页面最外层的底色，应该尽量安静，避免抢夺主题色。',
        best: '页面壳、全局背景、首屏基础底板。',
        tag: 'background',
    },
    {
        name: 'Soft background',
        token: '--ui-bg-subtle',
        sampleFill: 'var(--ui-bg-subtle)',
        sampleInk: 'var(--ui-fg)',
        description: '比主背景更高一层，适合分隔区域和弱分组。',
        best: '内容分区、次级区块、弱分隔。',
        tag: 'layer',
    },
    {
        name: 'Muted background',
        token: '--ui-bg-muted',
        sampleFill: 'var(--ui-bg-muted)',
        sampleInk: 'var(--ui-fg)',
        description: '比 subtle 更明显，适合强调一个仍然不抢戏的层级。',
        best: '内嵌卡片、轻量容器、列表条目。',
        tag: 'layer',
    },
    {
        name: 'Surface',
        token: '--ui-surface',
        sampleFill: 'var(--ui-surface)',
        sampleInk: 'var(--ui-fg)',
        description: '标准内容表面，最常见的卡片和面板底色。',
        best: '卡片、面板、表单区。',
        tag: 'surface',
    },
    {
        name: 'Surface subtle',
        token: '--ui-surface-subtle',
        sampleFill: 'var(--ui-surface-subtle)',
        sampleInk: 'var(--ui-fg)',
        description: '和主表面接近，但可以用来营造轻微层级差。',
        best: '次级卡片、信息区、轻描边面板。',
        tag: 'surface',
    },
    {
        name: 'Surface muted',
        token: '--ui-surface-muted',
        sampleFill: 'var(--ui-surface-muted)',
        sampleInk: 'var(--ui-fg)',
        description: '适合再往下一层，给列表项或嵌套区域一个稳定背景。',
        best: '嵌套模块、条目背景、辅助容器。',
        tag: 'surface',
    },
    {
        name: 'Hover state',
        token: '--ui-surface-hover',
        sampleFill: 'var(--ui-surface-hover)',
        sampleInk: 'var(--ui-fg)',
        description: '鼠标悬停时的轻微反馈，不需要过强颜色。',
        best: '交互列表、按钮悬停、行 hover。',
        tag: 'interaction',
    },
    {
        name: 'Active state',
        token: '--ui-surface-active',
        sampleFill: 'var(--ui-surface-active)',
        sampleInk: 'var(--ui-fg)',
        description: '按下或激活时的短暂反馈，应该比 hover 稍重。',
        best: '按压态、选中态、短暂聚焦反馈。',
        tag: 'interaction',
    },
    {
        name: 'Raised surface',
        token: '--ui-surface-raised',
        sampleFill: 'var(--ui-surface-raised)',
        sampleInk: 'var(--ui-fg)',
        description: '用于突出卡片、弹层或更高层级的内容容器。',
        best: '弹出层、重点卡片、浮层容器。',
        tag: 'elevated',
    },
    {
        name: 'Overlay',
        token: '--ui-surface-overlay',
        sampleFill: 'var(--ui-surface-overlay)',
        sampleInk: 'var(--ui-fg)',
        description: '覆盖整页的遮罩背景，负责压低背景干扰。',
        best: '模态、抽屉、全局遮罩。',
        tag: 'overlay',
    },
    {
        name: 'Border subtle',
        token: '--ui-border-subtle',
        sampleFill: 'var(--ui-surface-raised)',
        sampleInk: 'var(--ui-fg-muted)',
        sampleBorder: 'var(--ui-border-subtle)',
        description: '最轻的边线，适合背景分层但不需要太强存在感。',
        best: '弱分隔、卡片轮廓、辅助表面。',
        tag: 'border',
    },
    {
        name: 'Border default',
        token: '--ui-border',
        sampleFill: 'var(--ui-surface-raised)',
        sampleInk: 'var(--ui-fg-muted)',
        sampleBorder: 'var(--ui-border)',
        description: '默认边框，用于大多数表单和卡片外沿。',
        best: '输入框、卡片、分区容器。',
        tag: 'border',
    },
    {
        name: 'Border strong',
        token: '--ui-border-strong',
        sampleFill: 'var(--ui-surface-raised)',
        sampleInk: 'var(--ui-fg)',
        sampleBorder: 'var(--ui-border-strong)',
        description: '需要更明确的轮廓时再使用，避免每一层都很重。',
        best: '当前选中区域、重点卡片、明确分割。',
        tag: 'border',
    },
    {
        name: 'Tooltip bg',
        token: '--ui-tooltip-bg',
        sampleFill: 'var(--ui-tooltip-bg)',
        sampleInk: 'var(--ui-tooltip-fg)',
        description: '提示层背景，建议和整体 dark 基底一致，不要再回到偏蓝冷感。',
        best: 'Tooltip、轻量说明、悬浮提示。',
        tag: 'utility',
    },
    {
        name: 'Text primary',
        token: '--ui-fg',
        sampleFill: 'var(--ui-surface-raised)',
        sampleInk: 'var(--ui-fg)',
        description: '主要文本颜色，负责正文和最强信息层。',
        best: '标题、正文、重要信息。',
        tag: 'text',
    },
];

const themeTokens = [
    {
        name: 'Gray',
        token: '--ui-gray',
        swatches: [
            ['tint', '--ui-gray-tint', 'var(--ui-gray-tint)', '#111827'],
            ['default', '--ui-gray', 'var(--ui-gray)', 'var(--ui-bg)'],
            ['shade', '--ui-gray-shade', 'var(--ui-gray-shade)', '#ffffff'],
        ],
        description: '最稳妥的中性主题，适合界面 chrome 和后台系统。',
        best: '弱品牌、控制台、低干扰标签。',
    },
    {
        name: 'Olive',
        token: '--ui-olive',
        swatches: [
            ['tint', '--ui-olive-tint', 'var(--ui-olive-tint)', '#111827'],
            ['default', '--ui-olive', 'var(--ui-olive)', 'var(--ui-bg)'],
            ['shade', '--ui-olive-shade', 'var(--ui-olive-shade)', '#ffffff'],
        ],
        description: '带一点自然、编辑感，适合知识型、生活方式或环保场景。',
        best: '阅读、内容型后台、自然风格。',
    },
    {
        name: 'Tomato',
        token: '--ui-tomato',
        swatches: [
            ['tint', '--ui-tomato-tint', 'var(--ui-tomato-tint)', '#111827'],
            ['default', '--ui-tomato', 'var(--ui-tomato)', '#ffffff'],
            ['shade', '--ui-tomato-shade', 'var(--ui-tomato-shade)', '#ffffff'],
        ],
        description: '直接、明确、情绪强，适合出错与破坏性动作。',
        best: '删除、失败、危险提醒。',
    },
    {
        name: 'Ruby',
        token: '--ui-ruby',
        swatches: [
            ['tint', '--ui-ruby-tint', 'var(--ui-ruby-tint)', '#111827'],
            ['default', '--ui-ruby', 'var(--ui-ruby)', '#ffffff'],
            ['shade', '--ui-ruby-shade', 'var(--ui-ruby-shade)', '#ffffff'],
        ],
        description: '比 tomato 更偏品牌感，适合活动、告警或热情型视觉。',
        best: '营销活动、情绪化视觉、强调卡片。',
    },
    {
        name: 'Pink',
        token: '--ui-pink',
        swatches: [
            ['tint', '--ui-pink-tint', 'var(--ui-pink-tint)', '#111827'],
            ['default', '--ui-pink', 'var(--ui-pink)', '#111827'],
            ['shade', '--ui-pink-shade', 'var(--ui-pink-shade)', '#ffffff'],
        ],
        description: '更轻盈、更时尚，适合女性化或创意型场景。',
        best: '内容封面、活动主题、视觉标签。',
    },
    {
        name: 'Violet',
        token: '--ui-violet',
        swatches: [
            ['tint', '--ui-violet-tint', 'var(--ui-violet-tint)', '#111827'],
            ['default', '--ui-violet', 'var(--ui-violet)', '#111827'],
            ['shade', '--ui-violet-shade', 'var(--ui-violet-shade)', '#ffffff'],
        ],
        description: '带一点神秘和创造感，适合灵感、产品能力或高级感。',
        best: '创意产品、灵感页、品牌皮肤。',
    },
    {
        name: 'Indigo',
        token: '--ui-indigo',
        swatches: [
            ['tint', '--ui-indigo-tint', 'var(--ui-indigo-tint)', '#111827'],
            ['default', '--ui-indigo', 'var(--ui-indigo)', '#ffffff'],
            ['shade', '--ui-indigo-shade', 'var(--ui-indigo-shade)', '#ffffff'],
        ],
        description: '通用性最好的一类品牌色，适合默认主色。',
        best: '默认主按钮、导航、核心交互。',
    },
    {
        name: 'Blue',
        token: '--ui-blue',
        swatches: [
            ['tint', '--ui-blue-tint', 'var(--ui-blue-tint)', '#111827'],
            ['default', '--ui-blue', 'var(--ui-blue)', '#ffffff'],
            ['shade', '--ui-blue-shade', 'var(--ui-blue-shade)', '#ffffff'],
        ],
        description: '信息感最强，适合数据、状态、技术类表达。',
        best: '信息提示、图表、操作确认。',
    },
    {
        name: 'Teal',
        token: '--ui-teal',
        swatches: [
            ['tint', '--ui-teal-tint', 'var(--ui-teal-tint)', '#111827'],
            ['default', '--ui-teal', 'var(--ui-teal)', '#111827'],
            ['shade', '--ui-teal-shade', 'var(--ui-teal-shade)', '#ffffff'],
        ],
        description: '清爽、理性、偏科技气质，适合产品数据或工具类应用。',
        best: '数据工具、状态提示、科技感界面。',
    },
    {
        name: 'Grass',
        token: '--ui-grass',
        swatches: [
            ['tint', '--ui-grass-tint', 'var(--ui-grass-tint)', '#111827'],
            ['default', '--ui-grass', 'var(--ui-grass)', '#111827'],
            ['shade', '--ui-grass-shade', 'var(--ui-grass-shade)', '#ffffff'],
        ],
        description: '生长、进展、正向反馈，适合增长和成功语义。',
        best: '增长指标、成功状态、健康数据。',
    },
    {
        name: 'Mint',
        token: '--ui-mint',
        swatches: [
            ['tint', '--ui-mint-tint', 'var(--ui-mint-tint)', '#111827'],
            ['default', '--ui-mint', 'var(--ui-mint)', '#111827'],
            ['shade', '--ui-mint-shade', 'var(--ui-mint-shade)', '#ffffff'],
        ],
        description: '更轻、更干净，适合清新产品、健康和轻量信息。',
        best: '健康、护理、轻量科技。',
    },
    {
        name: 'Lime',
        token: '--ui-lime',
        swatches: [
            ['tint', '--ui-lime-tint', 'var(--ui-lime-tint)', '#111827'],
            ['default', '--ui-lime', 'var(--ui-lime)', '#111827'],
            ['shade', '--ui-lime-shade', 'var(--ui-lime-shade)', '#ffffff'],
        ],
        description: '高亮感强，适合需要被快速注意到的内容。',
        best: '重点标记、数据强调、活动提示。',
    },
    {
        name: 'Yellow',
        token: '--ui-yellow',
        swatches: [
            ['tint', '--ui-yellow-tint', 'var(--ui-yellow-tint)', '#111827'],
            ['default', '--ui-yellow', 'var(--ui-yellow)', '#111827'],
            ['shade', '--ui-yellow-shade', 'var(--ui-yellow-shade)', '#ffffff'],
        ],
        description: '警示和提醒感最明显，适合让用户停一下。',
        best: '提醒、待处理、注意事项。',
    },
    {
        name: 'Orange',
        token: '--ui-orange',
        swatches: [
            ['tint', '--ui-orange-tint', 'var(--ui-orange-tint)', '#111827'],
            ['default', '--ui-orange', 'var(--ui-orange)', '#111827'],
            ['shade', '--ui-orange-shade', 'var(--ui-orange-shade)', '#ffffff'],
        ],
        description: '活力、亲和、温暖，适合促销或动作引导。',
        best: '促销活动、辅助 CTA、温暖提示。',
    },
    {
        name: 'Gold',
        token: '--ui-gold',
        swatches: [
            ['tint', '--ui-gold-tint', 'var(--ui-gold-tint)', '#111827'],
            ['default', '--ui-gold', 'var(--ui-gold)', '#111827'],
            ['shade', '--ui-gold-shade', 'var(--ui-gold-shade)', '#ffffff'],
        ],
        description: '有奖励、成就和高级感，适合荣誉或会员体系。',
        best: '会员、奖项、稀缺权益。',
    },
];

const stateTokens = [
    {
        name: 'Danger',
        token: '--state-danger',
        sampleFill: 'var(--state-danger)',
        sampleInk: 'var(--state-danger-fg)',
        description: '删除、失败、阻断性错误。',
        best: '危险操作、错误提示、终止状态。',
        variants: [
            ['solid', 'var(--state-danger)'],
            ['soft', 'var(--state-danger-soft)'],
            ['subtle', 'var(--state-danger-subtle)'],
            ['border', 'var(--state-danger-border)'],
        ],
    },
    {
        name: 'Success',
        token: '--state-success',
        sampleFill: 'var(--state-success)',
        sampleInk: 'var(--state-success-fg)',
        description: '保存成功、完成、健康或增长。',
        best: '成功结果、通过状态、健康指标。',
        variants: [
            ['solid', 'var(--state-success)'],
            ['soft', 'var(--state-success-soft)'],
            ['subtle', 'var(--state-success-subtle)'],
            ['border', 'var(--state-success-border)'],
        ],
    },
    {
        name: 'Warning',
        token: '--state-warning',
        sampleFill: 'var(--state-warning)',
        sampleInk: 'var(--state-warning-fg)',
        description: '需要注意，但不一定是错误。',
        best: '待确认、风险提醒、注意事项。',
        variants: [
            ['solid', 'var(--state-warning)'],
            ['soft', 'var(--state-warning-soft)'],
            ['subtle', 'var(--state-warning-subtle)'],
            ['border', 'var(--state-warning-border)'],
        ],
    },
    {
        name: 'Info',
        token: '--state-info',
        sampleFill: 'var(--state-info)',
        sampleInk: 'var(--state-info-fg)',
        description: '说明、知识、状态同步。',
        best: '帮助信息、产品说明、状态通告。',
        variants: [
            ['solid', 'var(--state-info)'],
            ['soft', 'var(--state-info-soft)'],
            ['subtle', 'var(--state-info-subtle)'],
            ['border', 'var(--state-info-border)'],
        ],
    },
];

const gradientTokens = [
    {
        name: 'Sunrise',
        token: '.bg-gradient-sunrise',
        className: 'bg-gradient-sunrise',
        description: '偏暖的品牌开场，适合首屏、欢迎语和主 CTA 背景。',
        best: 'Hero、欢迎页、活动头图。',
        mood: 'warm',
    },
    {
        name: 'Aurora',
        token: '.bg-gradient-aurora',
        className: 'bg-gradient-aurora',
        description: '信息与成功感混合，适合工具页、状态面板和产品首页。',
        best: '状态页、数据面板、工具首页。',
        mood: 'balanced',
    },
    {
        name: 'Ocean',
        token: '.bg-gradient-ocean',
        className: 'bg-gradient-ocean',
        description: '更偏理性和技术感，适合内容沉浸、图表和技术产品。',
        best: '技术页、图表区、内容承载页。',
        mood: 'cool',
    },
    {
        name: 'Meadow',
        token: '.bg-gradient-meadow',
        className: 'bg-gradient-meadow',
        description: '更轻盈的绿色系，适合健康、增长和轻自然风格。',
        best: '健康产品、增长页、环保主题。',
        mood: 'fresh',
    },
    {
        name: 'Ember',
        token: '.bg-gradient-ember',
        className: 'bg-gradient-ember',
        description: '偏提示与注意力，适合强调、告警和促销氛围。',
        best: '提醒页、活动页、强 CTA。',
        mood: 'alert',
    },
    {
        name: 'Dusk',
        token: '.bg-gradient-dusk',
        className: 'bg-gradient-dusk',
        description: '更适合夜间或高对比场景，能把内容轮廓压得更稳。',
        best: '深色首页、夜间模式、品牌封面。',
        mood: 'deep',
    },
    {
        name: 'Gold',
        token: '.bg-gradient-gold',
        className: 'bg-gradient-gold',
        description: '偏奖励和质感，适合会员、成就、稀缺权益。',
        best: '会员页、奖项页、权益卡。',
        mood: 'premium',
    },
    {
        name: 'Forest',
        token: '.bg-gradient-forest',
        className: 'bg-gradient-forest',
        description: '更自然、稳定，适合内容长期阅读和低干扰界面。',
        best: '阅读页、知识页、后台首页。',
        mood: 'calm',
    },
];

function renderCards(containerSelector, items) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        return;
    }

    container.innerHTML = items
        .map((item) => {
            const swatches = Array.isArray(item.swatches)
                ? item.swatches.map(([label, token, fill, ink]) => ({ label, token, fill, ink }))
                : null;
            const defaultSwatch = swatches
                ? swatches.find((swatch) => swatch.label === 'default') || swatches[0]
                : null;
            const previewFill = item.sampleFill || defaultSwatch?.fill || 'transparent';
            const previewInk = item.sampleInk || defaultSwatch?.ink || 'currentColor';
            const borderStyle = item.sampleBorder
                ? `--sample-border: ${item.sampleBorder};`
                : '';
            const toneMarkup = swatches
                ? `
                    <div class="tone-ladder">
                        ${swatches
                            .filter((swatch) => swatch.label === 'tint' || swatch.label === 'shade')
                            .map(
                                (swatch) => `
                                    <div class="tone-row" style="--sample-fill: ${swatch.fill}; --sample-ink: ${swatch.ink};">
                                        <div class="tone-chip-fill"></div>
                                        <div class="tone-row-meta">
                                            <div class="tone-row-label">${swatch.label}</div>
                                            <div class="tone-row-token">${swatch.token}</div>
                                        </div>
                                    </div>
                                `
                            )
                            .join('')}
                    </div>
                `
                : '';
            const variantMarkup = Array.isArray(item.variants)
                ? `
                    <div class="token-strip">
                        ${item.variants
                            .map(
                                ([label, value]) => `
                                    <div class="tone-chip" style="--sample-fill: ${value}; --sample-ink: ${item.sampleInk};">
                                        ${label}
                                    </div>
                                `
                            )
                            .join('')}
                    </div>
                `
                : '';

            return `
                <article class="token-card">
                    <div class="token-swatch" style="--sample-fill: ${previewFill}; --sample-ink: ${previewInk}; ${borderStyle}">
                        <div class="token-swatch-meta">
                            <span class="token-swatch-token">${item.token}</span>
                            <span class="token-tag">${item.tag || 'color'}</span>
                        </div>
                    </div>
                    <div class="token-body">
                        <div class="token-head">
                            <p class="token-name">${item.name}</p>
                        </div>
                        <p class="token-desc">${item.description}</p>
                        <p class="token-note"><strong>适合:</strong> ${item.best}</p>
                        ${toneMarkup}
                        ${variantMarkup}
                    </div>
                </article>
            `;
        })
        .join('');
}

function renderDemoCards() {
    const container = document.querySelector('#demo-cards');
    if (!container) {
        return;
    }

    container.innerHTML = `
        <article class="demo-card">
            <h4>主操作区</h4>
            <div class="callout">
                <strong>适合：主按钮、核心 CTA、关键导航。</strong>
                <p>
                    用 <span>--tone-solid</span> 做强对比，搭配
                    <span>--tone-fg</span> 保证可读性，外层用
                    <span>--ui-surface-raised</span> 让按钮更像可点击的动作层。
                </p>
            </div>
            <div class="token-strip">
                <div class="tone-chip" style="--sample-fill: var(--tone-solid); --sample-ink: var(--tone-fg);">solid</div>
                <div class="tone-chip" style="--sample-fill: var(--tone-subtle); --sample-ink: var(--tone-text);">subtle</div>
                <div class="tone-chip" style="--sample-fill: var(--tone-soft); --sample-ink: var(--tone-text);">soft</div>
            </div>
        </article>
        <article class="demo-card">
            <h4>状态提醒</h4>
            <div
                class="callout"
                style="border-color: color-mix(in srgb, var(--state-warning) 35%, var(--ui-border)); background: linear-gradient(180deg, var(--state-warning-subtle), var(--ui-surface-subtle));"
            >
                <strong>适合：提醒用户检查、补充信息或确认风险。</strong>
                <p>用浅背景承载语义，避免整块纯色压住内容。状态色更适合做标题、边框、图标和局部强调。</p>
            </div>
            <div class="token-strip">
                <div class="tone-chip" style="--sample-fill: var(--state-warning); --sample-ink: var(--state-warning-fg);">warning</div>
                <div class="tone-chip" style="--sample-fill: var(--state-warning-subtle); --sample-ink: var(--state-warning-text);">subtle</div>
                <div class="tone-chip" style="--sample-fill: var(--state-warning-soft); --sample-ink: var(--state-warning-text);">soft</div>
            </div>
        </article>
        <article class="demo-card">
            <h4>表面层级</h4>
            <div class="stack" id="surface-stack"></div>
        </article>
    `;
}

function renderSurfaceStack() {
    const stack = document.querySelector('#surface-stack');
    if (!stack) {
        return;
    }

    const rows = [
        ['bg', 'var(--ui-bg)', 'page base'],
        ['surface', 'var(--ui-surface)', 'main content'],
        ['raised', 'var(--ui-surface-raised)', 'card layer'],
        ['overlay', 'var(--ui-surface-overlay)', 'modal backdrop'],
        ['code', 'var(--tone-code-bg)', 'code / snippet'],
    ];

    stack.innerHTML = rows
        .map(
            ([label, fill, meta]) => `
                <div class="stack-row">
                    <div class="stack-label">${label}</div>
                    <div class="stack-bar" style="--sample-fill: ${fill};"></div>
                    <div class="stack-meta">${meta}</div>
                </div>
            `
        )
        .join('');
}

function renderGradientCards() {
    const container = document.querySelector('#gradient-grid');
    if (!container) {
        return;
    }

    container.innerHTML = gradientTokens
        .map(
            (item) => `
                <article class="gradient-card">
                    <div class="gradient-preview ${item.className}">
                        <span class="gradient-preview-title">${item.name}</span>
                        <span class="gradient-preview-token">${item.token}</span>
                    </div>
                    <div class="gradient-desc">
                        <p>${item.description}</p>
                        <p><strong>适合:</strong> ${item.best}</p>
                    </div>
                    <div class="gradient-note">
                        <div class="gradient-meta">
                            <span class="gradient-pill">${item.mood}</span>
                            <span class="gradient-pill">background</span>
                        </div>
                    </div>
                </article>
            `
        )
        .join('');
}

renderCards('#ui-grid', uiTokens);
renderCards('#theme-grid', themeTokens);
renderCards('#state-grid', stateTokens);
renderDemoCards();
renderSurfaceStack();
renderGradientCards();
```
