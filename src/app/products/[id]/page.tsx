import { ProductType } from "@/app/types/ProductType";

import golden from "/public/racao-golden.webp";
import Image from "next/image";
import AddCart from "@/app/components/AddCart";
import AddProductCart from "@/app/components/AddProdctuCart";

const racaoGolden = {
  id: 1,
  name: "Golden Cachorro Filhote",
  price: 90.0,
  image: `${golden}`,
  description: "Ração Golden Filhote Frango 2,5Kg",
};

const racaoPremier = {
  id: 2,
  name: "Premier Raças Espec Filhote",
  price: 90.0,
  image: `${golden}`,
  description: "Ração premier raças específicas 2,5Kg",
};

const racaoGoldenGato = {
  id: 3,
  name: "Golden Gato Filhote",
  price: 90.0,
  image: `${golden}`,
  description: "Ração Golden Filhote Frango 2,5Kg",
};

const products = [racaoGolden, racaoPremier, racaoGoldenGato];

function getProduct(id: number) {
  return products[id - 1];
}

type ProductPageProps = {
  params: {
    id: number;
  };
};

export default function ProductsPage({ params: { id } }: ProductPageProps) {
  const product = getProduct(id);

  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-8 p-3">
      <div className="flex flex-col text-left">
        <h1 className="text-xl font-bold text-gray-800">{product.name}</h1>
        <div className="pb-4 flex flex-col items-center mt-3">
          <div className="flex items-end relative h-42 w-32 overflow-hidden rounded-md ">
            <Image
              src={golden}
              alt={product.description || "Ração"}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <h2 className="text-xl text-gray-900 font-bold">R$ {product.price}</h2>
        <div className="pb-4">
          <p className="text-sm text-gray-400">{product.description}</p>
        </div>
        <AddProductCart product={product} />
      </div>
    </div>
  );
}
