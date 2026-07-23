import Image from "next/image";
import { ZALO_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 py-9">
      <div className="grid md:grid-cols-[2fr_1fr] gap-4">
        <div className="relative rounded-2xl overflow-hidden min-h-[320px] flex items-center p-10 text-white">
          <Image
            src="/images/hero-triet-long.png"
            alt="Công nghệ triệt lông Laser Diode tại Lefica Spa"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E3E7A]/65 via-[#0E3E7A]/40 to-transparent" />
          <div className="relative z-10">
            <span className="inline-block bg-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">ƯU ĐÃI KHAI TRƯƠNG</span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3 max-w-md">
              Giảm đến 40% liệu trình triệt lông công nghệ Diode
            </h2>
            <p className="text-sm text-white/85 mb-5 max-w-sm">
              Áp dụng cho khách đặt lịch lần đầu trong tháng này. Tư vấn và soi da miễn phí trước khi làm liệu trình.
            </p>
            <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#0E3E7A] font-bold text-sm px-6 py-3 rounded-full">
              Đặt lịch ngay
            </a>
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-4">
          <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-2xl p-6 bg-[#EAF3FF] border border-[#E4EAF1] flex flex-col justify-center">
            <strong className="text-[15.5px] block mb-1">Soi da miễn phí</strong>
            <span className="text-xs text-[#5A6774]">Đặt lịch tư vấn cùng chuyên viên da liễu</span>
          </a>
          <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-2xl p-6 bg-gradient-to-br from-[#FFF4E9] to-[#FFE9D6] flex flex-col justify-center">
            <strong className="text-[15.5px] block mb-1">Gói combo tiết kiệm</strong>
            <span className="text-xs text-[#5A6774]">Kết hợp Chăm sóc da mụn + trị thâm, tiết kiệm đến 25%</span>
          </a>
        </div>
      </div>
    </section>
  );
}
