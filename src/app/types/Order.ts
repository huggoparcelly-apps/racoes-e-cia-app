import { Address } from "./Address";
import { Item } from "./Item";

export type Order = {
  id?: number;
  date: Date; 
  address: Address | null; 
  items: Item[];
  totalAmount: number;
  status: string;
  paymentType: string | null;
}