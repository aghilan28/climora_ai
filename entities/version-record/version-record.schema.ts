/**
 * Version Record Entity — Zod Validation Schema
 * Workstream B: Ontology Foundation Design
 * Entity 7: VersionRecord
 */

import { z } from 'zod';

export const VersionRecordSchema = z.object({
  id: z.string().uuid(),
  entityType: z.string().min(1).max(100),
  entityId: z.string().uuid(),
  versionNumber: z.string().regex(/^\d+\.\d+\.\d+$/),
  previousVersion: z.string().regex(/^\d+\.\d+\.\d+$/).optional(),
  changeReason: z.string().min(10).max(2000),
  createdBy: z.string().min(1).max(200),
  createdAt: z.string().datetime(),
  payloadHash: z.string().optional(),
  payloadSnapshot: z.record(z.unknown()).optional(),
});

export const VersionRecordInputSchema = VersionRecordSchema.omit({ id: true, createdAt: true });

export type VersionRecord = z.infer<typeof VersionRecordSchema>;
export type VersionRecordInput = z.infer<typeof VersionRecordInputSchema>;
