import { SelectedPage } from "@/shared/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "./Link";
import { motion } from "framer-motion";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isMenuToggled: Boolean;
  setIsMenuToggled: (value: Boolean) => void;
};

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isMenuToggled,
  setIsMenuToggled,
}: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full max-w-mobile-lg px-10 py-5 text-light`}
      >
        <div className={`${flexBetween} mx-auto w-full`}>
          <span>ClayHaven</span>
          <button onClick={() => setIsMenuToggled(true)}>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isMenuToggled && (
        <motion.div
          className="fixed right-0 bottom-0 z-40 h-full w-2/3 max-w-[250px] bg-dark text-light drop-shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end px-12 py-5">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="mx-auto mt-5 mr-12 flex w-2/3 flex-col gap-10 text-right text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setIsMenuToggled={setIsMenuToggled}
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
