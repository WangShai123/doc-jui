---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "JUI"
  text: "原生JavaScript组件库"
  tagline: 结构型、轻量级、模块化
  image:
    src: /jui-image.png
    alt: JUI
  actions:
    - theme: brand
      text: 什么是 JUI?
      link: /zh/what-is-jui
    - theme: alt
      text: 快速开始
      link: /zh/getting-started

features:
  - title: 原生态
    icon: 🏖
    details: 基于原生 JavaScript 构建，零依赖，遵循 Web 标准，为您提供极致的性能体验与纯净的开发环境。
  - title: 开箱即用
    icon: 🛠
    details: 提供 UMD 与 ESM (jui.umd.js / jui.esm.js) 格式，全量组件挂载于 jui 对象，通过 CDN 引入即可快速上手开发。
  - title: 多模式
    icon: 🌈
    details: 面向现代工程化开发，提供支持 Tree-shaking 的 ES Module (jui.module.js) 版本，按需加载，有效减小打包体积。
---
