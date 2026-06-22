# Provenance Record

## Definition

A **Provenance Record** captures the complete origin, transformation, validation, storage, and audit history of a data object or piece of evidence. It answers the question: "Where did this come from, and what happened to it?"

## Purpose

Provenance records ensure data traceability, reproducibility, and trust. They are required for evidence and metrics that underpin authoritative findings.

## Fields

| Field | Type | Cardinality | Required | Description |
|---|---|---|---|---|
| `id` | uuid | 1 | ✅ | Stable identifier. |
| `originSource` | string | 1 | ✅ | Original source of the data. |
| `transformationHistory` | ProvenanceEvent[] | 0:N | ✅ | Processing steps. |
| `validationHistory` | ProvenanceEvent[] | 0:N | ✅ | Validation steps. |
| `storageHistory` | ProvenanceEvent[] | 0:N | ✅ | Storage movements. |
| `auditHistory` | ProvenanceEvent[] | 0:N | ✅ | Audit events. |

## Relationships

- `DESCRIBES` → `*` (1:1, required)

## Example

```json
{
  "id": "p-001",
  "originSource": "HadCRUT5 v5.0.1.0 via CEDA Archive",
  "transformationHistory": [
    { "action": "download", "actor": "ingestion-service", "timestamp": "2026-01-01T00:00:00Z" },
    { "action": "homogenization", "actor": "data-pipeline", "timestamp": "2026-01-02T00:00:00Z" }
  ],
  "validationHistory": [
    { "action": "schema-validation", "actor": "validation-service", "timestamp": "2026-01-03T00:00:00Z" }
  ],
  "storageHistory": [
    { "action": "stored", "actor": "storage-service", "timestamp": "2026-01-04T00:00:00Z" }
  ],
  "auditHistory": [
    { "action": "linked-to-evidence", "actor": "curator@climora.ai", "timestamp": "2026-06-22T00:00:00Z" }
  ]
}
```

## Non-Examples

- A single timestamp without action context is **not** a Provenance Record.
- An audit log of user actions is **not** a Provenance Record (that is an Audit Record).

## Validation Rules

- `originSource` must be between 5 and 500 characters.
- Every event must contain `action`, `actor`, and `timestamp`.
- Timestamps must be ISO 8601 date-time strings.

## Version Rules

- Provenance records are append-only; events are added but never removed.
- Major transformations may trigger a new version.

## Governance Rules

- Provenance records must be generated automatically by data pipelines.
- Manual edits to provenance history are forbidden.

## Future Evolution Rules

- Must support W3C PROV-O alignment in Phase 4.
- Must support blockchain or hash-linked verification in Phase 5.
