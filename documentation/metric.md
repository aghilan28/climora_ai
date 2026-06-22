# Metric — Ontology Documentation

## Definition

A quantified measurement associated with a finding.

## Purpose

Makes findings concrete and comparable.

## Fields

See `entities/metric/metric.documentation.md`.

## Relationships

- QUANTIFIES → Finding

## Examples

- Global mean surface temperature anomaly: 1.11 °C (2011–2020 vs 1850–1900).

## Non-Examples

- A qualitative statement.
- A number without unit or context.

## Validation Rules

- Name, value, unit, period, data nature, and geographic scope are mandatory.
- Value must be finite.

## Version Rules

- Versioned on value, period, or baseline change.

## Governance Rules

- Must be traceable to source dataset or citation.
- Unit conversions logged in provenance.

## Future Evolution Rules

- Time-series linkage and uncertainty propagation.
