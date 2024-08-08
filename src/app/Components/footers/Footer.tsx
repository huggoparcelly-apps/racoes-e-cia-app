"use client";

import { usePathname } from "next/navigation";
import FooterAdmin from "./FooterAdmin";
import Footercart from "./FooterCart";
import FooterUser from "./FooterUser";

function renderFooter(pathname: String) {
  if (pathname.includes("cart") || pathname.includes("address")) {
    return <Footercart />;
  }
  if (pathname.includes("admin")) {
    return <FooterAdmin />;
  }
  return <FooterUser />;
}

export default function Footer() {
  const pathname = usePathname();
  return renderFooter(pathname);
}
