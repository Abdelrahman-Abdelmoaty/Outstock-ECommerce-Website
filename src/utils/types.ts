export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  rating: number;
  images: string[];
  category?: string;
  discount?: number;
  date?: string;
  color?: string;
}

export type User = {
  id: string;
  name: string;
  username: string;
  phoneNumber: string;
  email: string;
  password: string;
  isAdmin?: boolean;
};

export interface CartProduct extends Product {
  count: number;
}
export type Cart = {
  products: CartProduct[];
};
