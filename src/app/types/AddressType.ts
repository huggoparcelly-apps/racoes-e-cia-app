export type AddressType = {
  id: string;
  street: string;
  number: number;
  neighborhood: string;
  userId: string; // Chave estrangeira para o usuário
}
