import ProductCard from "./ProductCard";

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  slug: `lurcinn-${i + 1}`,
  name: `Mỹ phẩm Lurcinn Premium ${i + 1}`,
  image: "/products/spf.jpg",
  price: 390000 + i * 50000,
  oldPrice: 490000 + i * 50000,
  discount: 20,
  rating: 4.9,
  sold: 1200 + i * 150,
  brand: "Lurcinn",
}));

export default function ProductGrid() {
  return (
    <div>

      {/* Thanh trên */}

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-black">
          Tất cả sản phẩm
        </h2>

        <select className="border rounded-xl px-4 py-2">
          <option>Mặc định</option>
          <option>Giá thấp → cao</option>
          <option>Giá cao → thấp</option>
          <option>Bán chạy</option>
          <option>Mới nhất</option>
        </select>

      </div>

      {/* Grid */}

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">

        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}

      </div>

    </div>
  );
}