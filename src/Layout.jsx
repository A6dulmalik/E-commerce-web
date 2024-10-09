import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="w-[88%] m-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
