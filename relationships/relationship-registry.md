# Relationship Registry

**Workstream:** E — Graph Contract Engineering  
**Status:** Complete

---

## Relationship Inventory

| ID | Type | Source | Target | Cardinality | Purpose |
|---|---|---|---|---|---|
| REL-001 | `SUPPORTED_BY` | Finding | Evidence | 1:N | Links a finding to the evidence that supports it. |
| REL-002 | `CITES` | Evidence | Citation | 1:N | Links evidence to its bibliographic sources. |
| REL-003 | `BELONGS_TO` | Finding | Topic | 1:N | Classifies a finding under one or more topics. |
| REL-004 | `SUPERSEDES` | Finding | Finding | 1:1 | Replaces an earlier finding version. |
| REL-005 | `CONTRASTS_WITH` | Finding | DissentRecord | 1:N | Records scientific disagreement with a finding. |
| REL-006 | `RELATES_TO` | Topic | Topic | N:M | Expresses cross-cutting semantic relationships. |
| REL-007 | `QUANTIFIES` | Metric | Finding | 1:N | Associates a metric with the finding it quantifies. |

---

## Semantic Definitions

### `SUPPORTED_BY`

A `Finding` is `SUPPORTED_BY` one or more `Evidence` records. The existence of this relationship is mandatory for a finding to be considered authoritative.

### `CITES`

An `Evidence` record `CITES` one or more `Citation` records. The citation must be a direct bibliographic source for the evidence.

### `BELONGS_TO`

A `Finding` `BELONGS_TO` one or more `Topic` nodes. This relationship provides the primary taxonomic index for discovery.

### `SUPERSEDES`

A `Finding` `SUPERSEDES` another `Finding` when it is a later version that replaces the earlier one. The relationship is temporal and version-governed.

### `CONTRASTS_WITH`

A `Finding` `CONTRASTS_WITH` a `DissentRecord` when the dissent record formally challenges the finding. This relationship is optional and governed by dissent status.

### `RELATES_TO`

A `Topic` `RELATES_TO` another `Topic` when there is a cross-cutting semantic association that is not captured by the parent-child hierarchy.

### `QUANTIFIES`

A `Metric` `QUANTIFIES` a `Finding` when the metric provides a numeric value that expresses or clarifies the finding.
