# API Contracts

**Workstream:** H — OpenAPI Contract Generation  
**Status:** Complete

---

## Scope

This document defines the OpenAPI contract structure for the 9 core ontology entities. It does not define endpoints; endpoint design is deferred to Phase 3. The purpose is to ensure every entity has a reusable, machine-readable OpenAPI schema.

---

## Entity Schema Coverage

| Entity | Schema File | Input Schema | Enum Reference |
|---|---|---|---|
| `Finding` | `entities/finding/finding.openapi.yaml` | ✅ | ConfidenceLevel, LikelihoodLevel, DataNature |
| `Evidence` | `entities/evidence/evidence.openapi.yaml` | ✅ | EvidenceType, EvidenceStrength, ValidationStatus, SourceType |
| `Citation` | `entities/citation/citation.openapi.yaml` | ✅ | CitationType |
| `Topic` | `entities/topic/topic.openapi.yaml` | ✅ | — |
| `Metric` | `entities/metric/metric.openapi.yaml` | ✅ | DataNature |
| `DissentRecord` | `entities/dissent-record/dissent-record.openapi.yaml` | ✅ | ConfidenceLevel, DissentStatus |
| `VersionRecord` | `entities/version-record/version-record.openapi.yaml` | ✅ | — |
| `ProvenanceRecord` | `entities/provenance-record/provenance-record.openapi.yaml` | ✅ | — |
| `AuditRecord` | `entities/audit-record/audit-record.openapi.yaml` | ✅ | — |

---

## Common OpenAPI Patterns

- All entity identifiers use `format: uuid`.
- All timestamps use `format: date-time`.
- Read-only fields are marked with `readOnly: true`.
- Nullable fields are marked with `nullable: true`.
- Enumerations are centralized in `openapi/components.yaml`.

---

## Future Endpoint Categories (Phase 3)

- `POST /findings` — create a finding
- `GET /findings/{id}` — retrieve a finding
- `GET /findings/{id}/versions` — retrieve version history
- `POST /evidence` — create evidence
- `GET /topics/{slug}/findings` — browse findings by topic
- `GET /graph/traverse` — graph traversal queries
