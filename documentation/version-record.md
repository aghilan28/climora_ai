# Version Record — Ontology Documentation

## Definition

A record of an entity's evolution over time.

## Purpose

Provides immutability, auditability, and rollback capability.

## Fields

See `entities/version-record/version-record.documentation.md`.

## Relationships

- VERSION_OF → any entity
- SUPERSEDES → VersionRecord

## Examples

- A Finding updated from version 1.0.0 to 1.1.0 due to new evidence.

## Non-Examples

- A generic log entry.
- A timestamp without a change reason.

## Validation Rules

- Version number must be semver.
- Change reason is mandatory.

## Version Rules

- Immutable and append-only.
- New versions must be greater than previous versions.

## Governance Rules

- Generated automatically; cannot be manually edited.

## Future Evolution Rules

- Cryptographic verification and diff generation.
