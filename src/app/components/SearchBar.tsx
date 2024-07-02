import CategoriesBadges from "./CategoriesBadges";
import SearchInput from "./SearchInput";

export default function SearchBar() {
  return (
    <div className="fixed top-20 w-full flex flex-col item-center py-2 px-8 justify-between z-50 bg-yellow-300 ">
      <SearchInput />

      <CategoriesBadges />
    </div>
  );
}
