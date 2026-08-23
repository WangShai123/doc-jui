import type { MenuConfig } from 'vanilla-press';

export default [
  { label: 'menu.home', path: 'index' },
  { label: 'menu.components', path: 'core/standard' },
  { label: 'CSS', path: 'tokens/tokens' },
  {
    label: 'menu.documents',
    path: 'https://www.jealer.com/docs/',
    target: '_blank',
  },
  {
    label: 'menu.learn',
    path: 'https://www.jealer.com/learn/',
    target: '_blank',
  },
] satisfies MenuConfig;
