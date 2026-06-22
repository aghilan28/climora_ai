# Finding — Ontology Documentation

## Definition

A formal scientific conclusion supported by evidence, citations, and metrics.

## Purpose

Primary knowledge node of the Climate Systems Console.

## Fields

See `entities/finding/finding.documentation.md` for full details.

## Relationships

- SUPPORTED_BY → Evidence
- BELONGS_TO → Topic
- CITES → Citation (via Evidence)
- QUANTIFIES ← Metric
- SUPERSEDES → Finding
- CONTRASTS_WITH ← DissentRecord

## Examples

- Global mean temperature has increased by approximately 1.1°C since pre-industrial times.
- Human influence is the main driver of recent global warming.

## Non-Examples

- A news headline.
- An unverified social media claim.

## Validation Rules

- Statement, confidence, likelihood, topic, evidence, citation, version, and data nature are mandatory.

## Version Rules

- Immutable; updates create new versions.

## Governance Rules

- Append-only; deletion forbidden.
- Requires Scientific Reviewer approval.

## Future Evolution Rules

- Link to Scenario, Projection, ImpactDomain, MitigationStrategy, AdaptationStrategy.
