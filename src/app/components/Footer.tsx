"use client";

import { usePathname } from "next/navigation";
import CartIcon from "./icons/CartIcon";
import HomeIcon from "./icons/HomeIcon";
import OrdersIcon from "./icons/OrdersIcon";
import Footercart from "./FooterCart";

export default function Footer() {

  const pathname = usePathname();

  return pathname.includes("cart") || pathname.includes("address") ? <Footercart pathname={pathname} /> : (
    <footer className="fixed bottom-0 w-full flex items-center py-4 px-8 justify-between z-50 bg-yellow-300 text-yellow-900">
      <HomeIcon />
      <OrdersIcon />
      <CartIcon />
    </footer>
  );
}
