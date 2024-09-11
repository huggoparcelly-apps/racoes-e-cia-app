import { Address } from "./Address";
import { Order } from "./Order";

export type User = {
  id: number;
  name: string;
  orders?: Order[];
  addresses?: Address[];
  firebaseId?: string;
}