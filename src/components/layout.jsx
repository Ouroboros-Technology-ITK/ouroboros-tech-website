import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="z-10 mb-16  flex-grow px-10 pt-20 md:px-20 xl:px-[120px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
