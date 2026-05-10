/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Choice {
  id: string;
  text: string;
  impact: string; // Brief description for AI analysis
  emotionalWeight: number; // 0 (calm) to 1 (high stress)
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  choices: Choice[];
  imagePrompt: string;
}

export interface GameState {
  currentScenarioIndex: number;
  choicesMade: {
    scenarioId: string;
    choiceId: string;
    scenarioText: string;
    choiceText: string;
    impact: string;
  }[];
  isFinished: boolean;
  analysisReport: string | null;
  loading: boolean;
}
