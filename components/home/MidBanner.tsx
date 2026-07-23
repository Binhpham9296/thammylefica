import { ZALO_URL } from "@/lib/constants";

export default function MidBanner() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 py-6">
      <div className="rounded-2xl bg-gradient-to-br from-[#0E3E7A] to-[#1461D6] text-white p-10 flex flex-wrap items-center justify-between gap-5">
        <div>
          <h3 className="text-xl font-extrabold mb-1">Đặt lịch hôm nay — Nhận tư vấn da miễn phí</h3>
          <p className="text-sm text-white/80">Chuyên viên gọi lại trong vòng 15 phút để tư vấn liệu trình phù hợp với làn da của bạn.</p>
        </div>
        <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-[#0E3E7A] font-bold text-sm px-6 py-3 rounded-full">Đặt lịch ngay</a>
      </div>
    </section>
  );
}
