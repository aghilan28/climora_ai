# `tests`

## Purpose

Top-level test suites for repository-wide validation.

## Ownership

Quality Engineering.

## Architectural Boundary

Testing boundary. Tests may verify platform controls without embedding product logic.

## Future Responsibilities

Future unit, integration, e2e, and architecture tests as phases add authorized functionality.

## Forbidden Responsibilities

No production implementation, climate entities, storage schemas, graph models, or UI pages.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
