/**
 * Version Record Entity — TypeScript Type Definition
 * Workstream B: Ontology Foundation Design
 * Entity 7: VersionRecord
 */

export interface VersionRecord {
  id: string;
  entityType: string;
  entityId: string;
  versionNumber: string;
  previousVersion?: string;
  changeReason: string;
  createdBy: string;
  createdAt: string;
  payloadHash?: string;
  payloadSnapshot?: Record<string, unknown>;
}

export type VersionRecordInput = Omit<VersionRecord, 'id' | 'createdAt'>;
export type VersionRecordUpdate = never;
