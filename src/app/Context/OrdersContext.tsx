'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { Order } from "../types/Order";

interface ContextProps {
  allOrders: Order[],
  setAllOrders: Dispatch<SetStateAction<Order[]>>,
}


const OrderContext = createContext<ContextProps>({
  allOrders: [],
  setAllOrders: (): Order[] => [],
});

interface OrdersProviderProps {
  children: ReactNode;
}

export const OrdersProvider = ({ children }: OrdersProviderProps) => {
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  
  return (
    <OrderContext.Provider value= {{ allOrders, setAllOrders }}>
      {children} 
    </OrderContext.Provider>
  )
}

export const useOrderContext = () => useContext(OrderContext);