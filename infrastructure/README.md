# `infrastructure`

## Purpose

Top-level infrastructure-as-code and operational automation workspace.

## Ownership

Platform Operations and SRE.

## Architectural Boundary

Infrastructure assets only; no product implementation.

## Future Responsibilities

Future environment provisioning after Phase 1 governance controls are stable.

## Forbidden Responsibilities

No business logic, climate entities, APIs, database schemas, graph models, UI pages, or secrets.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
