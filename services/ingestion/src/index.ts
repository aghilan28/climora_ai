/**
 * Phase 1 boundary marker for @csc/ingestion-service.
 * This module intentionally contains no business, climate, API, storage, graph, or UI-page logic.
 */
import { packageBoundary as sharedPackageBoundary } from '@csc/shared';

export const packageBoundary = `${sharedPackageBoundary}::@csc/ingestion-service` as const;
