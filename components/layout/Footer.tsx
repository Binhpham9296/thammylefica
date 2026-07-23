import { ZALO_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0E3E7A] text-white/75 pt-12">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="font-extrabold text-2xl text-white mb-3">LEFICA</div>
            <p className="text-xs leading-relaxed">
              Hệ thống thẩm mỹ công nghệ cao — tẩy lông, chăm sóc da mụn, chăm sóc da nám, xoá xăm an toàn, hiệu quả.
            </p>
            <div className="flex gap-2.5 mt-3.5">
              <div className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-[11px]">App Store</div>
              <div className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-[11px]">Google Play</div>
            </div>
          </div>
          <div>
            <h4 className="text-white text-[13.5px] mb-3">Dịch vụ</h4>
            <div className="flex flex-col gap-2 text-xs">
              <a href="#dich-vu">Tẩy lông</a>
              <a href="#dich-vu">Chăm sóc da mụn</a>
              <a href="#dich-vu">Chăm sóc da nám</a>
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
              <a href={ZALO_URL} target="_blank" rel="noopener noreferrer">Hướng dẫn đặt lịch</a>
              <a href="#">Chính sách đổi lịch</a>
              <a href="#">Câu hỏi thường gặp</a>
            </div>
          </div>
          <div>
            <h4 className="text-white text-[13.5px] mb-3">Liên hệ</h4>
            <div className="flex flex-col gap-2 text-xs">
              <p>Địa chỉ: [!67 Ngô Quyền Phường Lê Thanh Nghị Hải Dương]</p>
              <p>Hotline: 0348.39.3333</p>
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
  );
}
