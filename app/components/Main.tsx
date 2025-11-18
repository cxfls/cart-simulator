import { mockProducts } from "@/data/product";
import Image from "next/image";

export default function MainPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-3 justify-items-center">
        {mockProducts.map((p) => (
          <div key={p.id} className="mb-2 cursor-pointer">
            <Image
              src={p.imageUrl}
              alt={p.name}
              width={320}
              height={320}
              className="object-cover hover:scale-105 transition duration-150"
            />
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
