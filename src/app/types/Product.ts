export type Product = {
  id: number;
  name: string;
  description: string | null;
  price: number;
  quantity: number | 0;
  image: string;
  supplierId?: number;
}
