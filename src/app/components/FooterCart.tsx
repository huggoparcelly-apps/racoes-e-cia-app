"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type FooterCartProps = {
  pathname: string;
};

export default function Footercart() {
  const router = useRouter();
  const pathname = usePathname();

  const handleContinue = () => {
    pathname.includes("address") ?
        router.push("/checkout")
      : router.push("/address");
  };
  return (
    <footer className="fixed bottom-0 w-full flex items-center py-2 px-4 justify-between z-50 bg-yellow-300">
      <div className="rounded-lg text-start">
        <p>Total com entrega</p>
        <p className="font-bold text-md">
          {/* R$ {total.toFixed(2)} / {cartItems.length} Itens */}
          R$ 100 / 10 Itens
        </p>
      </div>

      <button
        onClick={handleContinue}
        className="bg-teal-600  text-white py-1 px-4 rounded-full"
      >
        Continuar
      </button>
    </footer>
  );
}
