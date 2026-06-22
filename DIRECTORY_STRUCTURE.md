# Climate Systems Console — Phase 1 Directory Structure

```text
climate-systems-console/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── issue.yml
│   │   └── rfc.yml
│   ├── workflows/
│   │   ├── architecture-validation.yml
│   │   ├── build.yml
│   │   ├── coverage.yml
│   │   ├── dependency-validation.yml
│   │   ├── documentation-validation.yml
│   │   ├── lint.yml
│   │   ├── security-scan.yml
│   │   ├── test.yml
│   │   └── typecheck.yml
│   ├── pull_request_template.md
│   └── README.md
├── .husky/
│   ├── _/
│   │   └── husky.sh
│   ├── commit-msg
│   └── pre-commit
├── apps/
│   ├── web/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   └── README.md
├── services/
│   ├── application-api/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── domain/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── ingestion/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── knowledge/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── validation/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   └── README.md
├── packages/
│   ├── api-client/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── design-system/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── domain-types/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── shared/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── testing/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── visualizations/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   └── README.md
├── infrastructure/
│   ├── ci/
│   │   └── README.md
│   ├── docker/
│   │   └── README.md
│   ├── kubernetes/
│   │   └── README.md
│   ├── monitoring/
│   │   └── README.md
│   └── README.md
├── docs/
│   ├── adrs/
│   │   ├── ADR-0001-adoption-of-architecture-constitution.md
│   │   ├── ADR-TEMPLATE.md
│   │   └── README.md
│   ├── api/
│   │   └── README.md
│   ├── architecture/
│   │   ├── compliance-matrix.json
│   │   ├── README.md
│   │   └── TECHNICAL-DESIGN-DOCUMENT-TEMPLATE.md
│   ├── contracts/
│   │   ├── API-CONTRACT-TEMPLATE.md
│   │   └── README.md
│   ├── governance/
│   │   ├── ARCHITECTURE-REVIEW-GUIDE.md
│   │   ├── CODE-REVIEW-GUIDE.md
│   │   ├── CONTRIBUTING.md
│   │   ├── GOVERNANCE-TEMPLATE.md
│   │   ├── README.md
│   │   └── RISK-REGISTER-TEMPLATE.md
│   ├── ontology/
│   │   ├── ONTOLOGY-ENTITY-TEMPLATE.md
│   │   └── README.md
│   └── README.md
├── scripts/
│   ├── README.md
│   ├── security-audit.mjs
│   ├── validate-compliance-matrix.mjs
│   └── validate-docs.mjs
├── tests/
│   ├── architecture/
│   │   ├── fixture-configs/
│   │   │   ├── circular.cjs
│   │   │   ├── illegal-domain-ui.cjs
│   │   │   ├── illegal-knowledge-ui.cjs
│   │   │   └── valid.cjs
│   │   ├── fixtures/
│   │   │   ├── circular/
│   │   │   │   ├── a.ts
│   │   │   │   └── b.ts
│   │   │   ├── illegal-domain-ui/
│   │   │   │   ├── domain.ts
│   │   │   │   └── ui.ts
│   │   │   ├── illegal-knowledge-ui/
│   │   │   │   ├── knowledge.ts
│   │   │   │   └── ui.ts
│   │   │   └── valid/
│   │   │       ├── application.ts
│   │   │       └── domain.ts
│   │   ├── architecture-rules.test.ts
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── e2e/
│   │   ├── foundation.spec.ts
│   │   └── README.md
│   ├── integration/
│   │   └── README.md
│   ├── unit/
│   │   ├── platform-foundation.test.ts
│   │   └── README.md
│   └── README.md
├── .dependency-cruiser.cjs
├── .editorconfig
├── .prettierignore
├── .prettierrc.json
├── .secretlintignore
├── .secretlintrc.json
├── commitlint.config.cjs
├── eslint.config.mjs
├── knip.json
├── package.json
├── playwright.config.ts
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── SECURITY.md
├── tsconfig.base.json
├── tsconfig.eslint.json
├── tsconfig.json
├── turbo.json
├── vitest.architecture.config.ts
├── vitest.config.ts
├── vitest.integration.config.ts
└── vitest.unit.config.ts
```

Generated/local-only directories such as `node_modules`, `.turbo`, `coverage`, `reports`, `lib`, and `test-results` are intentionally excluded from this canonical repository structure.
