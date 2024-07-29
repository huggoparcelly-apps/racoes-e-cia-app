import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../types/Product";
import { Item } from "../types/Item";

type CartState = {
  cart: Item[];

  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  removeItem: (item: Item) => void;
  removeAllItens: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],

      addProduct: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.product.id === product.id
          );
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return { cart: [...state.cart, { product, quantity: 1 }] };
          }
        }),

      removeProduct: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.product.id === product.id
          );
          if (existingItem) {
            if (existingItem.quantity > 1) {
              return {
                cart: state.cart.map((item) =>
                  item.product.id === product.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                ),
              };
            } else {
              return {
                cart: state.cart.filter(
                  (item) => item.product.id !== product.id
                ),
              };
            }
          }
          return state;
        }),

      removeItem: (item) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.product.id !== item.product.id),
        })),

      removeAllItens: () =>
        set(() => {
          return { cart: [] };
        }),
    }),
    
    { name: "cart-storage" }
  )
);
