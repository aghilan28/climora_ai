# Version Record

## Definition

A **Version Record** captures the evolution of an entity over time. It stores the version number, the reason for change, the actor responsible, and an optional snapshot or hash of the entity payload.

## Purpose

Version records provide immutability, auditability, and rollback capability for every versioned entity in the knowledge system.

## Fields

| Field | Type | Cardinality | Required | Description |
|---|---|---|---|---|
| `id` | uuid | 1 | ✅ | Stable identifier. |
| `entityType` | string | 1 | ✅ | Type of entity being versioned. |
| `entityId` | uuid | 1 | ✅ | Identifier of the versioned entity. |
| `versionNumber` | semver | 1 | ✅ | Version number. |
| `previousVersion` | semver | 0:1 | ❌ | Previous version number. |
| `changeReason` | string | 1 | ✅ | Explanation of the change. |
| `createdBy` | string | 1 | ✅ | Actor who created the version. |
| `createdAt` | datetime | 1 | ✅ | Timestamp. |
| `payloadHash` | string | 0:1 | ❌ | Cryptographic hash of payload. |
| `payloadSnapshot` | object | 0:1 | ❌ | Full payload snapshot. |

## Relationships

- `VERSION_OF` → `*` (N:1, required)
- `SUPERSEDES` → `VersionRecord` (1:1, optional)

## Example

```json
{
  "id": "v-001",
  "entityType": "Finding",
  "entityId": "f3b2c1d4-e5f6-7890-abcd-ef1234567890",
  "versionNumber": "1.1.0",
  "previousVersion": "1.0.0",
  "changeReason": "Updated likelihood rating from 'Very Likely' to 'Virtually Certain' based on additional evidence.",
  "createdBy": "curator@climora.ai",
  "createdAt": "2026-06-22T12:00:00Z",
  "payloadHash": "sha256:abc123...",
  "payloadSnapshot": {}
}
```

## Non-Examples

- A version without a change reason is **not** a valid Version Record.
- A version number that does not follow semver is **not** valid.

## Validation Rules

- `versionNumber` must be semver.
- `changeReason` must be between 10 and 2000 characters.
- `createdBy` must be a non-empty identifier.
- `entityType` must match a known entity type.

## Version Rules

- Version records are immutable and append-only.
- Every new version must have a higher semantic version than the previous one.

## Governance Rules

- Version records are generated automatically by the system on entity mutation.
- Human actors cannot directly modify version records.

## Future Evolution Rules

- Must support cryptographic verification and Merkle trees in Phase 4.
- Must support automated diff generation in Phase 5.
