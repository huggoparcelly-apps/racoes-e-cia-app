'use client'

import { getAllOrders } from "@/services/apis/apiOrders";
import { useEffect } from "react";
import OrderCard from "../Components/orders/OrderCard";
import useAuthStore from "../stores/authStore";

import { useOrderContext } from "../Context/OrdersContext";

export default function OrdersPage() {

  const {setAllOrders, allOrders} = useOrderContext();
  const { userToken } = useAuthStore();
  
  useEffect(() => {
    const getOrders = async () => {
      const allOrders = await getAllOrders(userToken);
      setAllOrders(allOrders);
    };
    getOrders();
  }, [userToken, setAllOrders])
  
  return (
    <div className="mx-auto max-w-7xl px-3 pb-16 items-center">
      <div className="flex justify-between px-2">
        <h1 className="text-xl font-bold">Pedidos</h1>
        
      </div>

      {allOrders.map(order => (
      <div key={order.id} className="flow-root">
        <OrderCard order={order} />
      </div>
      ))}
      
    </div>
  );
}
