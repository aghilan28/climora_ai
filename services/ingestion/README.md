# `services/ingestion`

## Purpose

Reserved workspace for future ingestion/data acquisition services.

## Ownership

Data Platform Engineering.

## Architectural Boundary

Data layer. Must not import presentation/UI packages or application presentation adapters.

## Future Responsibilities

Future ingestion orchestration, source adapters, and data normalization after storage/ontology authorization.

## Forbidden Responsibilities

No pipelines, schemas, APIs, storage, graph writes, or climate logic in Phase 1.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
