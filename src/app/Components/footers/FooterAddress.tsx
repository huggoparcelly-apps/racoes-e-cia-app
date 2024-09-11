"use client";

import { useRouter } from "next/navigation";
import { useCartStore } from "../../stores/cartStore";

export default function FooterAddress() {
  const { cart, address } = useCartStore();
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const router = useRouter();

  const handleContinue = () => {
    router.push("/checkout");
  };
  
  return (
    <footer className="fixed bottom-0 w-full flex items-center py-2 px-4 justify-between z-50 bg-yellow-300">
      <div className="rounded-lg text-start">
        <p>Total</p>
        <p className="font-bold text-md">
          R$ {total.toFixed(2).replace(".", ",")} / {cart.length} Itens
        </p>
      </div>

      {address === null ? (
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
