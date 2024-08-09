'use client';

import Image from "next/image";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";

import logo from "/public/logo.png";
import NavbarAdmin from "./NavbarAdmin";
import LoginButton from "../buttons/LoginButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/services/firebase/firebaseConfig";
import LogoutButton from "../buttons/LogoutButton";

function Navbar() {
  const [user, loading] = useAuthState(auth);
	
	const canRenderLogin = !user && !loading;

  const pathname = usePathname();
  const router = useRouter();

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
