/**
 * Citation Entity — Zod Validation Schema
 * Workstream B: Ontology Foundation Design
 * Entity 3: Citation
 */

import { z } from 'zod';

export const CitationTypeEnum = z.enum([
  'Journal',
  'Book',
  'Report',
  'Dataset',
  'GovernmentDocument',
  'ConferencePaper',
]);

export const CitationMetadataSchema = z.object({
  doi: z.string().optional(),
  isbn: z.string().optional(),
  url: z.string().url().optional(),
  volume: z.string().optional(),
  issue: z.string().optional(),
  pages: z.string().optional(),
  publisher: z.string().optional(),
  abstract: z.string().max(5000).optional(),
  keywords: z.array(z.string()).optional(),
});

export const CitationSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(5).max(500),
  authors: z.array(z.string().min(2)).min(1),
  year: z.number().int().min(1800).max(2100),
  journal: z.string().optional(),
  publisher: z.string().optional(),
  doi: z.string().optional(),
  isbn: z.string().optional(),
  url: z.string().url().optional(),
  citationType: CitationTypeEnum,
  metadata: CitationMetadataSchema,
});

export const CitationInputSchema = CitationSchema.omit({ id: true });
export const CitationUpdateSchema = CitationInputSchema.partial();

export type Citation = z.infer<typeof CitationSchema>;
export type CitationInput = z.infer<typeof CitationInputSchema>;
export type CitationUpdate = z.infer<typeof CitationUpdateSchema>;
