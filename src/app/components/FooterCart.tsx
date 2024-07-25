"use client";

import Link from "next/link";

type FooterCartProps = {
  pathname: string
}

export default function Footercart({pathname}: FooterCartProps) {
  return (
    <footer className="fixed bottom-0 w-full flex items-center py-2 px-4 justify-between z-50 bg-yellow-300">
      <div className="rounded-lg text-start">
        <p>Total com entrega</p>
        <p className="font-bold text-md">
          {/* R$ {total.toFixed(2)} / {cartItems.length} Itens */}
          R$ 100 / 10 Itens
        </p>
      </div>

      <Link href={pathname.includes("/address")? pathname + "/checkout" : pathname + "/address"}>
        <button className="bg-teal-600  text-white py-1 px-4 rounded-full">
          Continuar
        </button>
      </Link>
    </footer>
  );
}
