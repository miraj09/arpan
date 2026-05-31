"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const t = useTranslations("Newsletter");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent rounded-3xl px-8 py-16 sm:px-16 text-center space-y-8">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-primary-foreground text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              {t("badge")}
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-primary-foreground">
              {t("heading1")}
              <br />
              {t("heading2")}
            </h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto text-lg">
              {t("description")}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder={t("placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-white text-primary font-black rounded-2xl hover:bg-white/90 transition-all whitespace-nowrap hover:shadow-lg active:scale-95"
            >
              {subscribed ? t("subscribed") : t("cta")}
            </button>
          </form>
          <p className="relative text-primary-foreground/50 text-xs">
            {t("disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}
