import Image from "next/image";
import golden from "/public/racao-golden.webp";

export default function ProductCard() {
  return (
    <div className="ml-4 flex flex-1 justify-between">
      <div className="flex flex-col text-base font-medium text-gray-900 ">
        <h3>
          <p className="w-44">Golden Cachorro Filhote 2,5Kg</p>
        </h3>

        <p className="mt-1 text-sm text-gray-500">Frango</p>

        <p>R$ 90,00</p>
      </div>

      <div className="flex items-end relative h-32 w-20 overflow-hidden rounded-md ">
        <Image
          src={golden}
          alt="Ração"
          className="h-full w-full object-cover object-center"
        />

        <span
          className="bg-teal-600 text-sm font-bold rounded-full 
                      h-6 w-6 flex items-center justify-center absolute left-14 text-slate-200"
        >
          +
        </span>
      </div>
    </div>
  );
}
