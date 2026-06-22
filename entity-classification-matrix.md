# Entity Classification Matrix

**Workstream:** A — Knowledge Domain Discovery  
**Task:** A.2 — Entity Classification Workshop  
**Status:** Complete

---

## Classification Dimensions

| Category | Definition | Governance Rule |
|---|---|---|
| **Core Entities** | Direct scientific objects that carry climate meaning. | Full specification; versioned; audited; graph-noded. |
| **Supporting Entities** | Contextual or container objects that enrich core entities. | Specified; may be embedded or referenced. |
| **Derived Entities** | Computed or inferred objects produced from core data. | Specified; clearly defined derivation rules. |
| **Infrastructure Entities** | System objects that enable versioning, lineage, and audit. | Mandatory for every mutating operation. |
| **Governance Entities** | Objects that capture dissent, provenance, and compliance. | Immutable; append-only; deletion forbidden. |

---

## Classification Matrix

| Entity | Core | Supporting | Derived | Infrastructure | Governance | Rationale |
|---|---|---|---|---|---|---|
| `Finding` | ✅ | ❌ | ❌ | ❌ | ❌ | Primary scientific conclusion. |
| `Evidence` | ✅ | ❌ | ❌ | ❌ | ❌ | Empirical basis for findings. |
| `Citation` | ✅ | ❌ | ❌ | ❌ | ❌ | Knowledge provenance anchor. |
| `Topic` | ✅ | ❌ | ❌ | ❌ | ❌ | Taxonomic classification node. |
| `Metric` | ✅ | ❌ | ❌ | ❌ | ❌ | Quantified climate measurement. |
| `Scenario` | ✅ | ❌ | ❌ | ❌ | ❌ | Future narrative frame. |
| `Projection` | ✅ | ❌ | ❌ | ❌ | ❌ | Future estimate. |
| `Observation` | ✅ | ❌ | ❌ | ❌ | ❌ | Empirical record. |
| `Impact Domain` | ✅ | ❌ | ❌ | ❌ | ❌ | Affected sector or system. |
| `Mitigation Strategy` | ✅ | ❌ | ❌ | ❌ | ❌ | Intervention type. |
| `Adaptation Strategy` | ✅ | ❌ | ❌ | ❌ | ❌ | Intervention type. |
| `Dataset` | ❌ | ✅ | ❌ | ❌ | ❌ | Structured data collection. |
| `Research Source` | ❌ | ✅ | ❌ | ❌ | ❌ | Publication or report reference. |
| `Baseline` | ❌ | ✅ | ❌ | ❌ | ❌ | Reference state. |
| `Reference Period` | ❌ | ✅ | ❌ | ❌ | ❌ | Time window. |
| `Time Series` | ❌ | ✅ | ❌ | ❌ | ❌ | Temporal sequence. |
| `Geographic Scope` | ❌ | ✅ | ❌ | ❌ | ❌ | Spatial extent. |
| `Policy Reference` | ❌ | ✅ | ❌ | ❌ | ❌ | Policy linkage. |
| `Confidence` | ❌ | ❌ | ✅ | ❌ | ❌ | Derived from evidence strength. |
| `Likelihood` | ❌ | ❌ | ✅ | ❌ | ❌ | Derived from model ensemble. |
| `Research Snapshot` | ❌ | ❌ | ✅ | ❌ | ❌ | Summarized view of a source. |
| `Knowledge Bundle` | ❌ | ❌ | ✅ | ❌ | ❌ | Packaged subgraph. |
| `Evidence Bundle` | ❌ | ❌ | ✅ | ❌ | ❌ | Packaged evidence set. |
| `Knowledge Subgraph` | ❌ | ❌ | ✅ | ❌ | ❌ | Graph projection. |
| `Version` | ❌ | ❌ | ❌ | ✅ | ❌ | Entity evolution tracking. |
| `Lineage` | ❌ | ❌ | ❌ | ✅ | ❌ | Origin and transformation trace. |
| `Relationship` | ❌ | ❌ | ❌ | ✅ | ❌ | Graph edge semantics. |
| `Audit Record` | ❌ | ❌ | ❌ | ❌ | ✅ | Change log. |
| `Provenance Record` | ❌ | ❌ | ❌ | ❌ | ✅ | Data custody trace. |
| `Dissent Record` | ❌ | ❌ | ❌ | ❌ | ✅ | Scientific disagreement. |

---

## Phase 2 Focus Set

The 9 entities selected for full specification in Phase 2 are highlighted in bold:

**Core:** `Finding`, `Evidence`, `Citation`, `Topic`, `Metric`  
**Governance:** `DissentRecord`, `VersionRecord`, `ProvenanceRecord`, `AuditRecord`
