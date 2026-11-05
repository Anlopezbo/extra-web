import { NavigationItem } from "@/data/navigation";
import { NavItem } from "@/components/navigation/nav-item";

interface NavMenuProps {
  items: NavigationItem[];
}

export function NavMenu({ items }: NavMenuProps) {
  return (
    <ul className="flex min-h-14 items-center justify-between gap-1">
      {items.map((item) => (
        <NavItem
          key={item.href}
          item={item}
        />
      ))}
    </ul>
  );
}