# `services`

## Purpose

Top-level workspace for independently governed backend/service packages.

## Ownership

Platform Engineering and service owning teams.

## Architectural Boundary

Contains non-presentation service layers with strict dependency direction enforced by dependency-cruiser.

## Future Responsibilities

Future services may be added only with ADR-backed boundaries and compliance matrix entries.

## Forbidden Responsibilities

No UI pages, frontend feature code, undocumented cross-layer imports, or bypasses of shared tooling.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
