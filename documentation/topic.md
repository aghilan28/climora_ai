# Topic — Ontology Documentation

## Definition

A node in the climate taxonomy that classifies knowledge objects.

## Purpose

Provides the semantic backbone for discovery and graph traversal.

## Fields

See `entities/topic/topic.documentation.md`.

## Relationships

- CHILD_OF → Topic
- PARENT_OF ← Topic
- HAS_FINDING ← Finding
- RELATES_TO ↔ Topic

## Examples

- Greenhouse Gases
- Carbon Dioxide
- Sea Level Rise

## Non-Examples

- A free keyword.
- A search query.

## Validation Rules

- Slug must be unique and URL-safe.
- No cycles in parent-child relationships.

## Version Rules

- Major taxonomy changes are versioned.

## Governance Rules

- Owned by Taxonomy Working Group.
- New top-level topics require Architecture Board approval.

## Future Evolution Rules

- Multilingual support and SKOS alignment.
