"use client";
import { useTranslations } from "next-intl";
import { X, ShoppingCart } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { CartItem } from "./types";

interface Props {
  cart: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (id: number) => void;
  totalItems: number;
  totalPrice: number;
}

export default function CartDrawer({
  cart,
  isOpen,
  onClose,
  onRemove,
  totalItems,
  totalPrice,
}: Props) {
  const t = useTranslations("CartDrawer");
  if (!isOpen) return null;

  const impactCount = cart.reduce((s, i) => s + i.quantity * 2, 0);

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="w-full max-w-sm bg-background shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-bold text-lg">
            {t("title")} ({totalItems})
          </h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-4">
              <ShoppingCart className="w-12 h-12 opacity-20" />
              <p className="text-sm">{t("empty")}</p>
              <button
                onClick={onClose}
                className="text-sm text-primary font-medium hover:underline"
              >
                {t("continueShopping")}
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-3">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex-shrink-0`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{item.name}</p>
                  <p className="text-xs text-primary mt-0.5">
                    🌿 {item.impact}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-sm">
                      ${item.price} × {item.quantity}
                    </span>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-xs text-muted-foreground hover:text-destructive transition-colors"
                    >
                      {t("remove")}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>{t("total")}</span>
              <span>${totalPrice}</span>
            </div>
            <div className="bg-primary/10 rounded-xl p-3 text-xs text-center text-primary font-medium">
              🌿 {t("impact", { count: impactCount })}
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full text-center py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors"
            >
              {t("checkout")} — ${totalPrice}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
