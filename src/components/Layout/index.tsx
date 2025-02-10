import { Outlet } from "react-router-dom";
import Container from "../Container";
const Layout = () => {
  return (
    <div className="w-full bg-white font-montserrat  text-main">
      <Container className=" max-w-full">
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
