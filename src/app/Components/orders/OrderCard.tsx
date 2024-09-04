import Link from "next/link";
import { Order } from "../../types/Order";
import getFormattedDate from "@/services/helpers/getFormattedDate";
import { useEffect, useState } from "react";

import { io } from 'socket.io-client';
const socket = io('http://localhost:3001');

type OrderProps = {
  order: Order;
}

export default function OrderCard({order}: OrderProps) {
  const formattedDate = getFormattedDate(order.date);

  const [status, setStatus] = useState<string>(order.status);

  useEffect(() => {
    // Ouvir as atualizações de status do pedido
    socket.on('orderStatus', (data) => {
      if (data.orderId === order.id) {
        setStatus(data.status);
      }
    });

    // Limpeza do socket ao desmontar o componente
    return () => {
      socket.off('orderStatus');
    };
  }, [order.id]);

  return (
    <div className="bg-yellow-500 text-black p-4 rounded-lg shadow-lg w-full my-4">
      <Link href={`orders/${order.id}`}>
        <div className="flex justify-between">
          <span>Pedido N. {order.id}</span>
          <span>{formattedDate}</span>
        </div>

        <div className="mt-2 flex justify-between">
          <span className="font-bold">Valor R$ {order.totalAmount.toFixed(2)}</span>
          <span className="font-bold">Qnt. {order.itens?.length}</span>
        </div>

        <div className="mt-2 text-sm">
          <span>{order.address?.street} - {order.address?.number}</span>
          <div>{order.address?.neighborhood}</div>
          <div>{order.address?.complement}</div>
        </div>
      </Link>
      <div className="mt-2 flex justify-end">
        {/* <button className="bg-teal-600  text-white py-1 px-4 rounded-full">
          Repetir
        </button> */}
        <span>{status}</span>
      </div>
    </div>
  );
}
