# Evidence

## Definition

An **Evidence** record is the empirical, experimental, or model-based basis that supports a Finding. It links a scientific claim to the underlying observations, datasets, simulations, or assessments that justify it.

## Purpose

Evidence records make the reasoning behind a Finding transparent and auditable. They are the primary source nodes for graph traversal from conclusion to underlying data.

## Fields

| Field | Type | Cardinality | Required | Description |
|---|---|---|---|---|
| `id` | uuid | 1 | ✅ | Stable identifier. |
| `type` | EvidenceType | 1 | ✅ | Kind of evidence. |
| `description` | string | 1 | ✅ | Description of the evidence and its relevance. |
| `findingId` | uuid | 1 | ✅ | The finding this evidence supports. |
| `citationIds` | uuid[] | 1:N | ✅ | Citations documenting the evidence. |
| `provenanceId` | uuid | 1 | ✅ | Provenance trace of the evidence data. |
| `sourceType` | SourceType | 1 | ✅ | How the evidence was obtained. |
| `evidenceStrength` | EvidenceStrength | 1 | ✅ | Strength of the evidence. |
| `validationStatus` | ValidationStatus | 1 | ✅ | Validation lifecycle state. |
| `metadata` | object | 1 | ✅ | Extensible metadata. |

## Relationships

- `SUPPORTS` → `Finding` (N:1, required)
- `CITES` → `Citation` (1:N, required)
- `HAS_PROVENANCE` → `ProvenanceRecord` (1:1, required)

## Example

```json
{
  "id": "e-789",
  "type": "Observation",
  "description": "Global temperature anomaly derived from HadCRUT5, Berkeley Earth, and GISTEMP analyses, showing consistent warming trends.",
  "findingId": "f3b2c1d4-e5f6-7890-abcd-ef1234567890",
  "citationIds": ["c-321"],
  "provenanceId": "p-001",
  "sourceType": "InSitu",
  "evidenceStrength": "Conclusive",
  "validationStatus": "Validated",
  "metadata": {
    "geographicScope": "Global",
    "temporalCoverage": "1850-2023",
    "instrument": "Weather stations, buoys, satellites",
    "processingMethod": "Homogenization and gridding",
    "qualityFlags": ["homogenized", "interpolated"]
  }
}
```

## Non-Examples

- A citation without a description of relevance is **not** Evidence.
- A finding restated as a premise is **not** Evidence.
- Unprocessed raw data is **not** Evidence unless contextualized.

## Validation Rules

- `description` must be between 20 and 3000 characters.
- `citationIds` must contain at least one UUID.
- `provenanceId` must reference an existing ProvenanceRecord.
- `validationStatus` transitions must be logged in AuditRecord.

## Version Rules

- Evidence records are versioned only when the description or validation status changes materially.
- Changes to `evidenceStrength` require a new version and a justification.

## Governance Rules

- Evidence must be validated by a Data Steward before it can be linked to an authoritative Finding.
- Rejected evidence cannot be linked to new Findings but remains in the system for audit.

## Future Evolution Rules

- Must support linkage to `Dataset` and `TimeSeries` in Phase 3.
- Must support uncertainty quantification metadata in Phase 4.
