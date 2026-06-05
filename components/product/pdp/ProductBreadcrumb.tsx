"use client";

import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

interface Props {
  homeLabel: string;
  shopLabel: string;
  category: string;
  productName: string;
}

export default function ProductBreadcrumb({
  homeLabel,
  shopLabel,
  category,
  productName,
}: Props) {
  const items = [
    { label: homeLabel, href: "/" as const },
    { label: shopLabel, href: "/#products" as const },
    { label: category, href: "/#products" as const },
    { label: productName, href: null },
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1 text-xs text-muted-foreground flex-wrap uppercase tracking-wider font-semibold"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight className="w-3 h-3 flex-shrink-0 opacity-50" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground normal-case font-medium truncate max-w-[220px]">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
