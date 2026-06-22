# Topic

## Definition

A **Topic** is a node in the climate taxonomy that classifies Findings, Evidence, and other knowledge objects. Topics form a hierarchical tree with optional cross-linking relationships.

## Purpose

Topics enable discovery, filtering, and graph traversal by subject area. They provide the semantic backbone of the Climate Systems Console.

## Fields

| Field | Type | Cardinality | Required | Description |
|---|---|---|---|---|
| `id` | uuid | 1 | ✅ | Stable identifier. |
| `name` | string | 1 | ✅ | Human-readable topic name. |
| `slug` | string | 1 | ✅ | URL-safe identifier. |
| `description` | string | 1 | ✅ | Description of the topic. |
| `parentTopicId` | uuid | 0:1 | ❌ | Parent topic in the hierarchy. |
| `hierarchyLevel` | integer | 1 | ✅ | Depth in the taxonomy tree (1–10). |
| `taxonomyPath` | string | 1 | ✅ | Human-readable path. |
| `metadata` | object | 1 | ✅ | Extensible metadata. |

## Relationships

- `CHILD_OF` → `Topic` (N:1, optional)
- `PARENT_OF` ← `Topic` (1:N, optional)
- `HAS_FINDING` ← `Finding` (1:N, optional)
- `RELATES_TO` ↔ `Topic` (N:M, optional)

## Example

```json
{
  "id": "t-123",
  "name": "Global Warming",
  "slug": "global-warming",
  "description": "The long-term heating of Earth's climate system observed since the pre-industrial era.",
  "parentTopicId": "t-100",
  "hierarchyLevel": 3,
  "taxonomyPath": "Climate Drivers / Greenhouse Gases / Global Warming",
  "metadata": {
    "sourceTaxonomy": "IPCC AR6 WGI",
    "aliases": ["planetary warming", "global heating"],
    "workingGroup": "WGI"
  }
}
```

## Non-Examples

- A keyword without a hierarchical position is **not** a Topic.
- A finding statement is **not** a Topic.

## Validation Rules

- `slug` must match `^[a-z0-9-]+$` and be unique.
- `hierarchyLevel` must be between 1 and 10.
- `parentTopicId` cannot reference itself and must not create a cycle.
- `taxonomyPath` must reflect the parent chain.

## Version Rules

- Topic changes that affect the taxonomy path must be versioned and announced.
- Slug changes are discouraged; if necessary, a redirect record is created.

## Governance Rules

- Topic taxonomy is owned by the Taxonomy Working Group.
- New top-level topics require Architecture Board approval.
- Topics are append-only; deletion is forbidden to preserve referential integrity.

## Future Evolution Rules

- Must support multilingual labels and descriptions in Phase 3.
- Must support SKOS alignment and external ontology mapping in Phase 4.
