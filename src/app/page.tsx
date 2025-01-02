import { BoardColumn } from "@/components/BoardColumn";
import { APP_BAR_HEIGHT, BOARD_BAR_HEIGHT } from "@/lib/constants";

export default function BoardContent() {
  return (
    <div
      style={{
        height: `calc(100vh - ${APP_BAR_HEIGHT}px - ${BOARD_BAR_HEIGHT}px)`,
      }}
      className="px-2 pt-3 text-[#172b4d] dark:text-white"
    >
      <div className="flex gap-4 overflow-x-auto overflow-y-hidden pb-3">
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
        <BoardColumn />
      </div>
    </div>
  );
}
