import Navbar from "@/composents/layout/Navbar";
import Footer from "@/composents/layout/Footer";
import CustomCursor from "@/composents/ui/CustomCursor";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
