import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App";

function Layout({ wishlist, handleWishlist }) {
  return (
    <>
      <Navbar wishlist={wishlist} handleWishlist={handleWishlist} />
      <main className="md:w-[88%] w-full m-auto overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
Layout.propTypes = {
  wishlist: PropTypes.array.isRequired,
  handleWishlist: PropTypes.func.isRequired,
};
export default Layout;
