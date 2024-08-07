
type BadgeProps = {
  label: string;
  onClick: () => void;
  isSelected: boolean;
};

export default function Badge({ label, onClick, isSelected }: BadgeProps) {
  return (
    <div className="w-24 md:w-56">
      <button
        className={`inline-flex items-center justify-center 
          flex-grow rounded-full px-3 py-2 text-xs font-medium 
          ring-1 ring-inset w-24 md:w-56 cursor-pointer
          ${isSelected ? 'bg-yellow-600 text-black ring-yellow-600' : 'bg-yellow-900 text-slate-200 ring-yellow-600/20'}`}
          onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}
