# Color Tokens

To keep the default stylesheet small, JUI provides 3 kinds of color tokens by default, each with light and dark mode values:

- UI structure colors: foreground, background, borders, disabled state, fixed theme preview values, and related values.
- Dynamic theme colors: used for primary actions or emphasis, generated from the current theme configuration.
- Semantic state colors: includes `info`, `success`, `warning`, and `danger` state colors.

## UI Structure Colors

Format: `ui-*`

### Common UI Colors

These tokens define the page scaffold, surface hierarchy, borders, overlays, and text emphasis.

Format: `ui-{state}`

<div class="section-grid" id="ui-grid"></div>

| Token                 | Light              | Dark                     | Description         |
| --------------------- | ------------------ | ------------------------ | ------------------- |
| `--ui-bg`             | `#ffffff`          | `#030712`                | Main background     |
| `--ui-bg-subtle`      | `#f9fafb`          | `#111827`                | Subtle background   |
| `--ui-bg-muted`       | `#f3f4f6`          | `#1f2937`                | Muted background    |
| `--ui-surface`        | `#ffffff`          | `#030712`                | Surface             |
| `--ui-surface-subtle` | `#f9fafb`          | `#111827`                | Subtle surface      |
| `--ui-surface-muted`  | `#f3f4f6`          | `#1f2937`                | Muted surface       |
| `--ui-surface-hover`  | `rgba(0,0,0,0.02)` | `rgba(255,255,255,0.05)` | Hover state         |
| `--ui-surface-active` | `rgba(0,0,0,0.04)` | `rgba(255,255,255,0.08)` | Active state        |
| `--ui-fg`             | `#111827`          | `#f9fafb`                | Main text           |
| `--ui-fg-muted`       | `#6b7280`          | `#9ca3af`                | Secondary text      |
| `--ui-fg-soft`        | `#9ca3af`          | `#6b7280`                | Tertiary text       |
| `--ui-fg-subtle`      | `#d1d5db`          | `#4b5563`                | Subtle text         |
| `--ui-border-subtle`  | `rgba(0,0,0,0.06)` | `rgba(255,255,255,0.08)` | Light border        |
| `--ui-border`         | `rgba(0,0,0,0.1)`  | `rgba(255,255,255,0.12)` | Default border      |
| `--ui-border-strong`  | `rgba(0,0,0,0.2)`  | `rgba(255,255,255,0.2)`  | Strong border       |
| `--ui-disabled-bg`    | `rgba(0,0,0,0.04)` | `rgba(255,255,255,0.05)` | Disabled background |
| `--ui-disabled-fg`    | `#9ca3af`          | `#6b7280`                | Disabled text       |

### Fixed Theme Colors

The 15 fixed theme colors are suited to themes, labels, charts, category cards, and brand identity. They do not all need to be used as backgrounds.

Format: `ui-{theme}`

<div class="section-grid" id="theme-grid"></div>

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

| Token                  | Description                      |
| ---------------------- | -------------------------------- |
| `--tone-subtle`        | Very light tone                  |
| `--tone-soft`          | Light tone                       |
| `--tone-muted`         | Medium tone                      |
| `--tone-weak`          | Very faint tone, no transparency |
| `--tone-wash`          | Very faint tone                  |
| `--tone-border`        | Default border                   |
| `--tone-border-strong` | Strong border                    |
| `--tone-solid`         | Primary color                    |
| `--tone-tint`          | Light primary color              |
| `--tone-shade`         | Dark primary color               |
| `--tone-solid-hover`   | Hover state                      |
| `--tone-solid-active`  | Active state                     |
| `--tone-text`          | Brand text                       |
| `--tone-text-hover`    | Brand hover text                 |
| `--tone-fg`            | Foreground on primary color      |
| `--tone-ring`          | Focus ring                       |
| `--tone-highlight`     | Highlight background             |
| `--tone-highlight-fg`  | Highlight foreground             |
| `--tone-heading`       | Heading text                     |
| `--tone-subtitle`      | Subtitle text                    |
| `--tone-body`          | Body text                        |
| `--tone-caption`       | Caption text                     |
| `--tone-muted`         | Muted text                       |
| `--tone-disabled`      | Disabled text                    |
| `--tone-link`          | Link color                       |
| `--tone-link-hover`    | Link hover                       |
| `--tone-link-visited`  | Visited link                     |
| `--tone-link-active`   | Active link                      |
| `--tone-link-disabled` | Disabled link                    |
| `--tone-code-bg`       | Code background                  |
| `--tone-code-fg`       | Code text                        |
| `--tone-card`          | Card background                  |
| `--tone-card-hover`    | Card hover                       |
| `--tone-card-border`   | Card border                      |
| `--tone-card-shadow`   | Card shadow                      |

