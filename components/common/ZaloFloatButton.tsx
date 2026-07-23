import { ZALO_URL } from "@/lib/constants";

export default function ZaloFloatButton() {
  return (
    <a
      href={ZALO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#1461D6] text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg md:hidden"
      aria-label="Chat Zalo đặt lịch"
    >
      💬
    </a>
  );
}
