export default function VideoIntro() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 py-9">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-[5px] h-[22px] bg-[#1461D6] rounded" />
        <h2 className="text-xl font-extrabold">Video hướng dẫn massage Lefica</h2>
      </div>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#E4EAF1]">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/_dox-PH3qrs"
          title="Video hướng dẫn massage Lefica"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}
