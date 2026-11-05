"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import { NavigationItem } from "@/data/navigation";

interface NavItemProps {
  item: NavigationItem;
}

export function NavItem({ item }: NavItemProps) {
  const pathname = usePathname();

  const hasChildren = Boolean(item.children?.length);

  const isActive =
    pathname === item.href ||
    (hasChildren && pathname.startsWith(`${item.href}/`));

  return (
    <li className="group relative">
      <Link
        href={item.href}
        onClick={(event) => {
          if (hasChildren) {
            event.preventDefault();
          }
        }}
        className={[
          "flex h-10 items-center gap-1.5 px-3",
          "text-[10px] font-extrabold uppercase tracking-wide transition-colors",
          isActive
            ? "text-extra-blue"
            : "text-foreground/80 hover:text-extra-blue",
        ].join(" ")}
      >
        {item.label}

        {hasChildren && (
          <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
        )}
      </Link>

      {hasChildren && (
        <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 rounded-b-lg border border-border-light bg-white opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <ul className="p-2">
            {item.children!.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block rounded-md px-4 py-3 text-sm text-foreground/75 transition-colors hover:bg-extra-blue-light hover:text-extra-blue"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}