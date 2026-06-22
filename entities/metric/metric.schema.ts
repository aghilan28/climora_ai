/**
 * Metric Entity — Zod Validation Schema
 * Workstream B: Ontology Foundation Design
 * Entity 5: Metric
 */

import { z } from 'zod';

export const MetricDataNatureEnum = z.enum([
  'Observed',
  'Modeled',
  'Projected',
  'Derived',
]);

export const MetricMetadataSchema = z.object({
  uncertaintyRange: z.string().optional(),
  statisticalMethod: z.string().optional(),
  dataSource: z.string().optional(),
  scenario: z.string().optional(),
  temporalResolution: z.string().optional(),
  spatialResolution: z.string().optional(),
});

export const MetricSchema = z.object({
  id: z.string().uuid(),
  findingId: z.string().uuid(),
  name: z.string().min(3).max(200),
  value: z.number(),
  unit: z.string().min(1).max(50),
  period: z.string().min(4).max(100),
  dataNature: MetricDataNatureEnum,
  baseline: z.string().optional(),
  geographicScope: z.string().min(2).max(200),
  metadata: MetricMetadataSchema,
});

export const MetricInputSchema = MetricSchema.omit({ id: true });
export const MetricUpdateSchema = MetricInputSchema.partial();

export type Metric = z.infer<typeof MetricSchema>;
export type MetricInput = z.infer<typeof MetricInputSchema>;
export type MetricUpdate = z.infer<typeof MetricUpdateSchema>;
