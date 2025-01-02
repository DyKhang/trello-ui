import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const AvatarList = () => {
  return (
    <div className="flex items-center -space-x-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <TooltipProvider delayDuration={100} key={index}>
          <Tooltip>
            <TooltipTrigger className="hidden lg:block">
              <Avatar className="size-[34px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>User</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
      <div className="flex size-[34px] items-center justify-center rounded-full bg-black/25 text-white dark:bg-slate-500">
        +6
      </div>
    </div>
  );
};
