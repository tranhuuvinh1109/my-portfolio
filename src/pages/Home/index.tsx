import { useState } from "react";
import About from "../../components/About";
import Divider from "../../components/Divider";
import DrawerCVContent from "../../components/DrawerCVContent";
import Education from "../../components/Education";
import Projects from "../../components/Projects";
import Sidebar from "../../components/Sidebar";
import Skills from "../../components/Skills";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="md:flex md:h-screen md:overflow-hidden">
      <div className="hidden items-center justify-center bg-highlight md:flex md:w-2/12">
        <Sidebar />
      </div>
      <div className="bg-white md:flex md:flex-1 md:flex-col">
        <div className=" flex md:flex-1 md:overflow-y-auto">
          <div className=" px-5">
            <About onClickBtnMyCV={handleOpen} />
            <Divider />
            <Education />
            <Divider />
            <Skills />
            <Divider />
            <Projects />
          </div>
          <div>
            <DrawerCVContent open={isOpen} onClose={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
