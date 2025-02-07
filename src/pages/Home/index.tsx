import About from "../../components/About";
import Divider from "../../components/Divider";
import Education from "../../components/Education";
import Projects from "../../components/Projects";
import Sidebar from "../../components/Sidebar";
import Skills from "../../components/Skills";

const HomePage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className=" flex w-2/12 items-center justify-center bg-highlight">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col bg-slate-500">
        <div className="flex-1 overflow-y-auto bg-white px-5">
          <About />
          <Divider />
          <Education />
          <Divider />
          <Skills />
          <Divider />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
