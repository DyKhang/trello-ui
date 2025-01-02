import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="hidden h-[32px] items-center rounded-[5px] border border-[#8590A2] pr-[12px] focus-within:border-[#0C66E4] focus-within:shadow-sm lg:flex">
      <div className="flex size-[30px] items-center justify-center">
        <Search className="size-[14px]" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent text-[14px] outline-none placeholder:font-normal placeholder:text-[#596e91] dark:placeholder:text-white/50"
      />
    </div>
  );
};
