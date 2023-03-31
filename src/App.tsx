import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { useState } from "react";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isMenuToggled, setIsMenuToggled] = useState<Boolean>(false);

  return (
    <div className="app relative mx-auto max-w-mobile-lg">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isMenuToggled={isMenuToggled}
        setIsMenuToggled={setIsMenuToggled}
      />
      <div className="snap-y snap-mandatory">
        <div className="snap-center">
          <Home
            setSelectedPage={setSelectedPage}
            isMenuToggled={isMenuToggled}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
