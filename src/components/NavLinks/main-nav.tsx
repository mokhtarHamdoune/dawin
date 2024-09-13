import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { navItems } from "./navItems";
import Link from "next/link";

export function MainNav() {
    return (
        <nav className="gap-x-6 hidden md:flex items-center bg-white">
            {
                navItems.map(item => (
                    <Link key={item.label} href={item.href} className="flex items-center p-2 hover:bg-secondary rounded-md">{item.label}
                        <span className="block ml-0.5">
                            <item.icon size={16} />
                        </span>
                    </Link>
                ))
            }
        </nav>
    )
}

