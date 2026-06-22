# Serialization Rules

**Workstream:** I — Machine Readability Program  
**Status:** Complete

---

## Supported Formats

Every entity must support serialization to and from the following formats:

| Format | Purpose | Priority |
|---|---|---|
| TypeScript | Type-safe application development | Required |
| Zod | Runtime validation and input parsing | Required |
| JSON Schema | Schema validation and interoperability | Required |
| JSON-LD | Linked data and semantic web integration | Required |
| OpenAPI | API contract generation | Required |
| Graph Schema | Property graph schema definition | Required |
| Storage Schema | Relational database schema definition | Required |

---

## Field Naming Conventions

| Format | Convention | Example |
|---|---|---|
| TypeScript | camelCase | `confidenceRating` |
| Zod | camelCase | `confidenceRating` |
| JSON Schema | camelCase | `confidenceRating` |
| JSON-LD | camelCase with `@context` | `confidenceRating` |
| OpenAPI | camelCase | `confidenceRating` |
| Graph Schema | camelCase | `confidenceRating` |
| Storage Schema | snake_case | `confidence_rating` |

---

## Serialization Rules

1. **UUIDs**: Always serialize as lowercase string without braces.
2. **Timestamps**: Always serialize as ISO 8601 UTC date-time strings.
3. **Enums**: Always serialize as PascalCase string values, not integers.
4. **Numbers**: Always serialize metric values as JSON numbers, not strings.
5. **Arrays**: Empty arrays are allowed where the schema permits `minItems: 0`.
6. **Metadata**: Always serialize as a JSON object; never flatten into top-level fields.
7. **Nulls**: Prefer omission over explicit `null` unless the schema marks a field as nullable.

---

## Conversion Matrix

| Source → Target | Tool/Method | Notes |
|---|---|---|
| Zod → TypeScript | `z.infer<typeof Schema>` | Native. |
| Zod → JSON Schema | `zod-to-json-schema` | Generated programmatically. |
| TypeScript → JSON-LD | Manual context mapping | `@context` per entity type. |
| JSON Schema → OpenAPI | OpenAPI `$ref` | Reuse with `components/schemas`. |
| Entity spec → Graph Schema | Manual mapping | Node labels, constraints, indexes. |
| Entity spec → Storage Schema | Manual mapping | SQL types, constraints, indexes. |
