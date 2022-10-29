import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="z-10 flex-grow">{children}</main>
      <Footer />
    </>
  );
}
