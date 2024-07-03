import { OrderType } from "./OrderType";
import { Supplier } from "./Supplier";

export type ProductType = {
  id: string;
  name: string;
  price: number | null;
  quantity?: number | 1;
  image: string;
  description: string | null;
  supplier: Supplier | null; // Relacionamento de muitos para um
  orders?: OrderType[]; // Relacionamento de muitos para muitos
}
