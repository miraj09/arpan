"use client";

import { forwardRef } from "react";
import {
  Heart,
  Star,
  ShoppingCart,
  Truck,
  ShieldCheck,
  RefreshCcw,
  Package,
  Minus,
  Plus,
  CheckCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Product } from "@/components/homepage/types";
import type { ProductDetail } from "../productData";

interface Props {
  product: Product;
  displayName: string;
  displayImpact: string;
  details: ProductDetail;
  quantity: number;
  onQuantityChange: (qty: number) => void;
  wishlisted: boolean;
  onWishlistToggle: () => void;
  addedToCart: boolean;
  onAddToCart: () => void;
  discount: number | null;
  handStitchedLabel: string;
  reviewsLabel: string;
  offLabel: string;
  quantityLabel: string;
  addToCartLabel: string;
  addedToCartLabel: string;
  wishlistLabel: string;
  yourPurchaseFundsLabel: string;
  trustItems: { Icon: LucideIcon; text: string }[];
  onReviewsClick: () => void;
}

const ProductBuyBox = forwardRef<HTMLDivElement, Props>(function ProductBuyBox(
  {
    product,
    displayName,
    displayImpact,
    details,
    quantity,
    onQuantityChange,
    wishlisted,
    onWishlistToggle,
    addedToCart,
    onAddToCart,
    discount,
    handStitchedLabel,
    reviewsLabel,
    offLabel,
    quantityLabel,
    addToCartLabel,
    addedToCartLabel,
    wishlistLabel,
    yourPurchaseFundsLabel,
    trustItems,
    onReviewsClick,
  },
  ctaRef,
) {
  const shortDescription =
    details.description.split(".").slice(0, 2).join(".") + ".";
  const previewFeatures = details.features.slice(0, 3);

  return (
    <div className="lg:sticky lg:top-24 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-accent/40 text-accent-foreground">
          {handStitchedLabel}
        </span>
        <span className="text-xs font-bold text-primary uppercase tracking-widest">
          {product.category}
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-black text-foreground leading-tight">
        {displayName}
      </h1>

      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, j) => (
            <Star
              key={j}
              className={`w-4 h-4 ${j < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}`}
            />
          ))}
        </div>
        <span className="text-sm font-bold text-foreground">{product.rating}</span>
        <button
          type="button"
          onClick={onReviewsClick}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          {product.reviews} {reviewsLabel}
        </button>
      </div>

      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="text-4xl font-black text-foreground">${product.price}</span>
        {product.originalPrice && (
          <>
            <span className="text-xl text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
            <span className="text-sm font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
              {discount}
              {offLabel}
            </span>
          </>
        )}
      </div>

      <p className="text-muted-foreground leading-relaxed text-sm">{shortDescription}</p>

      <ul className="space-y-2.5">
        {previewFeatures.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-start gap-3 bg-primary/10 border border-primary/15 border-l-4 border-l-accent rounded-xl px-4 py-4">
        <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-bold text-primary">{yourPurchaseFundsLabel}</p>
          <p className="text-sm text-muted-foreground mt-0.5">{displayImpact}</p>
        </div>
      </div>

      <div className="border-t border-border" />

      <div ref={ctaRef} className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-foreground">{quantityLabel}</span>
          <div className="flex items-center bg-muted rounded-xl overflow-hidden border border-border">
            <button
              type="button"
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              className="px-3 py-2.5 hover:bg-border transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center font-bold text-sm">{quantity}</span>
            <button
              type="button"
              onClick={() => onQuantityChange(quantity + 1)}
              className="px-3 py-2.5 hover:bg-border transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onAddToCart}
            className={`flex-1 py-3.5 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 text-sm ${addedToCart ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-95"}`}
          >
            {addedToCart ? (
              <>
                <CheckCircle className="w-4 h-4" /> {addedToCartLabel}
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" /> {addToCartLabel} · $
                {product.price * quantity}
              </>
            )}
          </button>
          <button
            type="button"
            onClick={onWishlistToggle}
            aria-label={wishlistLabel}
            className={`p-3.5 rounded-2xl border-2 transition-all ${wishlisted ? "border-primary/40 bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"}`}
          >
            <Heart className={`w-5 h-5 ${wishlisted ? "fill-primary" : ""}`} />
          </button>
        </div>
      </div>

      <div className="bg-muted/50 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border border-border/60">
        {trustItems.map(({ Icon, text }) => (
          <div key={text} className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <Icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
});

export default ProductBuyBox;
