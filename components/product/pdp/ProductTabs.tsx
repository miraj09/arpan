"use client";

import { Star } from "lucide-react";
import type { Product } from "@/components/homepage/types";
import type { ProductDetail } from "../productData";

export type ProductTab = "description" | "details" | "reviews";

interface Props {
  product: Product;
  details: ProductDetail;
  activeTab: ProductTab;
  onTabChange: (tab: ProductTab) => void;
  tabs: { key: ProductTab; label: string }[];
  reviewsLabel: string;
  verifiedPurchaseLabel: string;
  specsHeaderLabel: string;
}

export default function ProductTabs({
  product,
  details,
  activeTab,
  onTabChange,
  tabs,
  reviewsLabel,
  verifiedPurchaseLabel,
  specsHeaderLabel,
}: Props) {
  return (
    <div id="reviews" className="mt-12 sm:mt-16">
      <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
        {tabs.find((t) => t.key === activeTab)?.label}
      </p>

      <div className="flex gap-2 flex-wrap mb-8">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => onTabChange(key)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${activeTab === key ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"}`}
          >
            {label}
            {key === "reviews" && (
              <span className="ml-1.5 text-xs opacity-80">({product.reviews})</span>
            )}
          </button>
        ))}
      </div>

      <div className="py-2">
        {activeTab === "description" && (
          <div className="max-w-2xl bg-card border border-border rounded-3xl p-6 sm:p-8">
            <p className="text-muted-foreground leading-relaxed">{details.description}</p>
          </div>
        )}

        {activeTab === "details" && (
          <div className="max-w-lg">
            <dl className="rounded-3xl overflow-hidden border border-border">
              <div className="bg-primary/10 px-5 py-3 border-b border-border">
                <dt className="text-sm font-bold text-primary uppercase tracking-wider">
                  {specsHeaderLabel}
                </dt>
              </div>
              {details.specs.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`flex gap-6 px-5 py-3.5 border-b border-border last:border-b-0 ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}
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
            <div className="flex items-center gap-6 bg-card border border-border rounded-3xl p-5 sm:p-6">
              <div className="text-center flex-shrink-0">
                <p className="text-5xl font-black text-foreground">{product.rating}</p>
                <div className="flex gap-0.5 justify-center mt-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-3.5 h-3.5 ${j < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {product.reviews} {reviewsLabel}
                </p>
              </div>
              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-3">{star}</span>
                    <Star className="w-3 h-3 text-accent flex-shrink-0" />
                    <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full"
                        style={{
                          width: star === 5 ? "75%" : star === 4 ? "20%" : "5%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {details.reviews.map((review, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-3xl p-5 space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary/15 rounded-full flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-foreground text-sm">{review.name}</p>
                        {review.verified && (
                          <span className="text-[10px] text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded-full font-semibold">
                            {verifiedPurchaseLabel}
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
                <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
