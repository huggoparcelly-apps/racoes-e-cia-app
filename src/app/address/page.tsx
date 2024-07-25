"use client";

import AddressCard from "@/app/components/AddressCard";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddressPage() {
  const router = useRouter();
  const [selectedAddress, setSelectedAddress] = useState<number>(0);

  const addresses = [
    "R. Pinheiros Celulares, 255",
    "R. Pensamentos Criativos, 2000",
  ];

  const handleSelect = (index: number) => {
    setSelectedAddress(index);
  };

  const handleEdit = (index: number) => {
    const address = addresses[index];
    const queryString = new URLSearchParams(address).toString();
    router.push(`/address/form?${queryString}`);
  };

  const handleAddNew = () => {
    router.push('/address/form');
  };

  return (
    <div className="pb-16 max-w-md mx-auto rounded-xl">
      <div className="flex justify-between px-2">
        <h1 className="text-xl font-bold">Selecione o endereço</h1>
      </div>

      {addresses.map((address, index) => (
        <AddressCard
          key={index}
          address={address}
          isSelected={selectedAddress === index}
          onSelect={() => handleSelect(index)}
          onEdit={() => handleEdit(index)}
        />
      ))}

      <div className="flex justify-center w-full">
        <button
          onClick={handleAddNew}
          className="my-4 text-red-500 hover:underline"
        >
          Adicionar endereço
        </button>
      </div>
    </div>
  );
}
