# Security Policy

## Supported Versions

Phase 1 supports the current main branch only until release versioning is established.

## Reporting a Vulnerability

Report suspected vulnerabilities privately to the repository security maintainers. Do not open public issues containing exploit details, secrets, tokens, or sensitive operational information.

## Required Security Controls

- Least-privilege GitHub Actions permissions.
- Dependency vulnerability scanning through `pnpm audit` and GitHub dependency review.
- Secret scanning through Secretlint and platform secret scanning.
- Lockfile validation through frozen pnpm installs in CI.
- No credentials, tokens, kubeconfigs, cloud keys, database URLs, or service secrets may be committed.

## Branch Protection Recommendations

Enable required status checks for lint, typecheck, tests, coverage, build, architecture validation, dependency validation, security scan, and documentation validation. Require pull request review, conversation resolution, signed commits where organizational policy requires them, linear history, and restrictions on force pushes to protected branches.
