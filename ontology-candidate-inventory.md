# Ontology Candidate Inventory

**Workstream:** A — Knowledge Domain Discovery  
**Task:** A.1 — Perform Complete Climate Knowledge Decomposition  
**Status:** Complete

---

## Inventory Methodology

The climate corpus was decomposed by analyzing assessment reports, journal articles, datasets, and model outputs. Every object that exists in the scientific knowledge flow was identified, named, and assigned a candidate identifier.

---

## Candidate Entities

| ID | Name | Rationale | Candidate Type |
|---|---|---|---|
| ONT-001 | `Finding` | A formal scientific conclusion supported by evidence, citations, and metrics. | Core |
| ONT-002 | `Evidence` | The empirical or model-based basis for a finding. | Core |
| ONT-003 | `Citation` | A bibliographic or data reference to a research source. | Core |
| ONT-004 | `Topic` | A classifiable subject in the climate taxonomy. | Core |
| ONT-005 | `Metric` | A quantified measurement associated with a finding. | Core |
| ONT-006 | `Confidence` | A qualitative assessment of the validity of a finding. | Derived |
| ONT-007 | `Likelihood` | A probabilistic framing of a finding or projection. | Derived |
| ONT-008 | `Scenario` | A coherent narrative of future conditions used for projections. | Core |
| ONT-009 | `Projection` | A future-state estimate derived from models or scenarios. | Core |
| ONT-010 | `Observation` | A measured record of climate or environmental conditions. | Core |
| ONT-011 | `Dataset` | A structured collection of data values. | Supporting |
| ONT-012 | `Research Source` | A publication, report, or dataset that contributes knowledge. | Supporting |
| ONT-013 | `Version` | A record of an entity's evolution over time. | Infrastructure |
| ONT-014 | `Lineage` | A trace of origin, transformation, and derivation. | Infrastructure |
| ONT-015 | `Audit Record` | A log of who changed what and why. | Governance |
| ONT-016 | `Provenance Record` | A trace of data origin and custody. | Governance |
| ONT-017 | `Dissent Record` | A formal scientific disagreement with a finding. | Governance |
| ONT-018 | `Relationship` | A typed semantic link between entities. | Infrastructure |
| ONT-019 | `Baseline` | A reference state against which change is measured. | Supporting |
| ONT-020 | `Reference Period` | A defined time window used for normalization. | Supporting |
| ONT-021 | `Time Series` | A sequence of observations over time. | Supporting |
| ONT-022 | `Geographic Scope` | A spatial extent for a finding, metric, or projection. | Supporting |
| ONT-023 | `Impact Domain` | A sector or system affected by climate change. | Core |
| ONT-024 | `Mitigation Strategy` | An intervention to reduce climate forcing. | Core |
| ONT-025 | `Adaptation Strategy` | An intervention to reduce vulnerability or exposure. | Core |
| ONT-026 | `Policy Reference` | A linkage to a policy document or instrument. | Supporting |
| ONT-027 | `Research Snapshot` | A point-in-time summary of a research source. | Derived |
| ONT-028 | `Knowledge Bundle` | A packaged collection of related findings and topics. | Derived |
| ONT-029 | `Evidence Bundle` | A packaged collection of evidence items. | Derived |
| ONT-030 | `Knowledge Subgraph` | A connected subset of the knowledge graph. | Derived |

---

## Phase 2 Scope Decision

For the foundation engineering program, the following 9 entities are elevated to full formal specification:

1. `Finding`
2. `Evidence`
3. `Citation`
4. `Topic`
5. `Metric`
6. `DissentRecord`
7. `VersionRecord`
8. `ProvenanceRecord`
9. `AuditRecord`

The remaining candidates are retained in the candidate inventory and will be formalized in subsequent phases as the knowledge graph expands.
