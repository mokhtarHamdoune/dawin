"use client";

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { headerItems } from "./navItems";

function NavLinks() {
    return (<NavigationMenu >
        <NavigationMenuList >
            {
                headerItems.map(item => (
                    <NavigationMenuItem >
                        <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}>{item.label}
                            <span className="block ml-0.5">
                                <item.icon size={16} />
                            </span>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))
            }
        </NavigationMenuList>
    </NavigationMenu>)
}

export default NavLinks;