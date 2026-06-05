export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  /** Thumbnail for cards, hero, and cart */
  image: string;
  /** Full gallery for PDP — thumbnail first, then detail shots */
  images: string[];
  /** Fallback when image paths are missing (e.g. stale cart items) */
  gradient?: string;
  impact: string;
}

export interface CartItem extends Product {
  quantity: number;
}
