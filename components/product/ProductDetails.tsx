"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Heart,
  Star,
  ShoppingCart,
  ChevronRight,
  ChevronLeft,
  Share2,
  Truck,
  ShieldCheck,
  RefreshCcw,
  Package,
  Leaf,
  Minus,
  Plus,
  CheckCircle,
  ChevronUp,
} from "lucide-react";
import type { Product } from "@/components/homepage/types";
import { BADGE_COLORS, PRODUCTS } from "@/components/homepage/data";
import { PRODUCT_DETAILS } from "./productData";
import { PRODUCT_DETAILS_BN } from "./productData.bn";
import Navbar from "@/components/homepage/Navbar";
import CartDrawer from "@/components/homepage/CartDrawer";
import type { CartItem } from "@/components/homepage/types";
import SiteFooter from "@/components/homepage/SiteFooter";

const OVERLAYS = [
  "from-white/0 to-white/0",
  "from-white/25 to-transparent",
  "from-black/10 to-transparent",
  "from-white/35 to-white/10",
];

type Tab = "description" | "details" | "reviews";
interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetails({ product, related }: Props) {
  const t = useTranslations("ProductDetails");
  const locale = useLocale();

  // ── Locale-aware content ──────────────────────────────────────────────────
  const bnData = locale === "bn" ? PRODUCT_DETAILS_BN[product.id] : null;
  const details = bnData ?? PRODUCT_DETAILS[product.id];
  const displayName = bnData?.name ?? product.name;
  const displayImpact = bnData?.impact ?? product.impact;

  /** Return the localized name for any product ID (used in related cards) */
  const localName = (p: Product) =>
    locale === "bn" ? (PRODUCT_DETAILS_BN[p.id]?.name ?? p.name) : p.name;

  // ── Guarantee 4 related products ─────────────────────────────────────────
  const displayRelated: Product[] = (() => {
    if (related.length >= 4) return related.slice(0, 4);
    const same = PRODUCTS.filter(
      (p) => p.category === product.category && p.id !== product.id,
    );
    const other = PRODUCTS.filter((p) => p.category !== product.category);
    return [...same, ...other].slice(0, 4);
  })();

  // ── UI state ──────────────────────────────────────────────────────────────
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("description");
  const [thumb, setThumb] = useState(0);
  const [copied, setCopied] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowFab(window.scrollY > 500);
      if (ctaRef.current)
        setShowSticky(ctaRef.current.getBoundingClientRect().bottom < 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const addToCart = () => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists)
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i,
        );
      return [...prev, { ...product, quantity }];
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const prevThumb = () =>
    setThumb((t) => (t - 1 + OVERLAYS.length) % OVERLAYS.length);
  const nextThumb = () => setThumb((t) => (t + 1) % OVERLAYS.length);
  const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const TABS: { key: Tab; label: string }[] = [
    { key: "description", label: t("tabDescription") },
    { key: "details", label: t("tabDetails") },
    { key: "reviews", label: t("tabReviews") },
  ];

  const TRUST = [
    { Icon: Truck, text: t("delivery") },
    { Icon: ShieldCheck, text: t("secureCheckout") },
    { Icon: RefreshCcw, text: t("freeReturns") },
    { Icon: Package, text: t("shipsIn") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        totalItems={totalItems}
        onCartOpen={() => setCartOpen(true)}
        scrolled={scrolled}
      />
      <CartDrawer
        cart={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={(id) => setCart((p) => p.filter((i) => i.id !== id))}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t("home")}
          </Link>
          <span>/</span>
          <Link
            href="/#products"
            className="hover:text-foreground transition-colors"
          >
            {t("shop")}
          </Link>
          <span>/</span>
          <Link
            href="/#products"
            className="hover:text-foreground transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          {/* displayName so breadcrumb shows Bangla name in bn locale */}
          <span className="text-foreground normal-case font-medium truncate max-w-[220px]">
            {displayName}
          </span>
        </nav>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* ── Gallery ──────────────────────────────────────────────────── */}
          <div className="space-y-3">
            <div
              className={`relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br ${product.gradient} select-none`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${OVERLAYS[thumb]} transition-all duration-500`}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-56 h-56 bg-white/20 rounded-full blur-3xl" />
              </div>
              {product.badge && (
                <span
                  className={`absolute top-4 left-4 z-10 px-3 py-1.5 text-sm font-bold rounded-full ${BADGE_COLORS[product.badge] ?? "bg-white text-foreground"}`}
                >
                  {product.badge}
                </span>
              )}
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                <button
                  onClick={handleShare}
                  aria-label={t("share")}
                  className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm"
                >
                  {copied ? (
                    <CheckCircle className="w-4 h-4 text-primary" />
                  ) : (
                    <Share2 className="w-4 h-4 text-foreground" />
                  )}
                </button>
                <button
                  onClick={() => setWishlisted(!wishlisted)}
                  aria-label={t("wishlist")}
                  className={`p-2.5 rounded-full backdrop-blur-sm transition-colors shadow-sm ${wishlisted ? "bg-primary text-primary-foreground" : "bg-white/90 hover:bg-white text-foreground"}`}
                >
                  <Heart
                    className={`w-4 h-4 ${wishlisted ? "fill-white" : ""}`}
                  />
                </button>
              </div>
              <button
                onClick={prevThumb}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white shadow-sm transition-all hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4 text-foreground" />
              </button>
              <button
                onClick={nextThumb}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white shadow-sm transition-all hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-4 h-4 text-foreground" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                {OVERLAYS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setThumb(i)}
                    className="h-1.5 rounded-full bg-white/70 hover:bg-white transition-all duration-300"
                    style={{
                      width: thumb === i ? 20 : 6,
                      opacity: thumb === i ? 1 : 0.6,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2">
              {OVERLAYS.map((overlay, i) => (
                <button
                  key={i}
                  onClick={() => setThumb(i)}
                  className={`relative flex-1 h-[72px] sm:h-[88px] rounded-xl overflow-hidden transition-all duration-200 ${thumb === i ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "opacity-55 hover:opacity-90"}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${overlay}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className={`rounded-full bg-white/25 transition-all ${thumb === i ? "w-6 h-6" : "w-4 h-4"}`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Product info ──────────────────────────────────────────────── */}
          <div className="space-y-6">
            <p className="text-xs font-bold text-primary uppercase tracking-widest">
              {product.category}
            </p>

            {/* displayName — shows Bangla name in bn locale */}
            <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight">
              {displayName}
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${j < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-foreground">
                {product.rating}
              </span>
              <a
                href="#reviews"
                onClick={() => setActiveTab("reviews")}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {product.reviews} {t("reviews")}
              </a>
            </div>

            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-4xl font-black text-foreground">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="text-sm font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                    {discount}
                    {t("off")}
                  </span>
                </>
              )}
            </div>

            {/* details.description — Bangla text in bn locale */}
            <p className="text-muted-foreground leading-relaxed text-sm">
              {details.description.split(".").slice(0, 2).join(".") + "."}
            </p>

            {/* details.features — Bangla list in bn locale */}
            <ul className="space-y-2.5">
              {details.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* displayImpact — Bangla impact text in bn locale */}
            <div className="flex items-center gap-2.5 bg-primary/10 border border-primary/15 rounded-xl px-4 py-3">
              <Leaf className="w-4 h-4 text-primary flex-shrink-0" />
              <div>
                <span className="text-xs font-bold text-primary">
                  {t("yourPurchaseFunds")}{" "}
                </span>
                <span className="text-xs text-muted-foreground">
                  {displayImpact}
                </span>
              </div>
            </div>

            <div className="border-t border-border" />

            {/* Quantity + CTA */}
            <div ref={ctaRef} className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-foreground">
                  {t("quantity")}
                </span>
                <div className="flex items-center bg-muted rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2.5 hover:bg-border transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-bold text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2.5 hover:bg-border transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={addToCart}
                  className={`flex-1 py-3.5 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 text-sm ${addedToCart ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-95"}`}
                >
                  {addedToCart ? (
                    <>
                      <CheckCircle className="w-4 h-4" /> {t("addedToCart")}
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" /> {t("addToCart")} · $
                      {product.price * quantity}
                    </>
                  )}
                </button>
                <button
                  onClick={() => setWishlisted(!wishlisted)}
                  aria-label={t("wishlist")}
                  className={`p-3.5 rounded-2xl border-2 transition-all ${wishlisted ? "border-primary/40 bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"}`}
                >
                  <Heart
                    className={`w-5 h-5 ${wishlisted ? "fill-primary" : ""}`}
                  />
                </button>
              </div>
            </div>

            <div className="bg-muted/50 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TRUST.map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2.5 text-xs text-muted-foreground"
                >
                  <Icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tabs ─────────────────────────────────────────────────────────── */}
        <div id="reviews" className="mt-20">
          <div className="flex border-b border-border overflow-x-auto">
            {TABS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px transition-all ${activeTab === key ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
              >
                {label}
                {key === "reviews" && (
                  <span className="ml-2 text-xs bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full">
                    {product.reviews}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="py-10">
            {/* Full Bangla description in bn locale */}
            {activeTab === "description" && (
              <div className="max-w-2xl">
                <p className="text-muted-foreground leading-relaxed">
                  {details.description}
                </p>
              </div>
            )}

            {/* Bangla spec labels + values in bn locale */}
            {activeTab === "details" && (
              <div className="max-w-lg">
                <dl className="divide-y divide-border rounded-2xl overflow-hidden border border-border">
                  {details.specs.map(({ label, value }, i) => (
                    <div
                      key={label}
                      className={`flex gap-6 px-5 py-3.5 ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
                    >
                      <dt className="w-36 text-sm font-semibold text-foreground flex-shrink-0">
                        {label}
                      </dt>
                      <dd className="text-sm text-muted-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-5 max-w-2xl">
                {/* Rating summary */}
                <div className="flex items-center gap-6 bg-muted/40 rounded-2xl p-5 mb-8">
                  <div className="text-center flex-shrink-0">
                    <p className="text-5xl font-black text-foreground">
                      {product.rating}
                    </p>
                    <div className="flex gap-0.5 justify-center mt-1">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`w-3.5 h-3.5 ${j < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {product.reviews} {t("reviews")}
                    </p>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground w-3">
                          {star}
                        </span>
                        <Star className="w-3 h-3 text-accent flex-shrink-0" />
                        <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full"
                            style={{
                              width:
                                star === 5 ? "75%" : star === 4 ? "20%" : "5%",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bangla reviews in bn locale (where provided in productData.bn.ts) */}
                {details.reviews.map((review, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-2xl p-5 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-primary/15 rounded-full flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                          {review.name[0]}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-semibold text-foreground text-sm">
                              {review.name}
                            </p>
                            {review.verified && (
                              <span className="text-[10px] text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded-full font-semibold">
                                {t("verifiedPurchase")}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {review.location} · {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-0.5 flex-shrink-0">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`w-3.5 h-3.5 ${j < review.rating ? "fill-accent text-accent" : "text-muted"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Related Products ─────────────────────────────────────────────── */}
        <div className="mt-16 pt-14 border-t border-border">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-10 uppercase tracking-wide">
            <span className="text-primary">{t("relatedProducts")}</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {displayRelated.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="group flex flex-col"
              >
                <div
                  className={`relative h-52 sm:h-64 rounded-2xl overflow-hidden bg-gradient-to-br ${p.gradient} mb-3 flex-shrink-0`}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-all duration-300" />
                  {p.badge && (
                    <span
                      className={`absolute top-3 left-3 z-10 px-2 py-0.5 text-[10px] font-bold rounded-full ${BADGE_COLORS[p.badge] ?? "bg-white text-foreground"}`}
                    >
                      {p.badge}
                    </span>
                  )}
                  <button
                    onClick={(e) => e.preventDefault()}
                    aria-label={t("wishlist")}
                    className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
                  >
                    <Heart className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                  {p.category}
                </p>
                {/* localName(p) — shows Bangla name in bn locale */}
                <p className="font-semibold text-foreground leading-snug line-clamp-2 mb-2 group-hover:text-primary transition-colors text-sm">
                  {localName(p)}
                </p>
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-3 h-3 ${j < Math.floor(p.rating) ? "fill-accent text-accent" : "text-muted"}`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    ({p.reviews})
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-auto">
                  <span className="font-black text-foreground text-base">
                    ${p.price}
                  </span>
                  {p.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${p.originalPrice}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />

      {/* Sticky mobile CTA */}
      <div
        className="fixed bottom-0 inset-x-0 z-30 px-4 py-3 bg-background/95 backdrop-blur-md border-t border-border sm:hidden"
        style={{
          opacity: showSticky ? 1 : 0,
          transform: showSticky ? "translateY(0)" : "translateY(100%)",
          transition: "opacity 300ms ease, transform 300ms ease",
          pointerEvents: showSticky ? "auto" : "none",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            {/* displayName in sticky bar too */}
            <p className="text-sm font-bold text-foreground truncate">
              {displayName}
            </p>
            <p className="text-sm text-primary font-black">${product.price}</p>
          </div>
          <button
            onClick={addToCart}
            className={`px-5 py-2.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 flex-shrink-0 ${addedToCart ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95"}`}
          >
            {addedToCart ? (
              <>
                <CheckCircle className="w-4 h-4" /> {t("added")}
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" /> {t("addToCartShort")}
              </>
            )}
          </button>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl active:scale-95"
        style={{
          opacity: showFab ? 1 : 0,
          transform: showFab ? "translateY(0)" : "translateY(16px)",
          pointerEvents: showFab ? "auto" : "none",
          transition: "opacity 300ms ease, transform 300ms ease",
        }}
      >
        <ChevronUp className="w-5 h-5" strokeWidth={2.5} />
      </button>
    </div>
  );
}
