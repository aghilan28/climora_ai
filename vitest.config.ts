import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: false,
    include: [
      'tests/unit/**/*.test.ts',
      'tests/integration/**/*.test.ts',
      'tests/architecture/**/*.test.ts',
      'packages/**/*.test.ts',
      'services/**/*.test.ts',
      'apps/**/*.test.ts',
    ],
    exclude: ['**/lib/**', 'tests/architecture/fixtures/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: 'coverage',
      exclude: [
        '**/lib/**',
        '**/.cache/**',
        '**/.local/**',
        'tests/architecture/fixtures/**',
        'tests/architecture/fixture-configs/**',
        '**/*.config.ts',
        '.dependency-cruiser.cjs',
        'commitlint.config.cjs',
        'scripts/**',
        'tests/e2e/**',
      ],
    },
  },
});
