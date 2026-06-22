# `packages/design-system`

## Purpose

Reserved package for future presentation design primitives.

## Ownership

Frontend Platform Engineering and Design Systems.

## Architectural Boundary

UI package. Must not import domain, knowledge, data, validation, or service internals.

## Future Responsibilities

Future tokens and components after UI phase authorization.

## Forbidden Responsibilities

No UI pages in Phase 1; no business logic, climate logic, APIs, persistence, or knowledge access.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
