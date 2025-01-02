import { AvatarList } from "@/components/AvatarList";
import { Button } from "@/components/ui/button";
import {
  CloudUpload,
  EarthLock,
  ListFilter,
  UserRoundPlus,
  Zap,
} from "lucide-react";

export const BoardBar = () => {
  return (
    <div className="flex h-14 items-center justify-between border-b border-t border-[#172b4d29] border-b-transparent px-2 text-sm font-normal dark:border-b-white">
      <div className="flex items-center gap-2">
        <div className="flex cursor-pointer items-center gap-[6px] rounded-[4px] px-[12px] py-[6px] text-sm hover:bg-slate-200 dark:hover:bg-slate-900">
          <EarthLock size={18} />
          <span className="hidden lg:block">Public/Private Workspace</span>
        </div>
        <div className="flex cursor-pointer items-center gap-[6px] rounded-[4px] px-[12px] py-[6px] text-sm hover:bg-slate-200 dark:hover:bg-slate-900">
          <CloudUpload size={18} />
          <span className="hidden lg:block">Add To Google Drive</span>
        </div>
        <div className="flex cursor-pointer items-center gap-[6px] rounded-[4px] px-[12px] py-[6px] text-sm hover:bg-slate-200 dark:hover:bg-slate-900">
          <Zap size={18} />
          <span className="hidden lg:block">Automation</span>
        </div>
        <div className="flex cursor-pointer items-center gap-[6px] rounded-[4px] px-[12px] py-[6px] text-sm hover:bg-slate-200 dark:hover:bg-slate-900">
          <ListFilter size={18} />
          <span className="hidden lg:block">Filter</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button className="ml-[8px] h-[32px] w-[32px] rounded-sm bg-[#0C66E4] px-[12px] text-white hover:bg-[#0C66E4] hover:opacity-80 dark:text-white lg:w-auto">
          <span className="hidden lg:block">Invite</span>
          <UserRoundPlus className="lg:hidden" />
        </Button>

        <AvatarList />
      </div>
    </div>
  );
};
