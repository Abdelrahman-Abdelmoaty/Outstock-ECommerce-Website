import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Customer Login",
  description: "Developed by Abdelrhman Abdelmoaty",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
