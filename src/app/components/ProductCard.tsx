import Image from "next/image";
import golden from "/public/racao-golden.webp";
import premier from "/public/racao-premier.webp";
import AddCart from "./AddCart";
import { ProductType } from "../types/ProductType";
import Link from "next/link";

type ProductProps = {
  product: ProductType;
};

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className="ml-4 flex flex-1 justify-between">
      <div className="flex flex-col text-base font-medium text-gray-900 ">
        <Link href={`/products/${product.id}`}>
          <h3>
            <p className="w-44">{product.name}</p>
          </h3>
        </Link>

        <p className="mt-1 text-sm text-gray-500 w-44">{product.description}</p>

        <p>R$ {product.price}</p>
      </div>

      <div className="flex items-end relative h-32 w-20 overflow-hidden rounded-md ">
        <Image
          src={golden}
          alt={product.description || "Ração"}
          className="h-full w-full object-cover object-center"
        />

        <AddCart product={product} />
      </div>
    </div>
  );
}
