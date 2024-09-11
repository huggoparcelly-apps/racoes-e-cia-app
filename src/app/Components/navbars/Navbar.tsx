'use client';

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import useAuthStore from "@/app/stores/authStore";
import LoginButton from "../buttons/LoginButton";
import LogoutButton from "../buttons/LogoutButton";
import NavbarAdmin from "./NavbarAdmin";
import logo from "/public/logo.png";

function Navbar() {

  const token = useAuthStore(state => state.userToken);
	const canRenderLogin = !token;
  
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

     {canRenderLogin ? <LoginButton /> : <LogoutButton />}
    </nav>
  );
}

export default Navbar;
