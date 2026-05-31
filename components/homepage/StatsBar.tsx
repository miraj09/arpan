"use client";
import { useTranslations } from "next-intl";
import { STATS } from "./data";

export default function StatsBar() {
  const t = useTranslations("StatsBar");
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-border">
          {STATS.map(({ value, key, icon: Icon }) => (
            <div key={key} className="text-center lg:px-8">
              <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-3xl font-black text-foreground">{value}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {t(key as "customers" | "funded" | "countries" | "products")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
