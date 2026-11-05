import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({
  items,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-border-light bg-surface"
    >
      <div className="site-container">
        <ol className="flex min-h-12 items-center gap-2 overflow-x-auto whitespace-nowrap text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center text-muted transition-colors hover:text-extra-blue"
              aria-label="Inicio"
            >
              <Home className="mr-1.5 size-4" />
              Inicio
            </Link>
          </li>

          {items.map((item, index) => (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              <ChevronRight className="size-4 text-muted-light" />

              {item.href ? (
                <Link
                  href={item.href}
                  className="text-muted transition-colors hover:text-extra-blue"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-extra-blue-dark">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}