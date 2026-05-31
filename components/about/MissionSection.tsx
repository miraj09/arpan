"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MissionSection() {
  const t = useTranslations("About.mission");

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="mission" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          {/* <div className="relative h-[300px] md:h-[400px] order-2 md:order-1">
            <Image
              src="/about_2.jpg"
              alt="Artisan pottery craftsmanship"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
          </div> */}
          {/* Left: Hero Image */}
<div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
  <Image
    src="/about_2.jpg"
    alt="Woman creating traditional embroidery"
    width={600}
    height={450}
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover w-full h-auto rounded-2xl"
    priority
  />
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none" />
</div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center space-y-6 order-1 md:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground leading-tight mb-3">
                {t("title")}
              </h2>
              <p className="text-lg md:text-xl font-bold text-primary">
                {t("tagline")}
              </p>
            </div>

            <div className="space-y-3 text-muted-foreground">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm md:text-base">{t("objective1")}</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm md:text-base">{t("objective2")}</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm md:text-base">{t("objective3")}</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm md:text-base">{t("objective4")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
