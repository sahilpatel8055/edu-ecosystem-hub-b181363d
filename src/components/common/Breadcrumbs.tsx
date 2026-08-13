import { ChevronRight, Home } from "lucide-react";
import { AppLink } from "./AppLink";

export interface Crumb {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="overflow-x-auto">
      <ol className="flex items-center gap-1.5 whitespace-nowrap text-xs text-muted-foreground">
        <li className="flex items-center gap-1.5">
          <AppLink to="/" className="-m-2 flex items-center gap-1 p-2 hover:text-foreground">
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </AppLink>
        </li>
        {items.map((item, i) => (
          <li key={item.href + i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 opacity-50" />
            {i === items.length - 1 ? (
              <span aria-current="page" className="font-medium text-foreground">
                {item.name}
              </span>
            ) : (
              <AppLink to={item.href} className="hover:text-foreground">
                {item.name}
              </AppLink>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}