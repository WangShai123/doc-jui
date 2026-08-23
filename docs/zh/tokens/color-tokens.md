# 色彩令牌

出于最小化默认样式的目的，JUI 默认提供 3 种色彩令牌，且对应亮暗模式：

- UI 结构色：围绕 前景色、背景色、边框、禁用、固定主题预览值等。
- 动态主题色：用于表示的主要操作或强调，根据当前主题配置动态生成。
- 语义状态色：包含 `info`, `success`, `warning`, `danger` 状态颜色。

## UI 结构色

格式：`ui-*`

### 常用 UI 色

格式：`ui-{object}-{state}`

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

15 个固定主题色，供预览场景使用。

格式：`ui-{theme}`

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

用于表示 `info`, `success`, `warning`, `danger` 状态颜色。如：`--state-info`, `--state-success-text`

格式：`state-*`

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
