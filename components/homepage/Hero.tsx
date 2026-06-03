"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Heart,
  Sparkles,
  ArrowRight,
  Truck,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";
import type { Product } from "./types";
import { PRODUCTS, BADGE_COLORS } from "./data";

interface Props {
  wishlist: number[];
  addedId: number | null;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (id: number) => void;
}

export default function Hero({
  wishlist,
  addedId,
  onAddToCart,
  onToggleWishlist,
}: Props) {
  const t = useTranslations("Hero");
  const heroProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary">
              <Sparkles className="w-4 h-4" />
              {t("badge")}
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-foreground leading-none tracking-tight">
              {t("line1")}
              <span className="block text-primary">{t("line2")}</span>
              <span className="block">{t("line3")}</span>
            </h1>
            <div className="space-y-3 text-lg sm:text-xl text-muted-foreground max-w-md leading-relaxed">
              <p>{t("descriptionLead")}</p>
              <p>{t("descriptionDetail")}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95"
              >
                {t("shopNow")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#mission"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-card text-foreground font-bold rounded-2xl border border-border hover:bg-muted transition-all"
              >
                {t("ourMission")}
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {(
                [
                  [Truck, t("shipping")],
                  [ShieldCheck, t("secure")],
                  [RefreshCcw, t("returns")],
                ] as [React.FC<{ className?: string }>, string][]
              ).map(([Icon, label]) => (
                <span key={label} className="flex items-center gap-1.5">
                  <Icon className="w-4 h-4 text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: floating product showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {heroProducts.map((product, i) => (
                <div
                  key={product.id}
                  className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 ${i === 1 ? "mt-10" : ""} ${i === 2 ? "-mt-6" : ""}`}
                >
                  <Link
                    href={`/products/${product.id}`}
                    className="block relative h-36"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`}
                    />
                    {product.badge && (
                      <span
                        className={`absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold rounded-full z-10 ${BADGE_COLORS[product.badge] ?? "bg-white text-foreground"}`}
                      >
                        {product.badge}
                      </span>
                    )}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        onToggleWishlist(product.id);
                      }}
                      className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Heart
                        className={`w-3 h-3 ${wishlist.includes(product.id) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                      />
                    </button>
                  </Link>
                  <div className="p-3">
                    <Link href={`/products/${product.id}`}>
                      <p className="text-xs font-semibold truncate text-foreground leading-snug hover:text-primary transition-colors">
                        {product.name}
                      </p>
                    </Link>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-black text-primary">
                        ${product.price}
                      </span>
                      <button
                        onClick={() => onAddToCart(product)}
                        className={`text-[10px] px-2.5 py-1 rounded-full font-bold transition-all ${addedId === product.id ? "bg-primary text-primary-foreground scale-110" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
                      >
                        {addedId === product.id ? "✓" : "+ Add"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating impact card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border shadow-2xl rounded-2xl p-4 w-52">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-bold">{t("impactTitle")}</span>
              </div>
              <p className="text-3xl font-black text-primary">247</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t("impactSubtitle")}
              </p>
              <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-primary rounded-full" />
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">
                {t("impactGoal")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
