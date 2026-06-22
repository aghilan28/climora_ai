# Graph Traversal Specification

**Workstream:** E — Graph Contract Engineering  
**Status:** Complete

---

## Traversal Patterns

### P1: From Finding to Evidence

```cypher
MATCH (f:Finding {id: $findingId})-[:SUPPORTED_BY]->(e:Evidence)
RETURN e
```

**Use case:** Show all evidence supporting a conclusion.

### P2: From Finding to Citation

```cypher
MATCH (f:Finding)-[:SUPPORTED_BY]->(e:Evidence)-[:CITES]->(c:Citation)
RETURN DISTINCT c
```

**Use case:** Show all references behind a finding.

### P3: From Topic to Findings

```cypher
MATCH (t:Topic {slug: $slug})<-[:BELONGS_TO]-(f:Finding)
RETURN f
ORDER BY f.confidenceRating DESC, f.createdAt DESC
```

**Use case:** Browse findings by topic.

### P4: From Topic to Related Topics

```cypher
MATCH (t:Topic {slug: $slug})-[:RELATES_TO]-(related:Topic)
RETURN related
```

**Use case:** Discover adjacent subject areas.

### P5: From Metric to Finding

```cypher
MATCH (m:Metric {id: $metricId})-[:QUANTIFIES]->(f:Finding)
RETURN f
```

**Use case:** Identify the scientific claim behind a metric.

### P6: From Finding to Dissent

```cypher
MATCH (f:Finding {id: $findingId})<-[:CONTRASTS_WITH]-(d:DissentRecord)
RETURN d
```

**Use case:** Surface scientific disagreement.

### P7: Version Lineage

```cypher
MATCH path = (latest:Finding)-[:SUPERSEDES*]->(oldest:Finding)
WHERE latest.id = $findingId
RETURN path
```

**Use case:** Trace how a finding evolved over time.

---

## Traversal Rules

| Rule | Description |
|---|---|
| R1 | Cycles in `SUPERSEDES` are forbidden. |
| R2 | `RELATES_TO` relationships must be undirected or bidirectional. |
| R3 | Traversal must respect `validationStatus` and `status` filters. |
| R4 | Full-text search must be available on `Finding.statement`, `Topic.name`, and `Topic.description`. |
| R5 | Graph queries must enforce tenant and visibility scopes. |
