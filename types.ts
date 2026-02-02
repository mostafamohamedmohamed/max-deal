
export interface Product {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  oldPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  isFlashSale?: boolean;
  isNew?: boolean;
  isHot?: boolean;
  description?: string;
  descriptionAr?: string;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  icon: string;
  subcategories: string[];
}

export type Language = 'en' | 'ar';
export type Currency = 'USD' | 'EUR' | 'EGP';
export type Page = 'Home' | 'Sell' | 'Checkout' | 'Shop' | 'Blog' | 'Pages' | 'Account' | 'Cart' | 'Privacy' | 'Success' | 'Track' | 'FAQ' | 'Contact' | 'Dashboard';

export interface CartItem extends Product {
  quantity: number;
}
