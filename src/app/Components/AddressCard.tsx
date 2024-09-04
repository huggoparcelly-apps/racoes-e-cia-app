"use client";

import { useEffect, useState } from "react";
import { Address } from "../types/Address";
import { useCartStore } from "../stores/cartStore";

export default function AddressCard() {
  
  const { address, setAddress } = useCartStore();
  
  const defaultAddress = {
    street: "",
    number: "",
    neighborhood: "",
    complement: "",
  };
  
  const [formState, setFormState] = useState<Address>(address || defaultAddress);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: name === "number" ? parseInt(value) : value,
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setAddress(formState);
    setIsSaveDisabled(true);
  };

  const handleClean = () => {
    setFormState(defaultAddress);
  };

  useEffect(() => {
    const { street, number, neighborhood } = formState;
    if (street && number && neighborhood) {
      setIsSaveDisabled(false);
    } else {
      setIsSaveDisabled(true);
    }
  }, [formState]);

  return (
    <form>
      <div className="p-6 text-gray-700 rounded-lg">

        <div className="mb-4">
          <label className="block">Rua</label>
          <input
            type="text"
            name="street"
            value={formState.street}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block">Bairro</label>
          <input
            type="text"
            name="neighborhood"
            value={formState.neighborhood}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block">Num</label>
          <input
            type="number"
            name="number"
            value={formState.number}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block">Complemento</label>
          <input
            type="text"
            name="complement"
            value={formState.complement}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg w-full"
          />
        </div>

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
