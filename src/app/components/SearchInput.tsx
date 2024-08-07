import { IoSearchSharp } from "react-icons/io5";

type SearchInputProps = {
  setSearchTerm: (term: string) => void;
};

export default function SearchInput({ setSearchTerm }: SearchInputProps) {
  return (
    <div className="relative block md:flex md:justify-center">
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border 
        border-slate-300 rounded-md py-1 pr-10 pl-3 shadow-sm focus:outline-none 
        focus:border-yellow-900 focus:ring-yellow-900 focus:ring-1 sm:text-sm
        md:max-w-screen-md "
        placeholder="Buscar produto"
        type="text"
        name="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IoSearchSharp className="absolute md:relative right-3 md:right-5 top-1/2 md:top-4 transform -translate-y-1/2 text-slate-400" />
    </div>
  );
}
