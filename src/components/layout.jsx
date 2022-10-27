import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="z-10 mb-16 flex-grow pt-20">{children}</main>
      <Footer />
    </>
  );
}
