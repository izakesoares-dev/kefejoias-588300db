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
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {categories.map((cat) => (
        <Link
          key={cat.to}
          to={cat.to}
          onClick={onNavigate}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 bg-card hover:border-primary/50 hover:shadow-gold-sm transition-all"
        >
          <div className="w-5 h-5 rounded-full bg-gradient-gold flex items-center justify-center">
            <cat.icon size={11} className="text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-body text-[11px] font-semibold text-foreground">{cat.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryShortcuts;
