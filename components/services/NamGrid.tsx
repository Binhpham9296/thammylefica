import { ZALO_URL } from "@/lib/constants";

const namGrid = [
  { name: "Chăm sóc da nám mảng bằng ánh sáng — 1 buổi", price: "750.000đ", rating: "★★★★★ (61)" },
  { name: "Combo chăm sóc da nám sau sinh — 6 buổi", price: "3.900.000đ", old: "4.800.000đ", rating: "★★★★★ (33)" },
  { name: "Peel da chăm sóc tàn nhang nhẹ — 1 buổi", price: "550.000đ", rating: "★★★★☆ (28)" },
  { name: "Chăm sóc duy trì sau liệu trình nám", price: "320.000đ", rating: "★★★★★ (45)" },
];

export default function NamGrid() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 py-9">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="w-[5px] h-[22px] bg-[#1461D6] rounded" />
          <h2 className="text-xl font-extrabold">Liệu trình chăm sóc da nám &amp; tàn nhang</h2>
        </div>
        <a href="#" className="text-sm font-semibold text-[#1461D6]">Xem tất cả →</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {namGrid.map((s) => (
          <div key={s.name} className="bg-white border border-[#E4EAF1] rounded-xl overflow-hidden">
            <div className="relative aspect-square bg-gradient-to-br from-[#EAF3FF] to-[#DCEBFF] flex items-center justify-center text-4xl">
              <span className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-sm">♡</span>
              ✦
            </div>
            <div className="p-3.5">
              <div className="text-[11px] text-[#5A6774] uppercase tracking-wide mb-1">Trị nám</div>
              <h4 className="text-[13.5px] font-semibold leading-snug mb-2">{s.name}</h4>
              <div className="text-[11.5px] text-[#F5A623] mb-2">{s.rating}</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[#E6484D] font-extrabold text-[15px]">{s.price}</span>
                {s.old && <span className="text-[#9AA7B4] text-xs line-through">{s.old}</span>}
              </div>
              <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="text-[12.5px] font-semibold text-[#1461D6]">
                Đặt lịch qua Zalo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
