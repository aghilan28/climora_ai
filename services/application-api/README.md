# `services/application-api`

## Purpose

Future application-service boundary for API orchestration.

## Ownership

Application Platform Engineering.

## Architectural Boundary

Application layer. Coordinates approved lower layers only; it must not import UI/presentation packages.

## Future Responsibilities

Future request orchestration, use-case composition, and anti-corruption adapters after contracts exist.

## Forbidden Responsibilities

No APIs in Phase 1; no UI code; no ontology, database, graph, or climate logic.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
