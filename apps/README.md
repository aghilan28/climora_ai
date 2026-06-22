# `apps`

## Purpose

Top-level deployable user-facing application workspace.

## Ownership

Platform Engineering with future Product UI owners.

## Architectural Boundary

Contains presentation-layer applications only; must not contain domain, knowledge, ingestion, validation, persistence, or infrastructure logic.

## Future Responsibilities

May host application shells and composition code once later phases authorize UI implementation.

## Forbidden Responsibilities

Business logic, climate-science entities, ontology definitions, API implementations, database schemas, and cross-layer shortcuts.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
