import Badge from "./buttons/Badge";

export default function CategoriesBadges() {

  const labels = ["Cachorro", "Gato", "Pássaro"]

  return (
    <div className="flex space-x-2 my-3 ">
      {labels.map((label, index) => <Badge key={index} label={label} />)}
    </div>
  );
}
