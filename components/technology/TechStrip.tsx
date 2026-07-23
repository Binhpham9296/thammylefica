export default function TechStrip() {
  const brands = ["DIODE LASER", "MASSAGE", "FDA CERTIFIED", "CO2 FRACTIONAL", "HYDRA FACIAL"];

  return (
    <section className="max-w-[1240px] mx-auto px-6 py-9">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-[5px] h-[22px] bg-[#1461D6] rounded" />
        <h2 className="text-xl font-extrabold">Công nghệ &amp; thiết bị tại Lefica</h2>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {brands.map((b) => (
          <div key={b} className="flex-1 min-w-[130px] h-16 bg-white border border-[#E4EAF1] rounded-lg flex items-center justify-center text-[#5A6774] font-bold text-[13px] tracking-wide">
            {b}
          </div>
        ))}
      </div>
    </section>
  );
}
