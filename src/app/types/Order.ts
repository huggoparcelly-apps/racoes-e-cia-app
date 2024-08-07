import { Address } from "./Address";
import { Item } from "./Item";
import { StatusOrder } from "./StatusEnum";

export type Order = {
  id: number;
  date: string; 
  address: Address; 
  items: Item[];
  totalAmount: number;
  status: keyof typeof StatusOrder;
  paymentType: string;
}