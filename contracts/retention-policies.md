# Retention Policies

**Workstream:** G — Storage Contract Modeling  
**Status:** Complete

---

## Policy Summary

| Entity | Retention Policy | Rationale |
|---|---|---|
| `Finding` | Forever | Scientific record; must be reproducible. |
| `Evidence` | Forever | Evidentiary basis for findings. |
| `Citation` | Forever | Bibliographic reference integrity. |
| `Topic` | Forever | Taxonomy stability. |
| `Metric` | Forever | Quantitative scientific record. |
| `DissentRecord` | Forever | Dissent is part of the scientific record. |
| `VersionRecord` | Forever | Entity history cannot be lost. |
| `ProvenanceRecord` | Forever | Traceability must be preserved. |
| `AuditRecord` | 7 years | Regulatory and compliance minimum. |

---

## Implementation Notes

- Forever-retained records are stored in append-only tables with no `DELETE` operation.
- Audit records are partitioned by month to support efficient retention enforcement and archival.
- After 7 years, audit records may be moved to cold storage while retaining integrity hashes.
