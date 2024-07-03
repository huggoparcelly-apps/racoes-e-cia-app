import { OrderProductType } from "./OrderProductType";

export type OrderType = {
  id: number;
  orderDate: Date;
  userId: string; // Chave estrangeira para o usuário
  addressId: number; // Chave estrangeira para o endereço (um para um)
  products: OrderProductType[]; // Relação de muitos para muitos através de uma tabela intermediária
  totalAmount: number;
}