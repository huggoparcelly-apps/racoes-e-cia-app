import { Address } from "./Address";
import { Order } from "./Order";

export type User = {
  id: number;
  name: string;
  phone: string;
  orders?: Order[];
  addresses?: Address[]; 
  // role: string;
  firebaseId?: string;
}