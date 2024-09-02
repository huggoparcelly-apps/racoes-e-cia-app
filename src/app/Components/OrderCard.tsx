import Link from "next/link";
import { Order } from "../types/Order";

type OrderProps = {
  order: Order;
}

export default function OrderCard({order}: OrderProps) {
  const date = new Date(order.date);
  const formattedDate = date.toLocaleString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div className="bg-yellow-500 text-black p-4 rounded-lg shadow-lg w-full my-4">
      <Link href={`orders/${order.id}`}>
        <div className="flex justify-between">
          <span>Pedido N. {order.id}</span>
          <span>{formattedDate}</span>
        </div>

        <div className="mt-2 flex justify-between">
          <span className="font-bold">Valor R$ {order.totalAmount.toFixed(2)}</span>
          <span className="font-bold">Qnt. {order.itens.length}</span>
        </div>

        <div className="mt-2 text-sm">
          <span>{order.address?.street} - {order.address?.number}</span>
          <div>{order.address?.neighborhood}</div>
          <div>{order.address?.complement}</div>
        </div>
      </Link>
      <div className="mt-2 flex justify-between">
        <button className="bg-teal-600  text-white py-1 px-4 rounded-full">
          Repetir
        </button>
        <span>{order.status}</span>
      </div>
    </div>
  );
}
