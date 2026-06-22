# Dissent Record

## Definition

A **Dissent Record** documents a formal scientific disagreement with a Finding. It captures the dissenting statement, its confidence level, supporting evidence, and citations, and its current status in the review lifecycle.

## Purpose

Dissent records preserve scientific controversy and disagreement within the knowledge system. They prevent a single narrative from dominating and enable users to explore alternative interpretations.

## Fields

| Field | Type | Cardinality | Required | Description |
|---|---|---|---|---|
| `id` | uuid | 1 | ✅ | Stable identifier. |
| `findingId` | uuid | 1 | ✅ | Finding being challenged. |
| `statement` | string | 1 | ✅ | Dissenting statement. |
| `confidenceRating` | ConfidenceLevel | 1 | ✅ | Confidence in the dissent. |
| `citationIds` | uuid[] | 1:N | ✅ | Supporting citations. |
| `evidenceIds` | uuid[] | 1:N | ✅ | Supporting evidence. |
| `status` | DissentStatus | 1 | ✅ | Lifecycle status. |
| `metadata` | object | 1 | ✅ | Extensible metadata. |

## Relationships

- `CONTRASTS_WITH` → `Finding` (N:1, required)
- `CITES` → `Citation` (1:N, required)
- `SUPPORTED_BY` → `Evidence` (1:N, required)

## Example

```json
{
  "id": "d-001",
  "findingId": "f3b2c1d4-e5f6-7890-abcd-ef1234567890",
  "statement": "The magnitude of warming may be overstated in urban-affected station records; additional homogenization is warranted.",
  "confidenceRating": "Medium",
  "citationIds": ["c-444"],
  "evidenceIds": ["e-555"],
  "status": "Active",
  "metadata": {
    "registeredAt": "2026-06-22T00:00:00Z",
    "reviewers": ["Dr. A. Smith", "Dr. B. Jones"]
  }
}
```

## Non-Examples

- A comment without evidence or citations is **not** a Dissent Record.
- A duplicate of the finding statement is **not** a Dissent Record.

## Validation Rules

- `statement` must be between 20 and 5000 characters.
- `citationIds` and `evidenceIds` must each contain at least one UUID.
- `status` transitions must be valid: Active → Resolved/Withdrawn/Superseded.

## Version Rules

- Each material change to a dissent statement creates a new version.
- Status changes are logged as minor versions with a reason.

## Governance Rules

- Dissent records must be submitted by authenticated scientific users.
- Active dissents must be reviewed by a Scientific Reviewer within 30 days.

## Future Evolution Rules

- Must support threaded discussion and review decisions in Phase 3.
- Must support AI-assisted conflict detection in Phase 5.
