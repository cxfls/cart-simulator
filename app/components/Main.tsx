"use client";

import { mockProducts } from "@/data/product";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

export default function MainPage() {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-3 justify-items-center">
        {mockProducts.map((p) => (
          <div
            key={p.id}
            className="mb-2 cursor-pointer group relative"
            onClick={() => addItem(p)}
          >
            <Image
              src={p.imageUrl}
              alt={p.name}
              width={320}
              height={320}
              className="object-cover"
            />
            <div className="absolute bg-white/40 opacity-0 group-hover:opacity-100 inset-0 flex items-center justify-center transition">
              <p className="bg-neutral-300/60 w-10 h-10 rounded-full text-white text-2xl font-bold flex items-center justify-center">
                +
              </p>
            </div>
            <h2 className="text-lg pt-1.5">{p.name}</h2>
            <p className="text-sm text-neutral-600">{p.description}</p>
            <p className="pt-1.5 text-lg font-semibold">
              {p.price.toLocaleString("ko-KR")}원
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
