/**
 * Topic Entity — TypeScript Type Definition
 * Workstream B: Ontology Foundation Design
 * Entity 4: Topic
 */

export interface TopicMetadata {
  /** Source taxonomy or framework that defines the topic. */
  sourceTaxonomy?: string;
  /** Alternative labels or synonyms. */
  aliases?: string[];
  /** External URI for linked-data alignment. */
  externalUri?: string;
  /** Domain tag (e.g., WGI, WGII, WGIII). */
  workingGroup?: string;
}

export interface Topic {
  id: string;
  name: string;
  slug: string;
  description: string;
  parentTopicId?: string;
  hierarchyLevel: number;
  taxonomyPath: string;
  metadata: TopicMetadata;
}

export type TopicInput = Omit<Topic, 'id'>;
export type TopicUpdate = Partial<TopicInput>;
