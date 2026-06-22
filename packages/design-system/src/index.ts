/**
 * Phase 1 boundary marker for @csc/design-system.
 * This module intentionally contains no business, climate, API, storage, graph, or UI-page logic.
 */
import { packageBoundary as sharedPackageBoundary } from '@csc/shared';

export const packageBoundary = `${sharedPackageBoundary}::@csc/design-system` as const;
