export interface Product {
  id: string;
  title: string;
  icon: string;
  priceDisplay: string;
  originalPrice?: string;
  features?: string[];
  isAvailable: boolean;
  ctaText: string;
  themeColor: 'cta' | 'purple' | 'blue' | 'black';
}

export interface ModalState {
  isOpen: boolean;
  productName: string;
}
