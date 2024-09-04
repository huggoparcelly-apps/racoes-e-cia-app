import React from "react";
import { Item } from "../../types/Item";


type OrderProps = {
  item: Item;
}

export default function OrderDetailCard({item}: OrderProps) {

  return (
    <div className="mb-2 bg-yellow-500 p-4 rounded-lg shadow-lg">
      <div className="flex justify-between">
        <p>{item.productName}</p>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <p>unit</p>
        <p className="font-semibold">R$ {item.price?.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-sm ">
        <p>Qnt.</p>
        <p>{item.quantity}</p>
      </div>
      <div className="flex justify-between text-sm">
        <p></p>
        <p>R$ {(item.quantity * (item.price || 0)).toFixed(2)}</p>
      </div>
    </div>
  );
}
