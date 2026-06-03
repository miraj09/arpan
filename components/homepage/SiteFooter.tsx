"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Instagram, Twitter, Facebook } from "lucide-react";

type FooterLink = { label: string; href: string };

export default function SiteFooter() {
  const t = useTranslations("Footer");

  const COLUMNS: { title: string; links: FooterLink[] }[] = [
    {
      title: t("shopTitle"),
      links: [
        { label: t("newArrivals"), href: "#" },
        { label: t("bestsellers"), href: "#" },
        { label: t("wellness"), href: "#" },
        { label: t("sustainableFashion"), href: "#" },
        { label: t("giftSets"), href: "#" },
      ],
    },
    {
      title: t("aboutTitle"),
      links: [
        { label: t("ourMission"), href: "/about" },
        { label: t("impactReport"), href: "/about#impact-stories" },
        { label: t("uhdpPartnership"), href: "#" },
        { label: t("ethicalSourcing"), href: "#" },
        { label: t("press"), href: "#" },
      ],
    },
    {
      title: t("supportTitle"),
      links: [
        { label: t("shippingPolicy"), href: "#" },
        { label: t("returns"), href: "#" },
        { label: t("faq"), href: "#" },
        { label: t("contactUs"), href: "#" },
        { label: t("trackOrder"), href: "#" },
      ],
    },
  ];

  const renderLink = (link: FooterLink) => {
    const className =
      "text-sm text-white/60 hover:text-white transition-colors";

    if (link.href.startsWith("/")) {
      return (
        <Link href={link.href} className={className}>
          {link.label}
        </Link>
      );
    }

    return (
      <a href={link.href} className={className}>
        {link.label}
      </a>
    );
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2 space-y-5">
            <img
              src="/arpan-logo.png"
              alt="Arpan"
              className="h-10 w-auto"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.facebook.com/arpanuhdp"
                  className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-sm mb-5 text-white">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>{t("copyright")}</p>
          <div className="flex gap-6">
            {[t("privacy"), t("terms"), t("cookies")].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white/70 transition-colors"
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
