"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
    const t = useTranslations("About.hero");

    return (
        <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-gradient-to-b from-primary/5 to-background overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-16 md:py-24">
                {/* Left: Text Content */}
                <div className="flex flex-col justify-center space-y-6">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">
                            {t("badge")}
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-foreground">
                            {t("tagline")}
                        </h1>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                        {t("description")}
                    </p>
                    <div className="flex gap-4 pt-4">
                        <a
                            href="#mission"
                            className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            Learn More
                        </a>
                    </div>
                </div>


                {/* Right: Hero Image */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/about_1.jpg"
                        alt="Woman creating traditional embroidery"
                        width={600}
                        height={450}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover w-full h-auto rounded-2xl"
                        priority
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
