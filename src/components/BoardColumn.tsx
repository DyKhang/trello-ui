import {
  Archive,
  Clipboard,
  Copy,
  CopyPlus,
  Ellipsis,
  GripHorizontal,
  Scissors,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { BoardCard } from "@/components/BoardCard";
import {
  APP_BAR_HEIGHT,
  BOARD_BAR_HEIGHT,
  COLUMN_FOOTER_HEIGHT,
  COLUMN_HEADER_HEIGHT,
} from "@/lib/constants";

export const BoardColumn = () => {
  return (
    <div className="h-fit w-[250px] flex-shrink-0 rounded-[6px] bg-[#ebecf0] text-sm dark:bg-slate-800 lg:w-[300px]">
      <div
        className={`flex h-[${COLUMN_HEADER_HEIGHT}px] items-center justify-between px-3 pt-3`}
      >
        <span className="font-medium">Column Title</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex size-[32px] cursor-pointer items-center justify-center rounded-sm hover:bg-slate-400/20">
              <Ellipsis size={18} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <CopyPlus />
                <span>Add new card</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Scissors />
                <span>Cut</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Copy />
                <span>Copy</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Clipboard />
                <span>Paste</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Trash2 />
              <span>Remove this column</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Archive />
              <span>Archive this column</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div
        style={{
          maxHeight: `calc(100vh - ${APP_BAR_HEIGHT}px - ${BOARD_BAR_HEIGHT}px - ${COLUMN_HEADER_HEIGHT}px - ${COLUMN_FOOTER_HEIGHT}px - 52px`,
        }}
        className="column-content mx-[6px] my-3 flex flex-col gap-y-3 overflow-y-auto overflow-x-hidden px-[6px]"
      >
        <BoardCard />
        <BoardCard hasTitle />
        <BoardCard hasTitle />
        <BoardCard hasTitle />
        <BoardCard hasTitle />
      </div>
      <div
        className={`flex items-center justify-between h-[${COLUMN_FOOTER_HEIGHT}px] px-3 pb-3`}
      >
        <div className="flex items-center gap-1 font-medium text-blue-800">
          <CopyPlus size={18} />
          <span>Add new card</span>
        </div>
        <div className="flex size-[32px] cursor-pointer items-center justify-center rounded-sm">
          <GripHorizontal size={18} />
        </div>
      </div>
    </div>
  );
};
