import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Classes from "@/assets/Classes.jpg";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  isMenuToggled: Boolean;
};

const index = ({ setSelectedPage, isMenuToggled }: Props) => {
  const darkScreen = isMenuToggled ? "brightness-50" : "";
  return (
    <div id="ourclasses" className={`${darkScreen} h-screen bg-clay`}>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.PotteryClasses)}
        className="h-screen"
      >
        <img src={Classes} className="h-1/3 w-full" />
        <div className="flex h-2/3 flex-col justify-between p-10">
          <div>
            <HText>Our Classes</HText>

            <div className="my-5 flex flex-col gap-5 overflow-y-auto ">
              <p>
                We believe that everyone has the potential to create beautiful
                pottery pieces. That's why we offer expert instructors who are
                passionate about pottery-making and are dedicated to helping you
                achieve your goals. Whether you're a beginner or an experienced
                potter, our instructors will provide you with the support and
                guidance you need to bring your vision to life.
              </p>
            </div>
          </div>
          <div className="bg-dark text-center text-light">
            <ActionButton setSelectedPage={setSelectedPage}>
              Check the schedule
            </ActionButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default index;
