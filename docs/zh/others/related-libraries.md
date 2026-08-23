# 相关库

`W3` 可组合的 Web 基础设施：

- 核心
  - [vanilla-signal](https://npmjs.com/package/vanilla-signal) 基于信号的细粒度响应式运行时。它支持复杂 UI 状态管理，分层组织业务、派生、渲染。
- 数据
  - [vanilla-signal-query](https://npmjs.com/package/vanilla-signal-query) 服务端状态和异步查询管理器。它提供响应式请求状态、可插拔数据缓存适配器、stale 刷新、请求去重、重试、超时、取消、预取和缓存失效。
  - [vanilla-request](https://npmjs.com/package/vanilla-request) HTTP 请求工具。它负责请求准备、发送、解析、拦截、错误处理等，支持进度事件。
  - [vanilla-create-storage](https://npmjs.com/package/vanilla-create-storage) 客户端存储工具。它为 `cookie`, `localStorage`, `sessionStorage` 提供统一的 API。
  - [vanilla-simple-lru](https://npmjs.com/package/vanilla-simple-lru) LRU 内存缓存。它继承自原生 `Map`，支持有界容量、LRU 提升、可选过期和驱逐钩子等功能。
- UI
  - [vanilla-jui](https://npmjs.com/package/vanilla-jui)
- 应用
  - [vanilla-signal-i18n](https://npmjs.com/package/vanilla-signal-i18n) 基于信号的国际化管理器。它提供响应式国际化管理，支持多语言切换。
- 构建
  - [create-vanilla-press](https://npmjs.com/package/create-vanilla-press) 静态站点生成器。它支持自定义布局和组件、按需构建最小化运行时、外部连接能力等功能。
