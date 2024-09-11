"use client";

import { usePathname } from "next/navigation";
import FooterAdmin from "./FooterAdmin";
import Footercart from "./FooterCart";
import FooterUser from "./FooterUser";
import FooterAddress from "./FooterAddress";

function renderFooter(pathname: String) {
  if (pathname.includes("cart")) {
    return <Footercart />;
  }
  if (pathname.includes("address")) {
    return <FooterAddress />
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
