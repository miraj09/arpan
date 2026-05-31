"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ArtisanGallery() {
  const t = useTranslations("About.artisanGallery");

  const artisans = [
    {
      key: "artisan1",
      image: "/about_1.jpg",
    },
    {
      key: "artisan2",
      image: "/art_1.jpg",
    },
    {
      key: "artisan3",
      image: "/about_3.jpg",
    },
    {
      key: "artisan4",
      image: "/about_4.jpg",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-2">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artisans.map((artisan, idx) => {
            return (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-muted">
                  <Image
                    src={artisan.image}
                    alt={t(`${artisan.key}.name` as any)}
                    width={400}
                    height={288}
                    className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative px-6 py-8 bg-card border border-border/50">
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {t(`${artisan.key}.name` as any)}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3">
                    {t(`${artisan.key}.title` as any)}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`${artisan.key}.story` as any)}
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
