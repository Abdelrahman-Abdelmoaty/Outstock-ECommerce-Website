import Navbar from "@src/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@src/components/Footer/Footer";
import ReduxProvider from "@src/redux/components/ReduxProvider";
import Loader from "@src/redux/components/Loader";
import { cookies } from "next/headers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outstock E-Commerce Website",
  description: "Developed by Abdelrhman Abdelmoaty",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Loader>{children}</Loader>
        </ReduxProvider>
      </body>
    </html>
  );
}
