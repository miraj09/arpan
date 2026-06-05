"use client";

import {
  Heart,
  ChevronRight,
  ChevronLeft,
  Share2,
  CheckCircle,
} from "lucide-react";
import type { Product } from "@/components/homepage/types";
import { BADGE_COLORS } from "@/components/homepage/data";
import ProductImage from "../ProductImage";

const OVERLAYS = [
  "from-white/0 to-white/0",
  "from-white/25 to-transparent",
  "from-black/10 to-transparent",
  "from-white/35 to-white/10",
];

interface Props {
  product: Product;
  displayName: string;
  galleryImages: string[];
  hasGallery: boolean;
  thumb: number;
  galleryCount: number;
  onThumbChange: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  wishlisted: boolean;
  onWishlistToggle: () => void;
  copied: boolean;
  onShare: () => void;
  shareLabel: string;
  wishlistLabel: string;
}

export default function ProductGallery({
  product,
  displayName,
  galleryImages,
  hasGallery,
  thumb,
  galleryCount,
  onThumbChange,
  onPrev,
  onNext,
  wishlisted,
  onWishlistToggle,
  copied,
  onShare,
  shareLabel,
  wishlistLabel,
}: Props) {
  const navBtnClass =
    "absolute top-1/2 -translate-y-1/2 z-10 p-2.5 bg-background/90 backdrop-blur-sm border border-border rounded-full hover:bg-muted shadow-sm transition-all hover:scale-110 active:scale-95";

  return (
    <div className="space-y-3">
      <div
        className={`relative aspect-[3/4] rounded-3xl border border-border overflow-hidden select-none ${hasGallery ? "bg-muted" : `bg-gradient-to-br ${product.gradient ?? "from-muted to-muted"}`}`}
      >
        {hasGallery ? (
          <ProductImage
            src={galleryImages[thumb]}
            alt={`${displayName} — ${thumb + 1}`}
            className="absolute inset-0"
            imageClassName="object-cover object-top transition-opacity duration-500"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${OVERLAYS[thumb]} transition-all duration-500`}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 bg-white/20 rounded-full blur-3xl" />
            </div>
          </>
        )}

        {product.badge && (
          <span
            className={`absolute top-4 left-4 z-10 px-3 py-1.5 text-sm font-bold rounded-full ${BADGE_COLORS[product.badge] ?? "bg-white text-foreground"}`}
          >
            {product.badge}
          </span>
        )}

        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          <button
            onClick={onShare}
            aria-label={shareLabel}
            className="p-2.5 bg-background/90 backdrop-blur-sm border border-border rounded-full hover:bg-muted transition-colors shadow-sm"
          >
            {copied ? (
              <CheckCircle className="w-4 h-4 text-primary" />
            ) : (
              <Share2 className="w-4 h-4 text-foreground" />
            )}
          </button>
          <button
            onClick={onWishlistToggle}
            aria-label={wishlistLabel}
            className={`p-2.5 rounded-full backdrop-blur-sm border transition-colors shadow-sm ${wishlisted ? "bg-primary text-primary-foreground border-primary" : "bg-background/90 border-border hover:bg-muted text-foreground"}`}
          >
            <Heart className={`w-4 h-4 ${wishlisted ? "fill-white" : ""}`} />
          </button>
        </div>

        {galleryCount > 1 && (
          <>
            <button onClick={onPrev} aria-label="Previous" className={`left-3 ${navBtnClass}`}>
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button onClick={onNext} aria-label="Next" className={`right-3 ${navBtnClass}`}>
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {Array.from({ length: galleryCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => onThumbChange(i)}
                  className="h-1.5 rounded-full bg-white/70 hover:bg-white transition-all duration-300"
                  style={{
                    width: thumb === i ? 20 : 6,
                    opacity: thumb === i ? 1 : 0.6,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {galleryCount > 1 && (
        <div className="flex gap-2">
          {hasGallery
            ? galleryImages.map((src, i) => (
                <button
                  key={src}
                  onClick={() => onThumbChange(i)}
                  className={`relative flex-1 h-[72px] sm:h-[88px] rounded-xl overflow-hidden transition-all duration-200 ${thumb === i ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "opacity-55 hover:opacity-90"}`}
                >
                  <ProductImage
                    src={src}
                    alt={`${displayName} thumbnail ${i + 1}`}
                    className="absolute inset-0"
                    imageClassName="object-cover object-top"
                    sizes="120px"
                  />
                </button>
              ))
            : OVERLAYS.map((overlay, i) => (
                <button
                  key={i}
                  onClick={() => onThumbChange(i)}
                  className={`relative flex-1 h-[72px] sm:h-[88px] rounded-xl overflow-hidden transition-all duration-200 ${thumb === i ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "opacity-55 hover:opacity-90"}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient ?? "from-muted to-muted"}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${overlay}`} />
                </button>
              ))}
        </div>
      )}
    </div>
  );
}
