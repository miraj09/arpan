"use client";

import type { Product } from "@/components/homepage/types";
import ProductCard from "../ProductCard";

interface Props {
  products: Product[];
  getDisplayName: (p: Product) => string;
  eyebrow: string;
  heading: string;
  wishlistLabel: string;
}

export default function RelatedProducts({
  products,
  getDisplayName,
  eyebrow,
  heading,
  wishlistLabel,
}: Props) {
  if (products.length === 0) return null;

  return (
    <div className="mt-16 pt-14 border-t border-border">
      <div className="space-y-2 mb-10">
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          {eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-foreground">{heading}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            displayName={getDisplayName(p)}
            wishlistLabel={wishlistLabel}
          />
        ))}
      </div>
    </div>
  );
}
