# Validation Rules

**Workstream:** F — Validation Contract Design  
**Status:** Complete

---

## Validation Categories

| Category | Scope | Enforcement Layer |
|---|---|---|
| Schema Validation | Structural correctness of entity payloads. | Zod, JSON Schema, OpenAPI. |
| Ontology Validation | Semantic correctness within the ontology. | Ontology engine. |
| Relationship Validation | Integrity of graph relationships. | Graph engine + application layer. |
| Confidence Validation | Confidence terms are valid and consistent. | Application layer. |
| Likelihood Validation | Likelihood terms are valid and consistent. | Application layer. |
| Citation Validation | Citation integrity and uniqueness. | Application layer. |
| Evidence Validation | Evidence strength and status rules. | Application layer. |
| Metric Validation | Metric value, unit, and period correctness. | Application layer. |
| Provenance Validation | Provenance completeness and traceability. | Application layer. |
| Version Validation | Version ordering and immutability. | Application layer. |
| Graph Validation | Graph constraints and cycles. | Graph engine. |

---

## Core Validation Rules

### Finding

- `statement` is mandatory and must be 10–5000 characters.
- `confidenceRating` and `likelihoodRating` must be valid enum values.
- `topicIds`, `evidenceIds`, `citationIds` must each contain at least one UUID.
- `version` must be semantic versioning.
- If `supersededBy` is set, it must reference a Finding with a higher version.

### Evidence

- `description` is mandatory and must be 20–3000 characters.
- `citationIds` must contain at least one UUID.
- `provenanceId` must reference an existing ProvenanceRecord.
- `validationStatus` transitions must follow the allowed state machine.

### Citation

- `title` and `authors` are mandatory.
- `year` must be between 1800 and 2100.
- `doi` must be unique within the citation table if present.
- `url` must be a valid URI if present.

### Topic

- `slug` must be unique and match `^[a-z0-9-]+$`.
- `parentTopicId` must not create a cycle.
- `hierarchyLevel` must match the actual depth in the taxonomy tree.

### Metric

- `value` must be a finite number.
- `unit` and `period` are mandatory.
- `geographicScope` is mandatory.
- `findingId` must reference an existing Finding.

### DissentRecord

- `statement` is mandatory and must be 20–5000 characters.
- `citationIds` and `evidenceIds` must each contain at least one UUID.
- `status` transitions must be valid.

### VersionRecord

- `versionNumber` must be semver.
- `previousVersion` must be less than `versionNumber`.
- `changeReason` is mandatory.

### ProvenanceRecord

- `originSource` is mandatory.
- Every event must contain `action`, `actor`, and `timestamp`.

### AuditRecord

- `action`, `actor`, `entityId`, and `reason` are mandatory.
- `reason` must be 5–1000 characters.

---

## Relationship Validation Rules

- `SUPPORTED_BY`: target Evidence must be `Validated`.
- `CITES`: target Citation must exist.
- `BELONGS_TO`: target Topic must exist.
- `SUPERSEDES`: must not create cycles; newer version must be greater.
- `CONTRASTS_WITH`: target DissentRecord must be `Active` or `Resolved`.
- `RELATES_TO`: no self-loops; both topics must exist.
- `QUANTIFIES`: source Metric `findingId` must match target Finding.

---

## Graph Validation Rules

- No cycles in `SUPERSEDES`.
- No orphaned core entities (Finding without Evidence or Topic).
- No duplicate edges of the same type between the same nodes unless explicitly allowed.
- All graph nodes must have a corresponding entity record.
