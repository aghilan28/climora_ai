# Citation — Ontology Documentation

## Definition

A bibliographic or data reference to a research source.

## Purpose

Anchors findings and evidence to the scientific literature.

## Fields

See `entities/citation/citation.documentation.md`.

## Relationships

- CITED_BY ← Finding
- CITED_BY ← Evidence

## Examples

- IPCC AR6 WGI report.
- A peer-reviewed journal article on sea level rise.

## Non-Examples

- A URL without bibliographic metadata.
- An informal blog post.

## Validation Rules

- Title, authors, year, and citation type are mandatory.
- DOI must be unique.

## Version Rules

- Generally immutable; corrections create new records.

## Governance Rules

- Maintained by Bibliographic Steward.
- DOIs verified against external registries.

## Future Evolution Rules

- Support ORCID, ROR, and automatic citation styles.
