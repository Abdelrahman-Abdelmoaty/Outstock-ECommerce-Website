import Navbar from "@src/components/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import favicon from "@public/assets/images/favi.png";
import Footer from "@src/components/Footer/Footer";
import ReduxProvider from "@src/redux/ReduxProvider";

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
      <body className="">
        <ReduxProvider>
          {/* <div className="w-[100%]  xl:w-[80%] 2xl:w-[65%] mx-auto bg-white px-2 flex flex-col items-center"> */}
          <Navbar />
          {children}
          <Footer />
          {/* </div> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
