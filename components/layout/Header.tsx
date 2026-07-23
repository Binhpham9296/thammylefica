"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { name: "Trang chủ", href: "/" },
  { name: "Tẩy lông", href: "#tay-long" },
  { name: "Chăm sóc da mụn", href: "#cham-soc-da-mun" },
  { name: "Chăm sóc da nám", href: "#cham-soc-da-nam" },
  { name: "Xóa xăm", href: "#xoa-xam" },
  { name: "Chăm sóc da", href: "#cham-soc-da" },
  { name: "Bảng giá", href: "#bang-gia" },
  { name: "Blog", href: "#blog" },
  { name: "Liên hệ", href: "#footer" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}

      <div className="bg-[#0E3E7A] text-white text-sm">

        <div className="max-w-7xl mx-auto px-5 h-10 flex items-center justify-between">

          <div>
            ✨ Hệ thống Thẩm mỹ LEFICA - Công nghệ cao chuẩn quốc tế
          </div>

          <div className="hidden lg:flex gap-6">

            <a href="#">Khuyến mãi</a>

            <a href="#">Chi nhánh</a>

            <a href="#">Đặt lịch</a>

          </div>

        </div>

      </div>

      {/* HEADER */}

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-xl"
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5">

          <div className="h-20 flex items-center justify-between">

            {/* LOGO */}

            <Link
              href="/"
              className="text-3xl font-extrabold text-[#0E3E7A]"
            >
              LEFICA
            </Link>

            {/* MENU */}

            <nav className="hidden xl:flex gap-8 font-semibold text-gray-700">

              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-blue-600 transition"
                >
                  {item.name}
                </a>
              ))}

            </nav>

            {/* SEARCH */}

            <div className="hidden lg:flex items-center">

              <input
                placeholder="Tìm dịch vụ..."
                className="w-72 h-11 border rounded-l-xl px-4 outline-none"
              />

              <button className="h-11 px-5 bg-blue-600 text-white rounded-r-xl hover:bg-blue-700">
                🔍
              </button>

            </div>

            {/* RIGHT */}

            <div className="hidden xl:flex items-center gap-5">

              <div className="text-right">

                <div className="text-xs text-gray-500">

                  Hotline

                </div>

                <div className="font-bold text-blue-700">

                  0348 39 3333

                </div>

              </div>

              <a
                href="https://zalo.me/84348393333"
                target="_blank"
                className="bg-[#1461D6] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Đặt lịch
              </a>

            </div>

            {/* MOBILE */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="xl:hidden text-3xl"
            >
              ☰
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}

        {mobileMenu && (

          <div className="xl:hidden bg-white border-t">

            <div className="flex flex-col">

              {menuItems.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  className="px-6 py-4 border-b hover:bg-gray-50"
                  onClick={() => setMobileMenu(false)}
                >
                  {item.name}
                </a>

              ))}

              <div className="p-5">

                <input
                  placeholder="Tìm dịch vụ..."
                  className="border rounded-xl w-full h-11 px-4"
                />

                <a
                  href="https://zalo.me/84348393333"
                  target="_blank"
                  className="block mt-4 text-center bg-blue-600 text-white py-3 rounded-xl font-semibold"
                >
                  Đặt lịch qua Zalo
                </a>

              </div>

            </div>

          </div>

        )}

      </header>
    </>
  );
}