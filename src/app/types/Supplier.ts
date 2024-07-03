import { ProductType } from "./ProductType";

export type Supplier = {
  id: string;
  name: string;
  cnpj: string; 
  fone: string;
  email: string;
  products?: ProductType[]; // Relacionamento de um para muitos
}