import type { RuntimeConfig } from 'vanilla-press';

export default {
  siteName: 'Vanilla JUI',
  siteUrl: 'https://app.jealer.com/vanilla-jui',
  build: {
    social: {
      github: 'https://github.com/WangShai123/vanilla-jui',
    },
    sitemap: true,
    robots: true,
    footerScript: 'script',
    inlineScript: {
      shared: [],
    },
    llms: {
      enabled: true,
      link: true,
      copy: true,
      chatgpt: true,
      claude: true,
    },
  },
  browser: {
    seo: true,
    externalLink: true,
    highlight: {
      enabled: true,
      languages: [
        { value: 'plaintext', label: 'Plain Text' },
        { value: 'bash', label: 'Bash' },
        { value: 'c', label: 'C' },
        { value: 'cpp', label: 'C++' },
        { value: 'css', label: 'CSS' },
        { value: 'dockerfile', label: 'Dockerfile' },
        { value: 'go', label: 'Go' },
        { value: 'graphql', label: 'GraphQL' },
        { value: 'html', label: 'HTML' },
        { value: 'java', label: 'Java' },
        { value: 'javascript', label: 'JavaScript' },
        { value: 'json', label: 'JSON' },
        { value: 'kotlin', label: 'Kotlin' },
        { value: 'markdown', label: 'Markdown' },
        { value: 'nginx', label: 'Nginx' },
        { value: 'php', label: 'PHP' },
        { value: 'python', label: 'Python' },
        { value: 'ruby', label: 'Ruby' },
        { value: 'rust', label: 'Rust' },
        { value: 'sql', label: 'SQL' },
        { value: 'swift', label: 'Swift' },
        { value: 'typescript', label: 'TypeScript' },
        { value: 'xml', label: 'XML' },
        { value: 'yaml', label: 'YAML' },
      ],
    },
    menu: true,
    sidebar: true,
    toc: {
      enabled: true,
      headings: 'h2, h3',
      offset: 100,
    },
    search: true,
    prevNext: true,
    i18n: {
      enabled: true,
      locale: 'zh-CN',
      fallbackLocale: 'en',
      locales: [
        { code: 'zh-CN', label: '简体中文', path: 'zh' },
        { code: 'en', label: 'English', path: 'en' },
      ],
      redirectToDefault: true,
    },
    theme: {
      enabled: true,
      default: {
        mode: 'light',
        theme: 'indigo',
        radius: 'sm',
        shadow: 'sm',
        font: 'sm',
      },
      offcanvas: {
        direction: 'right',
      },
    },
  },
} satisfies RuntimeConfig;
