"use client";

import { useTranslations } from "next-intl";

export default function ObjectivesGrid() {
  const t = useTranslations("About.coreObjectives");

  const objectives = [
    { key: "item1", color: "from-emerald-500/10 to-emerald-500/5 border-emerald-200/50" },
    { key: "item2", color: "from-blue-500/10 to-blue-500/5 border-blue-200/50" },
    { key: "item3", color: "from-amber-500/10 to-amber-500/5 border-amber-200/50" },
    { key: "item4", color: "from-rose-500/10 to-rose-500/5 border-rose-200/50" },
    { key: "item5", color: "from-purple-500/10 to-purple-500/5 border-purple-200/50" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Adjusted for 5 items - first 2 full width on mobile, last item centered on bottom */}
          {objectives.map((obj, idx) => {
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${obj.color} border border-border/40 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 group ${
                  idx === 4 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {t(`${obj.key}.title` as any)}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {t(`${obj.key}.description` as any)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
