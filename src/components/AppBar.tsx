import { DropDownButton } from "@/components/DropDownButton";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toogle-mode";
import { Bell, CircleHelp, Plus, Search } from "lucide-react";
import Image from "next/image";

export const AppBar = () => {
  return (
    <header className="flex h-12 items-center justify-between px-[8px] dark:bg-slate-900">
      <div className="flex items-center">
        <div className="relative flex size-[32px] cursor-pointer items-center justify-center rounded-[4px] p-0 hover:bg-slate-200 dark:hover:bg-slate-950">
          <Image
            src="/app.svg"
            alt="icon-app"
            width={20}
            height={20}
            className="logo dark:logo-dark"
          />
        </div>

        <div className="logo dark:logo-dark group/logo flex h-[32px] flex-shrink-0 cursor-pointer items-center px-[8px]">
          <Image
            alt="trello-logo"
            src="/trello.gif"
            width={75}
            height={32}
            className="group-hover/logo:hidden"
          />
          <Image
            alt="trello-logo"
            src="/trello-animate.gif"
            width={75}
            height={32}
            className="hidden group-hover/logo:block"
          />
        </div>

        <div className="mx-[4px] hidden lg:flex">
          <DropDownButton>Workspaces</DropDownButton>
          <DropDownButton>Recent</DropDownButton>
          <DropDownButton>Starred</DropDownButton>
          <DropDownButton>Templates</DropDownButton>
        </div>

        <Button className="ml-[8px] h-[32px] w-[32px] rounded-sm bg-[#0C66E4] px-[12px] text-white hover:bg-[#0C66E4] hover:opacity-80 dark:text-white lg:w-auto">
          <span className="hidden lg:block">Create</span>
          <Plus className="lg:hidden" />
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <SearchBar />
        <Button
          size="icon"
          variant="outline"
          className="size-[32px] rounded-full border-none hover:bg-slate-200 dark:bg-transparent dark:hover:bg-slate-950 lg:hidden"
        >
          <Search />
        </Button>
        <ModeToggle />

        <div className="relative">
          <Button
            size="icon"
            variant="outline"
            className="size-[32px] rounded-full border-none hover:bg-slate-200 dark:bg-transparent dark:hover:bg-slate-950"
          >
            <Bell />
          </Button>
          <div className="absolute right-[2px] top-[2px] size-[7px] rounded-full bg-red-600"></div>
        </div>

        <Button
          size="icon"
          variant="outline"
          className="size-[32px] rounded-full border-none hover:bg-slate-200 dark:bg-transparent dark:hover:bg-slate-950"
        >
          <CircleHelp />
        </Button>

        <Button
          size="icon"
          variant="outline"
          className="relative size-[28px] overflow-hidden rounded-full border-none hover:bg-slate-200 dark:hover:bg-slate-950"
        >
          <Image
            alt="avatar"
            src="https://trello-members.s3.amazonaws.com/66c7e9c204aa6faa8fb6f184/8b943f96f4e93d0f0f06c9d5ef1c66ff/50.png"
            fill
            className="object-cover"
          />
        </Button>
      </div>
    </header>
  );
};
