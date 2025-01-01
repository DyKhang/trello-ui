import { ModeToggle } from "@/components/ui/toogle-mode";

export const Header = () => {
  return (
    <>
      <header className="flex h-12 items-center px-2">
        <ModeToggle />
      </header>
      <div className="flex h-14 items-center px-2">Board Bar</div>
    </>
  );
};
