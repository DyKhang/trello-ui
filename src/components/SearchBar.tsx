import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="hidden h-[32px] items-center rounded-[5px] border border-white pr-[12px] focus-within:shadow-sm lg:flex">
      <div className="flex size-[30px] items-center justify-center">
        <Search className="size-[14px]" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent text-[14px] outline-none placeholder:font-normal placeholder:text-white"
      />
    </div>
  );
};
