'use client'

import { getAllProducts } from "@/services/apis/getProducts";
import { useContext, useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";

import { ProductType } from "./types/ProductType";
import golden from "/public/racao-golden.webp";
import { useGlobalContex } from "./Context/products";

const racaoGolden:ProductType = {
  id: 1,
  name: "Golden Cachorro Filhote",
  price: 90.00,
  image: `${golden}`,
  description: "Ração Golden Filhote Frango 2,5Kg",
};

const racaoPremier:ProductType = {
  id: 2,
  name: "Premier Raças Espec Filhote",
  price: 999.99,
  image: `${golden}`,
  description: "Ração premier raças específicas 2,5Kg",
};

const racaoGoldenGato:ProductType = {
  id: 3,
  name: "Golden Gato Filhote",
  price: 2.50,
  image: `${golden}`,
  description: "Ração Golden Filhote Frango 2,5Kg",
};

const products:ProductType[] = [racaoGolden, racaoPremier, racaoGoldenGato];

export default function Home() {
  const {setAllProducts, allProducts } = useGlobalContex();
  
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
            <ul role="list" className="-my-6 divide-y divide-gray-200">
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

function filterProductByName(searchTerm: string) {
  return products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

