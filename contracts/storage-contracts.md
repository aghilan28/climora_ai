# Storage Contracts

**Workstream:** G — Storage Contract Modeling  
**Status:** Complete

---

## Contract Template

For every entity, the storage contract specifies the primary key, unique constraints, versioning strategy, audit strategy, retention policy, deletion policy, and lineage policy.

---

## Entity Storage Contracts

### Finding

| Attribute | Value |
|---|---|
| Primary Key | `id` (uuid) |
| Unique Constraints | `(id, version)` |
| Version Strategy | Semantic versioning mandatory; append-only. |
| Audit Strategy | Audit record mandatory for every mutation. |
| Lineage Policy | Lineage mandatory; superseded versions retained. |
| Retention Policy | Forever. |
| Deletion Policy | Delete forbidden. |
| Storage Type | Relational + graph node. |

### Evidence

| Attribute | Value |
|---|---|
| Primary Key | `id` (uuid) |
| Unique Constraints | `id` |
| Version Strategy | Optional; versioned when validation status or strength changes. |
| Audit Strategy | Audit record mandatory. |
| Lineage Policy | Provenance mandatory. |
| Retention Policy | Forever. |
| Deletion Policy | Soft delete forbidden; may be archived. |
| Storage Type | Relational + graph node. |

### Citation

| Attribute | Value |
|---|---|
| Primary Key | `id` (uuid) |
| Unique Constraints | `doi` (when not null); `slug` |
| Version Strategy | Rare; corrections create new records with `replaces`. |
| Audit Strategy | Audit record mandatory for creation and updates. |
| Lineage Policy | Optional. |
| Retention Policy | Forever. |
| Deletion Policy | Delete forbidden; may be deprecated. |
| Storage Type | Relational + graph node. |

### Topic

| Attribute | Value |
|---|---|
| Primary Key | `id` (uuid) |
| Unique Constraints | `slug` |
| Version Strategy | Optional; major taxonomy changes are versioned. |
| Audit Strategy | Audit record mandatory for mutations. |
| Lineage Policy | Optional. |
| Retention Policy | Forever. |
| Deletion Policy | Delete forbidden. |
| Storage Type | Relational + graph node. |

### Metric

| Attribute | Value |
|---|---|
| Primary Key | `id` (uuid) |
| Unique Constraints | `id` |
| Version Strategy | Optional; versioned on value or baseline change. |
| Audit Strategy | Audit record mandatory. |
| Lineage Policy | Provenance mandatory. |
| Retention Policy | Forever. |
| Deletion Policy | Soft delete forbidden; corrections create new versions. |
| Storage Type | Relational + graph node. |

### DissentRecord

| Attribute | Value |
|---|---|
| Primary Key | `id` (uuid) |
| Unique Constraints | `id` |
| Version Strategy | Mandatory; versioned on status or statement change. |
| Audit Strategy | Audit record mandatory. |
| Lineage Policy | Mandatory. |
| Retention Policy | Forever. |
| Deletion Policy | Delete forbidden. |
| Storage Type | Relational + graph node. |

### VersionRecord

| Attribute | Value |
|---|---|
| Primary Key | `id` (uuid) |
| Unique Constraints | `(entity_id, entity_type, version_number)` |
| Version Strategy | Self-versioning; immutable. |
| Audit Strategy | Audit record mandatory for creation. |
| Lineage Policy | N/A. |
| Retention Policy | Forever. |
| Deletion Policy | Delete forbidden. |
| Storage Type | Relational. |

### ProvenanceRecord

| Attribute | Value |
|---|---|
| Primary Key | `id` (uuid) |
| Unique Constraints | `id` |
| Version Strategy | Append-only event log; no versioning. |
| Audit Strategy | Audit record mandatory. |
| Lineage Policy | Self-describing. |
| Retention Policy | Forever. |
| Deletion Policy | Delete forbidden. |
| Storage Type | Relational + graph node. |

### AuditRecord

| Attribute | Value |
|---|---|
| Primary Key | `id` (uuid) |
| Unique Constraints | `id` |
| Version Strategy | N/A; append-only. |
| Audit Strategy | Self-auditing; no external audit. |
| Lineage Policy | N/A. |
| Retention Policy | Regulatory: 7 years. |
| Deletion Policy | Delete forbidden. |
| Storage Type | Relational + time-series partition. |
