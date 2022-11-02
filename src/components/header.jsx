import { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import cn from "classnames";
import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function NavbarLink({ link, selectedLink, focusedLink, setNavbarIsOpen }) {
  return (
    <>
      <button
        type="button"
        onClick={setNavbarIsOpen}
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {link.title}
      </button>
      {focusedLink === link.title ? (
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
      {selectedLink === link.title ? (
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
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Member", path: "/member" },
    { title: "Documentation", path: "/documentation" },
    { title: "Our Program", path: "/our-program" },
  ];

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
    bg-primary-main px-10 py-2 font-poppins text-white shadow-md xs:py-6 md:px-20 xl:px-[120px]"
    >
      <div className="itemVariantss-center flex items-center gap-[10px]">
        <Image
          src="/images/logo-kampus-merdeka.png"
          width="0"
          height="0"
          sizes="100%"
          className="h-auto w-[13%] object-cover sm:w-[10%] xl:w-[7%] "
          alt="Kampus Merdeka Logo"
          quality={100}
        />
        <Image
          src="/images/logo-itk.png"
          width={50}
          height={50}
          sizes="100%"
          className="h-auto w-[10%] object-cover sm:w-[7%] xl:w-[5%]"
          alt="Kampus Merdeka Logo"
          quality={100}
        />

        <Image
          src="/images/ouroboros-logo-tosca-text.png"
          width="0"
          height="0"
          sizes="100%"
          className="h-auto w-[16%] object-cover sm:w-[12%] xl:w-[8%] "
          alt="Kampus Merdeka Logo"
          quality={100}
        />
      </div>

      <LayoutGroup>
        <nav>
          <BiMenu
            size={32}
            className="cursor-pointer lg:hidden"
            onClick={() => setNavbarIsOpen((prevCondition) => !prevCondition)}
          />
          <motion.ul
            className="absolute top-0 bottom-0 flex h-screen flex-col items-center  justify-center  gap-0 bg-primary-second/90 backdrop-blur-sm xs:gap-6 md:gap-12 lg:static lg:h-full lg:flex-row lg:gap-4 lg:bg-transparent"
            onMouseLeave={() => setFocusedLink(null)}
            variants={containerVariants}
            initial={!navbarIsOpen && isUnderLargeSize && "hidden"}
            animate={
              (navbarIsOpen && isUnderLargeSize) || !isUnderLargeSize
                ? "show"
                : "hidden"
            }
          >
            <BiX
              size={48}
              className="absolute top-6 cursor-pointer xs:top-12 md:top-24 lg:hidden"
              onClick={() => setNavbarIsOpen((prevCondition) => !prevCondition)}
            />
            {links.map((link) => {
              return (
                <Link key={link} href={link.path}>
                  <motion.li
                    className={cn(
                      "relative mt-4 py-2 px-6 font-poppins xs:mt-0 xs:py-3 xs:px-4 ",
                      {
                        [`text-xl font-semibold text-primary-active sm:text-2xl md:text-3xl lg:text-m-semibold`]:
                          selectedLink === link.title,
                        [`text-xl font-medium text-white/80 sm:text-2xl  md:text-3xl  lg:text-m-medium`]:
                          selectedLink !== link.title,
                      }
                    )}
                    onFocus={() => setFocusedLink(() => link.title)}
                    onMouseEnter={() => setFocusedLink(() => link.title)}
                    onClick={() => setSelectedLink(() => link.title)}
                    variants={itemVariants}
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
                </Link>
              );
            })}
          </motion.ul>
        </nav>
      </LayoutGroup>
    </header>
  );
}
