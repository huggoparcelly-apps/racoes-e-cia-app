"use client";

import OrderManagement from "@/app/components/OrderManagement";
import { Order } from "@/app/types/Order";
import { StatusOrder } from "@/app/types/StatusEnum";
import { useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      date: "01/12/2024",
      address: {
        street: "R. João de Maria",
        number: "2341",
        neighborhood: "São Tomé",
      },

      items: [
        {
          product: {
            name: "Ração Premier Filhote 2,5 Kg",
            price: 100,
            category: "cão",
            quantity: 100,
          },
          quantity: 10,
        },
        {
          product: {
            name: "Ração Golden Adulto 1,0 Kg",
            price: 100,
            category: "gato",
            quantity: 100,
          },
          quantity: 10,
        },
      ],
      totalAmount: 1000.99,
      status: "Aguardando",
      paymentType: "PIX",
    },
    {
      id: 2,
      date: "01/12/2024",
      address: {
        street: "R. João de Maria",
        number: "2341",
        neighborhood: "São Tomé",
      },

      items: [
        {
          product: {
            name: "Ração Premier Filhote 2,5 Kg",
            price: 100,
            category: "cão",
            quantity: 100,
          },
          quantity: 10,
        },
        {
          product: {
            name: "Ração Golden Adulto 1,0 Kg",
            price: 100,
            category: "gato",
            quantity: 100,
          },
          quantity: 10,
        },
      ],
      totalAmount: 1000.99,
      status: "Entregue",
      paymentType: "PIX",
    },
    {
      id: 3,
      date: "01/12/2024",
      address: {
        street: "R. João de Maria",
        number: "2341",
        neighborhood: "São Tomé",
      },

      items: [
        {
          product: {
            name: "Ração Premier Filhote 2,5 Kg",
            price: 100,
            category: "cão",
            quantity: 100,
          },
          quantity: 10,
        },
        {
          product: {
            name: "Ração Golden Adulto 1,0 Kg",
            price: 100,
            category: "gato",
            quantity: 100,
          },
          quantity: 10,
        },
      ],
      totalAmount: 1000.99,
      status: "Aguardando",
      paymentType: "PIX",
    },
    {
      id: 4,
      date: "01/12/2024",
      address: {
        street: "R. João de Maria",
        number: "2341",
        neighborhood: "São Tomé",
      },

      items: [
        {
          product: {
            name: "Ração Premier Filhote 2,5 Kg",
            price: 100,
            category: "cão",
            quantity: 100,
          },
          quantity: 10,
        },
        {
          product: {
            name: "Ração Golden Adulto 1,0 Kg",
            price: 100,
            category: "gato",
            quantity: 100,
          },
          quantity: 10,
        },
      ],
      totalAmount: 1000.99,
      status: "Separacao",
      paymentType: "PIX",
    },
    // Adicione mais pedidos conforme necessário
  ]);

  const updateOrderStatus = (id: number, status: keyof typeof StatusOrder) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };
  
  const comparePedidos = (a: Order, b: Order) => {
  if (StatusOrder[a.status] !== StatusOrder[b.status]) {
    return StatusOrder[a.status] - StatusOrder[b.status];
  } else {
    return b.id - a.id;
  }
};

  const orderSort = orders.sort(comparePedidos);

  return (
    <>
      <h2 className="text-2xl font-bold m-4">Gerenciar Pedidos</h2>
      <OrderManagement orders={orderSort} updateOrderStatus={updateOrderStatus} />
    </>
  );
}
