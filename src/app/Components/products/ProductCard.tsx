import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types/Product";
import AddCart from "../buttons/AddCart";
import golden from "/public/racao-golden.webp";

type ProductProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className="ml-4 flex flex-1 justify-between shadow-lg p-2 rounded-lg">
      <div className="flex flex-col text-base font-medium text-gray-900">
        <Link href={`/products/${product.id}`}>
          <h3>
            <p className="w-44">{product.name}</p>
          </h3>
          <p className="mt-1 text-sm text-gray-500 w-44">
            {product.description}
          </p>
          <p>R$ {product.price.toFixed(2).replace('.', ',')}</p>
        </Link>
      </div>

      <div className="flex flex-col relative h-40 w-20 overflow-hidden rounded-md ">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image === 'image'? golden : product.image}
            alt={product.description || "Ração"}
            width={80}
            height={128}
            className="h-32 w-20 object-cover object-center"
          />
        </Link>
        <AddCart product={product} />
      </div>
    </div>
  );
}
