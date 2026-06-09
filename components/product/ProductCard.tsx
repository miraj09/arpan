"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Heart, Star } from "lucide-react";
import type { Product } from "@/components/homepage/types";
import { BADGE_COLORS } from "@/components/homepage/data";
import ProductImage from "./ProductImage";
import { formatPrice } from "@/lib/utils";

interface Props {
  product: Product;
  displayName: string;
  wishlistLabel?: string;
  onWishlistClick?: (e: React.MouseEvent) => void;
  showWishlist?: boolean;
  isWishlisted?: boolean;
}

export default function ProductCard({
  product,
  displayName,
  wishlistLabel = "Wishlist",
  onWishlistClick,
  showWishlist = false,
  isWishlisted = false,
}: Props) {
  const locale = useLocale();
  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-foreground/5 transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      <div className="block relative h-56 flex-shrink-0 bg-muted">
        {product.image ? (
          <ProductImage
            src={product.image}
            alt={displayName}
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
        {showWishlist && onWishlistClick && (
          <button
            onClick={onWishlistClick}
            aria-label={wishlistLabel}
            className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full z-10 opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95"
          >
            <Heart
              className={`w-4 h-4 ${isWishlisted ? "fill-primary text-primary" : "text-muted-foreground"}`}
            />
          </button>
        )}
      </div>

      <div className="p-5 space-y-3 flex flex-col flex-1">
        <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">
          {product.category}
        </p>
        <p className="font-bold text-foreground leading-snug line-clamp-2 flex-1 group-hover:text-primary transition-colors">
          {displayName}
        </p>
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
        <div className="flex items-center gap-2 pt-1">
          <span className="font-black text-foreground text-lg">{formatPrice(product.price, locale)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice, locale)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
