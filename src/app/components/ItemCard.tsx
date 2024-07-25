import Image from "next/image";
import React from "react";
import golden from "/public/racao-golden.webp";
import { useCartStore } from "../utils/store";
import { ProductType } from "../types/ProductType";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

function ItemCard(key: any, item : ProductType) {

  const { cart, addProduct, removeProduct, removeItem } = useCartStore();

  // const updateQuantity = (id: number, quantity: number) => {
  //   setCartItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, quantity: Math.max(quantity, 0) } : item
  //     )
  //   );
  // };

  // const removeItem = (id: number) => {
  //   setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  // };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,0);

  return (
    <div
      key={key}
      className="flex items-center space-x-4 border-b p-2 shadow-sm"
    >
      <Image src={golden} alt={item.name} className="w-16 h-16 object-cover" />

      <div className="flex-grow">
        <h2 className="text-lg font-medium">{item.name}</h2>
        <p className="text-gray-600">R$ {item.price}</p>
      </div>

      <div className="flex items-center space-x-2">
        <button onClick={() => removeProduct(item)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => addProduct(item)}>
          +
        </button>
        <button onClick={() => removeItem(item)}>🗑️</button>
      </div>
    </div>
  );
}

export default ItemCard;
