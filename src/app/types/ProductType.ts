export type ProductType = {
  id: number;
  name: string;
  price: number | null;
  quantity?: number | 1;
  image: string;
  description: string | null;
}
