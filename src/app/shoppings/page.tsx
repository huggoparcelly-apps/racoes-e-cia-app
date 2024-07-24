import Link from "next/link";
import ShoppingCard from "../components/ShoppingCard";

export default function shoppings() {
  return (
    <div className="mx-auto max-w-7xl px-3 pb-16 items-center">
      
        <div className="flow-root">
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
        </div>
    </div>
  );
}
