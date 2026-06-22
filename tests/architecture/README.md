# `tests/architecture`

## Purpose

Architecture conformance tests and dependency-cruiser validation fixtures.

## Ownership

Quality Engineering.

## Architectural Boundary

Test-only boundary; may not be imported by production workspaces.

## Future Responsibilities

Future tests corresponding to approved implementation phases.

## Forbidden Responsibilities

No production logic or hidden implementation.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
