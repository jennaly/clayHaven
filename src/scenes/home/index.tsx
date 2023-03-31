import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  isMenuToggled: Boolean;
};

const Home = ({ setSelectedPage, isMenuToggled }: Props) => {
  const darkScreen = isMenuToggled ? "brightness-50" : "";

  return (
    <div
      id="home"
      className={`${darkScreen} h-screen bg-home-bg bg-cover bg-center p-10 text-light`}
    >
      <motion.div
        className="mx-auto mt-10 flex h-full flex-col justify-between pb-10"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <h1 className="mx-auto w-5/6 text-center text-3xl uppercase">
          Clay Haven Studio
        </h1>
        <div className="flex flex-col gap-6">
          <p className="text-medium text-lg">
            Our studio is an open space with plenty of room to create on the
            wheel or handbuild.
          </p>
          <div className="bg-light text-center text-dark">
            <ActionButton setSelectedPage={setSelectedPage}>
              Learn More
            </ActionButton>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
