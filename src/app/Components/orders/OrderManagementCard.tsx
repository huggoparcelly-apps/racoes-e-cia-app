import { Order } from "@/app/types/Order";
import getFormattedDate from "@/services/helpers/getFormattedDate";
import { useEffect, useState } from "react";

import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

type OrderProps = {
  order: Order;
};

export default function OrderManagementCard({ order }: OrderProps) {
  const [status, setStatus] = useState<string>(order.status);

  useEffect(() => {
    // Ouvir as atualizações de status do pedido
    socket.on("orderStatus", (data) => {
      if (data.orderId === order.id) {
        setStatus(data.status);
      }
    });

    // Limpeza do socket ao desmontar o componente
    return () => {
      socket.off("orderStatus");
    };
  }, [order.id]);

  const updateStatus = (newStatus: string, orderId?: number) => {
    socket.emit("updateOrderStatus", { orderId, status: newStatus });
  };

  const formattedDate = getFormattedDate(order.date);

  return (
    <div
      key={order.id}
      className="bg-yellow-500 p-4 m-4 rounded-lg shadow-lg w-1/3"
    >
      <div className="flex justify-between items-center">
        <span className="font-bold">Pedido Número {order.id}</span>
        <span>Data {formattedDate}</span>
      </div>

      <div className="mt-2">
        <p>
          {order.address?.street} - {order.address?.number}
        </p>
        <p>Bairro {order.address?.neighborhood}</p>
        <p>{order.address?.complement}</p>
      </div>

      <div className="mt-2">
        <p className="font-semibold">Itens</p>

        <ul className="mb-3">
          {order.items?.map((item, index) => (
            <li key={index}>
              {item.productName} - Qnt. {item.quantity}
            </li>
          ))}
        </ul>

        <span className="font-bold">
          Valor R${order.totalAmount} - {order.paymentType?.toUpperCase()}
        </span>
      </div>
      <div className="mt-2 flex justify-between items-center text-sm">
        <div>
          <button
            className={`${
              status === "Separacao" ||
              status === "Saiu para entrega" ||
              status === "Entregue"
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-700 cursor-pointer"
            } text-white px-4 py-2 rounded`}
            onClick={() => updateStatus("Separacao", order.id)}
            disabled={
              status === "Separacao" ||
              status === "Saiu para entrega" ||
              status === "Entregue"
            }
          >
            Separação
          </button>

          <button
            className={`mx-2 ${
              status === "Saiu para entrega" || status === "Entregue"
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-700 cursor-pointer"
            } text-white px-4 py-2 rounded`}
            onClick={() => updateStatus("Saiu para entrega", order.id)}
            disabled={status === "Saiu para entrega" || status === "Entregue"}
          >
            Saiu para entrega
          </button>

          <button
            className={`${
              status === "Entregue"
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-green-700 cursor-pointer"
            } text-white px-4 py-2 rounded`}
            onClick={() => updateStatus("Entregue", order.id)}
            disabled={status === "Entregue"}
          >
            Entregue
          </button>
        </div>
        <span>Status - {status}</span>
      </div>
    </div>
  );
}
