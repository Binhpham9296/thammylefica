
import { ZALO_URL } from "@/lib/constants";
import CountdownTimer from "./CountdownTimer";
const services = [
  { cat: "Triệt lông", name: "Tẩy lông nách công nghệ Diode — 5 buổi", price: "1.190.000đ", old: "1.700.000đ", off: "-30%", rating: "★★★★★ (128)" },
  { cat: "Trị mụn", name: "Liệu trình chăm sóc da mụn viêm chuyên sâu — 1 buổi", price: "450.000đ", old: "560.000đ", off: "-20%", rating: "★★★★★ (96)" },
  { cat: "Trị nám", name: "Liệu trình chăm sóc da nám & đều màu da — 3 buổi", price: "2.250.000đ", old: "3.000.000đ", off: "-25%", rating: "★★★★★ (74)" },
  { cat: "Xoá xăm", name: "Xoá xăm laser — hình nhỏ (dưới 5cm)", price: "680.000đ", old: "800.000đ", off: "-15%", rating: "★★★★☆ (52)" },
  { cat: "Chăm sóc da", name: "Facial phục hồi & cấp ẩm chuyên sâu", price: "390.000đ", old: "480.000đ", off: "-18%", rating: "★★★★★ (140)" },
];

export default function FlashSale() {
  return (
    <section id="dich-vu" className="max-w-[1240px] mx-auto px-6 py-9">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="w-[5px] h-[22px] bg-[#1461D6] rounded" />
          <h2 className="text-xl font-extrabold">Ưu đãi trong tuần</h2>
        </div>
        <CountdownTimer />
        </div>

      <div className="grid grid-flow-col auto-cols-[220px] gap-4 overflow-x-auto pb-2">
        {services.map((s) => (
          <div key={s.name} className="bg-white border border-[#E4EAF1] rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition">
            <div className="relative aspect-square bg-gradient-to-br from-[#EAF3FF] to-[#DCEBFF] flex items-center justify-center text-4xl">
              <span className="absolute top-2.5 left-2.5 bg-[#E6484D] text-white text-[11px] font-bold px-2 py-0.5 rounded">{s.off}</span>
              <span className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-sm">♡</span>
              ✦
            </div>
            <div className="p-3.5">
              <div className="text-[11px] text-[#5A6774] uppercase tracking-wide mb-1">{s.cat}</div>
              <h4 className="text-[13.5px] font-semibold leading-snug mb-2 min-h-[38px]">{s.name}</h4>
              <div className="text-[11.5px] text-[#F5A623] mb-2">{s.rating}</div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[#E6484D] font-extrabold text-[15px]">{s.price}</span>
                <span className="text-[#9AA7B4] text-xs line-through">{s.old}</span>
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
