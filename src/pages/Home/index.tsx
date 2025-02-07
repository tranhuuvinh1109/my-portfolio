import About from "../../components/About";
import Divider from "../../components/Divider";
import Sidebar from "../../components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className=" bg-highlight flex w-2/12 items-center justify-center">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col bg-slate-500">
        <div className="flex-1 overflow-y-auto bg-white px-5">
          <About />
          <Divider />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
