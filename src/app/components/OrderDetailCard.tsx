import React from "react";


type OrderItem = {
  name: string;
  quantity: number;
  price: number;
};

type OrderProps = {
  item: OrderItem;
}

export default function OrderDetailCard({item}: OrderProps) {

  return (
    <div className="mb-2 bg-yellow-500 p-4 rounded-lg shadow-lg">
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
        <p>R$ {(item.quantity * item.price).toFixed(2)}</p>
      </div>
    </div>
  );
}
