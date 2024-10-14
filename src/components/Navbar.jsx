// import React from "react";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { FaArrowLeft, FaBars, FaTimes } from "react-icons/fa";
// import { SiPantheon } from "react-icons/si";
import { NavLink, useNavigate } from "react-router-dom";
import AppContext from "./Context/AppContext";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Sign Up", href: "/signup" },
];
const Navbar = () => {
  const { wishlist, cart } = useContext(AppContext);
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="fixed z-50 shadow-md w-full">
        {/* SALES BANNER */}
        <div className="w-full h-5 bg-white"></div>
        <div className="flex items-center justify-center w-full bg-black text-white text-xs md:text-base px-4">
          <div className=" md:text-left py-[4px] text-xs">
            <p className="md:pr-4 md:max-w-2xl max-w-md ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!{" "}
              <span className="ml-2 font-bold underline cursor-pointer">
                Shop Now
              </span>
            </p>
          </div>
          <div className="ml-4 md:ml-0">
            <select
              name="Language"
              className="bg-black outline-none px-3 py-1 text-xs md:text-base cursor-pointer"
            >
              <option value="En">English (UK)</option>
              <option value="En">English (US)</option>
            </select>
          </div>
        </div>

        {/* NAVBAR */}
        <header className=" bg-white md:flex md:justify-between justify-start md:items-center py-2 md:py-5 px-2 lg:px-20 border border-bottom">
          <div className="flex items-center gap-3 ">
            <FaArrowLeft onClick={back} />
            <span className="font-semibold text-2xl">Exclusive</span>
          </div>

          {/* NAVLINKS */}
          <div
            className={`fixed inset-0 flex flex-col md:items-center justify-center space-y-2 transform bg-white ${
              isOpen
                ? "translate-x-0 z-50 my-5 text-right"
                : "-translate-x-full"
            } transition-transform duration-300 ease-linear-in-out md:static md:flex md:flex-row md:space-y-0 space-y-6 md:space-x-6 md:transform-none`}
          >
            <div
              className="md:hidden absolute right-6 top-28"
              onClick={toggleMenu}
            >
              {isOpen && <FaTimes />}
            </div>

            {navigation.map((nav, index) => (
              <NavLink key={index} to={nav.href} className="mx-5">
                {nav.name}
              </NavLink>
            ))}
          </div>

          {/* SEARCH BAR */}
          <div className="flex items-center md:gap-4  justify-between">
            <div className="flex justify-evenly items-center rounded border">
              <input
                id="search"
                name="search"
                type="text"
                placeholder="What are you looking for?"
                className="block outline-none py-1.5 pr-2 md:pr-14 text-gray-900 shadow-sm placeholder:text-gray-400 placeholder:text-xs placeholder:px-2 sm:text-sm sm:leading-6 md:w-full w-40"
              />
              <div className="px-1">
                <IoIosSearch className="" />
                {/* <span>{wishlist}</span> */}
              </div>
            </div>
            <div className="flex md:gap-4 gap-2">
              <NavLink to="/wishlist" className="relative">
                <CiHeart fontSize={20} />
                {wishlist.length > 0 && (
                  <span className="absolute lg:-top-1 md:-top-1.5 top-0.5 lg:-right-2 md:-right-1 right-0 text-xs bg-red-500 text-white rounded-full px-1">
                    {wishlist.length}
                  </span>
                )}
              </NavLink>
              <NavLink to="/cart">
                <BsCart3 fontSize={20} />
                {cart.length > 0 && (
                  <span className="absolute md:top-20 top-[9rem] lg:right-[4.6rem] md:right-[.2rem] right-8 text-xs bg-red-500 text-white rounded-full px-1">
                    {cart.length}
                  </span>
                )}
              </NavLink>
              <div className="md:hidden" onClick={toggleMenu}>
                <FaBars />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

Navbar.propTypes = {
  wishlist: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  handleWishlist: PropTypes.func.isRequired,
};
export default Navbar;
