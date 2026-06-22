# `infrastructure/kubernetes`

## Purpose

Kubernetes deployment manifest foundation.

## Ownership

Platform Operations.

## Architectural Boundary

Infrastructure boundary for cluster deployment assets only.

## Future Responsibilities

Future manifests, Helm/Kustomize assets, and policy definitions.

## Forbidden Responsibilities

No application code, business logic, schemas, UI, or secrets.

## Governance

Changes to this directory must preserve the Climate Systems Console Architecture Constitution, pass dependency-cruiser validation, satisfy TypeScript strictness, and be reviewed for boundary conformance before merge.
