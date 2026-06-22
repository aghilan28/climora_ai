# Audit Record

## Definition

An **Audit Record** is a log of who changed what, when, and why in the knowledge system. It captures every create, update, and state transition event for entities under governance.

## Purpose

Audit records provide accountability, compliance evidence, and forensic traceability for the scientific knowledge system.

## Fields

| Field | Type | Cardinality | Required | Description |
|---|---|---|---|---|
| `id` | uuid | 1 | ✅ | Stable identifier. |
| `entityId` | uuid | 1 | ✅ | Entity being audited. |
| `action` | string | 1 | ✅ | Action performed. |
| `actor` | string | 1 | ✅ | Actor identifier. |
| `timestamp` | datetime | 1 | ✅ | When the action occurred. |
| `reason` | string | 1 | ✅ | Why the action was performed. |
| `metadata` | object | 1 | ✅ | Extensible metadata including state snapshots. |

## Relationships

- `AUDITS` → `*` (N:1, required)

## Example

```json
{
  "id": "a-001",
  "entityId": "f3b2c1d4-e5f6-7890-abcd-ef1234567890",
  "action": "UPDATE",
  "actor": "curator@climora.ai",
  "timestamp": "2026-06-22T12:00:00Z",
  "reason": "Updated likelihood rating based on new AR6 evidence.",
  "metadata": {
    "source": "web-console",
    "correlationId": "corr-123",
    "previousState": { "likelihoodRating": "VeryLikely" },
    "newState": { "likelihoodRating": "VirtuallyCertain" }
  }
}
```

## Non-Examples

- A system performance metric is **not** an Audit Record.
- A user login event is **not** an Audit Record (it is a security log).

## Validation Rules

- `action` and `actor` must be non-empty.
- `reason` must be between 5 and 1000 characters.
- `timestamp` must be an ISO 8601 date-time string.
- `entityId` must reference an existing entity.

## Version Rules

- Audit records are append-only and immutable.
- They are never versioned themselves.

## Governance Rules

- Audit records are generated automatically by the system.
- Tampering with audit records is prohibited and detected by integrity checks.

## Future Evolution Rules

- Must support tamper-evident hashing in Phase 4.
- Must support export to regulatory formats in Phase 5.
