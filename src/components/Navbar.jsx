// import React from "react";

// import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

// const navigation = [
//   { name: "Home", href: "#" },
//   { name: "Contact", href: "#" },
//   { name: "About", href: "#" },
//   { name: "Sign Up", href: "#" },
// ];
const Navbar = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="z-50 shadow-md ">
        {/* SALES BANNER */}
        <div className="">
          <div className=" w-full h-16 bg-black text-white">
            <div className=" text-lg text-center py-4  ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <span className="ml-5 font-bold">ShopNow</span>
              <select
                name="Language"
                id=""
                className="bg-black outline-none ml-[20rem] px-3"
              >
                <option value="En">English</option>
                <option value="Fr">French</option>
                <option value="Ar">Arabic</option>
                <option value="Es">Spanish</option>
                <option value="Hs">Hausa</option>
              </select>
            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <header className=" bg-white flex justify-between items-center py-5 px-20 border border-bottom">
          <div className="text-bold text-2xl">Exclusive</div>

          {/* NAVLINKS */}
          <div className="">
            <NavLink to="/home" className="mx-5 ">
              Home
            </NavLink>
            <NavLink to="/contact" className="mx-5 cursor-pointer">
              Contact
            </NavLink>
            <NavLink to="/about" className="mx-5 cursor-pointer">
              About
            </NavLink>
            <NavLink className="mx-5 cursor-pointer">Sign Up</NavLink>
          </div>

          {/* SEARCH BAR */}
          <div className="flex items-center gap-4">
            <div className="flex justify-evenly items-center rounded-md border ">
              <input
                id="search"
                name="search"
                type="text"
                placeholder="what are you looking for?"
                className="block outline-none py-1.5 pr-14 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              <FaSearch className=" " />
            </div>
            <div className="flex gap-4">
              <FaHeart />
              <FaCartShopping />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
