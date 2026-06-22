/**
 * Evidence Entity — TypeScript Type Definition
 * Workstream B: Ontology Foundation Design
 * Entity 2: Evidence
 */

export type EvidenceType =
  | 'Observation'
  | 'Experiment'
  | 'Model'
  | 'Assessment'
  | 'MetaAnalysis'
  | 'Dataset'
  | 'Simulation';

export type EvidenceStrength = 'Weak' | 'Moderate' | 'Strong' | 'Conclusive';
export type ValidationStatus = 'Pending' | 'Validated' | 'Rejected' | 'Superseded' | 'Archived';
export type SourceType = 'InSitu' | 'RemoteSensing' | 'Proxy' | 'Reanalysis' | 'Survey';

export interface EvidenceMetadata {
  /** Geographic scope of the evidence. */
  geographicScope?: string;
  /** Temporal coverage. */
  temporalCoverage?: string;
  /** Instrument or platform used. */
  instrument?: string;
  /** Processing method applied. */
  processingMethod?: string;
  /** Quality flags. */
  qualityFlags?: string[];
}

export interface Evidence {
  id: string;
  type: EvidenceType;
  description: string;
  findingId: string;
  citationIds: string[];
  provenanceId: string;
  sourceType: SourceType;
  evidenceStrength: EvidenceStrength;
  validationStatus: ValidationStatus;
  metadata: EvidenceMetadata;
}

export type EvidenceInput = Omit<Evidence, 'id'>;
export type EvidenceUpdate = Partial<EvidenceInput>;
