# `services/validation`

## Purpose

Reserved workspace for future validation services.

## Ownership

Validation Platform Engineering.

## Architectural Boundary

Validation layer. Must not import presentation/UI packages or application presentation adapters.

## Future Responsibilities

Future validation rule execution and evidence collection after formal contracts exist.

## Forbidden Responsibilities

No validators, ontology checks, APIs, UI, persistence, or climate logic in Phase 1.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
