/**
 * Phase 1 boundary marker for @csc/domain-types.
 * This module intentionally contains no business, climate, API, storage, graph, or UI-page logic.
 */
import { packageBoundary as sharedPackageBoundary } from '@csc/shared';

export const packageBoundary = `${sharedPackageBoundary}::@csc/domain-types` as const;
