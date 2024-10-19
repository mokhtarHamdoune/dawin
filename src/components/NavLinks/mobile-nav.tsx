import Link from "next/link";
import { navItems } from "./navItems";

type MobilNavProps = {
  visible: boolean;
};

export function MobilNav({ visible }: MobilNavProps) {
  return (
    <div className="absolute w-full">
      <nav
        className={`${visible ? "block" : "hidden"} border-l border-r border-t border-slate-200 bg-white md:hidden`}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-x-1 border-b border-slate-200 px-2 py-2 hover:bg-secondary"
          >
            <item.icon size={18} />
            <span>{item.label}</span>{" "}
          </Link>
        ))}
      </nav>
    </div>
  );
}
