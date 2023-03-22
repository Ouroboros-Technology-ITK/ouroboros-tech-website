import * as ToggleGroupRadix from "@radix-ui/react-toggle-group";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, useState } from "react";
import { MdMenu } from "react-icons/md";

import logoItk from "../../public/images/logo-itk.png";
import logoKm from "../../public/images/logo-km.png";
import logoOuroborosTosca from "../../public/images/logo-ouroboros-tosca.png";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/member",
    label: "Member",
  },
  {
    href: "/documentation",
    label: "Documentation",
  },
  {
    href: "/our-programs",
    label: "Our Programs",
  },
];

const NavLink = forwardRef(({ children, href, ...props }, forwadedRef) => (
  <Link
    {...props}
    ref={forwadedRef}
    href={href}
    className="group h-max w-max overflow-hidden rounded-md text-2xl font-medium text-brand-secondary-00/90 outline-none duration-200 hover:text-brand-secondary-00/100 focus:text-brand-secondary-00/100 focus:outline-none focus:ring-1 focus:ring-brand-secondary-00/60 active:brightness-90 sm:text-sm md:text-base xl:text-lg"
  >
    <div className="before:content-[' '] relative z-50 w-max px-1 before:absolute before:bottom-0 before:left-0 before:top-1/2 before:w-5/12 before:rounded-sm before:bg-brand-trinity-06/30 before:transition-all before:duration-200 hover:before:w-full group-hover:before:bg-brand-trinity-06/100 group-focus:before:w-full group-focus:before:bg-brand-trinity-06/100 group-data-[state=on]:before:w-full group-data-[state=on]:before:bg-brand-trinity-06/100">
      <span className="relative">{children}</span>
    </div>
  </Link>
));

export const RootLayout = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");

  const handleToggleMenu = () => {
    if (menuIsOpen) {
      document.body.classList.remove("overflow-y-hidden", "sm:overflow-y-auto");
    } else {
      document.body.classList.add("overflow-y-hidden", "sm:overflow-y-auto");
    }
    setMenuIsOpen((currentState) => !currentState);
  };

  return (
    <>
      <header className="sticky top-0 z-50 flex justify-center bg-brand-secondary-06/90 p-4 backdrop-blur-md">
        <div className="flex w-full items-center justify-between sm:container">
          <div className="flex items-center gap-3 lg:gap-4 2xl:gap-5">
            <Image
              src={logoItk}
              alt="ITK Logo"
              className="h-8 w-full md:h-12"
            />
            <Image src={logoKm} alt="KM Logo" className="h-8 w-full md:h-12" />
            <Image
              src={logoOuroborosTosca}
              alt="Logo Ouroboros Tosca"
              className="h-8 w-full md:h-12"
            />
          </div>

          <nav className="flex items-center">
            <button
              type="button"
              onClick={handleToggleMenu}
              className="sm:hidden"
            >
              <MdMenu className="h-8 w-8 text-brand-secondary-00" />
            </button>

            <ToggleGroupRadix.Root type="single" value={currentPage} asChild>
              <ul
                className={cn(
                  "absolute top-full left-0 right-0 bottom-0 h-screen w-full flex-col gap-8 bg-brand-secondary-06 py-8 px-2 pl-8 sm:static sm:flex sm:h-max sm:flex-row sm:gap-3 sm:bg-transparent sm:px-0 sm:py-0 md:gap-4 xl:gap-6 2xl:gap-8",
                  {
                    hidden: !menuIsOpen,
                    flex: menuIsOpen,
                  },
                )}
              >
                {navLinks.map(({ href, label }) => (
                  <li
                    className="flex items-center"
                    key={`header-nav-link-${label}`}
                  >
                    <ToggleGroupRadix.Item
                      value={href}
                      onClick={() => setCurrentPage(href)}
                      tabIndex={0}
                      asChild
                    >
                      <NavLink href={href}>{label}</NavLink>
                    </ToggleGroupRadix.Item>
                  </li>
                ))}
              </ul>
            </ToggleGroupRadix.Root>
          </nav>
        </div>
      </header>
      <main className="flex-1 px-4 py-20">{children}</main>
      <footer className="h-max justify-start bg-brand-secondary-06 p-4">
        <div className="container m-auto">Footer</div>
      </footer>
    </>
  );
};

NavLink.displayName = "NavLink";
export const getRootLayout = (page) => <RootLayout>{page}</RootLayout>;
