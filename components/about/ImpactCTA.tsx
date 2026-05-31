"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ImpactCTA() {
  const t = useTranslations("About.cta");

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 md:space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Make a Difference
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight">
            {t("title")}
          </h2>
        </div>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("description")}
        </p>

        <div className="pt-4">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors text-lg shadow-lg shadow-primary/25 hover:shadow-lg hover:shadow-primary/40"
          >
            {t("button")} →
          </Link>
        </div>

        <div className="pt-8 border-t border-primary/20">
          <p className="text-sm text-muted-foreground">
            🌿 Every purchase directly supports artisans and funds healthcare
          </p>
        </div>
      </div>
    </section>
  );
}