## Semantic State Colors

State colors communicate what happened, such as success, warning, danger, or informational feedback. Use `info`, `success`, `warning`, and `danger` to describe state colors, for example `--state-info` and `--state-success-text`.

Format: `state-*`

<div class="section-grid" id="state-grid"></div>

| Token                   | Description                 |
| ----------------------- | --------------------------- |
| `--state-{name}`        | Primary color               |
| `--state-{name}-hover`  | Hover state                 |
| `--state-{name}-active` | Active state                |
| `--state-{name}-fg`     | Foreground on primary color |
| `--state-{name}-text`   | Text color                  |
| `--state-{name}-subtle` | Subtle background           |
| `--state-{name}-soft`   | Soft background             |
| `--state-{name}-muted`  | Medium background           |
| `--state-{name}-weak`   | Very faint background       |
| `--state-{name}-border` | Border color                |
| `--state-{name}-ring`   | Focus ring                  |

## Usage Preview

### Usage

The following examples combine `background`, `surface`, `tone`, and `state` tokens in layouts closer to real interfaces.

<div class="demo-cards" id="demo-cards"></div>

### Background Gradients

These gradients reuse existing theme, state, and surface colors. Each card represents one background pattern.

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
        description: 'The outermost page background. Keep it quiet so it does not compete with the theme color.',
        best: 'Page shells, global backgrounds, and hero base layers.',
        tag: 'background',
    },
    {
        name: 'Soft background',
        token: '--ui-bg-subtle',
        sampleFill: 'var(--ui-bg-subtle)',
        sampleInk: 'var(--ui-fg)',
        description: 'One level above the main background, useful for sectioning and light grouping.',
        best: 'Content sections, secondary blocks, and subtle dividers.',
        tag: 'layer',
    },
    {
        name: 'Muted background',
        token: '--ui-bg-muted',
        sampleFill: 'var(--ui-bg-muted)',
        sampleInk: 'var(--ui-fg)',
        description: 'More visible than subtle, for a stronger layer that still stays neutral.',
        best: 'Nested cards, lightweight containers, and list items.',
        tag: 'layer',
    },
    {
        name: 'Surface',
        token: '--ui-surface',
        sampleFill: 'var(--ui-surface)',
        sampleInk: 'var(--ui-fg)',
        description: 'The standard content surface, commonly used for cards and panels.',
        best: 'Cards, panels, and form sections.',
        tag: 'surface',
    },
    {
        name: 'Surface subtle',
        token: '--ui-surface-subtle',
        sampleFill: 'var(--ui-surface-subtle)',
        sampleInk: 'var(--ui-fg)',
        description: 'Close to the main surface, but useful for a slight hierarchy shift.',
        best: 'Secondary cards, information areas, and lightly outlined panels.',
        tag: 'surface',
    },
    {
        name: 'Surface muted',
        token: '--ui-surface-muted',
        sampleFill: 'var(--ui-surface-muted)',
        sampleInk: 'var(--ui-fg)',
        description: 'Adds a stable background for deeper nested content.',
        best: 'Nested modules, item backgrounds, and supporting containers.',
        tag: 'surface',
    },
    {
        name: 'Hover state',
        token: '--ui-surface-hover',
        sampleFill: 'var(--ui-surface-hover)',
        sampleInk: 'var(--ui-fg)',
        description: 'Light feedback for hover states without adding heavy color.',
        best: 'Interactive lists, button hovers, and row hover states.',
        tag: 'interaction',
    },
    {
        name: 'Active state',
        token: '--ui-surface-active',
        sampleFill: 'var(--ui-surface-active)',
        sampleInk: 'var(--ui-fg)',
        description: 'Short-lived feedback for pressed or active states, slightly stronger than hover.',
        best: 'Pressed states, selected states, and transient focus feedback.',
        tag: 'interaction',
    },
    {
        name: 'Raised surface',
        token: '--ui-surface-raised',
        sampleFill: 'var(--ui-surface-raised)',
        sampleInk: 'var(--ui-fg)',
        description: 'Highlights cards, popovers, or content containers on a higher layer.',
        best: 'Popovers, emphasized cards, and floating containers.',
        tag: 'elevated',
    },
    {
        name: 'Overlay',
        token: '--ui-surface-overlay',
        sampleFill: 'var(--ui-surface-overlay)',
        sampleInk: 'var(--ui-fg)',
        description: 'A full-page overlay surface that reduces background distraction.',
        best: 'Modals, drawers, and global overlays.',
        tag: 'overlay',
    },
    {
        name: 'Border subtle',
        token: '--ui-border-subtle',
        sampleFill: 'var(--ui-surface-raised)',
        sampleInk: 'var(--ui-fg-muted)',
        sampleBorder: 'var(--ui-border-subtle)',
        description: 'The lightest border, for separating layers without a strong outline.',
        best: 'Subtle dividers, card outlines, and supporting surfaces.',
        tag: 'border',
    },
    {
        name: 'Border default',
        token: '--ui-border',
        sampleFill: 'var(--ui-surface-raised)',
        sampleInk: 'var(--ui-fg-muted)',
        sampleBorder: 'var(--ui-border)',
        description: 'The default border for most form controls and card edges.',
        best: 'Inputs, cards, and section containers.',
        tag: 'border',
    },
    {
        name: 'Border strong',
        token: '--ui-border-strong',
        sampleFill: 'var(--ui-surface-raised)',
        sampleInk: 'var(--ui-fg)',
        sampleBorder: 'var(--ui-border-strong)',
        description: 'Use when a clearer outline is needed. Avoid making every layer this strong.',
        best: 'Selected areas, emphasized cards, and clear separation.',
        tag: 'border',
    },
    {
        name: 'Tooltip bg',
        token: '--ui-tooltip-bg',
        sampleFill: 'var(--ui-tooltip-bg)',
        sampleInk: 'var(--ui-tooltip-fg)',
        description: 'Tooltip background. Keep it aligned with the neutral dark base instead of shifting blue.',
        best: 'Tooltips, lightweight help text, and floating hints.',
        tag: 'utility',
    },
    {
        name: 'Text primary',
        token: '--ui-fg',
        sampleFill: 'var(--ui-surface-raised)',
        sampleInk: 'var(--ui-fg)',
        description: 'Primary text color for body copy and the strongest information layer.',
        best: 'Headings, body text, and important information.',
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
        description: 'The safest neutral theme, suitable for interface chrome and admin systems.',
        best: 'Light branding, dashboards, and low-distraction labels.',
    },
    {
        name: 'Olive',
        token: '--ui-olive',
        swatches: [
            ['tint', '--ui-olive-tint', 'var(--ui-olive-tint)', '#111827'],
            ['default', '--ui-olive', 'var(--ui-olive)', 'var(--ui-bg)'],
            ['shade', '--ui-olive-shade', 'var(--ui-olive-shade)', '#ffffff'],
        ],
        description: 'Natural and editorial, suited to knowledge, lifestyle, or environmental contexts.',
        best: 'Reading, content-heavy dashboards, and natural themes.',
    },
    {
        name: 'Tomato',
        token: '--ui-tomato',
        swatches: [
            ['tint', '--ui-tomato-tint', 'var(--ui-tomato-tint)', '#111827'],
            ['default', '--ui-tomato', 'var(--ui-tomato)', '#ffffff'],
            ['shade', '--ui-tomato-shade', 'var(--ui-tomato-shade)', '#ffffff'],
        ],
        description: 'Direct, clear, and expressive, suited to errors and destructive actions.',
        best: 'Delete actions, failures, and danger alerts.',
    },
    {
        name: 'Ruby',
        token: '--ui-ruby',
        swatches: [
            ['tint', '--ui-ruby-tint', 'var(--ui-ruby-tint)', '#111827'],
            ['default', '--ui-ruby', 'var(--ui-ruby)', '#ffffff'],
            ['shade', '--ui-ruby-shade', 'var(--ui-ruby-shade)', '#ffffff'],
        ],
        description: 'More brand-oriented than tomato, useful for campaigns, alerts, or expressive visuals.',
        best: 'Campaigns, expressive visuals, and emphasized cards.',
    },
    {
        name: 'Pink',
        token: '--ui-pink',
        swatches: [
            ['tint', '--ui-pink-tint', 'var(--ui-pink-tint)', '#111827'],
            ['default', '--ui-pink', 'var(--ui-pink)', '#111827'],
            ['shade', '--ui-pink-shade', 'var(--ui-pink-shade)', '#ffffff'],
        ],
        description: 'Light and stylish, suited to creative or softer visual contexts.',
        best: 'Content covers, campaign themes, and visual labels.',
    },
    {
        name: 'Violet',
        token: '--ui-violet',
        swatches: [
            ['tint', '--ui-violet-tint', 'var(--ui-violet-tint)', '#111827'],
            ['default', '--ui-violet', 'var(--ui-violet)', '#111827'],
            ['shade', '--ui-violet-shade', 'var(--ui-violet-shade)', '#ffffff'],
        ],
        description: 'Creative and slightly mysterious, suited to inspiration, product capability, or premium styling.',
        best: 'Creative products, inspiration pages, and brand themes.',
    },
    {
        name: 'Indigo',
        token: '--ui-indigo',
        swatches: [
            ['tint', '--ui-indigo-tint', 'var(--ui-indigo-tint)', '#111827'],
            ['default', '--ui-indigo', 'var(--ui-indigo)', '#ffffff'],
            ['shade', '--ui-indigo-shade', 'var(--ui-indigo-shade)', '#ffffff'],
        ],
        description: 'A highly versatile brand color, suitable as the default primary color.',
        best: 'Default primary buttons, navigation, and core interactions.',
    },
    {
        name: 'Blue',
        token: '--ui-blue',
        swatches: [
            ['tint', '--ui-blue-tint', 'var(--ui-blue-tint)', '#111827'],
            ['default', '--ui-blue', 'var(--ui-blue)', '#ffffff'],
            ['shade', '--ui-blue-shade', 'var(--ui-blue-shade)', '#ffffff'],
        ],
        description: 'Strongly informational, suited to data, status, and technical expression.',
        best: 'Information messages, charts, and action confirmations.',
    },
    {
        name: 'Teal',
        token: '--ui-teal',
        swatches: [
            ['tint', '--ui-teal-tint', 'var(--ui-teal-tint)', '#111827'],
            ['default', '--ui-teal', 'var(--ui-teal)', '#111827'],
            ['shade', '--ui-teal-shade', 'var(--ui-teal-shade)', '#ffffff'],
        ],
        description: 'Clean, rational, and technical, suited to product data or tooling interfaces.',
        best: 'Data tools, status messages, and technical UIs.',
    },
    {
        name: 'Grass',
        token: '--ui-grass',
        swatches: [
            ['tint', '--ui-grass-tint', 'var(--ui-grass-tint)', '#111827'],
            ['default', '--ui-grass', 'var(--ui-grass)', '#111827'],
            ['shade', '--ui-grass-shade', 'var(--ui-grass-shade)', '#ffffff'],
        ],
        description: 'Suggests growth, progress, and positive feedback.',
        best: 'Growth metrics, success states, and health data.',
    },
    {
        name: 'Mint',
        token: '--ui-mint',
        swatches: [
            ['tint', '--ui-mint-tint', 'var(--ui-mint-tint)', '#111827'],
            ['default', '--ui-mint', 'var(--ui-mint)', '#111827'],
            ['shade', '--ui-mint-shade', 'var(--ui-mint-shade)', '#ffffff'],
        ],
        description: 'Light and clean, suited to fresh products, health, and lightweight information.',
        best: 'Health, care, and lightweight technology.',
    },
    {
        name: 'Lime',
        token: '--ui-lime',
        swatches: [
            ['tint', '--ui-lime-tint', 'var(--ui-lime-tint)', '#111827'],
            ['default', '--ui-lime', 'var(--ui-lime)', '#111827'],
            ['shade', '--ui-lime-shade', 'var(--ui-lime-shade)', '#ffffff'],
        ],
        description: 'High-visibility color for content that needs quick attention.',
        best: 'Highlights, data emphasis, and campaign notices.',
    },
    {
        name: 'Yellow',
        token: '--ui-yellow',
        swatches: [
            ['tint', '--ui-yellow-tint', 'var(--ui-yellow-tint)', '#111827'],
            ['default', '--ui-yellow', 'var(--ui-yellow)', '#111827'],
            ['shade', '--ui-yellow-shade', 'var(--ui-yellow-shade)', '#ffffff'],
        ],
        description: 'The clearest warning and attention color, useful when users should pause.',
        best: 'Reminders, pending items, and caution notes.',
    },
    {
        name: 'Orange',
        token: '--ui-orange',
        swatches: [
            ['tint', '--ui-orange-tint', 'var(--ui-orange-tint)', '#111827'],
            ['default', '--ui-orange', 'var(--ui-orange)', '#111827'],
            ['shade', '--ui-orange-shade', 'var(--ui-orange-shade)', '#ffffff'],
        ],
        description: 'Energetic, approachable, and warm, suited to promotions or action guidance.',
        best: 'Promotions, secondary CTAs, and warm notices.',
    },
    {
        name: 'Gold',
        token: '--ui-gold',
        swatches: [
            ['tint', '--ui-gold-tint', 'var(--ui-gold-tint)', '#111827'],
            ['default', '--ui-gold', 'var(--ui-gold)', '#111827'],
            ['shade', '--ui-gold-shade', 'var(--ui-gold-shade)', '#ffffff'],
        ],
        description: 'Conveys rewards, achievement, and premium value.',
        best: 'Membership, awards, and exclusive benefits.',
    },
];

