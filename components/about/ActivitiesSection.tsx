"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";

export default function ActivitiesSection() {
  const t = useTranslations("About.activities");
  const [expanded, setExpanded] = useState<number | null>(0);

  const activities = ["item1", "item2", "item3", "item4", "item5"];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            {t("title")}
          </h2>
        </div>

        <div className="space-y-4">
          {activities.map((activity, idx) => {
            const isExpanded = expanded === idx;

            return (
              <div
                key={idx}
                className="border border-border/60 rounded-xl overflow-hidden bg-card hover:border-primary/50 transition-colors"
              >
                {/* Header - Expandable */}
                <button
                  onClick={() => setExpanded(isExpanded ? null : idx)}
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {t(`${activity}.title` as any)}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expandable Content */}
                {isExpanded && (
                  <div className="border-t border-border/40 px-6 md:px-8 py-6 md:py-8 space-y-4 bg-muted/20">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {t(`${activity}.description` as any)}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Examples:</p>
                      <ul className="space-y-2">
                        {["0", "1", "2", "3"].map((exIdx) => {
                          const example = t(`${activity}.examples.${exIdx}` as any);
                          return example ? (
                            <li key={exIdx} className="flex gap-3 items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{example}</span>
                            </li>
                          ) : null;
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
