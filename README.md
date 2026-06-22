# Climate Systems Console — Phase 1 Foundation Engineering

This repository is the governance-enforced engineering platform for the Climate Systems Console (CSC). Phase 1 intentionally implements **no business logic, no climate-science entities, no UI pages, no APIs, no database schemas, and no graph models**.

The repository exists to make future implementation safe by enforcing architecture, dependency, coding, testing, documentation, security, and commit governance automatically.

## Phase 1 Capabilities

- pnpm monorepo workspaces
- TypeScript project references with maximum strictness
- Turbo orchestration for parallel and cached tasks
- ESLint, Prettier, EditorConfig, import sorting, unused import detection, and dead-code scanning
- dependency-cruiser architecture enforcement and report generation
- Husky, lint-staged, commitlint, and Conventional Commits
- Vitest, Playwright, Testing Library, coverage, and architecture test fixtures
- GitHub Actions workflows for linting, typechecking, tests, coverage, build, architecture validation, dependency validation, security scanning, and documentation validation
- ADRs, governance templates, compliance matrix, security policy, contribution and review guides

## Non-Goals in Phase 1

The following are explicitly prohibited until later approved phases:

- Business logic
- Climate-science entities
- Ontology implementation
- Knowledge graph models
- Storage/database schemas
- API implementation
- UI pages or frontend features
- Ingestion pipelines
- Validation domain rules

## Quick Start

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm validate
```

## Primary Commands

```bash
pnpm lint
pnpm format:check
pnpm typecheck
pnpm test
pnpm test:architecture
pnpm build
pnpm arch:validate
pnpm arch:report
pnpm deps:validate
pnpm docs:validate
pnpm security:audit
```

## Architecture Authority

ADR-0001 adopts the Climate Systems Console Architecture Constitution as binding authority. Implementation convenience never supersedes the Constitution.
