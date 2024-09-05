import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "../stores/cartStore";
import useCreateOrder from "@/hooks/useCreateOrder";
import { getStripeConfig } from "@/services/stripe/stripeConfig";
import { Order } from "../types/Order";
import { Item } from "../types/Item";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export default function Checkout() {
  const router = useRouter();

  const { cart, address, paymentMethod, setPaymentMethod, removeAllItems } =
    useCartStore();
  const { handleCreateOrder } = useCreateOrder();
  const [loading, setLoading] = useState(false);

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(event.target.value);
  };

  const stripeOrder = async (order: Order) => {
    setLoading(true);

    setLoading(false);
  };

  const getNewOrder = (): Order => {
    const items: Item[] = cart.map((cartItem) => ({
      productId: cartItem.product.id,
      price: cartItem.product.price,
      quantity: cartItem.quantity,
    }));

    return {
      items: items,
      address: address,
      totalAmount: total,
      status: "Aguardando",
      date: new Date(Date.now()),
      paymentType: paymentMethod,
    };
  };

  const handleConfirmOrder = async () => {
    const newOrder = getNewOrder();

    if (paymentMethod === "cartao") {
      // Redireciona para o checkout do Stripe
      handleCreateOrder(newOrder);
      removeAllItems();
    } else if (paymentMethod === "pix") {
      await handleCreateOrder(newOrder);
      router.push("/orders");
    } else if (paymentMethod === "dinheiro") {
      // enviar o pedido
      await handleCreateOrder(newOrder);
      removeAllItems();
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
      <div className="mb-2">
        <div className="flex items-center">
          <input
            type="radio"
            id="cartao"
            name="payment"
            value="cartao"
            className="mr-2"
            checked={paymentMethod === "cartao"}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="cartao">Cartão (Credito/Débito)</label>
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
            id="dinheiro"
            name="payment"
            value="dinheiro"
            className="mr-2"
            checked={paymentMethod === "dinheiro"}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="dinheiro">Dinheiro (Pagar na entrega)</label>
        </div>
      </div>

      {paymentMethod === "pix" ? (
        <div className="mb-2">
          <label>Chave PIX</label>
          <br />
          <label>dcta478j-196l-03fm-t6gh-4298er7845m2</label>
        </div>
      ) : (
        <></>
      )}

      {paymentMethod ? (
        <button
          className=" w-full bg-yellow-500 text-white py-2 rounded-lg shadow-md"
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
