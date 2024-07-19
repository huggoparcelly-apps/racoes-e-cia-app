import { AddressType } from "./AddressType";
import { OrderType } from "./OrderType";

export type UserType = {
  id: number;
  name: string;
  fone: string;
  clerkId?: string;
  orders?: OrderType[];
  addresses?: AddressType[]; 
  role: string;
}