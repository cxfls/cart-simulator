"use client";

import { mockProducts } from "@/data/product";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

export default function MainPage() {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="max-w-5xl px-3 lg:px-0 mx-auto">
      <div className="grid grid-cols-3 gap-3 lg:gap-2 justify-items-center">
        {mockProducts.map((p) => (
          <div
            key={p.id}
            className="mb-2 cursor-pointer group relative"
            onClick={() => {
              addItem(p);
              toast.success("장바구니에 추가되었습니다!");
            }}
          >
            <Image
              src={p.imageUrl}
              alt={p.name}
              width={320}
              height={320}
              className="object-cover rounded-xl"
            />
            <div className="absolute bg-white/40 opacity-0 group-hover:opacity-100 inset-0 flex items-center justify-center rounded-xl transition">
              <p className="bg-neutral-300/60 w-7 h-7 lg:w-10 lg:h-10 rounded-full text-white text-lg lg:text-2xl font-bold flex items-center justify-center">
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
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "rgba(20,20,20,0.85)",
            color: "white",
            backdropFilter: "blur(6px)",
            borderRadius: "10px",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#38bdf8",
              secondary: "#000000",
            },
          },
        }}
      />
    </div>
  );
}
