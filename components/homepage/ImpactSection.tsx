"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function ImpactSection() {
  const t = useTranslations("ImpactSection");

  const STEPS = [
    { num: "01", title: t("step1Title"), desc: t("step1Desc") },
    { num: "02", title: t("step2Title"), desc: t("step2Desc") },
    { num: "03", title: t("step3Title"), desc: t("step3Desc") },
  ];

  const METRICS = [
    {
      emoji: "🏥",
      value: "2,400+",
      label: t("metric1Label"),
      bg: "bg-primary/10 border-primary/20",
      text: "text-primary",
    },
    {
      emoji: "💊",
      value: "15,000+",
      label: t("metric2Label"),
      bg: "bg-secondary border-border",
      text: "text-primary",
    },
    {
      emoji: "👶",
      value: "800+",
      label: t("metric3Label"),
      bg: "bg-primary/10 border-primary/20",
      text: "text-primary",
    },
    {
      emoji: "🦷",
      value: "1,200+",
      label: t("metric4Label"),
      bg: "bg-accent/25 border-accent/40",
      text: "text-accent-foreground",
    },
  ];

  return (
    <section id="mission" className="py-20 sm:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-sm font-bold text-primary uppercase tracking-widest">
                {t("label")}
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground leading-tight">
                {t("heading1")}
                <br />
                {t("heading2")}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("description")}
              </p>
            </div>
            <div className="space-y-6">
              {STEPS.map((item) => (
                <div key={item.num} className="flex gap-5 items-start group">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-sm font-black flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.num}
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-foreground text-lg">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/about#impact-stories"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                {t("cta")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about#impact-stories"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                {t("storiesLink")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {METRICS.map((card, i) => (
              <div
                key={i}
                className={`border ${card.bg} rounded-3xl p-6 space-y-3 hover:shadow-md transition-shadow`}
              >
                <span className="text-4xl block">{card.emoji}</span>
                <p className={`text-3xl font-black ${card.text}`}>
                  {card.value}
                </p>
                <p className="text-sm text-muted-foreground leading-snug">
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
