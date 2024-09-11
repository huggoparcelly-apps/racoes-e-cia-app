'use client'

import { getAllProducts } from "@/services/apis/apiProducts";
import { useEffect, useState } from "react";
import ProductCard from "./Components/products/ProductCard";
import SearchBar from "./Components/SearchBar";

import { useProductContext } from "./Context/ProductsContext";
import { Product } from "./types/Product";

export default function Home() {
  const {setAllProducts, allProducts } = useProductContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  useEffect(() => {
    const getProducts = async () => {
      const allProducts = await getAllProducts();
      setAllProducts(allProducts);
    };
    getProducts();
  }, [setAllProducts]);
  
  const filteredProducts = allProducts
  .filter((product: { name: string; }) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSelectCategory = (category: string | null) => {
    setSelectedCategory(category);
  };

  const filteredProductsByCategory = selectedCategory
    ? filteredProducts.filter(product => product.category?.toLowerCase() === selectedCategory)
    : filteredProducts;
  
  return (
    <>
    <SearchBar setSearchTerm={setSearchTerm} onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory}/>
    
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="my-6 divide-y divide-gray-200">
              {filteredProductsByCategory.map((product: Product) => (
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

