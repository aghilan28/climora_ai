/**
 * Likelihood Level Enumeration
 * Workstream C: Scientific Enumeration Architecture
 * Enumeration 2
 */

export enum LikelihoodLevel {
  ExceptionallyUnlikely = 'ExceptionallyUnlikely',
  VeryUnlikely = 'VeryUnlikely',
  Unlikely = 'Unlikely',
  AboutAsLikelyAsNot = 'AboutAsLikelyAsNot',
  Likely = 'Likely',
  VeryLikely = 'VeryLikely',
  VirtuallyCertain = 'VirtuallyCertain',
}

export const LikelihoodLevelLabels: Record<LikelihoodLevel, string> = {
  [LikelihoodLevel.ExceptionallyUnlikely]: 'Exceptionally Unlikely',
  [LikelihoodLevel.VeryUnlikely]: 'Very Unlikely',
  [LikelihoodLevel.Unlikely]: 'Unlikely',
  [LikelihoodLevel.AboutAsLikelyAsNot]: 'About as Likely as Not',
  [LikelihoodLevel.Likely]: 'Likely',
  [LikelihoodLevel.VeryLikely]: 'Very Likely',
  [LikelihoodLevel.VirtuallyCertain]: 'Virtually Certain',
};

export const LikelihoodLevelProbabilityRange: Record<LikelihoodLevel, [number, number]> = {
  [LikelihoodLevel.ExceptionallyUnlikely]: [0, 0.01],
  [LikelihoodLevel.VeryUnlikely]: [0, 0.10],
  [LikelihoodLevel.Unlikely]: [0, 0.33],
  [LikelihoodLevel.AboutAsLikelyAsNot]: [0.33, 0.66],
  [LikelihoodLevel.Likely]: [0.66, 1.0],
  [LikelihoodLevel.VeryLikely]: [0.90, 1.0],
  [LikelihoodLevel.VirtuallyCertain]: [0.99, 1.0],
};
