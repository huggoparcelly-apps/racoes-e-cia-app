'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { ProductType } from "../types/ProductType";

interface ContextProps {
  allProducts: ProductType[],
  setAllProducts: Dispatch<SetStateAction<ProductType[]>>,
  product: ProductType,
  setProduct: Dispatch<SetStateAction<ProductType>>
}

const defaultProduct: ProductType = {
  id: 0,
  name: '',
  price: 0,
  image: '',
  description: ''
}

const ProductContext = createContext<ContextProps>({
  allProducts: [],
  setAllProducts: (): ProductType[] => [],
  product: defaultProduct,
  setProduct: () => defaultProduct
});

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [allProducts, setAllProducts] = useState<[] | ProductType[]>([]);
  const [product, setProduct] = useState<ProductType>(defaultProduct)

  return (
    <ProductContext.Provider value= {{ allProducts, setAllProducts, product, setProduct }}>
      {children} 
    </ProductContext.Provider>
  )
}

export const useProductContext = () => useContext(ProductContext);