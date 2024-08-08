"use client";

import Link from "next/link";
import { Product } from "../../types/Product";
import { useCartStore } from "../../utils/cartStore";

export default function AddProductCart({ product }: { product: Product }) {
  const { addProduct } = useCartStore();

  return (
    <>
      <Link
        href={"/"}
        className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center"
      >
        <button onClick={() => addProduct(product)}>
          Adicionar ao carrinho
        </button>
      </Link>
    </>
  );
}
