import Wrapper from "@src/components/Wrapper/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Login",
  description: "Developed by Abdelrhman Abdelmoaty",
};
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}
