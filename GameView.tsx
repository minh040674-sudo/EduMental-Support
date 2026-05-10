/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Scenario, Choice } from "../types";
import { ArrowRight, Info } from "lucide-react";

interface GameViewProps {
  scenario: Scenario;
  onChoice: (choice: Choice) => void;
  progress: number;
}

export default function GameView({ scenario, onChoice, progress }: GameViewProps) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-slate-200 z-50">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-blue-500"
        />
      </div>

      <div className="flex-1 flex flex-col md:flex-row max-w-6xl mx-auto w-full p-4 md:p-8 gap-8 mt-8">
        {/* Scenario Image/Visual placeholder */}
        <motion.div
          key={`img-${scenario.id}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 rounded-3xl overflow-hidden shadow-2xl bg-slate-200 min-h-[300px] relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
          <img 
            src={`https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800`} // Placeholder, since we don't have generation at runtime for scenarios
            alt={scenario.title}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="z-20 p-8 text-white mt-auto">
            <h2 className="text-3xl font-bold mb-2">{scenario.title}</h2>
          </div>
        </motion.div>

        {/* Content & Choices */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
            >
              <div className="flex items-start gap-3 mb-6 text-blue-600">
                <Info size={24} className="mt-1 flex-shrink-0" />
                <p className="text-lg leading-relaxed text-slate-700 italic">
                  "{scenario.description}"
                </p>
              </div>

              <div className="space-y-4">
                {scenario.choices.map((choice, idx) => (
                  <motion.button
                    key={choice.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onChoice(choice)}
                    className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-2xl transition-all group"
                  >
                    <span className="text-slate-800 font-medium text-lg pr-4">{choice.text}</span>
                    <ArrowRight className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
