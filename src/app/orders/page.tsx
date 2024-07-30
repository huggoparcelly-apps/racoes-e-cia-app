import OrderCard from "../components/OrderCard";

export default function OrdersPage() {

  const order1 = {
    id: 1,
    orderDate: new Date(Date.now()).toLocaleString(),
    totalAmount: 1000.00,
    status: "Entregue"
  }
  const order2 = {
    id: 2,
    orderDate: new Date(Date.now()).toLocaleString(),
    totalAmount: 1000.00,
    status: "Separação"
  }
  const order3 = {
    id: 3,
    orderDate: new Date(Date.now()).toLocaleString(),
    totalAmount: 1000.00,
    status: "Aguardando"
  }
  const orders = [order1, order2, order3]

  return (
    <div className="mx-auto max-w-7xl px-3 pb-16 items-center">
      <div className="flex justify-between px-2">
        <h1 className="text-xl font-bold">Pedidos</h1>
      </div>

      {orders.map(order => (
      <div key={order.id} className="flow-root">
        <OrderCard order={order} />
      </div>
      ))}
      
    </div>
  );
}
