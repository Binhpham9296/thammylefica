const blogs = [
  { cat: "Chăm sóc da mụn", title: "Da dầu mụn nên chăm sóc thế nào vào mùa hè?" },
  { cat: "Tẩy lông", title: "Tẩy lông công nghệ Diode có đau không?" },
  { cat: "Chăm sóc da nám", title: "Phân biệt nám, tàn nhang và đồi mồi" },
  { cat: "Chăm sóc da", title: "Quy trình chăm sóc da sau liệu trình thẩm mỹ" },
];

export default function BlogSection() {
  return (
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
  );
}
