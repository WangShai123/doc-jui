import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "doc-jui",
  title: "JUI",
  description: "JUI Document",
  head: [["link", { rel: "icon", type: "image/png", href: "/favicon.png" }]],
  locales: {
    root: {
      lang: "zh",
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      link: "/zh/",
      prevPage: "上一页",
      nextPage: "下一页",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh/" },
          { text: "文档中心", link: "https://www.jealer.com/docs/" },
          { text: "积木学院", link: "https://www.jealer.com/collage/" },
        ],
        sidebar: {
          "/zh/": [
            {
              text: "简介",
              collapsed: true,
              items: [
                { text: "什么是 JUI?", link: "/zh/what-is-jui" },
                { text: "快速开始", link: "/zh/getting-started" },
              ],
            },
            {
              text: "色彩系统",
              collapsed: true,
              items: [{ text: "色彩系统", link: "/zh/color/palette" }],
            },
            {
              text: "交互组件",
              collapsed: false,
              items: [
                { text: "模态框", link: "/zh/components/modal" },
                { text: "通知", link: "/zh/components/toast" },
                { text: "滑动侧边栏", link: "/zh/components/offcanvas" },
                { text: "下拉容器", link: "/zh/components/drop" },
                { text: "提示框", link: "/zh/components/tooltip" },
                { text: "选项卡", link: "/zh/components/tabs" },
                { text: "手风琴", link: "/zh/components/accordion" },
                { text: "抛物线", link: "/zh/components/parabola" },
                { text: "主题模式", link: "/zh/components/theme" },
                { text: "表单验证", link: "/zh/components/validator" },
              ],
            },
            {
              text: "静态组件",
              collapsed: true,
              items: [
                {
                  text: "容器与字体",
                  items: [
                    { text: "容器", link: "/zh/container/container" },
                    {
                      text: "响应式布局",
                      link: "/zh/container/responsive",
                    },
                    { text: "字体", link: "/zh/css/font-family" },
                  ],
                },
                {
                  text: "基础元素",
                  items: [
                    { text: "图标", link: "/zh/css/icon" },
                    { text: "按钮", link: "/zh/css/button" },
                    { text: "头像", link: "/zh/css/avatar" },
                    { text: "徽标", link: "/zh/css/badge" },
                    { text: "标签", link: "/zh/css/tag" },
                    { text: "提示", link: "/zh/css/tip" },
                    { text: "表格", link: "/zh/css/table" },
                    { text: "卡片", link: "/zh/css/card" },
                    { text: "面包屑", link: "/zh/css/breadcrumb" },
                    { text: "分页", link: "/zh/css/pagination" },
                    { text: "内容域", link: "/zh/css/content" },
                    { text: "动画", link: "/zh/css/animation" },
                  ],
                },
                {
                  text: "表单元素",
                  items: [
                    { text: "表单", link: "/zh/form/form" },
                    { text: "输入框", link: "/zh/form/input" },
                    { text: "文本域", link: "/zh/form/textarea" },
                    { text: "单选框", link: "zh/form/radio" },
                    { text: "多选框", link: "zh/form/checkbox" },
                    { text: "选择框", link: "/zh/form/select" },
                    { text: "文件上传", link: "/zh/form/file" },
                  ],
                },
                {
                  text: "CSS 工具类",
                  items: [{ text: "工具类", link: "/zh/css/utilities" }],
                },
              ],
            },
            {
              text: "工具函数",
              collapsed: true,
              items: [
                { text: "常规工具", link: "/zh/utils/general" },
                { text: "类型验证", link: "/zh/utils/types" },
                { text: "实例管理", link: "/zh/utils/instance" },
                { text: "简易翻译", link: "/zh/utils/i18n" },
                { text: "Cookie", link: "/zh/utils/cookie" },
                { text: "HTTP", link: "/zh/utils/http" },
                { text: "DOM 操作", link: "/zh/utils/dom" },
                { text: "常量", link: "/zh/utils/const" },
                { text: "日志", link: "/zh/utils/log" },
              ],
            },
            {
              text: "进阶工具",
              collapsed: true,
              items: [
                { text: "服务容器", link: "/zh/advanced/container" },
                { text: "reactive", link: "/zh/advanced/reactive" },
                { text: "signal", link: "/zh/advanced/signal" },
              ],
            },
          ],
        },
        docFooter: {
          prev: "上一页",
          next: "下一页",
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Documents", link: "https://www.jealer.com/docs/" },
          { text: "Collage", link: "https://www.jealer.com/collage/" },
        ],
        sidebar: {
          "/en/": [
            {
              text: "Introduction",
              items: [
                { text: "What is JUI?", link: "/en/what-is-jui" },
                { text: "Getting Started", link: "/en/getting-started" },
              ],
            },
            {
              text: "Color System",
              items: [{ text: "Color System", link: "/en/color/palette" }],
            },
            {
              text: "Interaction Components",
              items: [
                { text: "Modal", link: "/en/components/modal" },
                { text: "Toast", link: "/en/components/toast" },
                { text: "Offcanvas", link: "/en/components/offcanvas" },
                { text: "Drop", link: "/en/components/drop" },
                { text: "Tooltip", link: "/en/components/tooltip" },
                { text: "Tabs", link: "/en/components/tabs" },
                { text: "Accordion", link: "/en/components/accordion" },
                { text: "Parabola", link: "/en/components/parabola" },
                { text: "Theme", link: "/en/components/theme" },
                { text: "Form Validator", link: "/en/components/validator" },
              ],
            },
            {
              text: "Static Components",
              items: [
                { text: "Icon", link: "/en/css/icon" },
                { text: "Button", link: "/en/css/button" },
                { text: "Avatar", link: "/en/css/avatar" },
                { text: "Badge", link: "/en/css/badge" },
                { text: "Tag", link: "/en/css/tag" },
                { text: "Tip", link: "/en/css/tip" },
                { text: "Table", link: "/en/css/table" },
                { text: "Card", link: "/en/css/card" },
                { text: "Breadcrumb", link: "/en/css/breadcrumb" },
                { text: "Pagination", link: "/en/css/pagination" },
                { text: "Content", link: "/en/css/content" },
                { text: "Animation", link: "/en/css/animation" },
              ],
            },
            {
              text: "Form Elements",
              items: [
                { text: "Form", link: "/en/form/form" },
                { text: "Input", link: "/en/form/input" },
                { text: "Textarea", link: "/en/form/textarea" },
                { text: "Radio", link: "/en/form/radio" },
                { text: "Checkbox", link: "/en/form/checkbox" },
                { text: "Select", link: "/en/form/select" },
                { text: "File", link: "/en/form/file" },
              ],
            },
            {
              text: "CSS Utilities",
              items: [{ text: "Utilities", link: "/en/css/utilities" }],
            },
            {
              text: "Utilities Function",
              collapsed: true,
              items: [
                { text: "General", link: "/en/utils/general" },
                { text: "Types", link: "/en/utils/types" },
                { text: "Instance", link: "/en/utils/instance" },
                { text: "Translate", link: "/en/utils/i18n" },
                { text: "Cookie", link: "/en/utils/cookie" },
                { text: "HTTP", link: "/en/utils/http" },
                { text: "DOM", link: "/en/utils/dom" },
                { text: "Const", link: "/en/utils/const" },
                { text: "Log", link: "/en/utils/log" },
              ],
            },
            {
              text: "Advanced Utils",
              collapsed: true,
              items: [
                { text: "Container", link: "/en/advanced/container" },
                { text: "Reactive", link: "/en/advanced/reactive" },
                { text: "Signal", link: "/en/advanced/signal" },
              ],
            },
          ],
        },
      },
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
    math: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/jui-logo.png",
    i18nRouting: true,
    lastUpdated: true,
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: "codeberg", link: "https://codeberg.org/jealer/jui" },
    ],
  },
});
