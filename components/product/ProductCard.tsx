"use client";

import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating?: number;
  sold?: number;
  brand?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

      {/* IMAGE */}

      <Link href={`/san-pham/${product.slug}`}>

        <div className="relative aspect-square overflow-hidden bg-slate-100">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />

          {product.discount && (
            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
              -{product.discount}%
            </div>
          )}

          <button className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white shadow hover:bg-pink-50">
            ❤
          </button>

        </div>

      </Link>

      {/* CONTENT */}

      <div className="p-4">

        <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
          {product.brand}
        </p>

        <Link href={`/san-pham/${product.slug}`}>

          <h3 className="mt-2 font-bold text-[15px] leading-6 line-clamp-2 group-hover:text-blue-600 transition">
            {product.name}
          </h3>

        </Link>

        <div className="mt-3 flex items-center gap-2 text-sm">

          <span className="text-yellow-500">
            ⭐ {product.rating}
          </span>

          <span className="text-gray-400">
            | Đã bán {product.sold}
          </span>

        </div>

        <div className="mt-4 flex items-end gap-3">

          <span className="text-2xl font-black text-red-600">
            {product.price.toLocaleString()}đ
          </span>

          {product.oldPrice && (
            <span className="line-through text-gray-400">
              {product.oldPrice.toLocaleString()}đ
            </span>
          )}

        </div>

        <div className="grid grid-cols-2 gap-3 mt-5">

          <button className="border border-blue-600 rounded-xl py-3 font-semibold text-blue-600 hover:bg-blue-50">
            Thêm giỏ
          </button>

          <button className="bg-blue-600 rounded-xl py-3 font-bold text-white hover:bg-blue-700">
            Mua ngay
          </button>

        </div>

      </div>

    </div>
  );
}