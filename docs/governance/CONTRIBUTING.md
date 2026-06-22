# Repository Contribution Guide

## Required Local Setup

Use Node.js 20 or later and pnpm 9 or later through Corepack.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm validate
```

## Contribution Rules

- Follow Conventional Commits using allowed types: `feat`, `fix`, `refactor`, `test`, `docs`, `build`, `ci`, `chore`, `perf`.
- Do not introduce business logic, climate entities, ontology implementation, APIs, storage schemas, graph models, ingestion pipelines, validation rules, or UI pages during Phase 1.
- Every significant architectural decision requires an ADR.
- Every new package or cross-layer dependency requires architecture review and dependency-cruiser rule evaluation.
- All changed documentation must remain traceable to governance assets.

## Required Checks Before Pull Request

```bash
pnpm lint
pnpm format:check
pnpm typecheck
pnpm test
pnpm arch:validate
pnpm deps:validate
pnpm docs:validate
pnpm security:audit
```
