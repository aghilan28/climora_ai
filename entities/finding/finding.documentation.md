# Finding

## Definition

A **Finding** is a formal scientific conclusion that is supported by evidence, attributed to bibliographic sources, classified under topics, and optionally quantified by metrics. It is the primary unit of climate knowledge in the Climora AI knowledge graph.

## Purpose

Findings capture the substantive claims of climate science in a machine-readable, versioned, auditable form. They serve as the anchor nodes for knowledge graph traversal, AI reasoning, and user-facing summaries.

## Fields

| Field | Type | Cardinality | Required | Description |
|---|---|---|---|---|
| `id` | uuid | 1 | ✅ | Stable identifier. |
| `statement` | string | 1 | ✅ | Formal scientific statement. |
| `summary` | string | 1 | ✅ | Plain-language summary. |
| `confidenceRating` | ConfidenceLevel | 1 | ✅ | Validity confidence. |
| `likelihoodRating` | LikelihoodLevel | 1 | ✅ | Outcome likelihood. |
| `dataNature` | DataNature | 1 | ✅ | Nature of underlying data. |
| `baselinePeriod` | string | 1 | ✅ | Reference period. |
| `topicIds` | uuid[] | 1:N | ✅ | Topics the finding belongs to. |
| `evidenceIds` | uuid[] | 1:N | ✅ | Evidence items that support it. |
| `citationIds` | uuid[] | 1:N | ✅ | Bibliographic sources. |
| `metricIds` | uuid[] | 0:N | ✅ | Associated metrics (may be empty). |
| `version` | semver | 1 | ✅ | Record version. |
| `supersedes` | uuid | 0:1 | ❌ | Prior version superseded by this record. |
| `supersededBy` | uuid | 0:1 | ❌ | Later version that supersedes this record. |
| `createdAt` | datetime | 1 | ✅ | Creation timestamp. |
| `updatedAt` | datetime | 1 | ✅ | Last update timestamp. |
| `metadata` | object | 1 | ✅ | Extensible metadata. |

## Relationships

- `SUPPORTED_BY` → `Evidence` (1:N, required)
- `BELONGS_TO` → `Topic` (1:N, required)
- `CITES` → `Citation` (1:N, required)
- `QUANTIFIES` ← `Metric` (1:N, optional)
- `SUPERSEDES` → `Finding` (1:1, optional)
- `CONTRASTS_WITH` ← `DissentRecord` (1:N, optional)

## Example

```json
{
  "id": "f3b2c1d4-e5f6-7890-abcd-ef1234567890",
  "statement": "Global mean surface temperature has increased by approximately 1.1°C since pre-industrial times.",
  "summary": "Human activities have caused the planet to warm by about 1.1°C since the late 1800s.",
  "confidenceRating": "VeryHigh",
  "likelihoodRating": "VirtuallyCertain",
  "dataNature": "Observed",
  "baselinePeriod": "1850-1900",
  "topicIds": ["t-123", "t-456"],
  "evidenceIds": ["e-789"],
  "citationIds": ["c-321"],
  "metricIds": ["m-654"],
  "version": "1.0.0",
  "createdAt": "2026-06-22T00:00:00Z",
  "updatedAt": "2026-06-22T00:00:00Z",
  "metadata": {
    "assessmentCycle": "AR6",
    "chapterReference": "WGI Chapter 2",
    "tags": ["temperature", "attribution"],
    "language": "en"
  }
}
```

## Non-Examples

- A headline without evidence or citation is **not** a Finding.
- A metric without a statement is **not** a Finding.
- A personal opinion is **not** a Finding.

## Validation Rules

- `statement` must be non-empty and between 10 and 5000 characters.
- `summary` must be non-empty and between 10 and 1000 characters.
- `topicIds`, `evidenceIds`, and `citationIds` must each contain at least one UUID.
- `version` must conform to semantic versioning (e.g., `1.0.0`).
- `createdAt` and `updatedAt` must be ISO 8601 date-time strings.
- If `supersededBy` is set, the target record must exist and must have a higher version.

## Version Rules

- Every Finding record is immutable; updates create a new version.
- `version` must be incremented for any material change to statement, confidence, or evidence.
- Superseded records remain queryable for lineage and audit.

## Governance Rules

- Only Knowledge Curators may create or version Findings.
- Scientific Reviewers must approve Findings before they are marked as authoritative.
- Findings are append-only; deletion is forbidden.

## Future Evolution Rules

- Must support linkage to `Scenario` and `Projection` in Phase 3.
- Must support `ImpactDomain`, `MitigationStrategy`, and `AdaptationStrategy` associations in Phase 4.
- Must support AI-generated summaries and confidence explanations in Phase 5.
