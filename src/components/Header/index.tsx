"use client";
import { MobilNav, MainNav } from "../NavLinks";
import { DawinLogo } from "@/assets/icons"
import { Button } from "../ui/button";
import { Menu, XIcon } from "lucide-react"
import { useState } from "react";

function Header() {
    const [isMobileNavOpen, toggleMobileMenu] = useState(false)
    return (
        <header >
            <div className="p-3 flex justify-between items-center">
                <div className="flex items-center gap-x-1">
                    <span className="block hover:bg-secondary p-1 rounded-md md:hidden" onClick={() => toggleMobileMenu(!isMobileNavOpen)}>
                        {
                            isMobileNavOpen ?
                                <XIcon size={26} className="cursor-pointer text-primary" /> :
                                <Menu size={26} className="cursor-pointer text-primary" />
                        }
                    </span>
                    <DawinLogo />
                </div>
                <MainNav />
                <div >
                    <Button type="button" className="rounded-full font-semibold px-6">Login</Button>
                </div>
            </div>
            <MobilNav visible={isMobileNavOpen} />
        </header>)
}
export default Header;