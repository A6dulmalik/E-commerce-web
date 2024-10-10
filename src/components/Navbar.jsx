// import React from "react";

import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Sign Up", href: "/signup" },
];
const Navbar = ({ wishlist }) => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed z-50 shadow-md w-full">
        {/* SALES BANNER */}

        <div className="flex md:justify-center justify-between items-center w-full md:h-16 h-12 md:text-base text-xs bg-black text-white">
          <div className=" pr-4 ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="ml-5 font-bold underline">ShopNow</span>
          </div>
          <select name="Language" id="" className="bg-black outline-none px-3">
            <option value="En">English(UK)</option>
            <option value="En">English(US)</option>
          </select>
        </div>

        {/* NAVBAR */}
        <header className=" bg-white md:flex md:justify-between justify-start md:items-center md:py-5 md:px-20 border border-bottom">
          <div className="font-semibold text-2xl">Exclusive</div>

          {/* NAVLINKS */}
          <div
            className={`fixed inset-0 flex flex-col md:items-center justify-center space-y-2 transform bg-white ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            } transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:space-y-0 md:space-x-6 md:transform-none`}
          >
            <div className="md:hidden block" onClick={toggleMenu}>
              {isOpen && <FaTimes />}
            </div>

            {navigation.map((nav, index) => (
              <NavLink key={index} to={nav.href} className="mx-5">
                {nav.name}
              </NavLink>
            ))}
          </div>

          {/* SEARCH BAR */}
          <div className="flex items-center md:gap-4 px-1 justify-between">
            <div className="flex justify-evenly items-center rounded border">
              <input
                id="search"
                name="search"
                type="text"
                placeholder="what are you looking for?"
                className="block outline-none py-1.5 md:pr-14 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 md:w-full"
              />
              <div className="px-1">
                <FaSearch className="" />
                <span>{wishlist}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <FaHeart className="from-neutral-900" />
              <FaCartShopping />
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

export default Navbar;
