export default function CategoryIcons() {
  const items = ["Tẩy lông", "Chăm sóc da mụn", "Chăm sóc da nám", "Xoá xăm", "Chăm sóc da", "Gói combo", "Ưu đãi", "Cẩm nang"];

  return (
    <section className="max-w-[1240px] mx-auto px-6 pb-6">
      <div className="flex justify-between gap-3 overflow-x-auto py-2">
        {items.map((c) => (
          <a key={c} href="#dich-vu" className="flex flex-col items-center gap-2 min-w-[96px] text-center group">
            <div className="w-16 h-16 rounded-full bg-[#EAF3FF] border border-[#E4EAF1] flex items-center justify-center text-2xl group-hover:bg-[#1461D6] transition">
              ✦
            </div>
            <span className="text-xs font-semibold">{c}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
