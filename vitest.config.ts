import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  test: {
    environment: 'jsdom',
    globals: true,
    css: true,
    coverage: {
      all: true,
      exclude: ['vitest.config.ts', '__test__/*', 'node_modules/*'],
    },
  },
});
