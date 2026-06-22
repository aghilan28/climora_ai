/**
 * Relationship Type Enumeration
 * Workstream C: Scientific Enumeration Architecture
 * Enumeration 7
 */

export enum RelationshipType {
  SUPPORTED_BY = 'SUPPORTED_BY',
  CITES = 'CITES',
  BELONGS_TO = 'BELONGS_TO',
  SUPERSEDES = 'SUPERSEDES',
  CONTRASTS_WITH = 'CONTRASTS_WITH',
  RELATES_TO = 'RELATES_TO',
  QUANTIFIES = 'QUANTIFIES',
}

export const RelationshipTypeDefinitions: Record<RelationshipType, string> = {
  [RelationshipType.SUPPORTED_BY]: 'A finding is supported by evidence.',
  [RelationshipType.CITES]: 'An evidence or finding cites a source.',
  [RelationshipType.BELONGS_TO]: 'A finding belongs to a topic.',
  [RelationshipType.SUPERSEDES]: 'A finding replaces an earlier version.',
  [RelationshipType.CONTRASTS_WITH]: 'A finding is contrasted with a dissent record.',
  [RelationshipType.RELATES_TO]: 'A topic is semantically related to another topic.',
  [RelationshipType.QUANTIFIES]: 'A metric quantifies a finding.',
};
