import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="min-h-[80svh]">{children} </div>
      <Footer />
    </>
  );
}
