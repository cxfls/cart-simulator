import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-3">
        <Link href="/" className="text-2xl font-bold">
          Cart Simulator
        </Link>
        <Link
          href="/cart"
          className="hover:bg-neutral-100 p-3 rounded-full flex items-center justify-center transition duration-120"
        >
          <FaShoppingCart className="text-xl" />
        </Link>
      </div>
    </header>
  );
}
