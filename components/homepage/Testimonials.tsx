"use client";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "./data";

export default function Testimonials() {
  const t = useTranslations("Testimonials");
  return (
    <section className="py-20 sm:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <p className="text-sm font-bold text-primary uppercase tracking-widest">
            {t("label")}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground">
            {t("heading")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-3xl p-6 space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-0.5">
                {[...Array(item.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="pt-3 border-t border-border">
                <p className="font-bold text-foreground text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.location}</p>
                <p className="text-xs text-primary font-semibold mt-1.5">
                  {t("bought")} {item.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
