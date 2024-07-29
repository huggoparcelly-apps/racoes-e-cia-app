import { Item } from "./Item";

export type Order = {
  id: number;
  orderDate: Date;
  userId: number; 
  addressId: number; 
  itens: Item[];
  totalAmount: number;
  status: string;
  paymentType: string;
}