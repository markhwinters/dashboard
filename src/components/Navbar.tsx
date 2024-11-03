import { UserButton } from "@clerk/nextjs";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  return (
    <nav className="border-b bg-white px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileNav />
          <span className="font-semibold md:hidden">Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
}
