/**
 * Provenance Record Entity — Zod Validation Schema
 * Workstream B: Ontology Foundation Design
 * Entity 8: ProvenanceRecord
 */

import { z } from 'zod';

export const ProvenanceEventSchema = z.object({
  action: z.string().min(1).max(200),
  actor: z.string().min(1).max(200),
  timestamp: z.string().datetime(),
  details: z.record(z.unknown()).optional(),
});

export const ProvenanceRecordSchema = z.object({
  id: z.string().uuid(),
  originSource: z.string().min(5).max(500),
  transformationHistory: z.array(ProvenanceEventSchema),
  validationHistory: z.array(ProvenanceEventSchema),
  storageHistory: z.array(ProvenanceEventSchema),
  auditHistory: z.array(ProvenanceEventSchema),
});

export const ProvenanceRecordInputSchema = ProvenanceRecordSchema.omit({ id: true });

export type ProvenanceRecord = z.infer<typeof ProvenanceRecordSchema>;
export type ProvenanceRecordInput = z.infer<typeof ProvenanceRecordInputSchema>;
