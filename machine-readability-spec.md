# Machine Readability Specification

**Workstream:** I — Machine Readability Program  
**Status:** Complete

---

## Objective

Every ontology entity must be machine-readable in seven canonical formats. This specification defines the mapping rules and quality gates for each format.

---

## Format Requirements

### TypeScript

- Each entity has a dedicated `.entity.ts` file.
- Types are exported for the entity, input, and update variants.
- Enumerations are exported as TypeScript unions or enums.

### Zod

- Each entity has a dedicated `.schema.ts` file.
- Schemas cover all fields, including nested metadata objects.
- Input and update schemas are derived from the base schema.

### JSON Schema

- Each entity has a dedicated `.json-schema.json` file.
- Schemas use Draft 07 and set `additionalProperties: false`.
- UUIDs, date-times, and enums are properly typed.

### JSON-LD

- Each entity will have a JSON-LD context in Phase 3.
- Contexts map fields to climate science ontologies (e.g., IPCC namespaces, PROV-O).

### OpenAPI

- Each entity has a dedicated `.openapi.yaml` file.
- OpenAPI schemas are composed into `openapi/components.yaml`.
- Input schemas are separated from full schemas to support write operations.

### Graph Schema

- Each entity has a dedicated `.graph-schema.yaml` file.
- Schema defines node labels, properties, indexes, constraints, and relationships.

### Storage Schema

- Each entity has a dedicated `.storage-schema.yaml` file.
- Schema defines SQL columns, types, constraints, indexes, and retention policies.

---

## AI Readiness Rules

1. **Structured output**: Every entity must be serializable to JSON for LLM consumption.
2. **Context completeness**: Each entity must carry enough metadata for an LLM to explain its meaning.
3. **Relationship traversal**: The graph schema must allow an LLM to follow evidence chains.
4. **Confidence and likelihood**: Enumerations must be mapped to natural language labels for LLM prompts.
5. **Validation hooks**: LLM-generated outputs must pass Zod validation before persistence.

---

## Quality Gates

| Gate | Check | Tool |
|---|---|---|
| TypeScript compiles | `tsc --noEmit` | TypeScript compiler |
| Zod schemas validate | Unit tests | Vitest/Jest |
| JSON Schema valid | AJV | `ajv validate` |
| OpenAPI valid | Swagger parser | `@apidevtools/swagger-parser` |
| Graph schema complete | Custom linter | Ontology linter |
| Storage schema complete | SQL parser | Custom linter |
