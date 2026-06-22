import { describe, expect, it } from 'vitest';

import { packageBoundary } from '../../packages/shared/src/index.js';

describe('Phase 1 platform foundation', () => {
  it('exposes only a neutral boundary marker', () => {
    expect(packageBoundary).toBe('@csc/shared');
  });
});
