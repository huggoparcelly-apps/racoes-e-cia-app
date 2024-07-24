import Link from "next/link";
import ShoppingCard from "../components/ShoppingCard";

export default function shoppings() {
  return (
    // <div className="flex flex-col md:flex-row items-center max-w-7xl  gap-8 p-3 ">
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
