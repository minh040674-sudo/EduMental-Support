/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Markdown from "react-markdown";
import { Download, RefreshCw, MessageCircle } from "lucide-react";

interface AnalysisReportProps {
  report: string;
  onRestart: () => void;
}

export default function AnalysisReport({ report, onRestart }: AnalysisReportProps) {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 mb-8 border border-slate-100"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Báo cáo Tâm lý của tôi</h1>
              <p className="text-slate-500">Dựa trên các tương tác và lựa chọn đối phó của bạn.</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                id="download-report-btn"
              >
                <Download size={18} />
                Lưu PDF
              </button>
            </div>
          </div>

          <div className="prose prose-slate max-w-none prose-h1:text-2xl prose-h2:text-xl prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900">
            <Markdown>{report}</Markdown>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4">
            <MessageCircle className="text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-blue-900 mb-1">Cần người lắng nghe ngay bây giờ?</h3>
              <p className="text-blue-700 text-sm">
                Nếu bạn đang cảm thấy quá tải, hãy nhớ rằng chuyên viên tâm lý học đường luôn sẵn sàng hỗ trợ bạn. 
                Chia sẻ với một người lớn đáng tin cậy có thể tạo ra sự khác biệt lớn lao.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg"
            id="restart-game-btn"
          >
            <RefreshCw size={20} />
            Thử lại với các tình huống khác
          </button>
        </div>
      </div>
    </div>
  );
}
