'use client';

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import logo from "/public/logo.png";
import NavbarAdmin from "./NavbarAdmin";

function Navbar() {

  const pathname = usePathname();


  return (
    <nav className="fixed top-0 w-full flex item-center py-2 px-8 justify-between z-50 bg-yellow-300 text-slate-200">
      <Link
        href="/"
        className="uppercase font-semibold flex flex-col item-center"
      >
        <Image width={120} src={logo} alt="Logo Rações e Cia" />
      </Link>

      {pathname.includes("/admin") ? <NavbarAdmin />  : <></>}

      <div className="flex items-center gap-8 text-sm">
        <div>
          <button className="border rounded-md px-3 py-2 bg-yellow-900">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
