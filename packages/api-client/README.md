# `packages/api-client`

## Purpose

Reserved package for future generated API clients.

## Ownership

API Platform Engineering.

## Architectural Boundary

Client integration boundary. Must not import UI packages or service internals.

## Future Responsibilities

Future generated clients after API contracts are approved.

## Forbidden Responsibilities

No API definitions or network logic in Phase 1; no UI, domain implementation, storage, or ontology.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
