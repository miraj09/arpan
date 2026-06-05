"use client";

import { ShoppingCart, CheckCircle } from "lucide-react";
import ProductImage from "../ProductImage";

interface Props {
  visible: boolean;
  displayName: string;
  price: number;
  image?: string;
  addedToCart: boolean;
  onAddToCart: () => void;
  addedLabel: string;
  addToCartLabel: string;
}

export default function ProductStickyBar({
  visible,
  displayName,
  price,
  image,
  addedToCart,
  onAddToCart,
  addedLabel,
  addToCartLabel,
}: Props) {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-30 px-4 py-3 bg-background/95 backdrop-blur-md border-t border-border sm:hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "opacity 300ms ease, transform 300ms ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="flex items-center gap-3">
        {image && (
          <ProductImage
            src={image}
            alt={displayName}
            className="w-12 h-12 rounded-xl flex-shrink-0 border border-border"
            sizes="48px"
          />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-foreground truncate">{displayName}</p>
          <p className="text-sm text-primary font-black">${price}</p>
        </div>
        <button
          type="button"
          onClick={onAddToCart}
          className={`flex-1 max-w-[160px] py-2.5 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${addedToCart ? "bg-primary text-primary-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95"}`}
        >
          {addedToCart ? (
            <>
              <CheckCircle className="w-4 h-4" /> {addedLabel}
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" /> {addToCartLabel}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
