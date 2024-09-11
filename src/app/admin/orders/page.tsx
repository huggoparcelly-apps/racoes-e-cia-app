"use client";

import OrderManagement from "@/app/Components/orders/OrderManagement";
import useAuthStore from "@/app/stores/authStore";
import { Order } from "@/app/types/Order";
import { getAllAdminOrders } from "@/services/apis/apiOrders";
import { useEffect, useState } from "react";

export default function AdminOrders() {
  
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  
  const { userToken } = useAuthStore();

  useEffect(() => {
    const getOrders = async () => {
      const allOrders = await getAllAdminOrders(userToken);
      setAllOrders(allOrders);
    };
    getOrders();
  }, [userToken, setAllOrders]);

  return (
    <>
      <h2 className="text-2xl font-bold m-4">Gerenciar Pedidos</h2>
      <OrderManagement orders={allOrders} />
    </>
  );
}
