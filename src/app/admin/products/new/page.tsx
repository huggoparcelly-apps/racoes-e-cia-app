"use client";

import { Product } from "@/app/types/Product";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsFillImageFill } from "react-icons/bs";

const defaultProduct = {
  name: "",
  description: "",
  price: 0,
  quantity: 0,
  image: "",
};

function NewProduct() {
  const [formState, setFormState] = useState<Product>(defaultProduct);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: name === "price" ? parseFloat(value) : value,
      [name]: name === "quantity" ? parseInt(value) : value,
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // save to db
    setIsSaveDisabled(true);
    setFormState(defaultProduct);
    setImage(null)
    setPreview(null);
  };

  const handleClean = () => {
    setFormState(defaultProduct);
    setImage(null)
    setPreview(null);
  };

  useEffect(() => {
    const { name, quantity, price } = formState;
    if (name && quantity && price) {
      setIsSaveDisabled(false);
    } else {
      setIsSaveDisabled(true);
    }
  }, [formState]);

  return (
    <form>
      <div className="p-6 text-gray-700 rounded-lg">
        <div className="mb-4">
          <label className="block">Produto</label>
          <input
            type="text"
            name="name"
            value={formState.name}
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
            value={formState.description}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block">Quantidade</label>
          <input
            type="number"
            name="quantity"
            value={formState.quantity}
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
            value={formState.price}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>

        {preview ? (
          <div className="flex mt-5 h-20 w-20 relative justify-center">
            <Image src={preview} alt="select img" layout="fill" objectFit="cover"  />
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
