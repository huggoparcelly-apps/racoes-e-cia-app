'use client'

import AddProductCart from "@/app/components/buttons/AddProdctuCart";
import { useProductContext } from "@/app/Context/ProductsContext";
import { getProductById } from "@/services/apis/getProducts";
import Image from "next/image";
import { useEffect } from "react";
import golden from "/public/racao-golden.webp";

type ProductPageProps = {
  params: {
    id: number;
  };
};

export default function ProductsPage({ params: { id } }: ProductPageProps) {

  const {product, setProduct} = useProductContext();

  useEffect(() => {
    const getProduct = async () => {
      const product = await getProductById(id);
      setProduct(product);
    }
    getProduct();
  },[id, setProduct])

  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-8 p-3">
      <div className="flex flex-col text-left">
        <h1 className="text-xl font-bold text-gray-800">{product.name}</h1>
        <div className="pb-4 flex flex-col items-center mt-3">
          <div className="flex items-end relative h-42 w-32 overflow-hidden rounded-md ">
            <Image
              src={golden}
              alt={product.description || "Ração Para Cachorro"}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <h2 className="text-xl text-gray-900 font-bold">R$ {product.price}</h2>
        <div className="pb-4">
          <p className="text-sm text-gray-400">{product.description}</p>
        </div>
        <AddProductCart product={product} />
      </div>
    </div>
  );
}
