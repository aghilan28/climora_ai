# ADR-0001: Adoption of the Climate Systems Console Architecture Constitution as Binding Authority

## Status

Accepted

## Date

2026-06-22

## Context

The Climate Systems Console is expected to evolve through ontology, knowledge graph, storage, ingestion, validation, service, API, visualization, frontend, and infrastructure phases. Without an enforceable architectural authority, early implementation convenience can create coupling that later prevents correctness, governance, auditability, and safe scale.

## Decision

The Climate Systems Console Architecture Constitution is adopted as the binding authority for this repository and all future implementation phases.

All future implementation decisions must trace back to the Constitution. Architectural violations are prohibited, even when a shortcut appears locally convenient. All significant decisions require Architecture Decision Records. The Constitution supersedes implementation convenience, delivery pressure, and local package preferences.

Automated enforcement mechanisms, including TypeScript strictness, ESLint, dependency-cruiser, tests, CI workflows, commit governance, documentation validation, and the compliance matrix, are mandatory controls. Pull requests that fail these controls are not mergeable.

## Consequences

- Future implementation must be traceable to constitutional requirements and ADRs.
- Any architectural exception requires an accepted ADR before code is merged.
- Dependency violations are treated as build failures, not review comments.
- Phase work must add compliance evidence as the system evolves.
- Convenience-driven cross-layer imports are prohibited.

## Compliance Traceability

- Constitution clause(s): Architecture authority, dependency direction, governance enforcement, evidence-based compliance.
- Compliance matrix requirement IDs: CSC-ARCH-0001, CSC-ARCH-0002, CSC-GOV-0001.
- Verification method: ADR review, dependency-cruiser validation, CI workflow enforcement, compliance matrix validation.
- Evidence links: `.dependency-cruiser.cjs`, `.github/workflows/architecture-validation.yml`, `docs/architecture/compliance-matrix.json`.
