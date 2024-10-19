import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navItems } from "./navItems";
import Link from "next/link";

export function MainNav() {
  return (
    <nav className="hidden items-center gap-x-6 bg-white md:flex">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center rounded-md p-2 hover:bg-secondary"
        >
          {item.label}
          <span className="ml-0.5 block">
            <item.icon size={16} />
          </span>
        </Link>
      ))}
    </nav>
  );
}
