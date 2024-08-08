import React from 'react'
import { Order } from '../types/Order';
import { StatusOrder } from '../types/StatusEnum';


type OrderManagementProps = {
  orders: Order[];
  updateOrderStatus: (id: number, status: keyof typeof StatusOrder) => void;
};


export default function OrderManagement({orders, updateOrderStatus} : OrderManagementProps) {
  return (
    <div className="p-6 flex flex-wrap justify-center">
      
      {orders.map((order) => (
        <div key={order.id} className="bg-yellow-500 p-4 m-4 rounded-lg shadow-lg w-1/3">
          
          <div className="flex justify-between items-center">
            <span className="font-bold">Pedido Número {order.id}</span>
            <span>Data {order.date}</span>
          </div>
          
          <div className="mt-2">
            <p>{order.address.street} - {order.address.number}</p>
            <p>Bairro {order.address.neighborhood}</p>
            <p>{order.address.complement}</p>
          </div>
          
          <div className="mt-2">
            <p className='font-semibold'>Itens</p>
            
            <ul className='mb-3'>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.product.name} - Qnt. {item.quantity}
                </li>
              ))}
            </ul>

            <span className="font-bold">Valor R${order.totalAmount}</span>
            
          </div>
          <div className="mt-2 flex justify-between items-center">
            <div>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => updateOrderStatus(order.id, 'Separacao')}
              >
                Separação
              </button>
              <button
                className="bg-green-700 text-white px-4 py-2 rounded"
                onClick={() => updateOrderStatus(order.id, 'Entregue')}
              >
                Entregue
              </button>
            </div>
            <span>Status - {order.status.toString()}</span>
          </div>
        </div>
      ))}
    </div>
  )
}