'use client'

import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import { useAuthContext } from "../Context/AuthContext";

export default function BackHome() {
  const {user} = useAuthContext();
  
  return user?.role === 'admin' ? (<></>) : (
    <Link href={"/"}>
      <div className="fixed top-20 w-full flex item-center py-2 px-5 justify-between z-50 bg-yellow-300 ">
        <IoChevronBackOutline className="size-5"/>
      </div>
    </Link>
  );
}