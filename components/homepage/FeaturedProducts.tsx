"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Heart, Star, ShoppingCart, ChevronRight } from "lucide-react";
import type { Product } from "./types";
import { PRODUCTS, FILTER_TABS, TAB_KEY, BADGE_COLORS } from "./data";
import ProductImage from "@/components/product/ProductImage";

interface Props {
  wishlist: number[];
  addedId: number | null;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (id: number) => void;
}

export default function FeaturedProducts({
  wishlist,
  addedId,
  onAddToCart,
  onToggleWishlist,
}: Props) {
  const [activeTab, setActiveTab] = useState("All");
  const t = useTranslations("FeaturedProducts");

  const filtered =
    activeTab === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="py-20 sm:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div className="space-y-2">
            <p className="text-sm font-bold text-primary uppercase tracking-widest">
              {t("label")}
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground">
              {t("heading")}
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            {t("viewAll")} <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${activeTab === tab ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"}`}
            >
              {t(TAB_KEY[tab] as "all" | "fashion")}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-foreground/5 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <Link
                href={`/products/${product.id}`}
                className="block relative h-56 flex-shrink-0"
              >
                {product.image ? (
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient ?? "from-muted to-muted"}`}
                  />
                )}
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-full z-10 ${BADGE_COLORS[product.badge] ?? "bg-white text-foreground"}`}
                  >
                    {product.badge}
                  </span>
                )}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onToggleWishlist(product.id);
                  }}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full z-10 opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
                >
                  <Heart
                    className={`w-4 h-4 ${wishlist.includes(product.id) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                  />
                </button>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all flex items-end p-4 z-10">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      onAddToCart(product);
                    }}
                    className={`w-full py-2.5 text-sm font-bold rounded-xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ${addedId === product.id ? "bg-primary text-primary-foreground" : "bg-foreground text-background hover:bg-foreground/90"}`}
                  >
                    {addedId === product.id ? t("added") : t("quickAdd")}
                  </button>
                </div>
              </Link>

              <div className="p-5 space-y-3 flex flex-col flex-1">
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">
                  {product.category}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="font-bold text-foreground leading-snug line-clamp-2 flex-1 hover:text-primary transition-colors"
                >
                  {product.name}
                </Link>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-3.5 h-3.5 ${j < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-primary/10 rounded-xl px-3 py-2 text-xs text-primary font-semibold">
                  <Heart className="w-3 h-3 flex-shrink-0" />
                  {product.impact}
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-foreground text-lg">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => onAddToCart(product)}
                    className={`p-2.5 rounded-xl transition-all ${addedId === product.id ? "bg-primary text-primary-foreground scale-110" : "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110"}`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
