import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import About from "@/scenes/about";
import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";
import Classes from "@/scenes/classes";
import ContactUs from "@/scenes/contactUs";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isMenuToggled, setIsMenuToggled] = useState<Boolean>(false);

  useEffect(() => {
    setIsMenuToggled(false);
  }, [selectedPage]);

  return (
    <div className="app relative mx-auto max-w-mobile-lg">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isMenuToggled={isMenuToggled}
        setIsMenuToggled={setIsMenuToggled}
      />
      <div className="scroll-smooth">
        <Home setSelectedPage={setSelectedPage} isMenuToggled={isMenuToggled} />

        <About
          setSelectedPage={setSelectedPage}
          isMenuToggled={isMenuToggled}
        />

        <Classes
          setSelectedPage={setSelectedPage}
          isMenuToggled={isMenuToggled}
        />

        <ContactUs
          setSelectedPage={setSelectedPage}
          isMenuToggled={isMenuToggled}
        />
      </div>
    </div>
  );
}

export default App;
