'use client';

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
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

const GlobalContext = createContext<ContextProps>({
  allProducts: [],
  setAllProducts: (): ProductType[] => [],
  product: defaultProduct,
  setProduct: () => defaultProduct
});

export const GlobalContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState<[] | ProductType[]>([]);
  const [product, setProduct] = useState<ProductType>(defaultProduct)

  return (
    <GlobalContext.Provider value= {{ allProducts, setAllProducts, product, setProduct }}>
      {children} 
    </GlobalContext.Provider>
  )
}

export const useGlobalContex = () => useContext(GlobalContext);