import CategoriesBadges from "./CategoriesBadges";
import SearchInput from "./SearchInput";

type SearchInputProps = {
  setSearchTerm: (term: string) => void;
  onSelectCategory: (category: string | null) => void
  selectedCategory: string | null;
};

export default function SearchBar({ setSearchTerm, onSelectCategory, selectedCategory }: SearchInputProps) {
  return (
    <div className="fixed top-20 w-full flex flex-col item-center py-2 px-8 justify-between z-50 bg-yellow-300 
      md:justify-center
    ">
      <SearchInput setSearchTerm={setSearchTerm} />

      <CategoriesBadges onSelectCategory={onSelectCategory} selectedCategory={selectedCategory}/>
    </div>
  );
}
