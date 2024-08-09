import { create } from "zustand";
import { Product } from "../types/Product";

interface ProductStore {
  products: Product[];
  createProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  setProducts: (products: Product[]) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  createProduct: (product: Product) => set((state) => ({ products: [product, ...state.products] })),
  deleteProduct: (id: number) => set((state) => ({ products: state.products.filter((product) => product.id !== id) })),
  setProducts: (products: Product[]) => set({ products }),
}));

export default useProductStore;
