"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

interface Props {
  headline: string;
  body: string;
  cta: string;
}

export default function ProductArtisanBanner({ headline, body, cta }: Props) {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-background to-accent/20 border border-primary/15 rounded-3xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/arpan-logo.png"
            alt="Arpan"
            width={120}
            height={48}
            className="h-12 w-auto"
          />
        </div>

        <div className="flex-1 text-center sm:text-left space-y-2">
          <p className="text-sm font-bold text-primary uppercase tracking-widest">
            Live with Dignity
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-foreground">
            {headline}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
            {body}
          </p>
        </div>

        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-2xl hover:bg-primary/90 transition-colors flex-shrink-0 text-sm"
        >
          {cta}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
