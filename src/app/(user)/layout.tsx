import Navbar from "@src/components/Navbar/Navbar";
import type { Metadata } from "next";
import Footer from "@src/components/Footer/Footer";
import { cookies } from "next/headers";
import Wrapper from "@src/components/Wrapper/Wrapper";
import Hero from "@src/components/Hero/Hero";

export const metadata: Metadata = {
  title: "Outstock E-Commerce Website",
  description: "Developed by Abdelrhman Abdelmoaty",
};

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
