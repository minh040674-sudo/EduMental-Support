/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scenario } from "./types";

export const SCENARIOS: Scenario[] = [
  {
    id: "exam_pressure",
    title: "Áp lực tối Chủ Nhật",
    description: "Bây giờ là 10 giờ tối Chủ Nhật. Bạn sực nhớ ra ngày mai có bài kiểm tra giữa kỳ môn Toán cực kỳ quan trọng mà bạn vẫn chưa ôn tập kỹ. Tim bạn bắt đầu đập nhanh.",
    imagePrompt: "Một phòng học sinh vào ban đêm, đèn bàn mờ, sách vở bừa bộn, trông căng thẳng và mệt mỏi, phong cách anime",
    choices: [
      {
        id: "all_nighter",
        text: "Thức trắng đêm để cố gắng học thuộc lòng tất cả mọi thứ.",
        impact: "Cố gắng kiểm soát kết quả trong tuyệt vọng, nồng độ cortisol tăng cao ngay lập tức, bỏ qua nhu cầu cơ bản.",
        emotionalWeight: 0.9,
      },
      {
        id: "planned_sleep",
        text: "Ôn lại các chương quan trọng nhất trong 1 giờ, sau đó ngủ 6 tiếng.",
        impact: "Cân bằng thực tế, chấp nhận giới hạn, tập trung vào việc phục hồi sức khỏe.",
        emotionalWeight: 0.4,
      },
      {
        id: "panic_avoid",
        text: "Đóng sách lại và cố gắng ngủ ngay lập tức để tránh cảm giác lo lắng.",
        impact: "Cơ chế đối phó né tránh, lo lắng bị dồn nén có khả năng biểu hiện sau đó.",
        emotionalWeight: 0.7,
      }
    ]
  },
  {
    id: "peer_conflict",
    title: "Mâu thuẫn nhóm",
    description: "Các thành viên trong nhóm của bạn không đóng góp gì cả, và dự án sẽ phải nộp trong hai ngày tới. Một người trong số họ vừa đăng ảnh đi tiệc trên mạng xã hội.",
    imagePrompt: "Một nhóm học sinh ở hành lang trường học rực rỡ, một học sinh nhìn vào điện thoại với vẻ mặt bực bội, phong cách anime hiện đại",
    choices: [
      {
        id: "confront_angry",
        text: "Gửi một tin nhắn gay gắt vào nhóm yêu cầu họ làm phần của mình ngay lập tức.",
        impact: "Căng thẳng bộc phát ra bên ngoài, tiềm ẩn xung đột xã hội, giải tỏa tức thì.",
        emotionalWeight: 0.8,
      },
      {
        id: "do_it_all",
        text: "Không nói gì và tự mình làm toàn bộ dự án để đảm bảo điểm cao.",
        impact: "Tự lập quá mức, hội chứng 'anh hùng' dưới áp lực, dễ dẫn đến kiệt sức.",
        emotionalWeight: 0.9,
      },
      {
        id: "communicate_calm",
        text: "Lên lịch một cuộc họp nhanh để phân chia lại công việc một cách cụ thể.",
        impact: "Giao tiếp chủ động, thiết lập ranh giới, giải quyết vấn đề mang tính xây dựng.",
        emotionalWeight: 0.3,
      }
    ]
  },
  {
    id: "family_expectations",
    title: "Bữa tối căng thẳng",
    description: "Bố mẹ bạn đang nói về người anh họ vừa nhận được học bổng toàn phần tại một trường đại học hàng đầu. Họ quay sang hỏi bạn về kết quả học tập gần đây.",
    imagePrompt: "Cảnh bữa tối gia đình ấm cúng, bố mẹ đang nói chuyện, học sinh nhìn xuống đĩa đồ ăn, không khí hơi căng thẳng, phong cách anime",
    choices: [
      {
        id: "defensive",
        text: "Nói với bỗ mẹ rằng hãy ngừng so sánh và bỏ ra khỏi bàn ăn.",
        impact: "Thiết lập ranh giới phản ứng, cảm xúc biến động khi cảm thấy bị đánh giá.",
        emotionalWeight: 0.8,
      },
      {
        id: "please_parents",
        text: "Hứa rằng bạn sẽ nỗ lực gấp đôi để đạt điểm cao hơn cả anh họ.",
        impact: "Giá trị bản thân dựa trên thành tích, gánh chịu áp lực bên ngoài không bền vững.",
        emotionalWeight: 0.9,
      },
      {
        id: "honest_struggle",
        text: "Chia sẻ rằng dạo này bạn cảm thấy bị quá tải và cần một chút không gian riêng.",
        impact: "Sự cởi mở, tìm kiếm sự thấu hiểu, nhận ra khả năng chịu đựng của bản thân.",
        emotionalWeight: 0.5,
      }
    ]
  }
];
