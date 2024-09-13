import Link from "next/link"
import { navItems } from "./navItems"

type MobilNavProps = {
    visible: boolean;
}

export function MobilNav({ visible }: MobilNavProps) {
    return (
        <div className="absolute w-full">
            <nav className={`${visible ? "block" : "hidden"} md:hidden  bg-white border-t border-l  border-r border-slate-200`}>
                {
                    navItems.map(item => (
                        <Link key={item.label} href={item.href} className="flex items-center gap-x-1 px-2 py-2 hover:bg-secondary border-b border-slate-200"><item.icon size={18} /><span>{item.label}</span> </Link>
                    ))
                }
            </nav>
        </div>

    )
}