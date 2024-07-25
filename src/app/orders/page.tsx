import Link from "next/link";
import OrderCard from "../components/OrderCard";

export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-7xl px-3 pb-16 items-center">
      <div className="flex justify-between px-2">
        <h1 className="text-xl font-bold">Pedidos</h1>
      </div>
      <div className="flow-root">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
}
