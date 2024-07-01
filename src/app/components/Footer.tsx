import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import Cart from "./CartIcon";
import Shopping from "./ShoppingIcon";
import HomeIcon from "./HomeIcon";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex items-center py-4 px-8 justify-between z-50 bg-yellow-300 text-yellow-900">
      <HomeIcon />

      <Shopping />

      <Cart />
    </footer>
  );
}
