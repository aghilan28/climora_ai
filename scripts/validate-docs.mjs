import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'README.md',
  'docs/adrs/ADR-0001-adoption-of-architecture-constitution.md',
  'docs/adrs/ADR-TEMPLATE.md',
  'docs/contracts/API-CONTRACT-TEMPLATE.md',
  'docs/ontology/ONTOLOGY-ENTITY-TEMPLATE.md',
  'docs/governance/GOVERNANCE-TEMPLATE.md',
  'docs/governance/RISK-REGISTER-TEMPLATE.md',
  'docs/architecture/TECHNICAL-DESIGN-DOCUMENT-TEMPLATE.md',
  'docs/governance/CONTRIBUTING.md',
  'docs/governance/CODE-REVIEW-GUIDE.md',
  'docs/governance/ARCHITECTURE-REVIEW-GUIDE.md',
  'docs/architecture/compliance-matrix.json',
  'SECURITY.md',
  '.github/pull_request_template.md',
  '.github/ISSUE_TEMPLATE/issue.yml',
  '.github/ISSUE_TEMPLATE/rfc.yml',
];

const missing = requiredFiles.filter((file) => !existsSync(file));
if (missing.length > 0) {
  console.error(`Missing required documentation files:\n${missing.join('\n')}`);
  process.exit(1);
}

for (const file of requiredFiles.filter((item) => item.endsWith('.md'))) {
  const content = readFileSync(file, 'utf8').trim();
  if (content.length < 80) {
    console.error(`Documentation file is too small to be operational: ${file}`);
    process.exit(1);
  }
}

console.log('Documentation validation passed.');
