import React from 'react'
import { Order } from '../../types/Order';
import { StatusOrder } from '../../types/StatusEnum';
import OrderManagementCard from './OrderManagementCard';


type OrderManagementProps = {
  orders: Order[];
};

export default function OrderManagement({ orders } : OrderManagementProps) {

  return (
    <div className="p-6 flex flex-wrap justify-center">
      
      {orders.map((order) => (
        <OrderManagementCard key={order.id} order={order} />
      ))}
    </div>
  )
}