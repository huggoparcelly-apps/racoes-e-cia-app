import Badge from "./buttons/Badge";

type CategoriesProps = {
  onSelectCategory: (category: string | null) => void;
  selectedCategory: string | null;
};

export default function CategoriesBadges({ onSelectCategory, selectedCategory}: CategoriesProps) {
  const labels = ["Cachorro", "Gato", "Ave"];

  return (
    <div className="flex justify-between md:justify-center space-x-2 my-3 ">
      {labels.map((label, index) => (
        
        <Badge
          key={index} 
          label={label} 
          isSelected={selectedCategory === label}
          onClick={() => onSelectCategory(selectedCategory === label.toLowerCase() ? null : label.toLowerCase())} 
        />

      ))}
    </div>
  );
}
