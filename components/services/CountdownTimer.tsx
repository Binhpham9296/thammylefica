"use client";

import { useEffect, useState } from "react";

// Đặt thời điểm kết thúc ưu đãi tại đây — ví dụ: 23:59:59 hôm nay.
// Đổi ngày/giờ theo đúng thời gian chương trình khuyến mãi thực tế.
function getEndOfDay() {
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  return end;
}

function formatTwoDigits(n: number) {
  return n.toString().padStart(2, "0");
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const endTime = getEndOfDay();

    const tick = () => {
      const diff = Math.max(0, endTime.getTime() - Date.now());
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTimeLeft({ h, m, s });
    };

    tick(); // chạy ngay lần đầu, không đợi 1 giây
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xs font-bold text-[#E6484D] flex items-center gap-1.5">
      Kết thúc sau
      <span className="bg-[#1C2733] text-white px-2 py-1 rounded">{formatTwoDigits(timeLeft.h)}</span>:
      <span className="bg-[#1C2733] text-white px-2 py-1 rounded">{formatTwoDigits(timeLeft.m)}</span>:
      <span className="bg-[#1C2733] text-white px-2 py-1 rounded">{formatTwoDigits(timeLeft.s)}</span>
    </div>
  );
}
