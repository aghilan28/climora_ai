# Graph Schema Collection

**Workstream:** I — Machine Readability Program  
**Status:** Complete

---

## File Inventory

| Entity | Graph Schema File |
|---|---|
| `Finding` | `entities/finding/finding.graph-schema.yaml` |
| `Evidence` | `entities/evidence/evidence.graph-schema.yaml` |
| `Citation` | `entities/citation/citation.graph-schema.yaml` |
| `Topic` | `entities/topic/topic.graph-schema.yaml` |
| `Metric` | `entities/metric/metric.graph-schema.yaml` |
| `DissentRecord` | `entities/dissent-record/dissent-record.graph-schema.yaml` |
| `VersionRecord` | `entities/version-record/version-record.graph-schema.yaml` |
| `ProvenanceRecord` | `entities/provenance-record/provenance-record.graph-schema.yaml` |
| `AuditRecord` | `entities/audit-record/audit-record.graph-schema.yaml` |

---

## Graph Schema Conventions

- Each entity maps to a labeled graph node.
- `nodeIdentifier` is the stable `id` property.
- `unique` constraints prevent duplicate nodes.
- `exists` constraints ensure mandatory properties.
- `fulltext` indexes enable semantic search.
- `range` indexes support filtering and traversal.

---

## Supported Graph Engines

The graph schema is engine-agnostic but designed for compatibility with:

- Neo4j (property graph)
- Amazon Neptune (property graph)
- ArangoDB (multi-model)
- Gremlin-based stores

---

## Relationship Graph Summary

```
(Finding)-[:SUPPORTED_BY]->(Evidence)
(Evidence)-[:CITES]->(Citation)
(Finding)-[:BELONGS_TO]->(Topic)
(Finding)-[:SUPERSEDES]->(Finding)
(Finding)<-[:CONTRASTS_WITH]-(DissentRecord)
(Topic)-[:RELATES_TO]-(Topic)
(Metric)-[:QUANTIFIES]->(Finding)
```
