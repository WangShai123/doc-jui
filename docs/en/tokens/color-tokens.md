# Color Tokens

To keep the default stylesheet small, JUI provides 3 kinds of color tokens by default, each with light and dark mode values:

- UI structure colors: foreground, background, borders, disabled state, fixed theme preview values, and related values.
- Dynamic theme colors: used for primary actions or emphasis, generated from the current theme configuration.
- Semantic state colors: includes `info`, `success`, `warning`, and `danger` state colors.

## UI Structure Colors

Format: `ui-*`

### Common UI Colors

Format: `ui-{object}-{state}`

| Token                 | Light              | Dark                     | Description |
| --------------------- | ------------------ | ------------------------ | ----------- |
| `--ui-bg`             | `#ffffff`          | `#030712`                | Main background |
| `--ui-bg-subtle`      | `#f9fafb`          | `#111827`                | Subtle background |
| `--ui-bg-muted`       | `#f3f4f6`          | `#1f2937`                | Muted background |
| `--ui-surface`        | `#ffffff`          | `#030712`                | Surface |
| `--ui-surface-subtle` | `#f9fafb`          | `#111827`                | Subtle surface |
| `--ui-surface-muted`  | `#f3f4f6`          | `#1f2937`                | Muted surface |
| `--ui-surface-hover`  | `rgba(0,0,0,0.02)` | `rgba(255,255,255,0.05)` | Hover state |
| `--ui-surface-active` | `rgba(0,0,0,0.04)` | `rgba(255,255,255,0.08)` | Active state |
| `--ui-fg`             | `#111827`          | `#f9fafb`                | Main text |
| `--ui-fg-muted`       | `#6b7280`          | `#9ca3af`                | Secondary text |
| `--ui-fg-soft`        | `#9ca3af`          | `#6b7280`                | Tertiary text |
| `--ui-fg-subtle`      | `#d1d5db`          | `#4b5563`                | Subtle text |
| `--ui-border-subtle`  | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.08)` | Light border |
| `--ui-border`         | `rgba(0,0,0,0.1)`  | `rgba(255,255,255,0.12)` | Default border |
| `--ui-border-strong`  | `rgba(0,0,0,0.2)`  | `rgba(255,255,255,0.2)`  | Strong border |
| `--ui-disabled-bg`    | `rgba(0,0,0,0.04)` | `rgba(255,255,255,0.05)` | Disabled background |
| `--ui-disabled-fg`    | `#9ca3af`          | `#6b7280`                | Disabled text |

### Fixed Theme Colors

15 fixed theme colors for preview scenarios.

Format: `ui-{theme}`

| Token         | Light     | Dark      |
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

## Dynamic Theme Colors

Used for primary actions or emphasis, generated from the current theme configuration.

Format: `tone-*`

| Token                  | Description |
| ---------------------- | ----------- |
| `--tone-subtle`        | Very light tone |
| `--tone-soft`          | Light tone |
| `--tone-muted`         | Medium tone |
| `--tone-weak`          | Very faint tone, no transparency |
| `--tone-wash`          | Very faint tone |
| `--tone-border`        | Default border |
| `--tone-border-strong` | Strong border |
| `--tone-solid`         | Primary color |
| `--tone-tint`          | Light primary color |
| `--tone-shade`         | Dark primary color |
| `--tone-solid-hover`   | Hover state |
| `--tone-solid-active`  | Active state |
| `--tone-text`          | Brand text |
| `--tone-text-hover`    | Brand hover text |
| `--tone-fg`            | Foreground on primary color |
| `--tone-ring`          | Focus ring |
| `--tone-highlight`     | Highlight background |
| `--tone-highlight-fg`  | Highlight foreground |
| `--tone-heading`       | Heading text |
| `--tone-subtitle`      | Subtitle text |
| `--tone-body`          | Body text |
| `--tone-caption`       | Caption text |
| `--tone-muted`         | Muted text |
| `--tone-disabled`      | Disabled text |
| `--tone-link`          | Link color |
| `--tone-link-hover`    | Link hover |
| `--tone-link-visited`  | Visited link |
| `--tone-link-active`   | Active link |
| `--tone-link-disabled` | Disabled link |
| `--tone-code-bg`       | Code background |
| `--tone-code-fg`       | Code text |
| `--tone-card`          | Card background |
| `--tone-card-hover`    | Card hover |
| `--tone-card-border`   | Card border |
| `--tone-card-shadow`   | Card shadow |

## Semantic State Colors

Used for `info`, `success`, `warning`, and `danger` state colors. For example: `--state-info`, `--state-success-text`.

Format: `state-*`

| Token                   | Description |
| ----------------------- | ----------- |
| `--state-{name}`        | Primary color |
| `--state-{name}-hover`  | Hover state |
| `--state-{name}-active` | Active state |
| `--state-{name}-fg`     | Foreground on primary color |
| `--state-{name}-text`   | Text color |
| `--state-{name}-subtle` | Subtle background |
| `--state-{name}-soft`   | Soft background |
| `--state-{name}-muted`  | Medium background |
| `--state-{name}-weak`   | Very faint background |
| `--state-{name}-border` | Border color |
| `--state-{name}-ring`   | Focus ring |
