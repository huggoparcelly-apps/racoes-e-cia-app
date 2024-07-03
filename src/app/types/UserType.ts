import { AddressType } from "./AddressType";
import { OrderType } from "./OrderType";

export type UserType = {
  id: number;
  name: string;
  fone: string;
  clerkId: string;
  orders?: OrderType[]; // Relacionamento de um para muitos
  addresses?: AddressType[]; // Relacionamento de um para muitos
}