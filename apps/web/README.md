# `apps/web`

## Purpose

Reserved workspace for the future CSC web presentation application.

## Ownership

Frontend Platform Engineering.

## Architectural Boundary

Presentation layer. May depend on permitted shared/design packages only; must not import domain, knowledge, ingestion/data, validation, or service internals.

## Future Responsibilities

Future route shell, accessibility infrastructure, visual composition, and client-side integration adapters after approval.

## Forbidden Responsibilities

No UI pages in Phase 1; no domain logic, knowledge logic, data access, validation engines, or API server code.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
