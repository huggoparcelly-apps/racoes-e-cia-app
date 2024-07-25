"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface AddressFormProps {
  initialData?: {
    street: string;
    neighborhood: string;
    number: string;
    complement: string;
  };
}

export default function AddressForm({ initialData }: AddressFormProps) {
  const router = useRouter();
  const [street, setStreet] = useState(initialData?.street || "");
  const [neighborhood, setNeighborhood] = useState(
    initialData?.neighborhood || ""
  );
  const [number, setNumber] = useState(initialData?.number || "");
  const [complement, setComplement] = useState(initialData?.complement || "");

  const handleSave = () => {
    // Lógica para salvar o endereço
    console.log({ street, neighborhood, number, complement });
    router.push("/address"); 
  };

  const handleCancel = () => {
    router.push("/address"); 
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Endereço</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Rua</label>
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Bairro</label>
        <input
          type="text"
          value={neighborhood}
          onChange={(e) => setNeighborhood(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Num</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Complemento</label>
        <input
          type="text"
          value={complement}
          onChange={(e) => setComplement(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={handleSave}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Salvar
        </button>
        <button
          onClick={handleCancel}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
