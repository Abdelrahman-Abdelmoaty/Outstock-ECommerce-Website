import { Metadata } from "next";
import PrivateRoute from "@src/redux/components/PrivateRouter";

export const metadata: Metadata = {
  title: "Customer Login",
  description: "Developed by Abdelrhman Abdelmoaty",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <PrivateRoute>{children}</PrivateRoute>;
}
