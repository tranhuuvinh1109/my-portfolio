import { Outlet } from "react-router-dom";
import Container from "../Container";
const Layout = () => {
  return (
    <div className="h-screen w-full overflow-hidden overflow-y-hidden bg-white font-montserrat  text-main">
      <Container className=" max-w-full">
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
