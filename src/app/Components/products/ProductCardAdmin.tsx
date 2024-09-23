import { Product } from "@/app/types/Product";
import Image from "next/image";
import { IoTrash } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";

type ProductProps = {
  product: Product;
};

function ProductCardAdmin({ product }: ProductProps) {
  return (
    <div className="ml-4 flex flex-1 justify-between shadow-lg p-2 rounded-lg">
      <div className="flex flex-col text-base font-medium text-gray-900">
        
          <h3>
            <p className="w-44">{product.name}</p>
          </h3>
          <p className="mt-1 text-sm text-gray-500 w-44">
            {product.description}
          </p>
          <p className="mt-1 text-sm text-gray-500 w-44">
            Qnt. {product.quantity}
          </p>

          <p>R$ {product.price}</p>
          
          <div className="flex mt-6 justify-evenly max-w-24">
            <button>
              <MdModeEditOutline className="size-5"/>
            </button>
            <button><IoTrash className="size-5" /> </button>
          </div>
      </div>
      

      <div className="flex flex-col relative h-40 w-20 overflow-hidden rounded-md ">
        
          <Image
            src={product.image}
            alt={product.description || "Ração"}
            className="h-32 w-20 object-cover object-center"
          />
        
      </div>
    </div>
  )
}

export default ProductCardAdmin