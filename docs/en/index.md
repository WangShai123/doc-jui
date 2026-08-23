---
layout: home
title: Home
keywords: vanilla-jui, UI Library, JavaScript
description: Vanilla-JUI is a lightweight, composable, and themeable native JavaScript UI component library.
layouts:
  home:
    hero:
      badge: vanilla ui library
      title: Build elegant ui w/o framework lock-in.
      description: Web UI infrastructure that separates reactive UI, design tokens and CSS.
      hint: Supports light and dark modes, multi-dimensional themes, component-level on-demand imports, and fully custom styles.
      actions:
        - text: Quick Start
          link: ./quick-start.html
          variant: is-primary
        - text: View Components
          link: ./components/modal.html
          variant: is-secondary
    quickStart:
      title: Quick Start
      groups:
        - title: NPM Install
          lines:
            - npm install vanilla-jui@latest
            - import { createModal } from 'vanilla-jui'
        - title: CDN Usage
          lines:
            - <script src="https://unpkg.com/vanilla-jui@latest/dist/index.umd.js"></script>
            - <script type="module">
            - import { createModal } from 'https://unpkg.com/vanilla-jui@latest/dist/index.js'
            - </script>
    features:
      title: Why Vanilla-JUI
      description: Explicit state management, composable Web infrastructure, and fully custom styles.
      items:
        - index: 1
          title: Framework Agnostic
          description: Runs without React, Vue, or any other framework runtime. Mount it directly in any web page for fast delivery with fewer dependencies.
        - index: 2
          title: Reactive State
          description: A signal-based reactive system drives component state updates. Define state, derive values, and render views from data.
        - index: 3
          title: Composable Components
          description: Modal, Form, Tabs, Tooltip, Toast, and other components can be combined freely. Pass data through state references to build complex interactions.
        - index: 4
          title: Fully Custom Styles
          description: You can drop the built-in styles and use the className mechanism with Tailwind or other CSS tools to build completely custom styles.
        - index: 5
          title: Multi-Dimensional Themes
          description: A theme CSS architecture based on design tokens and root-node state makes personalized theme modes easy to build.
        - index: 6
          title: Common Utilities
          description: Includes common ID, DOM, Events, Timer, and related utilities.

    cta:
      title: Start quickly from CDN
      description: Use it directly in any web page without installing dependencies. Start from real product needs and combine only the capabilities you need.
      actions:
        - text: Quick Start
          link: ./quick-start.html
          variant: is-primary
        - text: Design Standard
          link: ./core/standard.html
          variant: is-secondary
---
