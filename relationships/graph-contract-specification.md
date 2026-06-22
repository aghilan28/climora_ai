# Graph Contract Specification

**Workstream:** E — Graph Contract Engineering  
**Status:** Complete

---

## Contract Template

Each relationship contract must define:

- **Purpose:** Why the relationship exists.
- **Source Entity:** The node that originates the relationship.
- **Target Entity:** The node that receives the relationship.
- **Cardinality:** Allowed multiplicity.
- **Validation Rules:** Constraints on creation and mutation.
- **Lifecycle Rules:** How the relationship changes over time.
- **Versioning Rules:** How the relationship is versioned.
- **Traversal Rules:** How the relationship can be traversed in graph queries.

---

## REL-001: SUPPORTED_BY

| Attribute | Value |
|---|---|
| Purpose | Establish evidentiary support for a finding. |
| Source | `Finding` |
| Target | `Evidence` |
| Cardinality | 1:N (one finding must be supported by at least one evidence) |
| Validation | Both source and target must exist; target must be `Validated`. |
| Lifecycle | Created on finding creation; removed only if evidence is superseded or rejected. |
| Versioning | Follows the finding version; evidence versions do not affect the relationship unless the evidence itself is superseded. |
| Traversal | Forward from `Finding` to `Evidence`; reverse from `Evidence` to supported `Finding`. |

## REL-002: CITES

| Attribute | Value |
|---|---|
| Purpose | Link evidence to its bibliographic or data sources. |
| Source | `Evidence` |
| Target | `Citation` |
| Cardinality | 1:N |
| Validation | Citation must exist; at least one citation per evidence is required. |
| Lifecycle | Immutable; corrections create new evidence versions. |
| Versioning | Versioned with the evidence record. |
| Traversal | Forward from `Evidence` to `Citation`; reverse index citations by evidence. |

## REL-003: BELONGS_TO

| Attribute | Value |
|---|---|
| Purpose | Classify a finding under the climate taxonomy. |
| Source | `Finding` |
| Target | `Topic` |
| Cardinality | 1:N |
| Validation | Topic must exist; at least one topic per finding is required. |
| Lifecycle | Mutable; topics may be refined as taxonomy evolves. |
| Versioning | Topic changes may create a new finding version. |
| Traversal | Forward from `Finding` to `Topic`; reverse from `Topic` to all findings. |

## REL-004: SUPERSEDES

| Attribute | Value |
|---|---|
| Purpose | Replace an earlier finding with a newer version. |
| Source | `Finding` (newer) |
| Target | `Finding` (older) |
| Cardinality | 1:1 |
| Validation | Source version must be greater than target version; both must exist; target must not already be superseded by a different record. |
| Lifecycle | Created on version promotion; immutable. |
| Versioning | Both source and target are versioned records. |
| Traversal | Forward to older version; reverse to newer version. |

## REL-005: CONTRASTS_WITH

| Attribute | Value |
|---|---|
| Purpose | Capture formal scientific disagreement with a finding. |
| Source | `Finding` |
| Target | `DissentRecord` |
| Cardinality | 1:N |
| Validation | Dissent record must be `Active` or `Resolved`; target must cite evidence and sources. |
| Lifecycle | Created when dissent is registered; may be closed when resolved. |
| Versioning | Dissent status changes are versioned; relationship persists for audit. |
| Traversal | Forward from `Finding` to dissent; reverse to challenged finding. |

## REL-006: RELATES_TO

| Attribute | Value |
|---|---|
| Purpose | Express cross-cutting semantic associations between topics. |
| Source | `Topic` |
| Target | `Topic` |
| Cardinality | N:M |
| Validation | Both topics must exist; self-relationships are forbidden. |
| Lifecycle | Mutable; may be refined by taxonomy working group. |
| Versioning | Relationship changes are logged in audit and version records. |
| Traversal | Bidirectional; supports weighted relevance edges. |

## REL-007: QUANTIFIES

| Attribute | Value |
|---|---|
| Purpose | Associate a numeric metric with a finding. |
| Source | `Metric` |
| Target | `Finding` |
| Cardinality | 1:N |
| Validation | Both source and target must exist; metric `findingId` must match target. |
| Lifecycle | Created with metric; removed if metric is corrected or superseded. |
| Versioning | Metric versions create new `QUANTIFIES` edges. |
| Traversal | Forward from `Metric` to `Finding`; reverse to retrieve all metrics for a finding. |
