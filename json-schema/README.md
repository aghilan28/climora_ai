# JSON Schema Collection

**Workstream:** I — Machine Readability Program  
**Status:** Complete

---

## File Inventory

| Entity | JSON Schema File |
|---|---|
| `Finding` | `entities/finding/finding.json-schema.json` |
| `Evidence` | `entities/evidence/evidence.json-schema.json` |
| `Citation` | `entities/citation/citation.json-schema.json` |
| `Topic` | `entities/topic/topic.json-schema.json` |
| `Metric` | `entities/metric/metric.json-schema.json` |
| `DissentRecord` | `entities/dissent-record/dissent-record.json-schema.json` |
| `VersionRecord` | `entities/version-record/version-record.json-schema.json` |
| `ProvenanceRecord` | `entities/provenance-record/provenance-record.json-schema.json` |
| `AuditRecord` | `entities/audit-record/audit-record.json-schema.json` |

---

## Schema Conventions

- All schemas use JSON Schema Draft 07.
- All entity identifiers use `format: uuid`.
- Timestamps use `format: date-time`.
- Enumerations are expressed as `enum` arrays.
- `additionalProperties: false` is set on entity schemas to enforce strict validation.

---

## Usage

These schemas are suitable for:

- API request/response validation
- JSON-LD context generation
- Form generation and client-side validation
- Document store schema validation
- Interoperability with external knowledge systems
