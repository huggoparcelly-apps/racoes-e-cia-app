import Link from "next/link";
import { Order } from "../types/Order";

type OrderProps = {
  order: Order;
}

export default function OrderCard({order}: OrderProps) {
  return (
    <div className="bg-yellow-500 text-black p-4 rounded-lg shadow-lg w-full my-4">
      <Link href={`orders/${order.id}`}>
        <div className="flex justify-between">
          <span>Pedido N. {order.id}</span>
          <span>{order.orderDate}</span>
        </div>

        <div className="mt-2 flex justify-between">
          <span className="font-bold">Valor R$ {order.totalAmount.toFixed(2)}</span>
          <span className="font-bold">Qnt. 10</span>
        </div>

        <div className="mt-2 text-sm">
          <span>R. José Maria</span>
          <div>Bairro</div>
          <div>Complemento</div>
        </div>
      </Link>
      <div className="mt-2 flex justify-between">
        <button className="bg-teal-600  text-white py-1 px-4 rounded-full">
          Repetir
        </button>
        <span>Status - {order.status}</span>
      </div>
    </div>
  );
}
