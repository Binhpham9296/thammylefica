export default function Home() {
  const services = [
    { cat: "Triệt lông", name: "Triệt lông nách công nghệ Diode — 5 buổi", price: "1.190.000đ", old: "1.700.000đ", off: "-30%", rating: "★★★★★ (128)" },
    { cat: "Trị mụn", name: "Liệu trình trị mụn viêm chuyên sâu — 1 buổi", price: "450.000đ", old: "560.000đ", off: "-20%", rating: "★★★★★ (96)" },
    { cat: "Trị nám", name: "Liệu trình trị nám & đều màu da — 3 buổi", price: "2.250.000đ", old: "3.000.000đ", off: "-25%", rating: "★★★★★ (74)" },
    { cat: "Xoá xăm", name: "Xoá xăm laser — hình nhỏ (dưới 5cm)", price: "680.000đ", old: "800.000đ", off: "-15%", rating: "★★★★☆ (52)" },
    { cat: "Chăm sóc da", name: "Facial phục hồi & cấp ẩm chuyên sâu", price: "390.000đ", old: "480.000đ", off: "-18%", rating: "★★★★★ (140)" },
  ];

  const namGrid = [
    { name: "Trị nám mảng bằng ánh sáng IPL — 1 buổi", price: "750.000đ", rating: "★★★★★ (61)" },
    { name: "Combo trị nám sau sinh — 6 buổi", price: "3.900.000đ", old: "4.800.000đ", rating: "★★★★★ (33)" },
    { name: "Peel da trị tàn nhang nhẹ — 1 buổi", price: "550.000đ", rating: "★★★★☆ (28)" },
    { name: "Chăm sóc duy trì sau liệu trình nám", price: "320.000đ", rating: "★★★★★ (45)" },
  ];

  const categories = [
    "Triệt lông", "Trị mụn", "Trị nám", "Xoá xăm", "Chăm sóc da", "Gói combo", "Ưu đãi tuần", "Cẩm nang",
  ];

  const blogs = [
    { cat: "Trị mụn", title: "Da dầu mụn nên chăm sóc thế nào vào mùa hè?" },
    { cat: "Triệt lông", title: "Triệt lông công nghệ Diode có đau không?" },
    { cat: "Trị nám", title: "Phân biệt nám, tàn nhang và đồi mồi" },
    { cat: "Chăm sóc da", title: "Quy trình chăm sóc da sau liệu trình thẩm mỹ" },
  ];

  return (
    <div className="bg-[#F5F9FF] text-[#1C2733] font-sans">
      {/* Topbar */}
      <div className="bg-[#0E3E7A] text-white/85 text-xs">
        <div className="max-w-[1240px] mx-auto px-6 h-[34px] flex items-center justify-between">
          <span>Thẩm mỹ Lefica — Công nghệ cao, an toàn, chuẩn quốc tế</span>
          <div className="hidden md:flex gap-5">
            <a href="#" className="hover:text-white">Thẩm mỹ Lefica Spa</a>
            <a href="#" className="hover:text-white">Tải app Lefica</a>
            <a href="#" className="hover:text-white">Đăng nhập / Đăng ký</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-[#E4EAF1] sticky top-0 z-50">
        <div className="max-w-[1240px] mx-auto px-6 h-[78px] flex items-center gap-7">
          <div className="font-extrabold text-2xl text-[#0E3E7A] shrink-0">
            LEFICA<span className="text-[#2D8CFF]">.</span>
          </div>

          <div className="hidden sm:flex flex-1 items-center bg-[#F5F9FF] border border-[#E4EAF1] rounded-full h-[46px] pl-4 pr-1">
            <input
              type="text"
              placeholder="Tìm liệu trình, ví dụ: trị nám, triệt lông toàn thân..."
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-[#9AA7B4]"
            />
            <button className="bg-[#1461D6] text-white rounded-full w-[38px] h-[38px] flex items-center justify-center shrink-0" aria-label="Tìm kiếm">
              🔍
            </button>
          </div>

          <div className="flex items-center gap-5 shrink-0 ml-auto">
            <a href="tel:0000000000" className="hidden md:flex items-center gap-2 text-sm text-[#0E3E7A]">
              <span className="text-lg">📞</span>
              <span>
                <strong className="block text-[13.5px]">0348.39.3333</strong>
                <span className="text-xs text-[#5A6774]">Hỗ trợ 24/7</span>
              </span>
            </a>
            <a href="#lich-hen" className="hidden md:flex items-center gap-2 text-sm text-[#0E3E7A]">
              <span className="text-lg">📅</span>
              <span>
                <strong className="block text-[13.5px]">Lịch hẹn</strong>
                <span className="text-xs text-[#5A6774]">Của tôi</span>
              </span>
            </a>
            <a href="#" className="relative flex items-center text-[#0E3E7A]">
              <span className="text-xl">🛒</span>
              <span className="absolute -top-1.5 -right-2 bg-[#E6484D] text-white text-[10px] font-bold w-[17px] h-[17px] rounded-full flex items-center justify-center">3</span>
            </a>
          </div>
        </div>

        {/* Category bar */}
        <div className="bg-[#1461D6]">
          <div className="max-w-[1240px] mx-auto px-6 h-12 flex items-center gap-7 overflow-x-auto text-white text-[13.5px] font-medium">
            <a href="#" className="font-bold bg-white/15 px-3.5 py-1.5 rounded-lg whitespace-nowrap">☰ Danh mục dịch vụ</a>
            {categories.map((c) => (
              <a key={c} href="#dich-vu" className="whitespace-nowrap hover:underline">{c}</a>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* Hero banners */}
        <section className="max-w-[1240px] mx-auto px-6 py-9">
          <div className="grid md:grid-cols-[2fr_1fr] gap-4">
            <div className="relative rounded-2xl overflow-hidden min-h-[320px] flex items-center p-10 text-white bg-gradient-to-br from-[#0E3E7A] via-[#1461D6] to-[#2D8CFF]">
              <div>
                <span className="inline-block bg-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">ƯU ĐÃI KHAI TRƯƠNG</span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3 max-w-md">
                  Giảm đến 40% liệu trình triệt lông công nghệ Diode
                </h2>
                <p className="text-sm text-white/85 mb-5 max-w-sm">
                  Áp dụng cho khách đặt lịch lần đầu trong tháng này. Tư vấn và soi da miễn phí trước khi làm liệu trình.
                </p>
                <a href="https://zalo.me/84348393333" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#0E3E7A] font-bold text-sm px-6 py-3 rounded-full">
  Đặt lịch ngay
                </a>
              </div>
            </div>

            <div className="flex flex-row md:flex-col gap-4">
              <div className="flex-1 rounded-2xl p-6 bg-[#EAF3FF] border border-[#E4EAF1] flex flex-col justify-center">
                <strong className="text-[15.5px] block mb-1">Soi da miễn phí</strong>
                <span className="text-xs text-[#5A6774]">Đặt lịch tư vấn cùng chuyên viên da liễu</span>
              </div>
              <div className="flex-1 rounded-2xl p-6 bg-gradient-to-br from-[#FFF4E9] to-[#FFE9D6] flex flex-col justify-center">
                <strong className="text-[15.5px] block mb-1">Gói combo tiết kiệm</strong>
                <span className="text-xs text-[#5A6774]">Kết hợp trị mụn + trị thâm, tiết kiệm đến 25%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category icons */}
        <section className="max-w-[1240px] mx-auto px-6 pb-6">
          <div className="flex justify-between gap-3 overflow-x-auto py-2">
            {["Triệt lông", "Trị mụn", "Trị nám", "Xoá xăm", "Chăm sóc da", "Gói combo", "Ưu đãi", "Cẩm nang"].map((c) => (
              <a key={c} href="#dich-vu" className="flex flex-col items-center gap-2 min-w-[96px] text-center group">
                <div className="w-16 h-16 rounded-full bg-[#EAF3FF] border border-[#E4EAF1] flex items-center justify-center text-2xl group-hover:bg-[#1461D6] transition">
                  ✦
                </div>
                <span className="text-xs font-semibold">{c}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Flash sale */}
        <section id="dich-vu" className="max-w-[1240px] mx-auto px-6 py-9">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="w-[5px] h-[22px] bg-[#1461D6] rounded" />
              <h2 className="text-xl font-extrabold">Ưu đãi trong tuần</h2>
            </div>
            <div className="text-xs font-bold text-[#E6484D] flex items-center gap-1.5">
              Kết thúc sau
              <span className="bg-[#1C2733] text-white px-2 py-1 rounded">02</span>:
              <span className="bg-[#1C2733] text-white px-2 py-1 rounded">14</span>:
              <span className="bg-[#1C2733] text-white px-2 py-1 rounded">36</span>
            </div>
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
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#E6484D] font-extrabold text-[15px]">{s.price}</span>
                    <span className="text-[#9AA7B4] text-xs line-through">{s.old}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mid banner */}
        <section className="max-w-[1240px] mx-auto px-6 py-6">
          <div className="rounded-2xl bg-gradient-to-br from-[#0E3E7A] to-[#1461D6] text-white p-10 flex flex-wrap items-center justify-between gap-5">
            <div>
              <h3 className="text-xl font-extrabold mb-1">Đặt lịch hôm nay — Nhận tư vấn da miễn phí</h3>
              <p className="text-sm text-white/80">Chuyên viên gọi lại trong vòng 15 phút để tư vấn liệu trình phù hợp với làn da của bạn.</p>
            </div>
            <a href="#dat-lich" className="bg-white text-[#0E3E7A] font-bold text-sm px-6 py-3 rounded-full">Đặt lịch ngay</a>
          </div>
        </section>

        {/* Trị nám grid */}
        <section className="max-w-[1240px] mx-auto px-6 py-9">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="w-[5px] h-[22px] bg-[#1461D6] rounded" />
              <h2 className="text-xl font-extrabold">Liệu trình trị nám &amp; tàn nhang</h2>
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
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#E6484D] font-extrabold text-[15px]">{s.price}</span>
                    {s.old && <span className="text-[#9AA7B4] text-xs line-through">{s.old}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech strip */}
        <section className="max-w-[1240px] mx-auto px-6 py-9">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-[5px] h-[22px] bg-[#1461D6] rounded" />
            <h2 className="text-xl font-extrabold">Công nghệ &amp; thiết bị tại Lefica</h2>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            {["DIODE LASER", "IPL TECH", "FDA CERTIFIED", "CO2 FRACTIONAL", "HYDRA FACIAL"].map((b) => (
              <div key={b} className="flex-1 min-w-[130px] h-16 bg-white border border-[#E4EAF1] rounded-lg flex items-center justify-center text-[#5A6774] font-bold text-[13px] tracking-wide">
                {b}
              </div>
            ))}
          </div>
        </section>

        {/* Blog */}
        <section className="max-w-[1240px] mx-auto px-6 py-9">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="w-[5px] h-[22px] bg-[#1461D6] rounded" />
              <h2 className="text-xl font-extrabold">Cẩm nang làm đẹp</h2>
            </div>
            <a href="#" className="text-sm font-semibold text-[#1461D6]">Xem tất cả →</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {blogs.map((b) => (
              <div key={b.title} className="bg-white border border-[#E4EAF1] rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[#EAF3FF] to-[#DCEBFF]" />
                <div className="p-3.5">
                  <div className="text-[11px] text-[#1461D6] font-bold uppercase mb-1.5">{b.cat}</div>
                  <h4 className="text-[13.5px] font-semibold leading-snug">{b.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="dat-lich" className="bg-[#0E3E7A] text-white/75 pt-12">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="font-extrabold text-2xl text-white mb-3">LEFICA</div>
              <p className="text-xs leading-relaxed">
                Hệ thống thẩm mỹ công nghệ cao — triệt lông, trị mụn, trị nám, xoá xăm an toàn, hiệu quả.
              </p>
              <div className="flex gap-2.5 mt-3.5">
                <div className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-[11px]">App Store</div>
                <div className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-[11px]">Google Play</div>
              </div>
            </div>
            <div>
              <h4 className="text-white text-[13.5px] mb-3">Dịch vụ</h4>
              <div className="flex flex-col gap-2 text-xs">
                <a href="#dich-vu">Triệt lông</a>
                <a href="#dich-vu">Trị mụn</a>
                <a href="#dich-vu">Trị nám</a>
                <a href="#dich-vu">Xoá xăm</a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-[13.5px] mb-3">Về Lefica</h4>
              <div className="flex flex-col gap-2 text-xs">
                <a href="#">Giới thiệu</a>
                <a href="#">Tuyển dụng</a>
                <a href="#">Chi nhánh</a>
                <a href="#">Chính sách bảo mật</a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-[13.5px] mb-3">Hỗ trợ khách hàng</h4>
              <div className="flex flex-col gap-2 text-xs">
                <a href="#">Hướng dẫn đặt lịch</a>
                <a href="#">Chính sách đổi lịch</a>
                <a href="#">Câu hỏi thường gặp</a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-[13.5px] mb-3">Liên hệ</h4>
              <div className="flex flex-col gap-2 text-xs">
                <p>Địa chỉ: [Điền địa chỉ cơ sở]</p>
                <p>Hotline: [Điền số điện thoại]</p>
                <p>Giờ mở cửa: 9:00 – 20:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/15 py-5 flex flex-wrap justify-between gap-2 text-xs text-white/50">
            <span>© 2026 Thẩm Mỹ Lefica. All rights reserved.</span>
            <span>Thiết kế bởi Lefica Team</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
