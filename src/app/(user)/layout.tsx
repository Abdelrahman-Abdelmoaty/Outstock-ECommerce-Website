import Navbar from "@src/components/Navbar/Navbar";
import type { Metadata } from "next";
import Footer from "@src/components/Footer/Footer";
import { cookies } from "next/headers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outstock E-Commerce Website",
  description: "Developed by Abdelrhman Abdelmoaty",
};

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const isAdmin = cookies().get("isAdmin");
 
  return (
    <>
      {isAdmin?.value && (
        <div className="text-center pt-5">
          <Link href="/admin" className="font-semibold text-3xl hover:text-[var(--secondary-color)] ease-500">
            Go to Admin Page
          </Link>
        </div>
      )}
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
