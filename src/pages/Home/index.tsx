import { useEffect, useState } from "react";
import About from "../../components/About";
import Divider from "../../components/Divider";
import DrawerCVContent from "../../components/DrawerCVContent";
import Education from "../../components/Education";
import Projects from "../../components/Projects";
import Sidebar from "../../components/Sidebar";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("about");
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const content = document.querySelector("#home-content");
    if (!content) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const currentSection = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom >= 0;
      });
      if (currentSection) {
        setActive(currentSection.id);
      }
    };

    content.addEventListener("scroll", handleScroll);
    return () => content.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:flex md:h-screen md:overflow-hidden">
      <div className="hidden items-center justify-center bg-highlight md:flex md:w-2/12">
        <Sidebar active={active} />
      </div>
      <div className="bg-white md:flex md:flex-1 md:flex-col">
        <div className=" flex md:flex-1 md:overflow-y-auto" id="home-content">
          <div className=" px-5  ">
            <About onClickBtnMyCV={handleOpen} />
            <Divider />
            <Experience />
            <Divider />
            <Education />
            <Divider />
            <Skills />
            <Divider />
            <Projects />
            <div className="h-[400px]" />
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
