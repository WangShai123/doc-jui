import type { LlmsConfig } from 'vanilla-press';

export default {
  title: 'JUI',
  description: 'Markdown source routes for JUI documentation.',
  sectionTitle: 'Docs',
  container: {
    labels: {
      'zh-CN': {
        link: '查看 Markdown',
        copy: '复制 Markdown 链接',
        chatgpt: '在 ChatGPT 中打开',
        claude: '在 Claude 中打开',
        options: 'LLMs',
      },
      en: {
        link: 'View Markdown',
        copy: 'Copy Markdown link',
        chatgpt: 'Open in ChatGPT',
        claude: 'Open in Claude',
        options: 'LLMs',
      },
    },
  },
} satisfies LlmsConfig;
