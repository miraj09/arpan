import { Users, Heart, Globe, Leaf } from "lucide-react";
import type { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Handwoven Meditation Cushion",
    price: 68,
    originalPrice: 85,
    category: "Wellness",
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    gradient: "from-primary/25 to-accent/35",
    impact: "Funds 2 medical consultations",
  },
  {
    id: 2,
    name: "Organic Herbal Tea Collection",
    price: 42,
    category: "Nutrition",
    rating: 4.9,
    reviews: 89,
    badge: "New",
    gradient: "from-primary/20 to-primary/10",
    impact: "Iron supplements for 5 children",
  },
  {
    id: 3,
    name: "Sustainable Linen Tote",
    price: 38,
    originalPrice: 48,
    category: "Fashion",
    rating: 4.7,
    reviews: 203,
    gradient: "from-secondary to-primary/15",
    impact: "Prenatal vitamins for 3 mothers",
  },
  {
    id: 4,
    name: "Artisan Clay Face Mask Set",
    price: 55,
    category: "Beauty",
    rating: 4.6,
    reviews: 67,
    badge: "Limited",
    gradient: "from-accent/30 to-primary/20",
    impact: "Funds 1 eye examination",
  },
  {
    id: 5,
    name: "Bamboo Kitchen Essentials Kit",
    price: 72,
    originalPrice: 90,
    category: "Home",
    rating: 4.8,
    reviews: 156,
    gradient: "from-accent/35 to-primary/25",
    impact: "Surgical dressing for 2 patients",
  },
  {
    id: 6,
    name: "Cold-pressed Argan Oil",
    price: 48,
    category: "Beauty",
    rating: 4.9,
    reviews: 312,
    badge: "Top Rated",
    gradient: "from-accent/40 to-accent/20",
    impact: "ORS salts for 10 families",
  },
  {
    id: 7,
    name: "Upcycled Leather Journal",
    price: 34,
    category: "Stationery",
    rating: 4.5,
    reviews: 78,
    gradient: "from-muted to-primary/15",
    impact: "Health checkup for 1 person",
  },
  {
    id: 8,
    name: "Wellness Ritual Gift Box",
    price: 95,
    category: "Wellness",
    rating: 4.9,
    reviews: 45,
    badge: "Gift",
    gradient: "from-primary/20 to-accent/30",
    impact: "3 sessions of physiotherapy",
  },
];

// key maps to a translation key in messages/*.json → Categories.*
export const CATEGORIES = [
  {
    key: "wellness",
    count: 124,
    gradient: "from-primary to-primary/70",
    emoji: "🌿",
  },
  {
    key: "fashion",
    count: 89,
    gradient: "from-primary/90 to-secondary",
    emoji: "👜",
  },
  {
    key: "home",
    count: 203,
    gradient: "from-primary to-accent",
    emoji: "🏡",
  },
  {
    key: "nutrition",
    count: 67,
    gradient: "from-primary/80 to-primary",
    emoji: "🌱",
  },
  {
    key: "beauty",
    count: 156,
    gradient: "from-accent/90 to-primary",
    emoji: "✨",
  },
  {
    key: "gifts",
    count: 45,
    gradient: "from-primary to-accent/80",
    emoji: "🎁",
  },
];

// key maps to a translation key in messages/*.json → StatsBar.*
export const STATS = [
  { value: "50K+", key: "customers", icon: Users },
  { value: "₹2.4Cr", key: "funded", icon: Heart },
  { value: "25+", key: "countries", icon: Globe },
  { value: "800+", key: "products", icon: Leaf },
];

export const TESTIMONIALS = [
  {
    name: "Sarah K.",
    location: "Portland, USA",
    rating: 5,
    text: "I love that every purchase I make actually helps someone access healthcare. The products are beautiful and the cause is meaningful.",
    product: "Wellness Ritual Gift Box",
  },
  {
    name: "Priya M.",
    location: "London, UK",
    rating: 5,
    text: "The quality of the handwoven products is outstanding. Knowing my money goes to fund medical care makes it feel even more special.",
    product: "Handwoven Meditation Cushion",
  },
  {
    name: "Carlos R.",
    location: "Mexico City, MX",
    rating: 5,
    text: "Arpan has completely changed how I think about shopping. I now buy consciously, knowing the impact is real and verified.",
    product: "Bamboo Kitchen Essentials Kit",
  },
  {
    name: "Aisha N.",
    location: "Nairobi, KE",
    rating: 5,
    text: "As someone from a country that benefits from UHDP programs, seeing people shop here fills me with hope. Beautiful initiative.",
    product: "Organic Herbal Tea Collection",
  },
];

// Internal category values used for filtering PRODUCTS — keep in English
export const FILTER_TABS = [
  "All",
  "Wellness",
  "Nutrition",
  "Fashion",
  "Beauty",
  "Home",
  "Stationery",
];

// Maps English filter-tab value → translation key in messages → FeaturedProducts.*
export const TAB_KEY: Record<string, string> = {
  All: "all",
  Wellness: "wellness",
  Nutrition: "nutrition",
  Fashion: "fashion",
  Beauty: "beauty",
  Home: "home",
  Stationery: "stationery",
};

export const BADGE_COLORS: Record<string, string> = {
  New: "bg-primary text-primary-foreground",
  Bestseller: "bg-primary text-primary-foreground",
  Limited: "bg-accent text-accent-foreground",
  Gift: "bg-secondary text-secondary-foreground",
  "Top Rated": "bg-primary/80 text-primary-foreground",
};
