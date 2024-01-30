export type TempProduct = {
  src: string;
  secondSrc?: string;
  text: string;
  rating: number;
  price: number;
  discount?: number;
  newProduct?: boolean;
};

export type BlogPost = {
  imgUrl: string;
  category: string;
  title: string;
  date: string;
  desc: string;
};

export type LocalStorage = {
  products: { id: number; count: number }[];
};

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
  cart: Cart;
};

export interface CartProduct extends Product {
  count: number;
}
export type Cart = {
  products: CartProduct[];
};
