# Taxonomy Mapping Matrix

**Workstream:** D — Taxonomy Engineering  
**Status:** Complete

---

## Mapping Dimensions

| Dimension | Description |
|---|---|
| Entity | The ontology entity being mapped. |
| Taxonomy Level | The level(s) of the taxonomy that apply. |
| Relationship | The semantic relationship used to express the mapping. |
| Cardinality | How many taxonomy nodes can be linked. |

---

## Mapping Matrix

| Entity | Taxonomy Level | Relationship | Cardinality | Notes |
|---|---|---|---|---|
| `Finding` | L3 Topic | `BELONGS_TO` | 1:N | Primary classification. |
| `Evidence` | L3 Topic | `RELATES_TO` (via Finding) | Indirect | Evidence inherits topic classification from its finding. |
| `Metric` | L3 Topic | `QUANTIFIES` → `Finding` | Indirect | Metrics are discovered via the finding they quantify. |
| `DissentRecord` | L3 Topic | `CONTRASTS_WITH` → `Finding` | Indirect | Inherits topic classification from the challenged finding. |
| `Scenario` | L5 Subdomain | `BELONGS_TO` | 1:N | Future pathways classification. |
| `Projection` | L5 Subdomain | `BELONGS_TO` | 1:N | Projection classification. |
| `ImpactDomain` | L4 Subdomain | `BELONGS_TO` | 1:N | Impact classification. |
| `MitigationStrategy` | L6 Subdomain | `BELONGS_TO` | 1:N | Response classification. |
| `AdaptationStrategy` | L6 Subdomain | `BELONGS_TO` | 1:N | Response classification. |

---

## Future Entity Mappings

Entities scheduled for Phase 3 and beyond will be mapped to the taxonomy as follows:

- `Scenario` → T5.1
- `Projection` → T5.2
- `Observation` → T1.2
- `Dataset` → T1.2
- `ImpactDomain` → T4.2
- `MitigationStrategy` → T6.1
- `AdaptationStrategy` → T6.2
- `PolicyReference` → T6.3
