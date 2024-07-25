"use client";

import { IoLocationOutline, IoLocationSharp } from "react-icons/io5";

type AddressItemProps = {
  address: string;
  isSelected: boolean;
  onSelect: () => void;
  onEdit: () => void;
};

export default function AddressCard({ address, isSelected, onSelect, onEdit }: AddressItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 shadow-sm">
      <div className="flex items-center">
        <button
          onClick={onSelect}
          className="flex justify-center items-center">
          {isSelected ? <IoLocationSharp className="size-6" /> : <IoLocationOutline className="size-6"/>}

        </button>
        <div className="ml-4 text-sm">
          <p className="font-semibold">{address}</p>
          <p className="text-gray-500">Bairro São Tomé - Complemento</p>
        </div>
      </div>
      <button onClick={onEdit} className="text-blue-500 hover:underline">
        Editar
      </button>
    </div>
  )
}