"use client";
import { useTranslations } from "next-intl";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function SiteFooter() {
  const t = useTranslations("Footer");

  const COLUMNS = [
    {
      title: t("shopTitle"),
      links: [
        t("newArrivals"),
        t("bestsellers"),
        t("wellness"),
        t("sustainableFashion"),
        t("giftSets"),
      ],
    },
    {
      title: t("aboutTitle"),
      links: [
        t("ourMission"),
        t("impactReport"),
        t("uhdpPartnership"),
        t("ethicalSourcing"),
        t("press"),
      ],
    },
    {
      title: t("supportTitle"),
      links: [
        t("shippingPolicy"),
        t("returns"),
        t("faq"),
        t("contactUs"),
        t("trackOrder"),
      ],
    },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2 space-y-5">
            <img
              src="/arpan-logo.png"
              alt="Arpan"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-background/55 text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 bg-background/10 hover:bg-background/20 rounded-xl transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-sm mb-5 text-background">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-background/55 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/35">
          <p>{t("copyright")}</p>
          <div className="flex gap-6">
            {[t("privacy"), t("terms"), t("cookies")].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-background/70 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
