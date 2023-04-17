import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";
import { NavLink } from "./nav-link";

export const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

NavLink.displayName = "NavLink";
export const getRootLayout = (page) => <RootLayout>{page}</RootLayout>;
