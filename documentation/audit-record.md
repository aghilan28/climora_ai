# Audit Record — Ontology Documentation

## Definition

A log of who changed what, when, and why.

## Purpose

Provides accountability and compliance evidence.

## Fields

See `entities/audit-record/audit-record.documentation.md`.

## Relationships

- AUDITS → any entity

## Examples

- A curator updated a Finding's likelihood rating at 2026-06-22T12:00:00Z.

## Non-Examples

- A performance metric.
- A security login event.

## Validation Rules

- Entity, action, actor, reason, and timestamp are mandatory.

## Version Rules

- Append-only and immutable.

## Governance Rules

- Generated automatically.
- Tampering is prohibited and detected.

## Future Evolution Rules

- Tamper-evident hashing and regulatory export formats.
