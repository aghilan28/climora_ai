# `packages/visualizations`

## Purpose

Reserved package for future visualization primitives.

## Ownership

Visualization Engineering.

## Architectural Boundary

Presentation-adjacent visualization package. Must not import knowledge or data layers.

## Future Responsibilities

Future chart primitives and visualization adapters after data contracts exist.

## Forbidden Responsibilities

No climate visualizations in Phase 1; no knowledge/data imports, APIs, storage, or domain implementation.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
