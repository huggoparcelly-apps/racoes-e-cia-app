import Image from "next/image";
import { Item } from "../types/Item";
import { useCartStore } from "../utils/store";
import golden from "/public/racao-golden.webp";

type ItemProps = {
  item: Item;
}

export default function ItemCard({ item }: ItemProps) {

  const { cart, addProduct, removeProduct, removeItem } = useCartStore();

  return (
    <div
      className="flex items-center space-x-4 border-b p-2 shadow-sm"
    >
      <Image src={golden} alt={item.product.name} className="w-16 h-16 object-cover" />

      <div className="flex-grow">
        <h2 className="text-lg font-medium">{item.product.name}</h2>
        <p className="text-gray-600">R$ {item.product.price}</p>
      </div>

      <div className="flex items-center space-x-2">
        <button onClick={() => removeProduct(item.product)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => addProduct(item.product)}>
          +
        </button>
        <button onClick={() => removeItem(item)}>🗑️</button>
      </div>
    </div>
  );
}
