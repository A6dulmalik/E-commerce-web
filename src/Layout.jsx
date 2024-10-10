import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="md:w-[88%] w-full m-auto overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
