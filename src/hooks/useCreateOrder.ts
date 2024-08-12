import { useCartStore } from "@/app/stores/cartStore";
import useUserProfileStore from "@/app/stores/userProfileStore";
import { Item } from "@/app/types/Item";
import { Order } from "@/app/types/Order";
import { createNewOrder } from "@/services/apis/apiOrders";
import { useState } from "react";

const useCreateOrder = () => {
  const { cart, address, paymentMethod } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);
  const token = useUserProfileStore((state) => state.userToken);

  const subTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const rateTaxe = 7.0;
  const total = subTotal + rateTaxe;

  const handleCreateOrder = async () => {

    const items: Item[] = cart.map((cartItem) => ({
      productId: cartItem.product.id,
      quantity: cartItem.quantity,
    }));

    const newOrder: Order = {
      itens: items,
      address: address,
      totalAmount: total,
      status: "Aguardando",
      date: new Date(Date.now()),
      paymentType: paymentMethod,
    };

    try {
      
      await createNewOrder(newOrder, token).then((response) => {
        console.log("Success", response.data.message, "success");
      });

    } catch (error: any) {
      throw new Error(`Error ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleCreateOrder };
};

export default useCreateOrder;
