import useAuthStore from "@/app/stores/authStore";
import { useCartStore } from "@/app/stores/cartStore";
import { Order } from "@/app/types/Order";
import { createNewOrder, createStripeOrder } from "@/services/apis/apiOrders";
import { useState } from "react";

const useCreateOrder = () => {
  const { cart, address, paymentMethod } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);
  const { userToken, user } = useAuthStore();

  const subTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const rateTaxe = 7.0;
  const total = subTotal + rateTaxe;

  const handleCreateOrder = async (newOrder: Order) => {

    try {
      
      if(paymentMethod == 'cartao') {
        await createStripeOrder(newOrder, userToken);

      } else {
        await createNewOrder(newOrder, userToken)
      }

    } catch (error: any) {
      throw new Error(`Error ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleCreateOrder };
};

export default useCreateOrder;
