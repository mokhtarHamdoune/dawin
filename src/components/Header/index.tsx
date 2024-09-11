"use client";
import NavLinks from "../NavLinks";
import { DewinLogo } from "@/assets/icons"

function Header() {
    return (
        <header className="p-3 flex justify-between border-b ">
            <div>
                <DewinLogo />
            </div>
            <NavLinks />
        </header>)
}
export default Header;