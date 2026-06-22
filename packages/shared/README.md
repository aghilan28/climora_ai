# `packages/shared`

## Purpose

Shared platform utilities package for governance-safe, layer-neutral primitives.

## Ownership

Platform Engineering.

## Architectural Boundary

Layer-neutral package; may not import feature/service/UI packages.

## Future Responsibilities

Future logging abstractions, error primitives, and platform helpers that are not domain-specific.

## Forbidden Responsibilities

No business logic, climate entities, API calls, UI components, storage access, or environment-specific side effects.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
