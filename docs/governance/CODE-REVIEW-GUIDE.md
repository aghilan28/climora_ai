# Code Review Guide

Reviewers must verify correctness, maintainability, strict TypeScript usage, lint compliance, test coverage, security hygiene, and constitutional boundary conformance.

## Mandatory Review Questions

1. Does the change preserve Phase 1 prohibitions?
2. Are imports layer-compliant and free of cycles?
3. Does the change require an ADR or compliance matrix update?
4. Are tests appropriate for the changed governance capability?
5. Are secrets, credentials, generated artifacts, and local environment files excluded?
6. Does CI provide evidence for the claims made by the change?

A pull request with failing automated checks must not be approved.
