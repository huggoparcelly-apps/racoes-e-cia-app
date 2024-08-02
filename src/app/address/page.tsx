"use client";

import AddressCard from "@/app/components/AddressCard";


export default function AddressPage() {

  return (
    <div className="pb-16 max-w-md mx-auto rounded-xl">
      <div className="flex justify-between px-2">
        <h1 className="text-xl font-bold">Adicione o endereço</h1>
      </div>

      <AddressCard/>
      
    </div>
  );
}
