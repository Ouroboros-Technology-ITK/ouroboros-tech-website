import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

import { ToggleGroup, ToggleGroupItem } from "@/components";

import { useMediaQuery } from "@/hooks";

import logoItk from "../../../public/images/logo-itk.png";
import logoKm from "../../../public/images/logo-km.png";
import logoOuroborosTosca from "../../../public/images/logo-ouroboros-tosca.png";
import { NavLink } from "./nav-link";

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

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isUnderLG = useMediaQuery("(max-width: 1024px)");

  const handleToggleMenu = () => {
    if (isUnderLG) {
      console.log({ isUnderLG });
      document.body.style.overflow = menuIsOpen ? "auto" : "hidden";
      setMenuIsOpen((currentState) => !currentState);
    } else {
      setMenuIsOpen(true);
    }
  };

  useEffect(() => {
    if (!isUnderLG) {
      setMenuIsOpen(false);
      document.body.style.overflow = "auto";
    }
  }, [isUnderLG]);

  return (
    <header className="sticky left-0 right-0 top-0 z-50 flex w-full justify-center bg-brand-secondary-07/90 p-4 backdrop-blur-md">
      <div className="flex w-full items-center justify-between sm:container">
        <Link href="/" className="flex items-center gap-3 lg:gap-4 2xl:gap-5">
          <Image
            src={logoItk}
            alt="ITK Logo"
            className="h-8 w-full md:h-12"
            priority
          />
          <Image
            src={logoKm}
            alt="KM Logo"
            className="h-8 w-full md:h-12"
            priority
          />
          <Image
            src={logoOuroborosTosca}
            alt="Logo Ouroboros Tosca"
            className="h-8 w-full md:h-12"
            priority
          />
        </Link>

        <nav className="flex items-center">
          <button type="button" onClick={handleToggleMenu}>
            <MdMenu className="h-6 w-6 cursor-pointer lg:hidden" />
          </button>

          <ToggleGroup
            onValueChange={handleToggleMenu}
            type="single"
            className={cn(
              "absolute left-0 flex h-screen w-full flex-col items-center justify-center gap-7 bg-brand-secondary-06 px-4 py-8 transition-all duration-500 lg:static lg:h-full lg:flex-row lg:bg-transparent lg:p-0",
              {
                "-top-[1000px] opacity-0": !menuIsOpen && isUnderLG,
                "bottom-0 top-0 opacity-100": menuIsOpen && isUnderLG,
              },
            )}
          >
            {navLinks.map(({ label, href }) => {
              return (
                <ToggleGroupItem key={href} value={href} asChild>
                  <NavLink href={href}>{label}</NavLink>
                </ToggleGroupItem>
              );
            })}
            <button
              type="button"
              className="absolute bottom-12 rounded-full border-2 border-brand-secondary-00/30 p-4 text-brand-secondary-00/50 lg:hidden"
              onClick={handleToggleMenu}
            >
              <MdClose className="h-5 w-5" />
            </button>
          </ToggleGroup>
        </nav>
      </div>
    </header>
  );
};
