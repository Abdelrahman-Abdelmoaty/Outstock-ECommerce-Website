import Navbar from "@src/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@src/components/Header/Header";
import favicon from "@public/assets/images/favi.png";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

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
      <body className={`${poppins.className}`}>
        <Navbar />
        <Header />
        <div className="bg-[var(--primary-color)]">{children}</div>
      </body>
    </html>
  );
}
