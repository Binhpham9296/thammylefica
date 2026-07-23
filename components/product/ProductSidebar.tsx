export default function ProductSidebar() {
  return (
    <aside className="bg-white rounded-2xl border border-gray-200 p-6 h-fit">

      <h2 className="text-xl font-bold mb-6">
        Danh mục
      </h2>

      <div className="space-y-3">

        <button className="w-full text-left hover:text-blue-600">
          🌿 Sữa rửa mặt
        </button>

        <button className="w-full text-left hover:text-blue-600">
          💧 Serum
        </button>

        <button className="w-full text-left hover:text-blue-600">
          ☀️ Kem chống nắng
        </button>

        <button className="w-full text-left hover:text-blue-600">
          ✨ Kem dưỡng
        </button>

        <button className="w-full text-left hover:text-blue-600">
          🧴 Toner
        </button>

        <button className="w-full text-left hover:text-blue-600">
          🧼 Tẩy trang
        </button>

      </div>

      <hr className="my-6"/>

      <h3 className="font-bold mb-3">
        Khoảng giá
      </h3>

      <div className="space-y-2 text-sm">

        <label className="flex gap-2">
          <input type="checkbox"/>
          Dưới 300.000đ
        </label>

        <label className="flex gap-2">
          <input type="checkbox"/>
          300k - 500k
        </label>

        <label className="flex gap-2">
          <input type="checkbox"/>
          500k - 1 triệu
        </label>

        <label className="flex gap-2">
          <input type="checkbox"/>
          Trên 1 triệu
        </label>

      </div>

    </aside>
  );
}