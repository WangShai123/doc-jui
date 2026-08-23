import { defineConfig } from 'vite-plus';
import type { OxfmtConfig } from 'oxfmt';

import fmtConfig from './.oxfmtrc.json' with { type: 'json' };

export default defineConfig({
  optimizeDeps: {
    force: true,
  },

  test: {
    include: ['tests/**/*.test.ts'],
    exclude: [''],
  },

  lint: {
    ignorePatterns: ['dist/**', 'node_modules/**'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    rules: {
      'no-console': ['error', { allow: ['error', 'warn'] }],
    },
  },

  fmt: fmtConfig as OxfmtConfig,
});
