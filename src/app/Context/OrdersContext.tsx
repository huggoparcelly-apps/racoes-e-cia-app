'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { Order } from "../types/Order";

interface ContextProps {
  allOrders: Order[],
  setAllOrders: Dispatch<SetStateAction<Order[]>>,
  order: Order,
  setOrder: Dispatch<SetStateAction<Order>>
}

const defaultOrder: Order = {
  id: 0,
  date: new Date(),
  address: null,
  items: [],
  totalAmount: 0,
  status: '',
  paymentType: ''
}

const OrderContext = createContext<ContextProps>({
  allOrders: [],
  setAllOrders: (): Order[] => [],
  order: defaultOrder,
  setOrder: () => defaultOrder
});

interface OrdersProviderProps {
  children: ReactNode;
}

export const OrdersProvider = ({ children }: OrdersProviderProps) => {
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [order, setOrder] = useState<Order>(defaultOrder)

  return (
    <OrderContext.Provider value= {{ allOrders, setAllOrders, order, setOrder }}>
      {children} 
    </OrderContext.Provider>
  )
}

export const useOrderContext = () => useContext(OrderContext);