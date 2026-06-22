import { readFileSync } from 'node:fs';

const matrix = JSON.parse(readFileSync('docs/architecture/compliance-matrix.json', 'utf8'));
const required = [
  'requirementId',
  'description',
  'owningLayer',
  'verificationMethod',
  'status',
  'verificationPhase',
  'evidenceLink',
];
if (!Array.isArray(matrix.requirements)) {
  console.error('Compliance matrix must contain a requirements array.');
  process.exit(1);
}
const ids = new Set();
for (const requirement of matrix.requirements) {
  for (const key of required) {
    if (typeof requirement[key] !== 'string' || requirement[key].length === 0) {
      console.error(
        `Requirement is missing required string field ${key}: ${JSON.stringify(requirement)}`,
      );
      process.exit(1);
    }
  }
  if (ids.has(requirement.requirementId)) {
    console.error(`Duplicate requirementId: ${requirement.requirementId}`);
    process.exit(1);
  }
  ids.add(requirement.requirementId);
}
console.log(`Compliance matrix validation passed for ${matrix.requirements.length} requirements.`);
