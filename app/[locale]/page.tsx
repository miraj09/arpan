"use client";

import { useState, useEffect } from "react";
import type { Product, CartItem } from "@/components/homepage/types";
import AnnouncementBar   from "@/components/homepage/AnnouncementBar";
import Navbar            from "@/components/homepage/Navbar";
import CartDrawer        from "@/components/homepage/CartDrawer";
import Hero              from "@/components/homepage/Hero";
import StatsBar          from "@/components/homepage/StatsBar";
import Categories        from "@/components/homepage/Categories";
import FeaturedProducts  from "@/components/homepage/FeaturedProducts";
import ImpactSection     from "@/components/homepage/ImpactSection";
import GallerySection    from "@/components/homepage/GallerySection";
import Testimonials      from "@/components/homepage/Testimonials";
import TrustStrip        from "@/components/homepage/TrustStrip";
import Newsletter        from "@/components/homepage/Newsletter";
import SiteFooter        from "@/components/homepage/SiteFooter";
import ScrollToTopFab       from "@/components/homepage/ScrollToTopFab";
import WelcomeBannerPopup   from "@/components/homepage/WelcomeBannerPopup";

export default function HomePage() {
  const [cart, setCart]         = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const [showFab, setShowFab]   = useState(false);
  const [addedId, setAddedId]   = useState<number | null>(null);

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
      setShowFab(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) return prev.map((i) => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...product, quantity: 1 }];
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  const removeFromCart = (id: number) => setCart((prev) => prev.filter((i) => i.id !== id));
  const toggleWishlist = (id: number) =>
    setWishlist((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  const totalItems = cart.reduce((s: number, i: CartItem) => s + i.quantity, 0);
  const totalPrice = cart.reduce((s: number, i: CartItem) => s + i.price * i.quantity, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Navbar totalItems={totalItems} onCartOpen={() => setCartOpen(true)} scrolled={scrolled} />
      <CartDrawer cart={cart} isOpen={cartOpen} onClose={() => setCartOpen(false)}
        onRemove={removeFromCart} totalItems={totalItems} totalPrice={totalPrice} />
      <main>
        <Hero wishlist={wishlist} addedId={addedId} onAddToCart={addToCart} onToggleWishlist={toggleWishlist} />
        <StatsBar />
        <Categories />
        <FeaturedProducts wishlist={wishlist} addedId={addedId} onAddToCart={addToCart} onToggleWishlist={toggleWishlist} />
        <ImpactSection />
        <GallerySection />
        <Testimonials />
        <TrustStrip />
        <Newsletter />
      </main>
      <SiteFooter />
      <ScrollToTopFab show={showFab} />
      <WelcomeBannerPopup />
    </div>
  );
}
