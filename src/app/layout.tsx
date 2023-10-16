import Navbar from "@src/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import favicon from "@public/assets/images/favi.png";
import Footer from "@src/components/Footer/Footer";
import { Provider } from "react-redux";
import store from "@src/redux/store";

export const metadata: Metadata = {
  title: "Outstock E-Commerce Website",
  description: "Developed by Abdelrhman Abdelmoaty",
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
