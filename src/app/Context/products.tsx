'use client';

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { ProductType } from "../types/ProductType";

interface ContextProps {
  allProducts: ProductType[],
  setAllProducts: Dispatch<SetStateAction<ProductType[]>>
}

const GlobalContext = createContext<ContextProps>({
  allProducts: [],
  setAllProducts: (): ProductType[] => []
});

export const GlobalContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState<[] | ProductType[]>([])

  return (
    <GlobalContext.Provider value= {{ allProducts, setAllProducts }}>
      {children} 
    </GlobalContext.Provider>
  )
}

export const useGlobalContex = () => useContext(GlobalContext);