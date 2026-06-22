/**
 * Confidence Level Enumeration
 * Workstream C: Scientific Enumeration Architecture
 * Enumeration 1
 */

export enum ConfidenceLevel {
  VeryLow = 'VeryLow',
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  VeryHigh = 'VeryHigh',
}

export const ConfidenceLevelLabels: Record<ConfidenceLevel, string> = {
  [ConfidenceLevel.VeryLow]: 'Very Low',
  [ConfidenceLevel.Low]: 'Low',
  [ConfidenceLevel.Medium]: 'Medium',
  [ConfidenceLevel.High]: 'High',
  [ConfidenceLevel.VeryHigh]: 'Very High',
};

export const ConfidenceLevelNumericRange: Record<ConfidenceLevel, [number, number]> = {
  [ConfidenceLevel.VeryLow]: [0.0, 0.2],
  [ConfidenceLevel.Low]: [0.2, 0.4],
  [ConfidenceLevel.Medium]: [0.4, 0.6],
  [ConfidenceLevel.High]: [0.6, 0.8],
  [ConfidenceLevel.VeryHigh]: [0.8, 1.0],
};
