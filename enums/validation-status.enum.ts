/**
 * Validation Status Enumeration
 * Workstream C: Scientific Enumeration Architecture
 * Enumeration 6
 */

export enum ValidationStatus {
  Pending = 'Pending',
  Validated = 'Validated',
  Rejected = 'Rejected',
  Superseded = 'Superseded',
  Archived = 'Archived',
}

export const ValidationStatusTransitions: Record<ValidationStatus, ValidationStatus[]> = {
  [ValidationStatus.Pending]: [ValidationStatus.Validated, ValidationStatus.Rejected],
  [ValidationStatus.Validated]: [ValidationStatus.Superseded, ValidationStatus.Archived],
  [ValidationStatus.Rejected]: [ValidationStatus.Archived],
  [ValidationStatus.Superseded]: [ValidationStatus.Archived],
  [ValidationStatus.Archived]: [],
};
