# `services/domain`

## Purpose

Reserved workspace for future domain services.

## Ownership

Domain Engineering.

## Architectural Boundary

Domain layer. Must remain independent from presentation, UI, application shells, knowledge, and infrastructure convenience imports unless expressly allowed later.

## Future Responsibilities

Future domain policies and invariant enforcement after ontology foundation is approved.

## Forbidden Responsibilities

No business logic or climate-science entities in Phase 1; no UI, API handlers, persistence, graph, or ingestion code.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
