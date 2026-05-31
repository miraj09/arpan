"use client";
import { useTranslations } from "next-intl";
import { Truck, ShieldCheck, RefreshCcw, Award } from "lucide-react";

export default function TrustStrip() {
  const t = useTranslations("TrustStrip");
  const ITEMS = [
    { icon: Truck, title: t("shippingTitle"), desc: t("shippingDesc") },
    { icon: ShieldCheck, title: t("paymentsTitle"), desc: t("paymentsDesc") },
    { icon: RefreshCcw, title: t("returnsTitle"), desc: t("returnsDesc") },
    { icon: Award, title: t("ethicalTitle"), desc: t("ethicalDesc") },
  ];
  return (
    <section className="py-12 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
