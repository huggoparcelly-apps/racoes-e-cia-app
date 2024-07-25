"use client";
import Link from "next/link";
import ItemCard from "../components/ItemCard";
import { useCartStore } from "../utils/store";

export default function CartPage() {

  const { cart, removeAllItens } = useCartStore();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="pb-16 max-w-md mx-auto rounded-xl">
      
      <div className="flex justify-between px-2">
        <h1 className="text-xl font-bold">Carrinho</h1>
        <button className="text-red-500" onClick={() => removeAllItens()}>
          Limpar
        </button>
      </div>

      {cart.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}

      <div className="flex justify-center w-full">
        <Link href={'/'}>
          <button className="text-blue-500 my-4">Adicionar mais itens</button>
        </Link>
        
      </div>

    </div>
  );
}
