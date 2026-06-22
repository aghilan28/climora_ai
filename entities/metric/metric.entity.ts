/**
 * Metric Entity — TypeScript Type Definition
 * Workstream B: Ontology Foundation Design
 * Entity 5: Metric
 */

export type MetricDataNature = 'Observed' | 'Modeled' | 'Projected' | 'Derived';

export interface MetricMetadata {
  /** Uncertainty range (e.g., "1.0 to 1.3"). */
  uncertaintyRange?: string;
  /** Statistical method used. */
  statisticalMethod?: string;
  /** Data source or dataset identifier. */
  dataSource?: string;
  /** Scenario under which the metric was produced. */
  scenario?: string;
  /** Temporal resolution. */
  temporalResolution?: string;
  /** Spatial resolution. */
  spatialResolution?: string;
}

export interface Metric {
  id: string;
  findingId: string;
  name: string;
  value: number;
  unit: string;
  period: string;
  dataNature: MetricDataNature;
  baseline?: string;
  geographicScope: string;
  metadata: MetricMetadata;
}

export type MetricInput = Omit<Metric, 'id'>;
export type MetricUpdate = Partial<MetricInput>;
