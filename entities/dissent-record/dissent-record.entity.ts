/**
 * Dissent Record Entity — TypeScript Type Definition
 * Workstream B: Ontology Foundation Design
 * Entity 6: DissentRecord
 */

export type DissentStatus = 'Active' | 'Resolved' | 'Superseded' | 'Withdrawn';

export interface DissentRecordMetadata {
  /** Date the dissent was formally registered. */
  registeredAt?: string;
  /** Date the dissent was resolved or withdrawn. */
  resolvedAt?: string;
  /** Resolution summary. */
  resolutionSummary?: string;
  /** Stakeholders who reviewed the dissent. */
  reviewers?: string[];
}

export interface DissentRecord {
  id: string;
  findingId: string;
  statement: string;
  confidenceRating: 'VeryLow' | 'Low' | 'Medium' | 'High' | 'VeryHigh';
  citationIds: string[];
  evidenceIds: string[];
  status: DissentStatus;
  metadata: DissentRecordMetadata;
}

export type DissentRecordInput = Omit<DissentRecord, 'id'>;
export type DissentRecordUpdate = Partial<DissentRecordInput>;
