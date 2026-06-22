/**
 * Data Nature Enumeration
 * Workstream C: Scientific Enumeration Architecture
 * Enumeration 3
 */

export enum DataNature {
  Observed = 'Observed',
  Modeled = 'Modeled',
  Projected = 'Projected',
  Derived = 'Derived',
}

export const DataNatureLabels: Record<DataNature, string> = {
  [DataNature.Observed]: 'Observed',
  [DataNature.Modeled]: 'Modeled',
  [DataNature.Projected]: 'Projected',
  [DataNature.Derived]: 'Derived',
};
