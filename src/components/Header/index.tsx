"use client";
import { MobilNav, MainNav } from "../NavLinks";
import { DawinLogo } from "@/assets/icons";
import { Button } from "../ui/button";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isMobileNavOpen, toggleMobileMenu] = useState(false);
  return (
    <header>
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-x-1">
          <span
            className="block rounded-md p-1 hover:bg-secondary md:hidden"
            onClick={() => toggleMobileMenu(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? (
              <XIcon size={26} className="cursor-pointer text-primary" />
            ) : (
              <Menu size={26} className="cursor-pointer text-primary" />
            )}
          </span>
          <DawinLogo />
        </div>
        <MainNav />
        <div>
          <Button type="button" className="rounded-full px-6 font-semibold">
            Login
          </Button>
        </div>
      </div>
      <MobilNav visible={isMobileNavOpen} />
    </header>
  );
}
export default Header;