const stateTokens = [
    {
        name: 'Danger',
        token: '--state-danger',
        sampleFill: 'var(--state-danger)',
        sampleInk: 'var(--state-danger-fg)',
        description: 'Delete actions, failures, and blocking errors.',
        best: 'Dangerous actions, error messages, and terminal states.',
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
        description: 'Saved, complete, healthy, or growing states.',
        best: 'Successful results, passing states, and health metrics.',
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
        description: 'Needs attention, but is not necessarily an error.',
        best: 'Pending confirmation, risk notices, and caution notes.',
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
        description: 'Explanation, knowledge, and state synchronization.',
        best: 'Help text, product explanations, and status notices.',
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
        description: 'A warm branded opening, suited to hero sections, welcome screens, and primary CTA backgrounds.',
        best: 'Hero sections, welcome pages, and campaign headers.',
        mood: 'warm',
    },
    {
        name: 'Aurora',
        token: '.bg-gradient-aurora',
        className: 'bg-gradient-aurora',
        description: 'Combines information and success cues, suited to tool pages, status panels, and product home pages.',
        best: 'Status pages, data panels, and tool home pages.',
        mood: 'balanced',
    },
    {
        name: 'Ocean',
        token: '.bg-gradient-ocean',
        className: 'bg-gradient-ocean',
        description: 'More rational and technical, suited to immersive content, charts, and technical products.',
        best: 'Technical pages, chart sections, and content-heavy pages.',
        mood: 'cool',
    },
    {
        name: 'Meadow',
        token: '.bg-gradient-meadow',
        className: 'bg-gradient-meadow',
        description: 'A lighter green palette, suited to health, growth, and natural styling.',
        best: 'Health products, growth pages, and environmental themes.',
        mood: 'fresh',
    },
    {
        name: 'Ember',
        token: '.bg-gradient-ember',
        className: 'bg-gradient-ember',
        description: 'Attention-oriented, suited to emphasis, alerts, and promotional moments.',
        best: 'Notice pages, campaign pages, and strong CTAs.',
        mood: 'alert',
    },
    {
        name: 'Dusk',
        token: '.bg-gradient-dusk',
        className: 'bg-gradient-dusk',
        description: 'Better for nighttime or high-contrast scenes, with a steadier content silhouette.',
        best: 'Dark home pages, night mode, and brand covers.',
        mood: 'deep',
    },
    {
        name: 'Gold',
        token: '.bg-gradient-gold',
        className: 'bg-gradient-gold',
        description: 'Rewarding and premium, suited to memberships, achievements, and exclusive benefits.',
        best: 'Membership pages, award pages, and benefit cards.',
        mood: 'premium',
    },
    {
        name: 'Forest',
        token: '.bg-gradient-forest',
        className: 'bg-gradient-forest',
        description: 'Natural and stable, suited to long-form reading and low-distraction interfaces.',
        best: 'Reading pages, knowledge pages, and dashboard home pages.',
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
                        <p class="token-note"><strong>Best for:</strong> ${item.best}</p>
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
            <h4>Primary Action Area</h4>
            <div class="callout">
                <strong>Best for primary buttons, core CTAs, and key navigation.</strong>
                <p>
                    Use <span>--tone-solid</span> for strong contrast with
                    <span>--tone-fg</span> for readability. Wrap it in
                    <span>--ui-surface-raised</span> so actions feel clickable.
                </p>
            </div>
            <div class="token-strip">
                <div class="tone-chip" style="--sample-fill: var(--tone-solid); --sample-ink: var(--tone-fg);">solid</div>
                <div class="tone-chip" style="--sample-fill: var(--tone-subtle); --sample-ink: var(--tone-text);">subtle</div>
                <div class="tone-chip" style="--sample-fill: var(--tone-soft); --sample-ink: var(--tone-text);">soft</div>
            </div>
        </article>
        <article class="demo-card">
            <h4>Status Notice</h4>
            <div
                class="callout"
                style="border-color: color-mix(in srgb, var(--state-warning) 35%, var(--ui-border)); background: linear-gradient(180deg, var(--state-warning-subtle), var(--ui-surface-subtle));"
            >
                <strong>Best for prompting users to review, add information, or confirm risk.</strong>
                <p>Use subtle backgrounds for semantics instead of large solid blocks. State colors work best on titles, borders, icons, and local emphasis.</p>
            </div>
            <div class="token-strip">
                <div class="tone-chip" style="--sample-fill: var(--state-warning); --sample-ink: var(--state-warning-fg);">warning</div>
                <div class="tone-chip" style="--sample-fill: var(--state-warning-subtle); --sample-ink: var(--state-warning-text);">subtle</div>
                <div class="tone-chip" style="--sample-fill: var(--state-warning-soft); --sample-ink: var(--state-warning-text);">soft</div>
            </div>
        </article>
        <article class="demo-card">
            <h4>Surface Hierarchy</h4>
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
                        <p><strong>Best for:</strong> ${item.best}</p>
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
