import { Link } from "react-router-dom";
import { CircleDot, Hexagon, Link2, Star } from "lucide-react";

const categories = [
  { to: "/pulseiras", icon: CircleDot, label: "Pulseiras" },
  { to: "/aneis", icon: Hexagon, label: "Anéis" },
  { to: "/colares", icon: Link2, label: "Colares" },
  { to: "/especiais", icon: Star, label: "Especiais" },
];

interface CategoryShortcutsProps {
  onNavigate?: () => void;
}

const CategoryShortcuts = ({ onNavigate }: CategoryShortcutsProps) => {
  return (
    <div className="flex items-center justify-center gap-1 flex-nowrap">
      {categories.map((cat) => (
        <Link
          key={cat.to}
          to={cat.to}
          onClick={onNavigate}
          className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full border border-border/50 bg-card hover:border-primary/50 transition-all whitespace-nowrap flex-shrink-0"
        >
          <div className="w-4 h-4 rounded-full bg-gradient-gold flex items-center justify-center">
            <cat.icon size={9} className="text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-body text-[10px] font-semibold text-foreground">{cat.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryShortcuts;
