import ProductGrid from "@/components/product/ProductGrid";
import ProductSidebar from "@/components/product/ProductSidebar";

export default function ProductsPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Banner */}

      <section className="bg-gradient-to-r from-[#0E3E7A] to-[#1461D6] text-white">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <h1 className="text-5xl font-black">
            Mỹ phẩm LEFICA
          </h1>

          <p className="mt-4 text-lg text-blue-100 max-w-xl">
            Hơn 500 sản phẩm chăm sóc da chính hãng,
            giao hàng toàn quốc.
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto py-10 px-6">

        <div className="grid lg:grid-cols-[260px_1fr] gap-8">

          <ProductSidebar />

          <ProductGrid />

        </div>

      </section>

    </main>
  );
}