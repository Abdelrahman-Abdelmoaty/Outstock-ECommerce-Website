import Navbar from "@src/components/Navbar/Navbar";
import Header from "@src/components/Header/Header";
import { poppins } from "./layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <Header />
        <Main />
        {/* {children} */}
      </body>
    </html>
  );
}
