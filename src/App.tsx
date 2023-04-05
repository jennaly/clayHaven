import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import About from "@/scenes/about";
import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";

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
      <div className="h-screen snap-y snap-mandatory overflow-scroll">
        <div className="snap-center">
          <Home
            setSelectedPage={setSelectedPage}
            isMenuToggled={isMenuToggled}
          />
        </div>
        <div className="snap-center">
          <About
            setSelectedPage={setSelectedPage}
            isMenuToggled={isMenuToggled}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
