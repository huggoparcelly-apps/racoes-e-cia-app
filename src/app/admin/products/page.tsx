'use client';

import AddProductAdmin from "@/app/components/buttons/AddProductAdmin";
import ProductCardAdmin from "@/app/components/productCards/ProductCardAdmin";
import SearchBar from "@/app/components/SearchBar";
import { useProductContext } from "@/app/Context/ProductsContext";
import { Product } from "@/app/types/Product";
import { getAllProducts } from "@/services/apis/getProducts";
import { useEffect, useState } from "react";


export default function AdminProducts() {
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
    
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 md:px-8 ">
        <AddProductAdmin />
          <div className="flow-root">
            <ul role="list" className="my-6 divide-y divide-gray-200">
              {filteredProducts.map((product: Product) => (
                <li key={product.id} className="flex py-6">
                  <ProductCardAdmin product={product} />
                </li>
              ))}
            </ul>
          </div>
        
      </div>
    </>
  )
}