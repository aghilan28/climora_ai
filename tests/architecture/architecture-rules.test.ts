import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

const depcruiseExecutable = join(
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'depcruise.cmd' : 'depcruise',
);

const runDepcruise = (config: string, target: string): number => {
  try {
    execFileSync(depcruiseExecutable, ['--config', config, target], { stdio: 'pipe' });
    return 0;
  } catch (error) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'status' in error &&
      typeof error.status === 'number'
    ) {
      return error.status;
    }
    throw error;
  }
};

describe('Architecture Constitution dependency rules', () => {
  it('fails an illegal Domain -> UI dependency', () => {
    expect(
      runDepcruise(
        'tests/architecture/fixture-configs/illegal-domain-ui.cjs',
        'tests/architecture/fixtures/illegal-domain-ui',
      ),
    ).not.toBe(0);
  });

  it('fails an illegal Knowledge -> UI dependency', () => {
    expect(
      runDepcruise(
        'tests/architecture/fixture-configs/illegal-knowledge-ui.cjs',
        'tests/architecture/fixtures/illegal-knowledge-ui',
      ),
    ).not.toBe(0);
  });

  it('fails a circular dependency', () => {
    expect(
      runDepcruise(
        'tests/architecture/fixture-configs/circular.cjs',
        'tests/architecture/fixtures/circular',
      ),
    ).not.toBe(0);
  });

  it('passes a valid dependency', () => {
    expect(
      runDepcruise(
        'tests/architecture/fixture-configs/valid.cjs',
        'tests/architecture/fixtures/valid',
      ),
    ).toBe(0);
  });
});
