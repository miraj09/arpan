"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { CheckCircle2, Lock, ShieldCheck, Truck } from "lucide-react";
import Navbar from "@/components/homepage/Navbar";
import SiteFooter from "@/components/homepage/SiteFooter";
import { PRODUCTS } from "@/components/homepage/data";
import type { CartItem } from "@/components/homepage/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const t = useTranslations("Checkout");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = cart;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal >= 75 ? 0 : 8;
  const total = subtotal + shipping;
  const impactCount = items.reduce((sum, item) => sum + item.quantity * 2, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPlaced(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        totalItems={totalItems}
        onCartOpen={() => {}}
        scrolled={scrolled}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            {t("label")}
          </p>
          <h1 className="text-3xl sm:text-4xl font-black mt-2">{t("title")}</h1>
          <p className="text-muted-foreground mt-2">{t("description")}</p>
        </div>

        {placed ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="inline-flex items-center gap-2 text-primary font-semibold">
                <CheckCircle2 className="w-5 h-5" />
                {t("successTag")}
              </div>
              <CardTitle className="text-2xl">{t("successTitle")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>{t("successDescription")}</p>
              <p className="text-sm">
                🌿 {t("impact", { count: impactCount })}
              </p>
              <Button className="mt-2" onClick={() => setPlaced(false)}>
                {t("placeAnother")}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 lg:items-start">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>{t("contactTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t("firstName")}</Label>
                        <Input
                          id="firstName"
                          required
                          placeholder={t("firstNamePlaceholder")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t("lastName")}</Label>
                        <Input
                          id="lastName"
                          required
                          placeholder={t("lastNamePlaceholder")}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("email")}</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder={t("emailPlaceholder")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("phone")}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t("phonePlaceholder")}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t("shippingTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">{t("address")}</Label>
                      <Input
                        id="address"
                        required
                        placeholder={t("addressPlaceholder")}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-2 sm:col-span-1">
                        <Label htmlFor="city">{t("city")}</Label>
                        <Input
                          id="city"
                          required
                          placeholder={t("cityPlaceholder")}
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-1">
                        <Label htmlFor="state">{t("state")}</Label>
                        <Input
                          id="state"
                          required
                          placeholder={t("statePlaceholder")}
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-1">
                        <Label htmlFor="postalCode">{t("postalCode")}</Label>
                        <Input
                          id="postalCode"
                          required
                          placeholder={t("postalCodePlaceholder")}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">{t("notes")}</Label>
                      <Textarea
                        id="notes"
                        placeholder={t("notesPlaceholder")}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t("paymentTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">{t("cardName")}</Label>
                      <Input
                        id="cardName"
                        required
                        placeholder={t("cardNamePlaceholder")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">{t("cardNumber")}</Label>
                      <Input
                        id="cardNumber"
                        inputMode="numeric"
                        required
                        placeholder="1234 1234 1234 1234"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">{t("expiry")}</Label>
                        <Input id="expiry" required placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">{t("cvc")}</Label>
                        <Input id="cvc" required placeholder="123" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4 lg:sticky lg:top-24 self-start">
                <Card>
                  <CardHeader>
                    <CardTitle>{t("summaryTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start justify-between gap-3"
                        >
                          <div>
                            <p className="font-medium text-sm leading-tight">
                              {item.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {t("quantity", { qty: item.quantity })}
                            </p>
                          </div>
                          <p className="text-sm font-semibold">
                            {formatPrice(item.price * item.quantity, locale)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-border space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t("subtotal")}
                        </span>
                        <span>{formatPrice(subtotal, locale)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          {t("shipping")}
                        </span>
                        <span>
                          {shipping === 0 ? t("free") : formatPrice(shipping, locale)}
                        </span>
                      </div>
                      <div className="flex justify-between font-bold text-base pt-2 border-t border-border">
                        <span>{t("total")}</span>
                        <span>{formatPrice(total, locale)}</span>
                      </div>
                    </div>

                    <div className="bg-primary/10 rounded-xl px-3 py-2 text-xs text-primary font-medium">
                      🌿 {t("impact", { count: impactCount })}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-foreground" />
                      <span>{t("securePayment")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-foreground" />
                      <span>{t("delivery")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-foreground" />
                      <span>{t("returns")}</span>
                    </div>
                  </CardContent>
                </Card>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  {t("placeOrder")}
                </Button>
              </div>
            </div>
          </form>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
