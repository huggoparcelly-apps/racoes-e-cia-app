import { Product } from "./Product";

export type Supplier = {
  id: string;
  name: string;
  cnpj: string; 
  fone: string;
  email: string;
  products?: Product[]; // Relacionamento de um para muitos
}