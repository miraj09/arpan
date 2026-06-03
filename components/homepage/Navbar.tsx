"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname, Link } from "@/i18n/navigation";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

interface Props {
  totalItems: number;
  onCartOpen: () => void;
  scrolled: boolean;
}

function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LanguageSwitcher");

  const toggle = (next: string) => router.replace(pathname, { locale: next });

  return (
    <div className="flex items-center gap-0.5 text-xs font-semibold border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => toggle("en")}
        className={`px-2.5 py-1.5 transition-colors ${locale === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
      >
        {t("en")}
      </button>
      <button
        onClick={() => toggle("bn")}
        className={`px-2.5 py-1.5 transition-colors ${locale === "bn"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
      >
        {t("bn")}
      </button>
    </div>
  );
}

export default function Navbar({ totalItems, onCartOpen, scrolled }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const NAV = [
    { key: "shop", label: t("shop"), href: "/#products" },
    { key: "collections", label: t("collections"), href: "/#collections" },
    { key: "mission", label: t("mission"), href: "/about" },
    { key: "impact", label: t("impact"), href: "/#impact" },
    { key: "blog", label: t("blog"), href: "/#blog" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + desktop nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-shrink-0">
              <img src="/arpan-logo.png" alt="Arpan" className="h-10 w-auto" />
            </Link>
            <nav className="hidden lg:flex items-center gap-6">
              {NAV.map(({ key, label, href }) => (
                <Link
                  key={key}
                  href={href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground border border-border rounded-lg hover:bg-muted transition-colors">
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">{t("searchPlaceholder")}</span>
            </button>

            <button
              onClick={onCartOpen}
              className="relative p-2.5 rounded-lg hover:bg-muted transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 leading-none">
                  {totalItems}
                </span>
              )}
            </button>

            <ThemeToggle />

            <LanguageSwitcher />

            <Link
              href={`/#products`}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t("shopNow")}
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2.5 rounded-lg hover:bg-muted transition-colors"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV.map(({ key, label, href }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-medium rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                {label}
              </Link>
            ))}
            <div className="pt-2 px-3 flex items-center gap-2">
              <ThemeToggle />
              <span className="text-sm text-muted-foreground">Theme</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
