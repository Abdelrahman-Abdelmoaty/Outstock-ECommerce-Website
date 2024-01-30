import "./globals.css";
import type { Metadata } from "next";
import ReduxProvider from "@src/redux/components/ReduxProvider";
import Loader from "@src/redux/components/Loader";
import favicon from "@public/assets/images/favicon.ico";
import StoreProvider from "@src/redux/StoreProvider";
import { cookies } from "next/headers";
import { USER_CART_URL, USER_DATA_URL } from "@src/utils/URLS";
import { Cart, CartProduct, Product, User } from "@src/utils/types";
import { escape } from "querystring";

export const metadata: Metadata = {
  title: "Outstock E-Commerce Website",
  description: "Developed by Abdelrhman Abdelmoaty",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let cart: Cart = {
    products: [],
  };

  let user: User | null = null;
  const currentUser = cookies().get("currentUser")?.value;
  if (currentUser) {
    const response = await fetch(USER_DATA_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${currentUser}`,
      },
    });
    const res = await response.json();
    user = res.data;
    if (user?.cart) {
      cart = user.cart;
    }
    // Else It's Fine But No User
  }
  const tempCart = cookies().get("tempCart")?.value;
  if (tempCart) {
    cart = JSON.parse(tempCart);
  }

  return (
    <html lang="en">
      <link rel="icon" href={favicon.src} sizes="any" />
      <body>
        <StoreProvider user={user} cart={cart}>
          {/* <ReduxProvider> */}
          {/* <Loader> */}
          {children}
          {/* </Loader> */}
          {/* </ReduxProvider> */}
        </StoreProvider>
      </body>
    </html>
  );
}
