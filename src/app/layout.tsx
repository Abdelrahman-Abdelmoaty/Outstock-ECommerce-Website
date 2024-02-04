import "./globals.css";
import type { Metadata } from "next";
import favicon from "@public/assets/images/favicon.ico";
import StoreProvider from "@src/redux/StoreProvider";
import { cookies } from "next/headers";
import { Cart, User } from "@src/utils/types";
import { getUserCart, getUserData } from "@src/utils/actions";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Outstock E-Commerce Website",
  description: "Developed by Abdelrhman Abdelmoaty",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let user: User | null = null;
  let cart: Cart = {
    products: [],
  };

  const currentUser = cookies().get("currentUser")?.value;
  if (currentUser) {
    user = await getUserData();
    cart = await getUserCart();
  } else {
    // Else It's Fine But No User
    const tempCart = cookies().get("tempCart")?.value;
    if (tempCart) {
      cart = {
        ...cart,
        products: (JSON.parse(tempCart) as Cart).products,
      };
    }
  }

  return (
    <html lang="en">
      <link rel="icon" href="app/favicon.ico" />
      <body className={poppins.className}>
        <StoreProvider user={user} cart={cart}>
          <Toaster
            position="top-center"
            toastOptions={{
              classNames: {
                success: "!text-[var(--secondary-color)] ",
              },
            }}
          />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
