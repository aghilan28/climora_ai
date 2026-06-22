/**
 * Provenance Record Entity — TypeScript Type Definition
 * Workstream B: Ontology Foundation Design
 * Entity 8: ProvenanceRecord
 */

export interface ProvenanceEvent {
  action: string;
  actor: string;
  timestamp: string;
  details?: Record<string, unknown>;
}

export interface ProvenanceRecord {
  id: string;
  originSource: string;
  transformationHistory: ProvenanceEvent[];
  validationHistory: ProvenanceEvent[];
  storageHistory: ProvenanceEvent[];
  auditHistory: ProvenanceEvent[];
}

export type ProvenanceRecordInput = Omit<ProvenanceRecord, 'id'>;
export type ProvenanceRecordUpdate = never;
