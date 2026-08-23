import type { RobotsConfig } from 'vanilla-press';

export default {
  rules: [
    {
      userAgent: '*',
      allow: ['/'],
      disallow: [],
    },
  ],
} satisfies RobotsConfig;
