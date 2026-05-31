export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  gradient: string;
  impact: string;
}

export interface CartItem extends Product {
  quantity: number;
}
