/**
 * Audit Record Entity — Zod Validation Schema
 * Workstream B: Ontology Foundation Design
 * Entity 9: AuditRecord
 */

import { z } from 'zod';

export const AuditRecordMetadataSchema = z.object({
  source: z.string().optional(),
  correlationId: z.string().optional(),
  previousState: z.record(z.unknown()).optional(),
  newState: z.record(z.unknown()).optional(),
});

export const AuditRecordSchema = z.object({
  id: z.string().uuid(),
  entityId: z.string().uuid(),
  action: z.string().min(1).max(200),
  actor: z.string().min(1).max(200),
  timestamp: z.string().datetime(),
  reason: z.string().min(5).max(1000),
  metadata: AuditRecordMetadataSchema,
});

export const AuditRecordInputSchema = AuditRecordSchema.omit({ id: true, timestamp: true });

export type AuditRecord = z.infer<typeof AuditRecordSchema>;
export type AuditRecordInput = z.infer<typeof AuditRecordInputSchema>;
