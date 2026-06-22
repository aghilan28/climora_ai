# `packages/domain-types`

## Purpose

Shared type-only package reserved for future domain type contracts.

## Ownership

Domain Architecture Council.

## Architectural Boundary

Types boundary. In Phase 1 exports only platform-safe markers and must not encode climate entities.

## Future Responsibilities

Future stable type contracts once ontology and contracts are approved.

## Forbidden Responsibilities

No business entities, ontology entities, UI components, API clients, storage schemas, or runtime logic.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
