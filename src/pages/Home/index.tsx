import About from "../../components/About";
import Divider from "../../components/Divider";
import Education from "../../components/Education";
import Projects from "../../components/Projects";
import Sidebar from "../../components/Sidebar";
import Skills from "../../components/Skills";

const HomePage = () => {
  return (
    <div className="md:flex md:h-screen md:overflow-hidden">
      <div className="hidden items-center justify-center bg-highlight md:flex md:w-2/12">
        <Sidebar />
      </div>
      <div className="bg-slate-500 md:flex md:flex-1 md:flex-col">
        <div className="bg-white px-5 md:flex-1 md:overflow-y-auto">
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
