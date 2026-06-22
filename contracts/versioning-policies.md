# Versioning Policies

**Workstream:** G — Storage Contract Modeling  
**Status:** Complete

---

## Semantic Versioning

All versioned entities use semantic versioning: `MAJOR.MINOR.PATCH`.

| Component | Rule |
|---|---|
| MAJOR | Breaking change to the scientific statement or semantics. |
| MINOR | New evidence, metric, or topic association; non-breaking addition. |
| PATCH | Correction of metadata, typos, or non-substantive changes. |

---

## Entity-Specific Versioning Rules

| Entity | Mandatory | Trigger Conditions |
|---|---|---|
| `Finding` | ✅ | Any change to statement, confidence, likelihood, evidence, or citations. |
| `Evidence` | ❌ | Validation status change or evidence strength change. |
| `Citation` | ❌ | Corrections or DOI updates. |
| `Topic` | ❌ | Major taxonomy restructuring. |
| `Metric` | ❌ | Value, period, or baseline change. |
| `DissentRecord` | ✅ | Status change or statement change. |
| `VersionRecord` | N/A | Self-generated. |
| `ProvenanceRecord` | N/A | Append-only events. |
| `AuditRecord` | N/A | Append-only logs. |

---

## Version Promotion Rules

- A new version must have a higher version number than any existing version of the same entity.
- Superseded versions must retain `supersededBy` and `supersedes` pointers.
- Version records must be created automatically by the system on every mutation.
- Rollback to a previous version is allowed only by creating a new version that reverts the content, never by deleting the newer version.
