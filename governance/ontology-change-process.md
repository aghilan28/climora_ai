# Ontology Change Process

**Workstream:** K — Ontology Governance  
**Status:** Complete

---

## Change Request Lifecycle

1. **Request** — Submitter opens a Change Request (CR) with rationale, impact, and proposed schema changes.
2. **Triage** — Ontology Governance Board assigns a reviewer and classification (minor, major, breaking).
3. **Review** — Scientific Reviewer assesses scientific validity; Architect assesses system impact.
4. **Revision** — Submitter addresses feedback.
5. **Approval** — Architecture Board approves or rejects.
6. **Implementation** — Approved changes are implemented in all seven machine-readable formats.
7. **Certification** — Changes pass schema, relationship, machine-readability, and audit gates.
8. **Communication** — Changes are documented and communicated to stakeholders.

---

## Change Classifications

| Class | Definition | Approval Required |
|---|---|---|
| Minor | Additive, non-breaking, backward-compatible. | Knowledge Systems Architect |
| Major | Substantive but not breaking; requires new entity versions. | Scientific Reviewer + Architect |
| Breaking | Alters semantics, removes fields, or renames enums. | Architecture Board |

---

## Required Artifacts

- Updated TypeScript types
- Updated Zod schemas
- Updated JSON Schemas
- Updated OpenAPI components
- Updated Graph schemas
- Updated Storage schemas
- Updated documentation
- Updated validation rules
- Updated tests
- Migration guide (for breaking changes)

---

## Emergency Changes

Emergency changes may bypass full review only for critical security or integrity issues. They must be retroactively reviewed and ratified within 5 business days.
