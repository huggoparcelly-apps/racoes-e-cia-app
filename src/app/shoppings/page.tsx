import Link from "next/link";
import ShoppingCard from "../components/ShoppingCard";

export default function shoppings() {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-8 p-3 h-screen">
      
      <ShoppingCard />
      <ShoppingCard />
      <ShoppingCard />

    </div>
  );
}
