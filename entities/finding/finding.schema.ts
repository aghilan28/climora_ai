/**
 * Finding Entity — Zod Validation Schema
 * Workstream B: Ontology Foundation Design
 * Entity 1: Finding
 */

import { z } from 'zod';

export const ConfidenceLevelEnum = z.enum([
  'VeryLow',
  'Low',
  'Medium',
  'High',
  'VeryHigh',
]);

export const LikelihoodLevelEnum = z.enum([
  'ExceptionallyUnlikely',
  'VeryUnlikely',
  'Unlikely',
  'AboutAsLikelyAsNot',
  'Likely',
  'VeryLikely',
  'VirtuallyCertain',
]);

export const DataNatureEnum = z.enum([
  'Observed',
  'Modeled',
  'Projected',
  'Derived',
]);

export const FindingMetadataSchema = z.object({
  assessmentCycle: z.string().optional(),
  chapterReference: z.string().optional(),
  tags: z.array(z.string()).optional(),
  curationNotes: z.string().optional(),
  language: z.string().length(2).optional(),
});

export const FindingSchema = z.object({
  id: z.string().uuid(),
  statement: z.string().min(10).max(5000),
  summary: z.string().min(10).max(1000),
  confidenceRating: ConfidenceLevelEnum,
  likelihoodRating: LikelihoodLevelEnum,
  dataNature: DataNatureEnum,
  baselinePeriod: z.string().min(4).max(50),
  topicIds: z.array(z.string().uuid()).min(1),
  evidenceIds: z.array(z.string().uuid()).min(1),
  citationIds: z.array(z.string().uuid()).min(1),
  metricIds: z.array(z.string().uuid()).min(0),
  version: z.string().regex(/^\d+\.\d+\.\d+$/),
  supersedes: z.string().uuid().optional(),
  supersededBy: z.string().uuid().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  metadata: FindingMetadataSchema,
});

export const FindingInputSchema = FindingSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const FindingUpdateSchema = FindingInputSchema.partial().merge(
  z.object({ version: z.string().regex(/^\d+\.\d+\.\d+$/) })
);

export type Finding = z.infer<typeof FindingSchema>;
export type FindingInput = z.infer<typeof FindingInputSchema>;
export type FindingUpdate = z.infer<typeof FindingUpdateSchema>;
