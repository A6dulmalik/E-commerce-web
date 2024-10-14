// import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App";
import { useContext } from "react";
import AppContext from "./components/Context/AppContext";

function Layout() {
  const { wishlist, cart, handleWishlist } = useContext(AppContext);
  return (
    <>
      <div>
        <Navbar
          wishlist={wishlist}
          handleWishlist={handleWishlist}
          cart={cart}
        />
        <main className=" w-full m-auto overflow-x-hidden">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
// Layout.propTypes = {
//   wishlist: PropTypes.array.isRequired,
//   cart: PropTypes.array.isRequired,
//   handleWishlist: PropTypes.func.isRequired,
// };
export default Layout;
