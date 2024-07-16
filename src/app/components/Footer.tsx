import Link from "next/link";
import CartIcon from "./CartIcon";
import HomeIcon from "./HomeIcon";
import ShoppingIcon from "./ShoppingIcon";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex items-center py-4 px-8 justify-between z-50 bg-yellow-300 text-yellow-900">
      <HomeIcon />
      <ShoppingIcon />
      <CartIcon />
    </footer>
  );
}
