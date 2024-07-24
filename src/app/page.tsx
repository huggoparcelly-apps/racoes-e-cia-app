'use client'

import { getAllProducts } from "@/services/apis/getProducts";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

import { useProductContext } from "./Context/ProductsContext";
import { ProductType } from "./types/ProductType";

export default function Home() {
  const {setAllProducts, allProducts } = useProductContext();
  
  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await getAllProducts();
      setAllProducts(allProducts);
    };
    getProducts();
  }, [setAllProducts]);

  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = allProducts
  .filter((product: { name: string; }) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
  return (
    <>
    <SearchBar setSearchTerm={setSearchTerm}/>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="my-6 divide-y divide-gray-200">
              {filteredProducts.map((product: ProductType) => (
                <li key={product.id} className="flex py-6">
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

