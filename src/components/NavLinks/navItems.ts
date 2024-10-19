import { House, BriefcaseBusiness, NotebookPen, LogIn } from "lucide-react";
type navItem = {
  label: string;
  href: string;
  icon?: any;
  description?: string;
};

export const navItems: navItem[] = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Portofolio",
    href: "/portofolio",
    icon: BriefcaseBusiness,
  },
  {
    label: "Editor",
    href: "/editor",
    icon: NotebookPen,
  },
];
