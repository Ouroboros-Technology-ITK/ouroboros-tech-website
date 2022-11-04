import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  const { asPath } = useRouter();
  return (
    <>
      <Header />
      <AnimatePresence initial={false}>
        <motion.main
          key={asPath}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={{
            hidden: { opacity: 0, x: -200, y: 0 },
            enter: { opacity: 1, x: 0, y: 0 },
            exit: { opacity: 0, x: 0, y: -100 },
          }}
          transition={{ type: "linear" }}
          className="z-10 flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
