# Taxonomy Registry

**Workstream:** D — Taxonomy Engineering  
**Status:** Complete

---

## Taxonomy Overview

The Climora Climate Taxonomy provides a 3-level hierarchical classification of climate knowledge. It is derived from the IPCC Sixth Assessment Report structure and adapted for machine-readable knowledge graph indexing.

## Level 1 Domains

| ID | Domain | Description |
|---|---|---|
| T1 | Scientific Foundations | Fundamental Earth system science and observations. |
| T2 | Climate Drivers | Factors that force or perturb the climate system. |
| T3 | Detection and Attribution | Methods for identifying causes of climate change. |
| T4 | Earth System Risk | Hazards, impacts, vulnerability, and exposure. |
| T5 | Future Pathways | Scenarios, projections, and future risk. |
| T6 | Responses | Mitigation, adaptation, and policy responses. |

## Level 2 Subdomains

| Domain | Subdomains |
|---|---|
| T1 | Earth System Science, Climate Observations |
| T2 | Greenhouse Gases, Radiative Forcing, Aerosols |
| T3 | Temperature Attribution, Extreme Event Attribution, Regional Attribution |
| T4 | Hazards, Impacts, Vulnerability and Exposure |
| T5 | Scenarios, Projections |
| T6 | Mitigation, Adaptation, Policy |

## Level 3 Topics

Level 3 topics are the leaf nodes used for classification. See `taxonomy-tree.yaml` for the complete hierarchy.

---

## Governance

- Taxonomy changes require approval by the Taxonomy Working Group.
- New topics must be mapped to at least one Level 2 subdomain.
- Topic slugs must be globally unique and URL-safe.
- Cross-cutting relationships are captured via `RELATES_TO` edges, not by duplicating topics.
