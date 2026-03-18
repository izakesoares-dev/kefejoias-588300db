import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SIZES = [14, 15, 16, 17, 18, 19, 20, 21, 22];

interface RingSizeSelectorProps {
  value: string;
  onChange: (size: string) => void;
}

const RingSizeSelector = ({ value, onChange }: RingSizeSelectorProps) => {
  return (
    <div className="flex items-center gap-3">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className="w-[110px] h-11 rounded-lg font-body font-bold text-base
            bg-secondary border-2 border-primary text-green-deep
            shadow-sm hover:shadow-gold-sm focus:ring-primary/40 transition-all
            [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-[3]"
        >
          <SelectValue placeholder="Tam." />
        </SelectTrigger>
        <SelectContent className="bg-secondary border-2 border-primary rounded-lg shadow-gold-sm">
          {SIZES.map((size) => (
            <SelectItem
              key={size}
              value={String(size)}
              className="font-body font-semibold text-green-deep cursor-pointer
                focus:bg-primary/15 focus:text-green-deep"
            >
              {size}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RingSizeSelector;
