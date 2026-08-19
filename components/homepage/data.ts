import { Users, Heart, Globe, Leaf } from "lucide-react";
import type { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "White Rose Hand-Stitched Shirt",
    price: 11000,
    // originalPrice: 72,
    category: "Fashion",
    rating: 4.9,
    reviews: 47,
    badge: "Bestseller",
    image: "/arpan-hand-stitch/white-rose-shirt-thumb.jpeg",
    images: [
      "/arpan-hand-stitch/white-rose-shirt-thumb.jpeg",
      "/arpan-hand-stitch/white-rose-shirt-1.jpeg",
      "/arpan-hand-stitch/white-rose-shirt-2.jpeg",
    ],
    gradient: "from-primary/25 to-accent/35",
    impact: "Funds 2 medical consultations",
  },
  {
    id: 2,
    name: "Forest Green Floral Hand-Stitched Shirt",
    price: 9690,
    category: "Fashion",
    rating: 4.8,
    reviews: 31,
    badge: "New",
    image: "/arpan-hand-stitch/green-floral-shirt-thumb.jpeg",
    images: [
      "/arpan-hand-stitch/green-floral-shirt-thumb.jpeg",
      "/arpan-hand-stitch/green-floral-shirt-detail.jpeg",
    ],
    gradient: "from-primary/20 to-primary/10",
    impact: "Iron supplements for 5 children",
  },
  {
    id: 3,
    name: "Grey Embroidered Hand-Stitched Kurta",
    price: 17070,
    // originalPrice: 90,
    category: "Fashion",
    rating: 4.9,
    reviews: 28,
    badge: "Top Rated",
    image: "/arpan-hand-stitch/grey-kurta-thumb.jpeg",
    images: [
      "/arpan-hand-stitch/grey-kurta-thumb.jpeg",
      "/arpan-hand-stitch/grey-kurta-detail-1.jpeg",
      "/arpan-hand-stitch/grey-kurta-detail-2.jpeg",
    ],
    gradient: "from-secondary to-primary/15",
    impact: "Prenatal vitamins for 3 mothers",
  },
  {
    id: 4,
    name: "Hand-Crafted Cat",
    price: 1100,
    category: "home",
    rating: 4.7,
    reviews: 19,
    image: "/arpan-hand-stitch/cat.jpg",
    images: [
      "/arpan-hand-stitch/cat.jpg",
    ],
    gradient: "from-primary/25 to-accent/35",
    impact: "Funds 2 medical consultations",
  }
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
    text: "I love that every purchase I make actually helps someone access healthcare. The hand-stitched embroidery is beautiful and the cause is meaningful.",
    product: "White Rose Hand-Stitched Shirt",
  },
  {
    name: "Priya M.",
    location: "London, UK",
    rating: 5,
    text: "The quality of the hand-stitched shirts is outstanding. Knowing my money goes to fund medical care makes it feel even more special.",
    product: "Forest Green Floral Hand-Stitched Shirt",
  },
  {
    name: "Carlos R.",
    location: "Mexico City, MX",
    rating: 5,
    text: "Arpan has completely changed how I think about shopping. I now buy consciously, knowing the impact is real and verified.",
    product: "Grey Embroidered Hand-Stitched Kurta",
  },
  {
    name: "Aisha N.",
    location: "Nairobi, KE",
    rating: 5,
    text: "As someone from a country that benefits from UHDP programs, seeing people shop here fills me with hope. Beautiful initiative.",
    product: "White Rose Hand-Stitched Shirt",
  },
];

// Internal category values used for filtering PRODUCTS — keep in English
export const FILTER_TABS = ["All", "Fashion"];

// Maps English filter-tab value → translation key in messages → FeaturedProducts.*
export const TAB_KEY: Record<string, string> = {
  All: "all",
  Fashion: "fashion",
};

export const BADGE_COLORS: Record<string, string> = {
  New: "bg-primary text-primary-foreground",
  Bestseller: "bg-primary text-primary-foreground",
  Limited: "bg-accent text-accent-foreground",
  Gift: "bg-secondary text-secondary-foreground",
  "Top Rated": "bg-primary/80 text-primary-foreground",
};
