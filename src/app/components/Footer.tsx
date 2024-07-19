'use client';

import { useAuthContext } from "../Context/AuthContext";
import FooterAdmin from "./FooterAdmin";
import FooterUser from "./FooterUser";

export default function Footer() {
  const {user} = useAuthContext();
  
  return user?.role === 'admin' ? <FooterAdmin /> : <FooterUser />
}
