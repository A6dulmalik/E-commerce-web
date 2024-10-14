// import React from "react";
import { useContext, useEffect, useState } from "react";
import { FaRegEye, FaRegHeart, FaStar } from "react-icons/fa";
import AppContext from "./Context/AppContext";

function ExplorePro() {
  const { addToCart, handleWishlist } = useContext(AppContext);

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      console.log(data.title); // Accessing the title of each object
      const limiteItems = data.slice(10, 18);
      setProducts(limiteItems);
    } catch (error) {
      console.log(error);
    }
  };

  // Use useEffect to fetch the data when the component mounts
  useEffect(() => {
    getProducts();
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-b font-inter">
        {/* Header Section */}
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-3 bg-[#DB4444] rounded-sm" />
              <p className="text-sm text-[#DB4444] font-semibold">This Month</p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              Explore Our Products
            </h2>
          </div>
          <button
            type="button"
            className="mt-4 sm:mt-0 rounded-sm bg-[#DB4444] hover:bg-[#da5a5a] px-8 py-2 text-sm text-white shadow-md focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            View All
          </button>
        </div>

        {/* Products List */}
        <div className="mt-5 grid grid-flow-col gap-4 max-w-full overflow-x-auto scroll-smooth">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[160px] sm:w-[180px] md:w-[200px] h-[320px] lg:h-[350px] p-2 flex-shrink-0"
            >
              <div className="relative group h-48 w-full border rounded-lg">
                <div
                  className="absolute right-3 top-3  rounded-xl p-1"
                  // onClick={() => handleWishlist()}
                >
                  <FaRegHeart />
                </div>
                <div className="absolute right-3 top-10  rounded-xl p-1">
                  <FaRegEye />
                </div>
                <img
                  alt={product.title}
                  src={product.image}
                  className="h-36 w-full m-auto object-contain object-center mt-5 p-6"
                />
                <button
                  className="absolute bottom-0 rounded-b-lg w-full bg-black text-white text-center p-1 md:hidden block md:group-hover:block"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.title.substring(0, 12)}
                </a>
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
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center w-full mt-6">
          <button
            type="button"
            className="rounded-sm bg-[#DB4444] hover:bg-[#da5a5a] px-10 py-3 text-sm text-white shadow-md focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            View All Products
          </button>
        </div>
      </div>
    </>
  );
}

export default ExplorePro;
