"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Truck, ShieldCheck, RefreshCcw, Package, ChevronUp } from "lucide-react";
import type { Product } from "@/components/homepage/types";
import { PRODUCTS } from "@/components/homepage/data";
import { PRODUCT_DETAILS } from "./productData";
import { PRODUCT_DETAILS_BN } from "./productData.bn";
import Navbar from "@/components/homepage/Navbar";
import CartDrawer from "@/components/homepage/CartDrawer";
import type { CartItem } from "@/components/homepage/types";
import SiteFooter from "@/components/homepage/SiteFooter";
import ProductBreadcrumb from "./pdp/ProductBreadcrumb";
import ProductGallery from "./pdp/ProductGallery";
import ProductBuyBox from "./pdp/ProductBuyBox";
import ProductArtisanBanner from "./pdp/ProductArtisanBanner";
import ProductTabs, { type ProductTab } from "./pdp/ProductTabs";
import RelatedProducts from "./pdp/RelatedProducts";
import ProductStickyBar from "./pdp/ProductStickyBar";

const OVERLAYS_LENGTH = 4;

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetails({ product, related }: Props) {
  const t = useTranslations("ProductDetails");
  const locale = useLocale();

  const bnData = locale === "bn" ? PRODUCT_DETAILS_BN[product.id] : null;
  const details = bnData ?? PRODUCT_DETAILS[product.id];
  const displayName = bnData?.name ?? product.name;
  const displayImpact = bnData?.impact ?? product.impact;

  const galleryImages =
    product.images?.length > 0
      ? product.images
      : product.image
        ? [product.image]
        : [];
  const hasGallery = galleryImages.length > 0;

  const localName = (p: Product) =>
    locale === "bn" ? (PRODUCT_DETAILS_BN[p.id]?.name ?? p.name) : p.name;

  const displayRelated: Product[] = (() => {
    if (related.length >= 4) return related.slice(0, 4);
    const same = PRODUCTS.filter(
      (p) => p.category === product.category && p.id !== product.id,
    );
    const other = PRODUCTS.filter((p) => p.category !== product.category);
    return [...same, ...other].slice(0, 4);
  })();

  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<ProductTab>("description");
  const [thumb, setThumb] = useState(0);
  const [copied, setCopied] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) setCart(JSON.parse(savedCart));
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, []);

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

  const galleryCount = hasGallery ? galleryImages.length : OVERLAYS_LENGTH;
  const prevThumb = () => setThumb((i) => (i - 1 + galleryCount) % galleryCount);
  const nextThumb = () => setThumb((i) => (i + 1) % galleryCount);
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

  const tabs: { key: ProductTab; label: string }[] = [
    { key: "description", label: t("tabDescription") },
    { key: "details", label: t("tabDetails") },
    { key: "reviews", label: t("tabReviews") },
  ];

  const trustItems = [
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

      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <ProductBreadcrumb
            homeLabel={t("home")}
            shopLabel={t("shop")}
            category={product.category}
            productName={displayName}
          />
        </div>

        <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <ProductGallery
              product={product}
              displayName={displayName}
              galleryImages={galleryImages}
              hasGallery={hasGallery}
              thumb={thumb}
              galleryCount={galleryCount}
              onThumbChange={setThumb}
              onPrev={prevThumb}
              onNext={nextThumb}
              wishlisted={wishlisted}
              onWishlistToggle={() => setWishlisted(!wishlisted)}
              copied={copied}
              onShare={handleShare}
              shareLabel={t("share")}
              wishlistLabel={t("wishlist")}
            />

            <ProductBuyBox
              ref={ctaRef}
              product={product}
              displayName={displayName}
              displayImpact={displayImpact}
              details={details}
              quantity={quantity}
              onQuantityChange={setQuantity}
              wishlisted={wishlisted}
              onWishlistToggle={() => setWishlisted(!wishlisted)}
              addedToCart={addedToCart}
              onAddToCart={addToCart}
              discount={discount}
              handStitchedLabel={t("handStitched")}
              reviewsLabel={t("reviews")}
              offLabel={t("off")}
              quantityLabel={t("quantity")}
              addToCartLabel={t("addToCart")}
              addedToCartLabel={t("addedToCart")}
              wishlistLabel={t("wishlist")}
              yourPurchaseFundsLabel={t("yourPurchaseFunds")}
              trustItems={trustItems}
              onReviewsClick={() => setActiveTab("reviews")}
            />
          </div>

          <div className="mt-12 sm:mt-16">
            <ProductArtisanBanner
              headline={t("artisanHeadline")}
              body={t("artisanBody")}
              cta={t("artisanCta")}
            />
          </div>

          <ProductTabs
            product={product}
            details={details}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            tabs={tabs}
            reviewsLabel={t("reviews")}
            verifiedPurchaseLabel={t("verifiedPurchase")}
            specsHeaderLabel={t("specsHeader")}
          />

          <RelatedProducts
            products={displayRelated}
            getDisplayName={localName}
            eyebrow={t("relatedEyebrow")}
            heading={t("relatedProducts")}
            wishlistLabel={t("wishlist")}
          />
        </main>
      </section>

      <SiteFooter />

      <ProductStickyBar
        visible={showSticky}
        displayName={displayName}
        price={product.price}
        image={product.image}
        addedToCart={addedToCart}
        onAddToCart={addToCart}
        addedLabel={t("added")}
        addToCartLabel={t("addToCartShort")}
      />

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
