import Navbar from "@src/components/Navbar/Navbar";
import Footer from "@src/components/Footer/Footer";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
