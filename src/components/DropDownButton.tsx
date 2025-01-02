import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  children: string;
};

const items = ["Profile", "Billing", "Team", "Subscription"];

export const DropDownButton: React.FC<Props> = ({ children }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div className="flex cursor-pointer items-center gap-[6px] rounded-[4px] px-[12px] py-[6px] text-sm font-medium hover:bg-[#fff3] dark:hover:bg-slate-800">
          {children}
          <ChevronDown className="size-[18px]" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item) => (
          <DropdownMenuItem className="cursor-pointer" key={item}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
