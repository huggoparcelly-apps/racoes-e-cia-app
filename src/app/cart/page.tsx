"use client";
import Image from "next/image";
import { useState } from "react";
import golden from "/public/racao-golden.webp";
import premier from "/public/racao-premier.webp";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Ração Premier Filhote",
      price: 10.99,
      quantity: 1,
      imageUrl: `${golden}`,
    },
    {
      id: 2,
      name: "Ração Premier Filhote",
      price: 10.99,
      quantity: 10,
      imageUrl: `${premier}`,
    },
    {
      id: 3,
      name: "Ração Premier Filhote",
      price: 10.99,
      quantity: 10,
      imageUrl: `${golden}`,
    },
    {
      id: 4,
      name: "Ração Premier Filhote",
      price: 10.99,
      quantity: 10,
      imageUrl: `${premier}`,
    },
    {
      id: 5,
      name: "Ração Premier Filhote",
      price: 10.99,
      quantity: 10,
      imageUrl: `${premier}`,
    },
    {
      id: 6,
      name: "Ração Premier Filhote",
      price: 10.99,
      quantity: 10,
      imageUrl: `${premier}`,
    },
    {
      id: 7,
      name: "Ração Premier Filhote",
      price: 10.99,
      quantity: 10,
      imageUrl: `${premier}`,
    },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(quantity, 0) } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="pb-16 max-w-md mx-auto rounded-xl">
      
      <div className="flex justify-between px-2">
        <h1 className="text-xl font-bold">Carrinho</h1>
        <button className="text-red-500" onClick={() => setCartItems([])}>
          Limpar
        </button>
      </div>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center space-x-4 border-b p-2 shadow-sm"
        >
          <Image
            src={golden}
            alt={item.name}
            className="w-16 h-16 object-cover"
          />

          <div className="flex-grow">
            <h2 className="text-lg font-medium">{item.name}</h2>
            <p className="text-gray-600">R$ {item.price.toFixed(2)}</p>
          </div>

          <div className="flex items-center space-x-2">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => removeItem(item.id)}>🗑️</button>
          </div>
        </div>
      ))}

      <div className="flex justify-center w-full">
        <Link href={'/'}>
          <button className="text-blue-500 my-4">Adicionar mais itens</button>
        </Link>
        
      </div>

    </div>
  );
}
