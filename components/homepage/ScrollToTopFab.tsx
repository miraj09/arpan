"use client";
import { useTranslations } from "next-intl";
import { ChevronUp } from "lucide-react";

interface Props {
  show: boolean;
}

export default function ScrollToTopFab({ show }: Props) {
  const t = useTranslations("ScrollToTop");
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("label")}
      className="fixed bottom-6 right-6 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl active:scale-95"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(16px)",
        pointerEvents: show ? "auto" : "none",
        transition: "opacity 300ms ease, transform 300ms ease",
      }}
    >
      <ChevronUp className="w-5 h-5" strokeWidth={2.5} />
    </button>
  );
}
