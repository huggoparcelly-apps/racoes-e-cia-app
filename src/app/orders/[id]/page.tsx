import OrderDetailCard from "@/app/Components/OrderDetailCard";

type OrderPageProps = {
  params: {
    id: number;
  };
};

type OrderItem = {
  name: string;
  quantity: number;
  price: number;
};

export default function OrderDetailPage({ params: { id } }: OrderPageProps) {
  const orderNumber = id;
  const orderDate = "01/12/2024";

  const items: OrderItem[] = [
    { name: "Ração Premier Filhote", quantity: 10, price: 10.9 },
    { name: "Ração Premier Filhote", quantity: 10, price: 10.9 },
    { name: "Ração Premier Filhote", quantity: 10, price: 10.9 },
    { name: "Ração Premier Filhote", quantity: 10, price: 10.9 },
    { name: "Ração Premier Filhote", quantity: 10, price: 10.9 },
  ];

  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="max-w-md mx-auto px-4 pb-16 rounded-lg flow-root">
      
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Pedido N. {orderNumber}</h2>
        <p className="text-gray-500">{orderDate}</p>
      </div>

      {items.map((item, index) => (
        <OrderDetailCard key={index} item={item} />
      ))}

      <div className="flex justify-between font-bold text-lg mt-4">
        <p>Total</p>
        <p>R$ {total.toFixed(2)}</p>
      </div>

      <button 
        className="my-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        
      >
        Repetir Pedido
      </button>
    </div>
  );
}
