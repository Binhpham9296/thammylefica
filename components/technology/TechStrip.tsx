"use client";

import { useState } from "react";

const techList = [
  {
    name: "DIODE LASER",
    desc: "Công nghệ triệt lông bằng bước sóng laser diode, tác động trực tiếp vào nang lông, giảm lông hiệu quả và hạn chế mọc lại, phù hợp với nhiều loại da.",
  },
  {
    name: "MASSAGE",
    desc: "Liệu pháp massage thư giãn kết hợp trong các gói chăm sóc da, giúp tăng tuần hoàn máu, giảm căng thẳng và hỗ trợ da hấp thụ dưỡng chất tốt hơn.",
  },
  {
    name: "FDA CERTIFIED",
    desc: "Thiết bị được sử dụng tại Lefica đạt các tiêu chuẩn kiểm định an toàn quốc tế, đảm bảo hiệu quả điều trị đi kèm độ an toàn cho khách hàng.",
  },
  {
    name: "CO2 FRACTIONAL",
    desc: "Công nghệ laser vi điểm CO2, hỗ trợ tái tạo bề mặt da, cải thiện sẹo rỗ, se khít lỗ chân lông và làm đều màu da.",
  },
  {
    name: "HYDRA FACIAL",
    desc: "Liệu trình làm sạch sâu, hút mụn và cấp ẩm bằng công nghệ hút chân không kết hợp tinh chất dưỡng da, mang lại làn da sáng mịn tức thì.",
  },
];

export default function TechStrip() {
  const [active, setActive] = useState(0);

  return (
    <section className="max-w-[1240px] mx-auto px-6 py-9">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-[5px] h-[22px] bg-[#1461D6] rounded" />
        <h2 className="text-xl font-extrabold">Công nghệ &amp; thiết bị tại Lefica</h2>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        {techList.map((t, i) => (
          <button
            key={t.name}
            onClick={() => setActive(i)}
            className={`flex-1 min-w-[130px] h-16 rounded-lg flex items-center justify-center font-bold text-[13px] tracking-wide transition ${
              active === i
                ? "bg-[#1461D6] text-white border border-[#1461D6]"
                : "bg-white text-[#5A6774] border border-[#E4EAF1] hover:border-[#1461D6]"
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div className="mt-5 bg-white border border-[#E4EAF1] rounded-xl p-6">
        <h3 className="text-[15px] font-bold text-[#0E3E7A] mb-2">{techList[active].name}</h3>
        <p className="text-sm text-[#5A6774] leading-relaxed">{techList[active].desc}</p>
      </div>
    </section>
  );
}
