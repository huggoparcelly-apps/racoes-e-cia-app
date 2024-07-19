import CartIcon from "./icons/CartIcon";
import HomeIcon from "./icons/HomeIcon";
import ShoppingIcon from "./icons/ShoppingIcon";

export default function FooterUser() {
  return (
    <footer className="fixed bottom-0 w-full flex items-center py-4 px-8 justify-between z-50 bg-yellow-300 text-yellow-900">
      <HomeIcon />
      <ShoppingIcon />
      <CartIcon />
    </footer>
  );
}
