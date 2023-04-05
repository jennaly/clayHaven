import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import About from "@/assets/About.jpeg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  isMenuToggled: Boolean;
};

const index = ({ isMenuToggled, setSelectedPage }: Props) => {
  const darkScreen = isMenuToggled ? "brightness-50" : "";

  return (
    <div id="about" className={`${darkScreen} h-screen bg-clay`}>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
        className="h-screen"
      >
        <img src={About} className="h-1/3 w-full" />
        <div className="flex h-2/3 flex-col p-10">
          <HText>About Clay Haven</HText>

          <div className="mt-5 flex flex-col gap-5 overflow-y-auto ">
            <p>
              Clay Haven Studio was founded in 1921 by a group of passionate
              potters who wanted to create a space where they could gather and
              share their love for pottery-making. Originally located in a small
              basement, the studio quickly grew in popularity, and it wasn't
              long before they moved to a larger space on the outskirts of town.
            </p>
            <p>
              Over the years, the studio has seen many changes, but one thing
              has remained constant – our commitment to promoting the art and
              craft of pottery-making.
            </p>
            <p>
              Today, Clay Haven continues to be a hub for pottery enthusiasts
              and artists from all over the world. We're proud to have played a
              role in the development of the art of pottery-making, and we look
              forward to empowering the next generation of potters for many
              years to come.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default index;
