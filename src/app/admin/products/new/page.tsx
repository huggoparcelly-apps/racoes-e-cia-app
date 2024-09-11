"use client";

import { Product } from "@/app/types/Product";
import useCreateNewProduct from "@/hooks/useCreateNewProduct";
import usePreviewImg from "@/hooks/usepreviewImg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsFillImageFill } from "react-icons/bs";

const defaultProduct = {
  name: "",
  description: "",
  category: "",
  price: 0,
  quantity: 0,
  image: "",
};

function NewProduct() {
  const [product, setProduct] = useState<Product>(defaultProduct);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const imageRef = useRef<HTMLInputElement | null>(null);

  const { handleCreateProduct } = useCreateNewProduct();
  const { selectedFile, handleImageChange, setSelectedFile } = usePreviewImg();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === "price" ? parseFloat(value) : name === "quantity" ? parseInt(value) : value,
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    // save to db
    await handleCreateProduct(selectedFile, product);
    setIsSaveDisabled(true);
    setProduct(defaultProduct);
    setSelectedFile(null)
    
  };

  const handleClean = () => {
    setProduct(defaultProduct);
    setSelectedFile(null)
    
  };

  useEffect(() => {
    const { name, quantity, price } = product;
    if (name && quantity && price) {
      setIsSaveDisabled(false);
    } else {
      setIsSaveDisabled(true);
    }
  }, [product]);

  return (
    <form>
      <div className="p-6 text-gray-700 rounded-lg">
        <div className="mb-4">
          <label className="block">Produto</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block">Descrição</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block">Categoria</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block">Quantidade</label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block">Preço</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>

        {selectedFile ? (
          <div className="flex mt-5 h-20 w-20 relative justify-center">
            <Image src={selectedFile.toString()} alt="select img" layout="fill" objectFit="cover"  />
          </div>
        ) : (
          <div className="mb-4">
            <label className="block">Adicionar Imagem</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              ref={imageRef}
              onChange={handleImageChange}
              className="hidden"
            />
            <div
              className="max-w-20 flex justify-center mt-3 cursor-pointer"
              onClick={() => imageRef.current?.click()}
            >
              <BsFillImageFill className="size-12" />
            </div>
          </div>
        )}

        <div className="flex justify-center gap-4">
          <button
            type="submit"
            onClick={handleSave}
            className={`${
              isSaveDisabled ? "bg-green-300" : "bg-green-500"
            }  py-2 px-4 rounded`}
            disabled={isSaveDisabled}
          >
            Salvar
          </button>
          <button
            onClick={handleClean}
            className="bg-red-500  py-2 px-4 rounded hover:bg-red-500"
          >
            Limpar
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewProduct;
