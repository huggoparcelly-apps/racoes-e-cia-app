import CategoriesBadges from "./CategoriesBadges";
import SearchInput from "./SearchInput";

type SearchInputProps = {
  setSearchTerm: (term: string) => void;
};

export default function SearchBar({ setSearchTerm }: SearchInputProps) {
  return (
    <div className="fixed top-20 w-full flex flex-col item-center py-2 px-8 justify-between z-50 bg-yellow-300 
      md:justify-center 
    ">
      <SearchInput setSearchTerm={setSearchTerm} />

      <CategoriesBadges />
    </div>
  );
}
