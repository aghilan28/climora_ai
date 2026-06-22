/**
 * Citation Entity — TypeScript Type Definition
 * Workstream B: Ontology Foundation Design
 * Entity 3: Citation
 */

export type CitationType =
  | 'Journal'
  | 'Book'
  | 'Report'
  | 'Dataset'
  | 'GovernmentDocument'
  | 'ConferencePaper';

export interface CitationMetadata {
  /** Digital Object Identifier. */
  doi?: string;
  /** International Standard Book Number. */
  isbn?: string;
  /** URL to the source. */
  url?: string;
  /** Publication volume. */
  volume?: string;
  /** Publication issue. */
  issue?: string;
  /** Page numbers. */
  pages?: string;
  /** Publisher or institution. */
  publisher?: string;
  /** Abstract or summary of the work. */
  abstract?: string;
  /** Keywords for indexing. */
  keywords?: string[];
}

export interface Citation {
  id: string;
  title: string;
  authors: string[];
  year: number;
  journal?: string;
  publisher?: string;
  doi?: string;
  isbn?: string;
  url?: string;
  citationType: CitationType;
  metadata: CitationMetadata;
}

export type CitationInput = Omit<Citation, 'id'>;
export type CitationUpdate = Partial<CitationInput>;
