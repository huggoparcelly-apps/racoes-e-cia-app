'use client'

import Image from "next/image";

import golden from "/public/racao-golden.webp";
import premier from "/public/racao-premier.webp";
import goldeGato from "/public/golden-gatos.webp";
import ProductCard from "./components/ProductCard";
import { ProductType } from "./types/ProductType";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

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

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = filterProductByName(searchTerm);
  
  return (
    <>
    <SearchBar setSearchTerm={setSearchTerm}/>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {filteredProducts.map((product) => (
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
  return products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

