'use client'
import OrderDetailCard from "@/app/Components/OrderDetailCard";
import { useOrderContext } from "@/app/Context/OrdersContext";
import useAuthStore from "@/app/stores/authStore";
import { getOrderById } from "@/services/apis/apiOrders";
import { useEffect } from "react";

type OrderPageProps = {
  params: {
    id: number;
  };
};

export default function OrderDetailPage({ params: { id: orderId } }: OrderPageProps) {

  const { userToken } = useAuthStore();
  const {setOrder, order} = useOrderContext();

  useEffect(() => {
    const getOrder = async () => {
      const order = await getOrderById(userToken, orderId);
      setOrder(order);
    };
    getOrder();
  }, [userToken, setOrder, orderId])

  const date = new Date(order.date);
  const formattedDate = date.toLocaleString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div className="max-w-md mx-auto px-4 pb-16 rounded-lg flow-root">
      
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Pedido N. {order.id}</h2>
        <p className="text-gray-500">{formattedDate}</p>
      </div>

      {order.itens.map((item) => (
        <OrderDetailCard key={item.productId} item={item} />
      ))}

      <div className="flex justify-between font-bold text-lg mt-4">
        <p>Total</p>
        <p>R$ {order.totalAmount}</p>
      </div>

      <button 
        className="my-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        
      >
        Repetir Pedido
      </button>
    </div>
  );
}
