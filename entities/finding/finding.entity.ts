/**
 * Finding Entity — TypeScript Type Definition
 * Workstream B: Ontology Foundation Design
 * Entity 1: Finding
 */

export type ConfidenceLevel =
  | 'VeryLow'
  | 'Low'
  | 'Medium'
  | 'High'
  | 'VeryHigh';

export type LikelihoodLevel =
  | 'ExceptionallyUnlikely'
  | 'VeryUnlikely'
  | 'Unlikely'
  | 'AboutAsLikelyAsNot'
  | 'Likely'
  | 'VeryLikely'
  | 'VirtuallyCertain';

export type DataNature = 'Observed' | 'Modeled' | 'Projected' | 'Derived';

export interface FindingMetadata {
  /** Assessment cycle or report in which the finding was published. */
  assessmentCycle?: string;
  /** Cross-reference to IPCC chapter or external assessment. */
  chapterReference?: string;
  /** Free-form tags for search and discovery. */
  tags?: string[];
  /** Human-readable notes for ontology curators. */
  curationNotes?: string;
  /** ISO 639-1 language code of the finding statement. */
  language?: string;
}

export interface Finding {
  /** Stable globally unique identifier. */
  id: string;
  /** The formal scientific statement of the finding. */
  statement: string;
  /** A concise plain-language summary for consumption interfaces. */
  summary: string;
  /** Confidence in the validity of the finding. */
  confidenceRating: ConfidenceLevel;
  /** Likelihood of the outcome or condition described. */
  likelihoodRating: LikelihoodLevel;
  /** Nature of the data underpinning the finding. */
  dataNature: DataNature;
  /** Baseline reference period (e.g., "1850-1900" or "1995-2014"). */
  baselinePeriod: string;
  /** Identifiers of topics this finding belongs to. */
  topicIds: string[];
  /** Identifiers of evidence items that support this finding. */
  evidenceIds: string[];
  /** Identifiers of bibliographic or data citations. */
  citationIds: string[];
  /** Identifiers of quantified metrics associated with this finding. */
  metricIds: string[];
  /** Semantic version of this finding record. */
  version: string;
  /** Identifier of the finding version this record supersedes, if any. */
  supersedes?: string;
  /** Identifier of the finding version that supersedes this record, if any. */
  supersededBy?: string;
  /** Creation timestamp (ISO 8601). */
  createdAt: string;
  /** Last update timestamp (ISO 8601). */
  updatedAt: string;
  /** Extensible metadata object. */
  metadata: FindingMetadata;
}

export type FindingInput = Omit<Finding, 'id' | 'createdAt' | 'updatedAt'>;
export type FindingUpdate = Partial<FindingInput> & Pick<Finding, 'version'>;
