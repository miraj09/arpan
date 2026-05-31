"use client";
import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CATEGORIES } from "./data";

export default function Categories() {
  const t = useTranslations("Categories");
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <p className="text-sm font-bold text-primary uppercase tracking-widest">
            {t("label")}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground">
            {t("heading")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.key}
              href="/#products"
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div
                className={`bg-gradient-to-br ${cat.gradient} ${i === 0 ? "h-56 md:h-full min-h-56" : "h-44"} flex flex-col justify-end p-6 transition-all duration-500 group-hover:scale-[1.03]`}
              >
                <span className="text-4xl mb-3 block">{cat.emoji}</span>
                <h3 className="font-black text-white text-xl leading-tight">
                  {t(
                    cat.key as
                      | "wellness"
                      | "fashion"
                      | "home"
                      | "nutrition"
                      | "beauty"
                      | "gifts",
                  )}
                </h3>
                <p className="text-white/75 text-sm mt-1">
                  {cat.count} products
                </p>
                <div className="flex items-center gap-1 mt-3 text-white font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {t("shopNow")} <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
