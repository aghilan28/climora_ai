# `packages/testing`

## Purpose

Shared test infrastructure package.

## Ownership

Quality Engineering.

## Architectural Boundary

Testing support boundary; may provide test helpers without depending on product layers.

## Future Responsibilities

Future factories for approved contracts and platform test utilities.

## Forbidden Responsibilities

No production business logic, climate fixtures, UI pages, APIs, persistence, or real service integrations.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
