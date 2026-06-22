# `packages`

## Purpose

Top-level workspace for shared packages with explicit architectural roles.

## Ownership

Platform Engineering and package maintainers.

## Architectural Boundary

Packages declare their permitted dependencies and are checked by dependency-cruiser and TypeScript references.

## Future Responsibilities

Future reusable packages must be introduced with ADRs and boundary rules.

## Forbidden Responsibilities

Undocumented shared dumping ground behavior, circular dependencies, or layer bypasses.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
