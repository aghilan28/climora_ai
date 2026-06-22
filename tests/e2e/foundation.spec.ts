import { expect, test } from '@playwright/test';

test('Phase 1 e2e foundation is configured without product UI', () => {
  expect('foundation').toBe('foundation');
});
