"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCartStore } from "../utils/store";

type FooterCartProps = {
  pathname: string;
};

export default function Footercart() {
  const { cart } = useCartStore();
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const totalIsZero = total === 0;

  const router = useRouter();
  const pathname = usePathname();

  const handleContinue = () => {
    pathname.includes("address")
      ? router.push("/checkout")
      : router.push("/address");
  };
  return (
    <footer className="fixed bottom-0 w-full flex items-center py-2 px-4 justify-between z-50 bg-yellow-300">
      <div className="rounded-lg text-start">
        <p>Total</p>
        <p className="font-bold text-md">
          R$ {total.toFixed(2)} / {cart.length} Itens
        </p>
      </div>
      
      {totalIsZero ? (
        <></>
      ) : (
        <button
          onClick={handleContinue}
          className="bg-teal-600 text-white py-1 px-4 rounded-full"
        >
          Continuar
        </button>
      )}
    </footer>
  );
}
