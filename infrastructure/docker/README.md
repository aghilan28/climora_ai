# `infrastructure/docker`

## Purpose

Container build and runtime configuration foundation.

## Ownership

Platform Operations.

## Architectural Boundary

Infrastructure boundary. Contains deployment/container assets only, not application business code.

## Future Responsibilities

Future Dockerfiles and compose files for approved services.

## Forbidden Responsibilities

No domain logic, API implementation, schemas, UI pages, or secrets.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
