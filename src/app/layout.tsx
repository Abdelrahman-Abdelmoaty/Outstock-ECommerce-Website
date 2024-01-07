import "./globals.css";
import type { Metadata } from "next";
import ReduxProvider from "@src/redux/components/ReduxProvider";
import Loader from "@src/redux/components/Loader";
import favicon from "@public/assets/images/favicon.ico";

export const metadata: Metadata = {
  title: "Outstock E-Commerce Website",
  description: "Developed by Abdelrhman Abdelmoaty",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href={favicon.src} sizes="any" />
      <body>
        <ReduxProvider>
          <Loader>{children}</Loader>
        </ReduxProvider>
      </body>
    </html>
  );
}
