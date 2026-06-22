/**
 * Audit Record Entity — TypeScript Type Definition
 * Workstream B: Ontology Foundation Design
 * Entity 9: AuditRecord
 */

export interface AuditRecordMetadata {
  /** Client IP or service identifier. */
  source?: string;
  /** Correlation ID for distributed tracing. */
  correlationId?: string;
  /** Previous state snapshot. */
  previousState?: Record<string, unknown>;
  /** New state snapshot. */
  newState?: Record<string, unknown>;
}

export interface AuditRecord {
  id: string;
  entityId: string;
  action: string;
  actor: string;
  timestamp: string;
  reason: string;
  metadata: AuditRecordMetadata;
}

export type AuditRecordInput = Omit<AuditRecord, 'id' | 'timestamp'>;
