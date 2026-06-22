/**
 * Topic Entity — Zod Validation Schema
 * Workstream B: Ontology Foundation Design
 * Entity 4: Topic
 */

import { z } from 'zod';

export const TopicMetadataSchema = z.object({
  sourceTaxonomy: z.string().optional(),
  aliases: z.array(z.string()).optional(),
  externalUri: z.string().url().optional(),
  workingGroup: z.string().optional(),
});

export const TopicSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3).max(200),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  description: z.string().min(10).max(2000),
  parentTopicId: z.string().uuid().optional(),
  hierarchyLevel: z.number().int().min(1).max(10),
  taxonomyPath: z.string().min(3).max(500),
  metadata: TopicMetadataSchema,
});

export const TopicInputSchema = TopicSchema.omit({ id: true });
export const TopicUpdateSchema = TopicInputSchema.partial();

export type Topic = z.infer<typeof TopicSchema>;
export type TopicInput = z.infer<typeof TopicInputSchema>;
export type TopicUpdate = z.infer<typeof TopicUpdateSchema>;
