'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { Product } from "../types/Product";

interface ContextProps {
  allProducts: Product[],
  setAllProducts: Dispatch<SetStateAction<Product[]>>,
  product: Product,
  setProduct: Dispatch<SetStateAction<Product>>
}

const defaultProduct: Product = {
  id: 0,
  name: '',
  price: 0,
  category: '',
  image: '',
  description: '',
  quantity: 0
}

const ProductContext = createContext<ContextProps>({
  allProducts: [],
  setAllProducts: (): Product[] => [],
  product: defaultProduct,
  setProduct: () => defaultProduct
});

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [allProducts, setAllProducts] = useState<[] | Product[]>([]);
  const [product, setProduct] = useState<Product>(defaultProduct)

  return (
    <ProductContext.Provider value= {{ allProducts, setAllProducts, product, setProduct }}>
      {children} 
    </ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext);