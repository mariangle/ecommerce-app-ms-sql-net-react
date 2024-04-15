import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Layout({ children }) {
  return (
    <>
      <CookieConsent />
      <Header />
      <div className="min-h-[80svh]">{children} </div>
      <Footer />
    </>
  );
}
