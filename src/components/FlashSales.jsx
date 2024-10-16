import { useContext, useEffect, useState } from "react";
// import PropTypes from "prop-types";

import {
  FaArrowLeft,
  FaArrowRight,
  FaRegEye,
  FaRegHeart,
  FaStar,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AppContext from "./Context/AppContext";
import { FaHeart } from "react-icons/fa6";

function FlashSales() {
  const { wishlist, handleWishlist, addToCart } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      // setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      console.log(data); // Accessing the title of each object
      setProducts(data);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {/* FLASH SALES */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 border-b font-inter ">
        {/* SALES INFO AND NAVIGATION ARROWS */}
        <div className="flex items-center gap-2 mb-3">
          <div className="h-8 w-3 bg-[#DB4444] rounded-sm " />
          <p className="text-sm text-[#DB4444] font-semibold">Today`s</p>
        </div>
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Flash Sales
            </h2>
          </div>
          {/* Arrows for larger screens */}
          <div className="flex gap-5">
            <div className="hidden sm:flex text-xl font-semibold bg-gray-100 p-2 rounded-full text-black hover:text-slate-500">
              <FaArrowLeft />
            </div>
            <div className="hidden sm:flex text-xl font-semibold bg-gray-100 p-2 rounded-full text-black hover:text-slate-500">
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* PRODUCTS LIST */}
        <div className="mt-5 grid grid-flow-col gap-4 max-w-full overflow-x-auto scroll-smooth no-scrollbar">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[160px] sm:w-[180px] md:w-[200px] h-[320px] lg:h-[350px] p-2 flex-shrink-0"
            >
              <div className="relative group h-44 w-full border rounded-lg">
                <div
                  className="absolute right-3 top-3 rounded-xl p-1"
                  onClick={() => handleWishlist(product)}
                >
                  {wishlist.some((item) => item.id === product.id) ? (
                    <FaHeart className="text-red-500" /> // Filled heart for wishlist
                  ) : (
                    <FaRegHeart className="text-gray-500" /> // Outlined heart if not in wishlist
                  )}
                </div>
                <div className="absolute right-3 top-10 rounded-xl p-1">
                  <FaRegEye />
                </div>
                <img
                  alt={product.title}
                  src={product.image}
                  className="h-36 w-full object-contain object-center mt-5 sm:p-2 p-5"
                />
                <button
                  className="absolute bottom-0 rounded-b-lg w-full bg-black text-white text-center p-1 hidden group-hover:block"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
              <NavLink to={`/item/${product.id}`}>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <span className="absolute inset-0" />
                  {product.title.substring(0, 12)}
                </h3>
                <p className="mt-1 text-sm text-[#DB4444]">${product.price}</p>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating, index) => (
                    <FaStar
                      key={index}
                      fill={
                        product.rating.rate > rating ? "#FFAD33" : "lightgray"
                      }
                      className="h-4 w-4 flex-shrink-0"
                    />
                  ))}
                  <p className="ml-3">({product.rating.rate})</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>

        {/* View Products Button */}
        <div className="text-center w-full">
          <NavLink
            to="/products"
            className="rounded-sm bg-[#DB4444] hover:bg-[#da5a5a] px-10 py-3 text-sm text-white shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            View All Products
          </NavLink>
        </div>
      </div>
    </>
  );
}
// FlashSales.propTypes = {
//   cart: PropTypes.array.isRequired,
//   addToCart: PropTypes.func.isRequired,
// };

export default FlashSales;
