type ShoppingPageProps = {
  params: {
    id: number;
  };
};

import React from "react";

type OrderItem = {
  name: string;
  quantity: number;
  price: number;
};

export default function ShoppingDetail({ params: { id } }: ShoppingPageProps) {
  const orderNumber = id;
  const orderDate = "01/12/2024";

  const items: OrderItem[] = [
    { name: "Ração Premier Filhote", quantity: 10, price: 10.9 },
    { name: "Ração Premier Filhote", quantity: 10, price: 10.9 },
    { name: "Ração Premier Filhote", quantity: 10, price: 10.9 },
    { name: "Ração Premier Filhote", quantity: 10, price: 10.9 },
    { name: "Ração Premier Filhote", quantity: 10, price: 10.9 },
  ];

  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="max-w-md mx-auto bg-white px-4 pb-16 rounded-lg flow-root">
      
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Pedido N. {orderNumber}</h2>
        <p className="text-gray-500">{orderDate}</p>
      </div>

      {items.map((item, index) => (
        <div key={index} className="mb-4 bg-gray-200 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between">
            <p>{item.name}</p>
            
          </div>
          <div className="flex justify-between text-sm ">
            <p>Qnt.</p>
            <p>{item.quantity}</p>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <p>unit</p>
            <p className="font-semibold">R$ {item.price.toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-sm">
            <p></p>
            <p>Total R$ {(item.quantity * item.price).toFixed(2)}</p>
          </div>
        </div>
      ))}

      <div className="flex justify-between font-bold text-lg mt-4">
        <p>Total</p>
        <p>R$ {total.toFixed(2)}</p>
      </div>

      <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
        Repetir Pedido
      </button>
    </div>
  );
}
