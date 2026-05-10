/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function analyzeMentalWellbeing(choices: any[]) {
  const summary = choices.map(c => `Tình huống: ${c.scenarioText}\nLựa chọn: ${c.choiceText}\nTác động: ${c.impact}`).join("\n\n");

  const prompt = `
    Bạn là một chuyên gia tâm lý học đường và tư vấn sức khỏe tinh thần giàu kinh nghiệm. 
    Hãy phân tích các lựa chọn sau đây của một học sinh trong trò chơi nhập vai tương tác được thiết kế để phát hiện mức độ căng thẳng.

    LỰA CHỌN CỦA HỌC SINH:
    ${summary}

    Vui lòng cung cấp một "Báo cáo Sức khỏe Tinh thần" toàn diện nhưng mang tính khích lệ. 
    Báo cáo bao gồm:
    1. **Đánh giá Căng thẳng Tổng thể**: Tóm tắt cơ chế đối phó hiện tại của học sinh.
    2. **Điểm mạnh**: Những chiến lược đối phó tích cực mà họ đang thể hiện là gì?
    3. **Các lĩnh vực cần lưu ý**: Các dấu hiệu cụ thể của sự kiệt sức, lo lắng hoặc né tránh.
    4. **Khuyến nghị cá nhân hóa**: 3-5 bước hành động để cải thiện sức khỏe tinh thần.
    5. **Lời khuyên chân thành**: Một thông điệp kết thúc nhằm khẳng định những khó khăn của học sinh và khuyến khích họ tìm kiếm sự giúp đỡ nếu cần.

    Định dạng đầu ra bằng Markdown sạch sẽ. Sử dụng giọng văn chuyên nghiệp nhưng ấm áp và phù hợp với lứa tuổi thanh thiếu niên.
    Tránh các thuật ngữ y khoa chuyên môn nếu có thể. Nếu bạn phát hiện căng thẳng ở mức cao, hãy nhẹ nhàng gợi ý học sinh liên hệ với chuyên viên tâm lý hoặc giáo viên mà họ tin tưởng.
    **QUAN TRỌNG: TOÀN BỘ BÁO CÁO PHẢI VIẾT BẰNG TIẾNG VIỆT.**
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return "I'm sorry, I encountered an error while analyzing your responses. Please try again later or reach out to someone you trust.";
  }
}
