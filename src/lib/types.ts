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

// //////////////////////////
export type Product = {
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
};

export type loginCredintials = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  name: string;
  username: string;
  phoneNumber: string;
  email: string;
  password: string;
};

export type signupFormData = {
  name: string;
  username: string;
  phoneNumber: string;
  email: string;
  password: string;
  password_confirmation: string;
};
