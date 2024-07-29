"use client";

import { Product } from "../../types/Product";
import { useCartStore } from "../../utils/store";

type ProductProps = {
  product: Product;
};

export default function AddCart({ product }: ProductProps) {
  const { addProduct, removeProduct } = useCartStore();

  return (
    <div className="flex items-center mt-2">
      <button
        onClick={() => addProduct(product)}
        className="bg-teal-600 text-sm font-bold rounded-md
                      h-6 w-6 flex items-center justify-center absolute left-14 text-slate-200"
      >
        +
      </button>
      <button
        onClick={() => removeProduct(product)}
        className="bg-red-600 text-sm font-bold rounded-md 
                      h-6 w-6 flex items-center justify-center absolute left-2 text-slate-200"
      >
        -
      </button>
    </div>
  );
}
