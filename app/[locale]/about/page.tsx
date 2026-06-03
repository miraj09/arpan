"use client";

import { useEffect, useState } from "react";
import type { Product, CartItem } from "@/components/homepage/types";
import Navbar from "@/components/homepage/Navbar";
import SiteFooter from "@/components/homepage/SiteFooter";
import HeroSection from "@/components/about/HeroSection";
import MissionSection from "@/components/about/MissionSection";
import ImpactStoriesSection from "@/components/about/ImpactStoriesSection";
import ObjectivesGrid from "@/components/about/ObjectivesGrid";
import ArtisanGallery from "@/components/about/ArtisanGallery";
import ActivitiesSection from "@/components/about/ActivitiesSection";
import ImpactCTA from "@/components/about/ImpactCTA";
import ScrollToTopFab from "@/components/homepage/ScrollToTopFab";

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const [showFab, setShowFab] = useState(false);
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
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowFab(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const totalItems = cart.reduce((s: number, i: CartItem) => s + i.quantity, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar totalItems={totalItems} onCartOpen={() => {}} scrolled={scrolled} />

      <main>
        <HeroSection />
        <MissionSection />
        <ImpactStoriesSection />
        <ObjectivesGrid />
        <ArtisanGallery />
        <ActivitiesSection />
        <ImpactCTA />
      </main>

      <SiteFooter />
      <ScrollToTopFab show={showFab} />
    </div>
  );
}
