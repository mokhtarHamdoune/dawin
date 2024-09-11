import { House, BriefcaseBusiness, NotebookPen, LogIn } from "lucide-react"
type HeaderItem = {
    label: string;
    href: string;
    icon?: any;
    description?: string;
}

export const headerItems: HeaderItem[] = [
    {
        label: "Home",
        href: "/",
        icon: House
    }, {
        label: "Portofolio",
        href: "/portofolio",
        icon: BriefcaseBusiness,
    }, {
        label: "Editor",
        href: "/editor",
        icon: NotebookPen
    }, {
        label: "Login",
        href: "/login",
        icon: LogIn

    }
]