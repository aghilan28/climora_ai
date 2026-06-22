/**
 * Dissent Record Entity — Zod Validation Schema
 * Workstream B: Ontology Foundation Design
 * Entity 6: DissentRecord
 */

import { z } from 'zod';

export const DissentStatusEnum = z.enum(['Active', 'Resolved', 'Superseded', 'Withdrawn']);
export const ConfidenceLevelEnum = z.enum(['VeryLow', 'Low', 'Medium', 'High', 'VeryHigh']);

export const DissentRecordMetadataSchema = z.object({
  registeredAt: z.string().datetime().optional(),
  resolvedAt: z.string().datetime().optional(),
  resolutionSummary: z.string().max(2000).optional(),
  reviewers: z.array(z.string()).optional(),
});

export const DissentRecordSchema = z.object({
  id: z.string().uuid(),
  findingId: z.string().uuid(),
  statement: z.string().min(20).max(5000),
  confidenceRating: ConfidenceLevelEnum,
  citationIds: z.array(z.string().uuid()).min(1),
  evidenceIds: z.array(z.string().uuid()).min(1),
  status: DissentStatusEnum,
  metadata: DissentRecordMetadataSchema,
});

export const DissentRecordInputSchema = DissentRecordSchema.omit({ id: true });
export const DissentRecordUpdateSchema = DissentRecordInputSchema.partial();

export type DissentRecord = z.infer<typeof DissentRecordSchema>;
export type DissentRecordInput = z.infer<typeof DissentRecordInputSchema>;
export type DissentRecordUpdate = z.infer<typeof DissentRecordUpdateSchema>;
