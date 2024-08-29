import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "../stores/cartStore";
import useCreateOrder from "@/hooks/useCreateOrder";

export default function Checkout() {
  
  const router = useRouter();

  const { cart, address, paymentMethod, setPaymentMethod, removeAllItens } = useCartStore();
  const { handleCreateOrder } = useCreateOrder();

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(event.target.value);
  };

  const handleConfirmOrder = async () => {
    if (paymentMethod === "card") {
      // Redireciona para o checkout do Stripe
      router.push("/checkout/stripe"); // Substitua com a URL correta do seu checkout Stripe
    
    } else if (paymentMethod === "pix") {
      // await handleCreateOrder();
      // redirecionar para página com chave pix
    } else if (paymentMethod === "money") {
      // enviar pedido para o Backend
      
      await handleCreateOrder();
      removeAllItens();
      router.push("/orders");
    }
  };

  const subTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const rateTaxe = 7.0;
  const total = subTotal + rateTaxe;

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg ">
      <h2 className="text-xl font-bold mb-4">Resumo do pedido</h2>
      <div className="mb-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>R$ {subTotal.toFixed(2).replace(".", ",")}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxa de Entrega</span>
          <span>R$ {rateTaxe.toFixed(2).replace(".", ",")}</span>
        </div>
        <div className="flex justify-between font-bold mt-2">
          <span>Total</span>
          <span>R$ {total.toFixed(2).replace(".", ",")}</span>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-2">Endereço de entrega</h2>
      <div className="mb-4">
        <p>
          {address?.street} - {address?.number}
        </p>
        <p>
          {address?.neighborhood} - {address?.complement}
        </p>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-2">
        Selecionar forma de pagamento
      </h2>
      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="radio"
            id="card"
            name="payment"
            value="card"
            className="mr-2"
            checked={paymentMethod === "card"}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="card">Cartão (Credito/Débito)</label>
        </div>
        <div className="flex items-center my-2">
          <input
            type="radio"
            id="pix"
            name="payment"
            value="pix"
            className="mr-2"
            checked={paymentMethod === "pix"}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="pix">PIX</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="money"
            name="payment"
            value="money"
            className="mr-2"
            checked={paymentMethod === "money"}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="money">Dinheiro (Pagar na entrega)</label>
        </div>
      </div>

      {paymentMethod ? (
        <button
          className="w-full bg-yellow-500 text-white py-2 rounded-lg shadow-md"
          onClick={handleConfirmOrder}
        >
          Confirmar pedido
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
