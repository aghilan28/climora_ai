# Evidence — Ontology Documentation

## Definition

The empirical or model-based basis for a finding.

## Purpose

Provides the scientific justification behind a finding.

## Fields

See `entities/evidence/evidence.documentation.md`.

## Relationships

- SUPPORTS → Finding
- CITES → Citation
- HAS_PROVENANCE → ProvenanceRecord

## Examples

- Global temperature dataset from multiple providers.
- Controlled climate model experiment.

## Non-Examples

- A citation without data context.
- An opinion or policy statement.

## Validation Rules

- Description, citation, provenance, source type, strength, and validation status are mandatory.

## Version Rules

- Versioned when validation status or strength changes.

## Governance Rules

- Must be validated before linking to authoritative findings.
- Rejected evidence cannot be reused for new findings.

## Future Evolution Rules

- Link to Dataset and TimeSeries.
