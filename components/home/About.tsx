import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <div className="relative">

            <Image
              src="/images/about.jpg"
              alt="Lefica Spa"
              width={700}
              height={750}
              className="rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-10 -right-8 bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl font-black text-blue-600">
                10+
              </div>

              <p className="text-gray-600">
                Năm kinh nghiệm
              </p>

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <span className="uppercase tracking-[5px] text-blue-600 font-bold">
              VỀ LEFICA
            </span>

            <h2 className="text-5xl font-black mt-5 leading-tight">

              Chuyên gia chăm sóc da công nghệ cao tại Hải Phòng

            </h2>

            <p className="mt-8 text-gray-600 leading-8">

              LEFICA là hệ thống thẩm mỹ chuyên sâu với các dịch vụ
              Tẩy lông Laser Diode,
              Chăm sóc da mụn,
              Chăm sóc da nám,
              Xóa xăm,
              Chăm sóc da chuẩn y khoa.

            </p>

            <p className="mt-6 text-gray-600 leading-8">

              Tất cả quá trình đều được xây dựng bởi đội ngũ chuyên viên
              nhiều năm kinh nghiệm cùng hệ thống máy móc nhập khẩu châu Âu,
              đảm bảo hiệu quả và an toàn.

            </p>

            {/* FEATURES */}

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="flex gap-4">

                <div className="text-3xl">
                  ✅
                </div>

                <div>

                  <h4 className="font-bold">
                    Công nghệ FDA
                  </h4>

                  <p className="text-sm text-gray-500">
                    Máy nhập khẩu chính hãng
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="text-3xl">
                  👩‍⚕️
                </div>

                <div>

                  <h4 className="font-bold">
                    Chuyên viên nhiều năm
                  </h4>

                  <p className="text-sm text-gray-500">
                    Chăm sóc đúng phác đồ
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="text-3xl">
                  ⭐
                </div>

                <div>

                  <h4 className="font-bold">
                    Hơn 20.000 khách hàng
                  </h4>

                  <p className="text-sm text-gray-500">
                    Tin tưởng lựa chọn
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="text-3xl">
                  ❤️
                </div>

                <div>

                  <h4 className="font-bold">
                    Bảo hành liệu trình
                  </h4>

                  <p className="text-sm text-gray-500">
                    Cam kết hiệu quả
                  </p>

                </div>

              </div>

            </div>

            <button className="mt-12 bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl font-bold">

              Xem thêm về LEFICA

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}