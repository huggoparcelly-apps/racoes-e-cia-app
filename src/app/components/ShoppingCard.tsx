import Link from "next/link";

export default function ShoppingCard() {
  return (
    <div className="bg-yellow-500 text-black p-4 rounded-lg shadow-lg w-full my-4">
      <Link href={"/shoppings/1"}>
        <div className="flex justify-between">
          <span>Pedido N. 001</span>
          <span>01/12/2024</span>
        </div>

        <div className="mt-2 flex justify-between">
          <span className="font-bold">Valor R$ 100,00</span>
          <span className="font-bold">Qnt. 10</span>
        </div>

        <div className="mt-2 text-sm">
          <span>R. José Maria</span>
          <div>Bairro</div>
          <div>Complemento</div>
        </div>
      </Link>
      <div className="mt-2 flex justify-between">
        <button className="bg-green-700 text-white py-1 px-4 rounded-full">
          Repetir
        </button>
        <span>Status - Entregue</span>
      </div>
    </div>
  );
}
