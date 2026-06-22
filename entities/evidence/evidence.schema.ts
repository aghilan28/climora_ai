/**
 * Evidence Entity — Zod Validation Schema
 * Workstream B: Ontology Foundation Design
 * Entity 2: Evidence
 */

import { z } from 'zod';

export const EvidenceTypeEnum = z.enum([
  'Observation',
  'Experiment',
  'Model',
  'Assessment',
  'MetaAnalysis',
  'Dataset',
  'Simulation',
]);

export const EvidenceStrengthEnum = z.enum(['Weak', 'Moderate', 'Strong', 'Conclusive']);
export const ValidationStatusEnum = z.enum(['Pending', 'Validated', 'Rejected', 'Superseded', 'Archived']);
export const SourceTypeEnum = z.enum(['InSitu', 'RemoteSensing', 'Proxy', 'Reanalysis', 'Survey']);

export const EvidenceMetadataSchema = z.object({
  geographicScope: z.string().optional(),
  temporalCoverage: z.string().optional(),
  instrument: z.string().optional(),
  processingMethod: z.string().optional(),
  qualityFlags: z.array(z.string()).optional(),
});

export const EvidenceSchema = z.object({
  id: z.string().uuid(),
  type: EvidenceTypeEnum,
  description: z.string().min(20).max(3000),
  findingId: z.string().uuid(),
  citationIds: z.array(z.string().uuid()).min(1),
  provenanceId: z.string().uuid(),
  sourceType: SourceTypeEnum,
  evidenceStrength: EvidenceStrengthEnum,
  validationStatus: ValidationStatusEnum,
  metadata: EvidenceMetadataSchema,
});

export const EvidenceInputSchema = EvidenceSchema.omit({ id: true });
export const EvidenceUpdateSchema = EvidenceInputSchema.partial();

export type Evidence = z.infer<typeof EvidenceSchema>;
export type EvidenceInput = z.infer<typeof EvidenceInputSchema>;
export type EvidenceUpdate = z.infer<typeof EvidenceUpdateSchema>;
