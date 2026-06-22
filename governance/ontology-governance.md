# Ontology Governance

**Workstream:** K — Ontology Governance  
**Status:** Complete

---

## Governance Bodies

| Body | Responsibility |
|---|---|
| Taxonomy Working Group | Owns the climate taxonomy and topic hierarchy. |
| Knowledge Curators | Create and version findings, evidence, and metrics. |
| Scientific Reviewers | Approve authoritative scientific content. |
| Data Stewards | Validate evidence and provenance records. |
| Bibliographic Stewards | Maintain citation records. |
| Architecture Board | Approve ontology changes and new top-level entities. |

---

## Governance Policies

### Ontology Change Policy

- All changes to core entities require a change request.
- Change requests must include impact analysis and migration plan.
- New entities require Architecture Board approval.
- Taxonomy changes require Taxonomy Working Group approval.

### Schema Change Policy

- Schema changes are classified as breaking or non-breaking.
- Breaking changes require a new major version and a deprecation period.
- Non-breaking additive changes may be introduced in minor versions.
- Schema changes must be reflected in all seven machine-readable formats.

### Enumeration Change Policy

- New enum values are additive and require Scientific Reviewer approval.
- Renaming or removing enum values is a breaking change.
- Enum labels must be calibrated to IPCC language where applicable.

### Versioning Policy

- Semantic versioning is mandatory for versioned entities.
- Version records are generated automatically.
- Superseded records remain queryable.

### Deprecation Policy

- Deprecated entities, fields, or enum values are marked with `deprecated: true`.
- Deprecated items remain available for at least one major release cycle.
- Migration guides must be published for all deprecations.
