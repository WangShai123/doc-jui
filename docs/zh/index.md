---
layout: home
title: 首页
keywords: vanilla-jui, UI Library, JavaScript
description: Vanilla-JUI 是一套轻量、可组合、可主题化的原生 JavaScript UI 组件库。
layouts:
  home:
    hero:
      badge: vanilla ui library
      title: 构建优雅的界面，无需框架锁定。
      description: 一个将响应式 UI、设计令牌 和 CSS 工程解耦的 Web UI 基础设施。
      hint: 支持亮暗模式、多维主题、组件级按需引入、100%自定义样式。
      actions:
        - text: 快速开始
          link: ./quick-start.html
          variant: is-primary
        - text: 查看组件
          link: ./components/modal.html
          variant: is-secondary
    quickStart:
      title: 快速开始
      groups:
        - title: NPM 安装
          lines:
            - npm install vanilla-jui@latest
            - import { createModal } from 'vanilla-jui'
        - title: CDN 引入
          lines:
            - <script src="https://unpkg.com/vanilla-jui@latest/dist/index.umd.js"></script>
            - <script type="module">
            - import { createModal } from 'https://unpkg.com/vanilla-jui@latest/dist/index.js'
            - </script>
    features:
      title: 为什么选择 Vanilla-JUI
      description: 显式状态管理，可组合的 Web 基础设施，支持完全自定义样式。
      items:
        - index: 1
          title: 框架无关
          description: 无需 React/Vue 等框架运行时，直接在任意网页中挂载，适合快速实现与低依赖场景。
        - index: 2
          title: 响应式状态管理
          description: 基于信号的响应式系统，通过数据驱动组件状态更新。定义状态、派生计算、渲染视图。
        - index: 3
          title: 可组合组件
          description: Modal、Form、Tabs、Tooltip、Toast 等可自由组合，通过状态引用传递数据，构建复杂交互。
        - index: 4
          title: 100% 自定义样式
          description: 支持丢弃内置样式，利用 className 机制，消费 tailwind 等 CSS 工具，实现完全自定义样式。
        - index: 5
          title: 多维主题
          description: 基于设计令牌和根节点状态的多维主题 CSS 架构，轻松实现千人千面的主题模式。
        - index: 6
          title: 常用工具
          description: 附带常用 ID、DOM、Events、Timer 等工具。

    cta:
      title: 从 CDN 引入开始快速使用
      description: 无需安装依赖，直接在任意网页中引入使用。以真实业务问题为起点，只组合真正需要的能力。
      actions:
        - text: 快速开始
          link: ./quick-start.html
          variant: is-primary
        - text: 设计标准
          link: ./core/standard.html
          variant: is-secondary
---
