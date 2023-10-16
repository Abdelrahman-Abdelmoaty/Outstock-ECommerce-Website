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

export type User = {
  name: string;
  username: string;
  email: string;
  password: string;
};

// //////////////////////////
export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  rating: number;
  images: string[];
  category: Category;
  discount: number;
  date: string;
  color: string;
};

export type Category = {
  id: string;
  name: string;
};
