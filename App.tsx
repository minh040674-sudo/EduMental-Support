/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from "react";
import LandingPage from "./components/LandingPage";
import GameView from "./components/GameView";
import AnalysisReport from "./components/AnalysisReport";
import { SCENARIOS } from "./constants";
import { GameState, Choice } from "./types";
import { analyzeMentalWellbeing } from "./services/geminiService";
import { motion, AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";

const INITIAL_STATE: GameState = {
  currentScenarioIndex: -1, // -1 means Landing Page
  choicesMade: [],
  isFinished: false,
  analysisReport: null,
  loading: false,
};

export default function App() {
  const [state, setState] = useState<GameState>(INITIAL_STATE);

  const handleStart = () => {
    setState((prev) => ({ ...prev, currentScenarioIndex: 0 }));
  };

  const handleChoice = useCallback(async (choice: Choice) => {
    const currentScenario = SCENARIOS[state.currentScenarioIndex];
    const newChoice = {
      scenarioId: currentScenario.id,
      choiceId: choice.id,
      scenarioText: currentScenario.description,
      choiceText: choice.text,
      impact: choice.impact,
    };

    const nextIndex = state.currentScenarioIndex + 1;
    const isFinished = nextIndex >= SCENARIOS.length;

    setState((prev) => ({
      ...prev,
      choicesMade: [...prev.choicesMade, newChoice],
      currentScenarioIndex: isFinished ? prev.currentScenarioIndex : nextIndex,
      isFinished,
      loading: isFinished,
    }));

    if (isFinished) {
      const report = await analyzeMentalWellbeing([...state.choicesMade, newChoice]);
      setState((prev) => ({
        ...prev,
        analysisReport: report,
        loading: false,
      }));
    }
  }, [state]);

  const handleRestart = () => {
    setState(INITIAL_STATE);
  };

  return (
    <div className="font-sans antialiased text-slate-900 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      <AnimatePresence mode="wait">
        {state.currentScenarioIndex === -1 ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LandingPage onStart={handleStart} />
          </motion.div>
        ) : state.isFinished ? (
          <motion.div
            key="analysis"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {state.loading ? (
              <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 gap-6 p-8 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="text-blue-600"
                >
                  <Loader2 size={64} />
                </motion.div>
                <div className="max-w-md">
                  <h2 className="text-2xl font-bold mb-2">Đang phân tích hành trình của bạn...</h2>
                  <p className="text-slate-500">
                    AI của chúng tôi đang xem xét kỹ lưỡng các lựa chọn của bạn để đưa ra những hướng dẫn 
                    hữu ích nhất dành riêng cho nhu cầu của bạn. Vui lòng chờ trong giây lát.
                  </p>
                </div>
              </div>
            ) : (
              state.analysisReport && (
                <AnalysisReport 
                  report={state.analysisReport} 
                  onRestart={handleRestart} 
                />
              )
            )}
          </motion.div>
        ) : (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <GameView 
              scenario={SCENARIOS[state.currentScenarioIndex]} 
              onChoice={handleChoice}
              progress={((state.currentScenarioIndex + 1) / SCENARIOS.length) * 100}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

