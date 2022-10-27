import { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import cn from "classnames";
import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function NavbarLink({ link, selectedLink, focusedLink, setNavbarIsOpen }) {
  return (
    <>
      <Link onClick={setNavbarIsOpen} href={`#${link}`}>
        {link}
      </Link>
      {focusedLink === link ? (
        <motion.div
          transition={{
            layout: {
              duration: 0.2,
              ease: "easeOut",
            },
          }}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            borderRadius: "8px",
          }}
          className="bg-primary-hover/25"
          layoutId="highlight"
        />
      ) : null}
      {selectedLink === link ? (
        <motion.div
          className="absolute right-4 bottom-0 left-4 h-1 rounded-2xl bg-primary-active"
          layoutId="active"
        />
      ) : null}
    </>
  );
}

export default function Header() {
  const [focusedLink, setFocusedLink] = useState(null);
  const [selectedLink, setSelectedLink] = useState("Home");
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [isUnderLargeSize, setIsUnderLargeSize] = useState(false);
  const links = ["Home", "About", "Documentation", "Member"];

  // Variabel variants untuk
  const containerVariants = {
    hidden: {
      right: navbarIsOpen ? 0 : "-300px",
      left: navbarIsOpen ? "0" : null,
      opacity: 0,
    },
    show: {
      right: navbarIsOpen ? 0 : "-300px",
      left: navbarIsOpen ? "0" : null,
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  useEffect(() => {
    // Karena Next.js melakukan pre-rendering jadi otomatis window ini akan undefine
    // Jadi untuk mendapatkan property innerWidth dari window itu menggunakan useEffect hook
    // Karena useEffect hook berjalan di client-side

    const windowWidth = window.innerWidth;
    setIsUnderLargeSize(windowWidth <= 1024);
  }, []);

  return (
    <header
      className="itemVariantss-center fixed top-0 left-0 right-0 z-50 flex items-center justify-between 
    bg-primary-main px-10 py-4 font-poppins text-white shadow-md md:px-20 xl:px-[120px]"
    >
      <div className="itemVariantss-center flex items-center gap-[10px]">
        <Image
          src="/images/kampus-merdeka-logo.png"
          width={50}
          height={50}
          sizes="100vw"
          className="h-auto w-full"
          alt="Kampus Merdeka Logo"
          quality={100}
        />
        <Image
          src="/images/itk-logo.png"
          width={50}
          height={50}
          sizes="40vw"
          className="h-auto w-full"
          alt="Kampus Merdeka Logo"
          quality={100}
        />
        <h1 className="text-s-medium font-bold">BLOCKCHAIN ITK</h1>
      </div>

      <LayoutGroup>
        <nav>
          <BiMenu
            size={32}
            className="cursor-pointer lg:hidden"
            onClick={() => setNavbarIsOpen((prevCondition) => !prevCondition)}
          />
          <motion.ul
            className="itemVariantss-center absolute top-0 bottom-0 flex h-screen flex-col items-center justify-center 
            gap-8 bg-primary-second/90 backdrop-blur-sm lg:static lg:h-full lg:flex-row lg:gap-4 lg:bg-transparent"
            onMouseLeave={() => setFocusedLink(null)}
            variants={containerVariants}
            initial={!navbarIsOpen && isUnderLargeSize && "hidden"}
            animate={
              (navbarIsOpen && isUnderLargeSize) || !isUnderLargeSize
                ? "show"
                : "hidden"
            }
            layout
          >
            <BiX
              size={48}
              className="absolute top-12 cursor-pointer lg:hidden"
              onClick={() => setNavbarIsOpen((prevCondition) => !prevCondition)}
            />
            {links.map((link) => {
              return (
                <motion.li
                  className={cn("relative py-3 px-4 font-poppins ", {
                    [`text-l-bold text-primary-active lg:text-m-semibold`]:
                      selectedLink === link,
                    [`text-l-medium  text-white/60  lg:text-m-medium`]:
                      selectedLink !== link,
                  })}
                  key={link}
                  onFocus={() => setFocusedLink(() => link)}
                  onMouseEnter={() => setFocusedLink(() => link)}
                  onClick={() => setSelectedLink(() => link)}
                  variants={itemVariants}
                  layout
                >
                  <NavbarLink
                    link={link}
                    selectedLink={selectedLink}
                    focusedLink={focusedLink}
                    setNavbarIsOpen={() => {
                      if (isUnderLargeSize) {
                        setNavbarIsOpen((prevCondition) => !prevCondition);
                      }
                    }}
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>
      </LayoutGroup>
    </header>
  );
}
