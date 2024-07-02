import { IoSearchSharp } from "react-icons/io5";

export default function SearchInput() {
  return (
    <div className="relative block">
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-1 pr-10 pl-3 shadow-sm focus:outline-none focus:border-yellow-900 focus:ring-yellow-900 focus:ring-1 sm:text-sm"
        placeholder="Buscar produto"
        type="text"
        name="search"
      />
      <IoSearchSharp className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
    </div>
  );
}
