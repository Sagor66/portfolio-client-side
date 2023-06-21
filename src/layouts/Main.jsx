import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar";
import Footer from "../pages/Shared/Footer";

const Main = () => {
  return (
    <div className="font-nunito text-black">
      <div className="min-h-screen">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
