/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Brain, Heart, Sparkles, ShieldCheck } from "lucide-react";

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <div className="inline-flex p-3 mb-6 bg-blue-100 rounded-2xl text-blue-600">
          <Brain size={48} />
        </div>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-900">
          Hỗ trợ Tâm lý EduMental
        </h1>
        <p className="mb-8 text-xl text-slate-600 leading-relaxed">
          Áp lực học đường đôi khi thật mệt mỏi. Chúng tôi ở đây để giúp bạn thấu hiểu cảm xúc của mình 
          thông qua một câu chuyện tương tác. Khám phá cách bạn đối mặt với căng thẳng và nhận lời khuyên 
          cá nhân hóa cho sức khỏe tinh thần của bạn.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="flex justify-center mb-2 text-rose-500">
              <Heart size={24} />
            </div>
            <h3 className="font-semibold text-slate-800">Thấu hiểu</h3>
            <p className="text-sm text-slate-500">Không gian an toàn cho cảm xúc của bạn.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="flex justify-center mb-2 text-amber-500">
              <Sparkles size={24} />
            </div>
            <h3 className="font-semibold text-slate-800">Thông minh</h3>
            <p className="text-sm text-slate-500">AI phân tích sâu các lựa chọn của bạn.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="flex justify-center mb-2 text-emerald-500">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-semibold text-slate-800">Riêng tư</h3>
            <p className="text-sm text-slate-500">Dữ liệu của bạn hoàn toàn bảo mật.</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          id="start-adventure-btn"
        >
          Bắt đầu hành trình
        </motion.button>
      </motion.div>
    </div>
  );
}
